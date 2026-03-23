import Link from "next/link";
import type { Metadata } from "next";
import ScreenshotGallery from "@/app/components/ScreenshotGallery";

export const metadata: Metadata = {
  title: "MEOW – Dongjin Cho",
  description: "Memorizing English with an Optimized Workout — a full-stack learning platform built with Clean Architecture and SM-2 spaced repetition.",
};

const techs = ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Clean Architecture", "SM-2 Algorithm"];

const layers = [
  {
    label: "Domain Layer",
    description:
      "Zero external dependencies. Pure business logic with entities (Sentence, Workout, User), value objects (WorkoutState, SentenceScore, Email), and domain services (WorkoutStateMachine, ScoringEngine, RecommendationEngine).",
  },
  {
    label: "Application Layer",
    description:
      "Use cases orchestrate domain logic. Each use case has clear input/output DTOs. Examples: CreateSentence, StartWorkout, SubmitWorkoutAnswer. All dependencies injected through constructors.",
  },
  {
    label: "Infrastructure Layer",
    description:
      "Prisma repository implementations, NextAuth.js authentication with database sessions, entity-to-model mappers, and dependency injection via factory functions.",
  },
  {
    label: "Presentation Layer",
    description:
      "React 19 components with Zustand stores, shadcn/ui primitives, custom hooks, and feature-based component organization. 11 Zustand stores for state management.",
  },
];

const highlights = [
  {
    title: "SM-2 Spaced Repetition",
    description:
      "Implemented the SuperMemo 2 algorithm from scratch. Dynamically adjusts review intervals based on quality scores (0–5), ease factor adaptation, and interval growth calculations.",
  },
  {
    title: "Levenshtein Scoring",
    description:
      "Answer grading engine using edit distance for similarity scoring. Supports normalization (case, punctuation, whitespace) and multiple alternative answers with best-match selection.",
  },
  {
    title: "State Machine",
    description:
      "Workout items managed by a finite state machine (IDLE → ANSWERING → COMPLETED) with strict transition rules enforced at the domain level.",
  },
  {
    title: "Auth & Security",
    description:
      "NextAuth.js v5 with database sessions, bcrypt hashing (12 rounds), rate limiting (10 attempts/15min), CSRF protection, and application-level user isolation.",
  },
  {
    title: "Repository Pattern",
    description:
      "Domain-defined interfaces implemented by infrastructure. Prisma mappers handle bidirectional conversion between domain entities and database models.",
  },
  {
    title: "Factory-based DI",
    description:
      "API routes use factory functions for dependency injection. Singleton repositories and services are created through a centralized factory module.",
  },
];

const screenshots = [
  {
    src: "/projects/meow/dark/landing.png",
    fullSrc: "/projects/meow/dark/landing-fullpage.png",
    alt: "MEOW Landing Page",
    label: "Landing Page",
    heading: "Landing Page",
    badge: "Overview",
    description: "Hero section with feature highlights, learning mode cards, and an interactive SM-2 interval visualization. Fully responsive with dark mode support.",
  },
  {
    src: "/projects/meow/dark/dashboard.png",
    alt: "Dashboard",
    label: "Dashboard",
    heading: "Dashboard",
    badge: "Overview",
    description: "Personalized dashboard with quick actions, statistics summary, daily activity charts (Recharts), and a workout streak heatmap.",
  },
  {
    src: "/projects/meow/dark/sentences.png",
    alt: "Sentence Management",
    label: "Sentence Management",
    heading: "Sentence Management",
    badge: "Core Feature",
    description: "CRUD interface with group-based organization, difficulty sorting, review date filtering, and batch operations.",
  },
  {
    src: "/projects/meow/dark/learn.png",
    alt: "Learn Page",
    label: "Learning Modes",
    heading: "Learning Modes",
    badge: "Core Feature",
    description: "Four distinct learning modes: Workout (active recall), Flash Cards (TTS), Sequential Reading, and Paragraph Memorization.",
  },
  {
    src: "/projects/meow/dark/learn-workout.png",
    alt: "Workout Mode",
    label: "Workout Mode",
    heading: "Workout Mode",
    badge: "Learning Mode",
    description: "Active recall with typing. Shows answer comparison with diff highlighting, scoring breakdown, SM-2 scheduling, and detailed attempt history.",
  },
  {
    src: "/projects/meow/dark/learn-flashcard.png",
    alt: "Flash Card Mode",
    label: "Flash Card Mode",
    heading: "Flash Card Mode",
    badge: "Learning Mode",
    description: "Flip-based review with Korean hints on front and English answers on back. Includes TTS pronunciation, scratch pad, and keyboard navigation.",
  },
];

