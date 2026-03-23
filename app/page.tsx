import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import EasterEggs from "./components/EasterEggs";
import Confetti from "./components/Confetti";
import SideNav from "./components/SideNav";
import ScrollRestorer from "./components/ScrollRestorer";

export default function Home() {
  return (
    <main>
      <ScrollRestorer />
      <EasterEggs />
      <Confetti />
      <SideNav />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
