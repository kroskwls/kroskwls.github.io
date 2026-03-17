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

export default function V2Page() {
  return (
    <div
      style={{
        backgroundColor: "#0a0f1e",
        minHeight: "100vh",
        color: "#e8eaf0",
        fontFamily: "var(--font-geist-sans), sans-serif",
      }}
    >
      <Nav />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Hero />
      </div>

      {/* Subtle divider between Hero and Experience */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(136,146,176,0.08)",
          }}
        />
      </div>

      <Experience />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(136,146,176,0.08)",
          }}
        />
      </div>

      <Skills />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(136,146,176,0.08)",
          }}
        />
      </div>

      <Education />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(136,146,176,0.08)",
          }}
        />
      </div>

      <Contact />
    </div>
  );
}