const stack = [
  {
    title: "Frontend",
    items: ["Next.js 15 (App Router)", "React 19", "TypeScript 5", "Tailwind CSS", "shadcn/ui (Radix)", "Zustand 5", "Recharts"],
  },
  {
    title: "Backend",
    items: ["Next.js API Routes", "NextAuth.js v5", "Prisma 6 ORM", "PostgreSQL", "bcrypt (Auth)", "Zod (Validation)"],
  },
  {
    title: "Developer Experience",
    items: ["ESLint + Prettier", "Path Aliases", "Factory-based DI", "Vitest + Playwright", "Prisma Studio"],
  },
];


export default function MeowPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 px-6 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between">
          <Link href="/" className="cursor-pointer font-mono text-sm text-gray-400 transition-colors hover:text-cyan-400">
            ← Back to Portfolio
          </Link>
          <span className="font-mono text-xs tracking-widest text-cyan-400">// MEOW</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800 px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-cyan-400">
            // Personal Project
          </p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">MEOW</h1>
          <p className="mt-2 text-xl text-gray-400">Memorizing English with an Optimized Workout</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            A sentence-based English learning platform built from scratch using Clean Architecture principles and SM-2 spaced repetition. Features 4 learning modes, Levenshtein scoring, and a finite state machine at the domain level.
          </p>
          {/* Timeline */}
          <div className="mt-8 grid grid-cols-3 gap-3 font-mono text-xs sm:max-w-lg">
            <div className="relative rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5">
              <span className="block text-cyan-400">Day 1</span>
              <span className="mt-0.5 block text-gray-400">Documentation</span>
              <div className="absolute left-full top-1/2 hidden h-px w-3 bg-gray-700 sm:block" />
            </div>
            <div className="relative rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5">
              <span className="block text-cyan-400">Day 2–3</span>
              <span className="mt-0.5 block text-gray-400">MVP</span>
              <div className="absolute left-full top-1/2 hidden h-px w-3 bg-gray-700 sm:block" />
            </div>
            <div className="rounded-lg border border-dashed border-cyan-400/30 bg-cyan-400/5 px-3 py-2.5">
              <span className="block text-cyan-400">Maintained</span>
              <span className="mt-0.5 block text-gray-400">Features &amp; Polish</span>
            </div>
            <p className="col-span-3 mt-1 text-gray-600">Started Jan 2026</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 font-mono text-xs text-cyan-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400">// Screenshots</p>
          <h2 className="text-2xl font-bold md:text-3xl">App Preview</h2>
          <ScreenshotGallery screenshots={screenshots} />
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400">// Software Design</p>
          <h2 className="text-2xl font-bold md:text-3xl">Clean Architecture</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-gray-400">Strict 4-layer architecture with dependency inversion. All dependencies point inward.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {layers.map((l) => (
              <div key={l.label} className="rounded-xl border border-gray-700 bg-gray-900 p-6 transition-colors hover:border-cyan-400/30">
                <h3 className="text-lg font-bold text-cyan-400">{l.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{l.description}</p>
              </div>
            ))}
          </div>

          {/* Dependency flow */}
          <div className="mt-10 rounded-xl border border-gray-700 bg-gray-900 p-6">
            <h3 className="mb-6 font-semibold">Dependency Flow</h3>
            <div className="mx-auto max-w-[26rem] font-mono text-sm">
              {[
                { label: "Presentation", sub: "Components, Hooks, Stores" },
                { label: "Application", sub: "Use Cases, DTOs" },
                { label: "Domain", sub: "Entities, Value Objects, Services" },
              ].map((item, i) => (
                <div key={item.label}>
                  <div className="rounded-lg border border-gray-700 p-3 text-cyan-400">
                    <div className="flex items-baseline gap-3">
                      <span className="w-[7.5rem] shrink-0 font-semibold">{item.label}</span>
                      <span className="text-xs text-gray-500">{item.sub}</span>
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="flex justify-center py-1 my-2 text-xs text-gray-600">depends on ↓</div>
                  )}
                </div>
              ))}
              <div className="mt-4 rounded-lg border border-dashed border-gray-600 p-3 text-gray-400">
                <div className="flex items-baseline gap-3">
                  <span className="w-[7.5rem] shrink-0 font-semibold">Infrastructure</span>
                  <span className="text-xs text-gray-500">implements Domain interfaces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400">// Core Algorithms</p>
          <h2 className="text-2xl font-bold md:text-3xl">Technical Highlights</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-gray-400">The interesting engineering challenges I solved.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-xl border border-gray-700 bg-gray-900 p-6 transition-colors hover:border-cyan-400/30">
                <h3 className="font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400">// Tech Stack</p>
          <h2 className="text-2xl font-bold md:text-3xl">Technology Overview</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stack.map((group) => (
              <div key={group.title} className="rounded-xl border border-gray-700 bg-gray-900 p-6">
                <h3 className="mb-4 font-semibold text-cyan-400">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-10 text-center">
        <p className="text-sm text-gray-600">
          © 2025 Dongjin Cho ·{" "}
          <Link href="/" className="cursor-pointer text-gray-500 transition-colors hover:text-cyan-400">
            Portfolio
          </Link>
        </p>
      </footer>
    </div>
  );
}
