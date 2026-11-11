"""Genera la hoja de vida en PDF, compatible con ATS, a partir de src/data.js.

Uso:
    python scripts/generate_cv.py                 # -> HV-Julian-Delgado.pdf
    python scripts/generate_cv.py -o public/hv.pdf
    python scripts/generate_cv.py -k "React, TypeScript, Scrum"

Con -k se indica qué palabras clave de la oferta aparecen en la HV y cuáles
faltan; no modifica el contenido.

Requiere Node (para leer data.js) y: pip install -r scripts/requirements.txt
"""

import argparse
import json
import os
import re
import subprocess
import sys
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

ROOT = Path(__file__).resolve().parent.parent
DATA_JS = ROOT / "src" / "data.js"

INK = colors.black
RULE = colors.HexColor("#808080")


def load_data():
    """Importa data.js con Node y devuelve sus exports como dict."""
    script = (
        "import(process.argv[1]).then(m => "
        "process.stdout.write(JSON.stringify(m)))"
    )
    out = subprocess.run(
        ["node", "-e", script, DATA_JS.as_uri()],
        capture_output=True,
        text=True,
        encoding="utf-8",
        check=True,
    )
    return json.loads(out.stdout)


def register_fonts():
    """Registra Arial si está disponible; si no, usa Helvetica (equivalente)."""
    fonts = Path(os.environ.get("WINDIR", r"C:\Windows")) / "Fonts"
    regular, bold = fonts / "arial.ttf", fonts / "arialbd.ttf"
    if not (regular.exists() and bold.exists()):
        return "Helvetica", "Helvetica-Bold"
    pdfmetrics.registerFont(TTFont("Arial", str(regular)))
    pdfmetrics.registerFont(TTFont("Arial-Bold", str(bold)))
    pdfmetrics.registerFontFamily(
        "Arial", normal="Arial", bold="Arial-Bold", italic="Arial", boldItalic="Arial-Bold"
    )
    return "Arial", "Arial-Bold"


def styles():
    regular, bold = register_fonts()
    base = dict(fontName=regular, textColor=INK, alignment=TA_LEFT)
    return {
        "name": ParagraphStyle("name", **{**base, "fontName": bold}, fontSize=20, leading=24),
        "role": ParagraphStyle("role", **base, fontSize=12, leading=16),
        "contact": ParagraphStyle("contact", **base, fontSize=10, leading=14),
        "h2": ParagraphStyle(
            "h2", **{**base, "fontName": bold},
            fontSize=11, leading=14, spaceBefore=10, spaceAfter=2,
        ),
        "body": ParagraphStyle("body", **base, fontSize=10, leading=14),
        "job": ParagraphStyle("job", **{**base, "fontName": bold}, fontSize=10.5, leading=14),
        "bullet": ParagraphStyle(
            "bullet", **base, fontSize=10, leading=13.5, leftIndent=10, bulletIndent=0,
            bulletFontName=regular, bulletFontSize=10, spaceBefore=1,
        ),
    }


def section(title, s):
    return [
        Paragraph(escape(title.upper()), s["h2"]),
        HRFlowable(width="100%", thickness=0.5, color=RULE, spaceAfter=5),
    ]


def header(profile, s):
    contact = " | ".join(
        escape(profile[key]) for key in ("location", "phone", "email")
    )
    github = escape(profile["github"])
    contact += f' | <link href="{github}">{github.removeprefix("https://")}</link>'
    return [
        Paragraph(escape(profile["name"]), s["name"]),
        Paragraph(f'{escape(profile["role"])} | {escape(profile["tagline"])}', s["role"]),
        Paragraph(contact, s["contact"]),
    ]


def build(data, output):
    s = styles()
    profile = data["profile"]
    story = header(profile, s)

    story += section("Resumen", s)
    story.append(Paragraph(escape(profile["summary"]), s["body"]))

    story += section("Experiencia", s)
    for job in data["experience"]:
        details = " | ".join(escape(job[key]) for key in ("company", "period", "place"))
        story.append(KeepTogether([
            Paragraph(escape(job["role"]), s["job"]),
            Paragraph(details, s["body"]),
            *[Paragraph(escape(b), s["bullet"], bulletText="•") for b in job["bullets"]],
            Spacer(1, 6),
        ]))

    story += section("Proyectos", s)
    for p in data["projects"]:
        story.append(KeepTogether([
            Paragraph(
                f'<b>{escape(p["title"])}</b> | {escape(p["category"])} | '
                f'<link href="{escape(p["url"])}">{escape(p["domain"])}</link>',
                s["body"],
            ),
            Paragraph(escape(p["blurb"]), s["body"]),
            Spacer(1, 4),
        ]))

    story += section("Habilidades", s)
    for g in data["skillGroups"]:
        items = ", ".join(escape(item) for item in g["items"])
        story.append(Paragraph(f'<b>{escape(g["label"])}:</b> {items}', s["body"]))

    story += section("Educación", s)
    for e in data["education"]:
        fields = [e["title"], e["place"], e.get("year")]
        story.append(Paragraph(" | ".join(escape(f) for f in fields if f), s["body"]))

    doc = SimpleDocTemplate(
        str(output),
        pagesize=LETTER,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title=f'Hoja de vida - {profile["name"]}',
        author=profile["name"],
    )
    doc.build(story)


def cv_text(data):
    """Texto impreso en la HV, para buscar palabras clave."""
    profile = data["profile"]
    parts = [profile["role"], profile["tagline"], profile["summary"]]
    for job in data["experience"]:
        parts += [job["role"], job["company"], *job["bullets"]]
    for p in data["projects"]:
        parts += [p["title"], p["category"], p["blurb"]]
    for g in data["skillGroups"]:
        parts += [g["label"], *g["items"]]
    parts += [e["title"] for e in data["education"]]
    return " ".join(parts)


def report_keywords(data, raw):
    text = cv_text(data)
    keywords = [k.strip() for k in raw.split(",") if k.strip()]
    # Límites de palabra para que "Java" no coincida con "JavaScript".
    found = [
        k for k in keywords
        if re.search(rf"(?<!\w){re.escape(k)}(?!\w)", text, re.IGNORECASE)
    ]
    missing = [k for k in keywords if k not in found]
    print(f"Palabras clave presentes ({len(found)}/{len(keywords)}): {', '.join(found) or '-'}")
    print(f"Faltan: {', '.join(missing) or '-'}")


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("-o", "--output", default=ROOT / "HV-Julian-Delgado.pdf", type=Path)
    parser.add_argument("-k", "--keywords", help="palabras clave de la oferta, separadas por comas")
    args = parser.parse_args()

    try:
        data = load_data()
    except FileNotFoundError:
        sys.exit("No se encontró Node. Instálalo para poder leer src/data.js.")

    args.output.parent.mkdir(parents=True, exist_ok=True)
    build(data, args.output)
    print(f"PDF generado: {args.output}")
    if args.keywords:
        report_keywords(data, args.keywords)


if __name__ == "__main__":
    main()
