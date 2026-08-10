import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page-grain relative min-h-[100dvh] bg-zinc-950">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
