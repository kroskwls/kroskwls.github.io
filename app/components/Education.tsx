"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const education = {
  degree: "Bachelor of Science, Computer Science",
  school: "U1 University",
  period: "Mar 2007 – Aug 2016",
  location: "Asan, South Korea",
};

const training = [
  {
    title: "JAVA-based Smart Content App Developer Course",
    org: "Korea Association for Information Science and Education (KISE)",
    period: "Jun 2016 – Aug 2016",
    desc: "3-month training covering Android app development and backend integration using Java.",
  },
  {
    title: "Java Web Programming Practical Course",
    org: "Korea Software Technology Association (KOSTA)",
    period: "Jul 2015 – Oct 2015",
    desc: "4-month intensive program focused on web application development using Java, JSP and Spring Framework.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gray-900 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan-400">
            // background
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Education & Training</h2>
        </motion.div>

        {/* 학위 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-6 ring-1 ring-cyan-500/30"
        >
          <div className="mb-2 flex items-center gap-2">
            <svg
              className="h-5 w-5 text-cyan-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Degree
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{education.degree}</h3>
          <p className="mt-1 text-gray-300">{education.school}</p>
          <div className="mt-3 flex gap-4 text-sm text-gray-500">
            <span>{education.period}</span>
            <span>{education.location}</span>
          </div>
        </motion.div>

        {/* 교육 */}
        <div className="space-y-4">
          {training.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="rounded-xl bg-gray-800 p-5 ring-1 ring-gray-700 transition-all hover:ring-gray-600"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-semibold text-white">{t.title}</h3>
                <span className="text-sm font-medium text-cyan-400">{t.period}</span>
              </div>
              <p className="mt-1 text-sm text-gray-400">{t.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
