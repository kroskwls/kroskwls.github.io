import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
