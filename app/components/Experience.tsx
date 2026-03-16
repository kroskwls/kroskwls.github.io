"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "CHA Health Systems, Inc.",
    period: "Sep 2024 – May 2025",
    location: "Seongnam, South Korea",
    color: "border-cyan-500",
    dotColor: "bg-cyan-500",
    skills: ["Next.js", "React", "TypeScript", "PostgreSQL", "AWS", "TailwindCSS", "Zustand"],
    bullets: [
      "Designed and implemented a secure authentication and session management system, including OAuth-based social login and RBAC.",
      "Integrated the ChatGPT API to provide AI-driven conversational responses and contextual guidance within the service.",
      "Developed a vector similarity evaluation feature measuring response correlation based on survey data using embedding techniques.",
    ],
  },
  {
    role: "Database Architect",
    company: "Alian",
    period: "Apr 2024 – Dec 2024",
    location: "Seongnam, South Korea",
    color: "border-purple-500",
    dotColor: "bg-purple-500",
    skills: ["PostgreSQL", "SQL", "Query Optimization", "Data Modeling", "Database Standardization"],
    bullets: [
      "Designed and standardized database schemas to ensure structural consistency and scalability.",
      "Managed and maintained the organization's database standardization dictionary for unified data design.",
      "Developed optimized SQL queries for robot usage history statistics and performance analysis.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Alian",
    period: "Apr 2024 – Dec 2024",
    location: "Seongnam, South Korea",
    color: "border-green-500",
    dotColor: "bg-green-500",
    skills: ["Spring Framework", "PostgreSQL", "Next.js", "React", "TypeScript", "TailwindCSS", "Zustand"],
    bullets: [
      "Designed and implemented data interfaces for 10 robot models, enabling seamless data integration and communication.",
      "Developed APIs to provide user and facility information for unified system access.",
      "Developed a web page to visualize real-time robot status and usage data for operational monitoring.",
      "Developed internal tools for database standardization and automated data consistency validation.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Naviworks",
    period: "Sep 2024 – May 2025",
    location: "Anyang, South Korea",
    color: "border-orange-500",
    dotColor: "bg-orange-500",
    skills: ["React", "Spring Framework", "PostGIS", "CesiumJS", "Jenkins", "Query Optimization"],
    bullets: [
      "Conducted software development in specialized domains: Defense Cyber Operations, Marine eNavigation, and Ship Cybersecurity Certification.",
      "Worked with geospatial data — PostGIS queries, parsers, and database solutions for Electronic Navigational Chart (ENC) data.",
      "Built web systems including Cyber Situational Maps using React, AngularJS, and CesiumJS for 2D/3D visualization.",
      "Designed and implemented RESTful APIs and backend services with Spring Framework and Node.js.",
    ],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      {/* 타임라인 도트 */}
      <div className="absolute -left-2 top-6 hidden -translate-x-1/2 md:block">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`h-4 w-4 rounded-full ${exp.dotColor} ring-4 ring-gray-950`}
        />
      </div>

      <div
        className={`rounded-xl border-l-4 ${exp.color} bg-gray-800 p-6 shadow-lg transition-shadow hover:shadow-xl hover:shadow-black/30`}
      >
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-white">{exp.role}</h3>
            <p className="text-sm font-medium text-gray-300">{exp.company}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-cyan-400">{exp.period}</p>
            <p className="text-xs text-gray-500">{exp.location}</p>
          </div>
        </div>

        <ul className="mb-4 space-y-1.5">
          {exp.bullets.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="flex gap-2 text-sm leading-relaxed text-gray-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
              {b}
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((s) => (
            <span
              key={s}
              className="rounded-md bg-gray-700 px-2 py-0.5 text-xs font-mono text-gray-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-gray-950 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan-400">
            // work history
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Work Experience</h2>
        </motion.div>

        {/* 타임라인 */}
        <div className="relative space-y-8 md:ml-10 md:pl-10">
          {/* 세로 선 — 도트 중앙에 오도록 left-0 배치 */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gray-700 md:block" />
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
