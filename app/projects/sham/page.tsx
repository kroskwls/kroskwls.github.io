import Link from "next/link";
import type { Metadata } from "next";
import ScreenshotGallery from "@/app/components/ScreenshotGallery";

export const metadata: Metadata = {
  title: "SHAM – Dongjin Cho",
  description: "Smart Household Account Manager — a calendar-based shared expense tracker built with Next.js 15 and Supabase.",
};

const techs = ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Prisma", "Supabase", "Zustand", "Zod"];

const features = [
  {
    title: "Domain-Driven Structure",
    description:
      "Each feature is modularized into actions, components, schemas, and types. Seven domains (auth, expense, income, calendar, ledger, day-detail, settings) keep concerns isolated.",
  },
  {
    title: "Server Actions + Protected Wrapper",
    description:
      "A createProtectedAction higher-order function handles auth, role checking, schema validation, and error handling in one place — eliminating boilerplate across 24+ server actions.",
  },
  {
    title: "Optimistic Updates",
    description:
      "Zustand stores power optimistic UI updates. The calendar and detail views reflect changes immediately, before the server responds, then reconcile on completion.",
  },
  {
    title: "Multi-User Collaboration",
    description:
      "Multiple users can share a single ledger. Role-based access control (Owner / Editor / Viewer) and an email invitation system manage permissions.",
  },
  {
    title: "Type-Safe Validation",
    description:
      "Zod schemas unify client-side and server-side validation. Shared schemas between create and update operations eliminate duplication.",
  },
  {
    title: "Continuous Refactoring",
    description:
      "A systematic 7-phase refactoring effort removed ~1,200–1,600 lines of code while improving maintainability, extracting reusable hooks, and separating store modules.",
  },
];

const stack = [
  {
    title: "Frontend",
    items: ["Next.js 15 (App Router)", "React 19", "Tailwind CSS 4", "shadcn/ui + Radix UI", "React Hook Form + Zod", "Recharts"],
  },
  {
    title: "Backend",
    items: ["Next.js Server Actions", "Prisma ORM", "PostgreSQL (Supabase)", "Supabase Auth (OAuth)", "Role-based Access Control"],
  },
  {
    title: "State & DX",
    items: ["Zustand (3 stores)", "TypeScript 5", "Vitest (unit tests)", "ESLint 9", "Turbopack"],
  },
];

const screenshots = [
  {
    src: "/projects/sham/landing-page.png",
    fullSrc: "/projects/sham/landing-page-full.png",
    alt: "Landing Page",
    label: "Landing Page",
    heading: "Landing Page",
    badge: "First Impression",
    description:
      "A clean, minimal landing page introduces the product and its calendar-centric approach. Visitors can preview the dashboard UI before signing up.",
  },
  {
    src: "/projects/sham/calendar-dashboard.png",
    alt: "Calendar Dashboard",
    label: "Calendar Dashboard",
    heading: "Calendar Dashboard",
    badge: "Core Feature",
    description:
      "A monthly calendar view shows daily spending at a glance. The right panel displays a monthly summary, store rankings, and a cumulative spending chart that updates in real time.",
  },
  {
    src: "/projects/sham/day-detail.png",
    alt: "Day Detail",
    label: "Day Detail",
    heading: "Day Detail",
    badge: "Detail View",
    description:
      "Clicking a date opens a detailed breakdown of all expenses and income for that day. Each entry can be edited or deleted inline, and new transactions can be added directly from the panel.",
  },
  {
    src: "/projects/sham/expense-form.png",
    alt: "Expense Form",
    label: "Expense Form",
    heading: "Expense Form",
    badge: "Data Entry",
    description:
      "Line-item level detail — quantity, unit price, discounts, and recycle fees are all tracked per item. Store, item, and category fields support autocomplete, and GST/PST taxes are recorded separately.",
  },
  {
    src: "/projects/sham/store-ranking.png",
    alt: "Store Rankings",
    label: "Store Rankings",
    heading: "Store Rankings",
    badge: "Insights",
    description:
      "A ranked list of all stores visited during the month, showing total spending, transaction count, and percentage share. Clicking \"View All\" expands the full leaderboard.",
  },
  {
    src: "/projects/sham/store-detail.png",
    alt: "Store Detail",
    label: "Store Detail",
    heading: "Store Detail",
    badge: "Insights",
    description:
      "Clicking a store name opens a detail panel with transaction history, total tax, and total expenses for that store. Each entry can be edited or deleted directly from here.",
  },
];

export default function ShamPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 px-6 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between">
          <Link href="/" className="cursor-pointer font-mono text-sm text-gray-400 transition-colors hover:text-cyan-400">
            ← Back to Portfolio
          </Link>
          <span className="font-mono text-xs tracking-widest text-cyan-400">// SHAM</span>
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
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">SHAM</h1>
          <p className="mt-2 text-xl text-gray-400">Smart Household Account Manager</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            I built a household finance app from scratch. Living in Canada as a couple, I needed a shared budgeting tool — so I designed and implemented a calendar-based expense tracker with real-time insights.
          </p>
          {/* Timeline */}
          <div className="mt-8 grid grid-cols-3 gap-3 font-mono text-xs sm:max-w-lg">
            <div className="relative rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5">
              <span className="block text-cyan-400">Day 1</span>
              <span className="mt-0.5 block text-gray-400">Documentation</span>
              <div className="absolute left-full top-1/2 hidden h-px w-3 bg-gray-700 sm:block" />
            </div>
            <div className="relative rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5">
              <span className="block text-cyan-400">Day 2</span>
              <span className="mt-0.5 block text-gray-400">MVP</span>
              <div className="absolute left-full top-1/2 hidden h-px w-3 bg-gray-700 sm:block" />
            </div>
            <div className="rounded-lg border border-dashed border-cyan-400/30 bg-cyan-400/5 px-3 py-2.5">
              <span className="block text-cyan-400">Maintained</span>
              <span className="mt-0.5 block text-gray-400">Features &amp; Polish</span>
            </div>
            <p className="col-span-3 mt-1 text-gray-600">Started Nov 2025</p>
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
          <ScreenshotGallery screenshots={screenshots.map((s) => ({ ...s, width: 1920, height: 1080 }))} />
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400">// Architecture</p>
          <h2 className="text-2xl font-bold md:text-3xl">Design Decisions</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-gray-700 bg-gray-900 p-6 transition-colors hover:border-cyan-400/30"
              >
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-20">
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
