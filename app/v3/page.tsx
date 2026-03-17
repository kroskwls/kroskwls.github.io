import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export const metadata = {
  title: "Dongjin Cho | Full Stack Developer",
  description:
    "Portfolio of Dongjin Cho — Full Stack Developer specializing in React, Next.js, and scalable web systems.",
};

export default function V3Page() {
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        color: "#0f172a",
        fontFamily: "var(--font-geist-sans), sans-serif",
      }}
    >
      <Nav />
      <div style={{ paddingTop: "64px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Hero />
        </div>
        <Experience />
        <Skills />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Education />
        </div>
        <Contact />
      </div>
    </div>
  );
}
