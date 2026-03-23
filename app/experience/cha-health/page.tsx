import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Newborn Health Chatbot – Dongjin Cho",
  description:
    "AI-powered newborn health consultation chatbot platform with multi-model AI responses, RAG pipeline, real-time chat, and RBAC at CHA Health Systems.",
};

const techs = ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Socket.io", "OpenAI GPT-4o"];

const features = [
  {
    title: "Multi-Model AI Response System",
    description:
      "Generates answers to parents' questions through multiple AI models including GPT-4o and iLoRA. Incorporates the child's age, survey data, and medical references into the prompt for context-aware responses.",
  },
  {
    title: "RAG + Vector Search",
    description:
      "Built a RAG pipeline with pgvector-based vector similarity search on PostgreSQL. Survey data and medical documents are vectorized so the most relevant references are included in AI responses.",
  },
  {
    title: "Real-time Chat (Socket.io)",
    description:
      "Socket.io-based bidirectional real-time communication enables instant messaging between parents and experts. Includes unread message tracking and message state management (pending/hold/approved/discarded).",
  },
  {
    title: "Redis Session & Cache Management",
    description:
      "Manages user authentication sessions server-side with Redis, caching AI responses and frequently queried data. TTL-based session expiration, instant invalidation on logout, and API response caching reduce DB load and improve response speed.",
  },
  {
    title: "RBAC Authorization",
    description:
      "Implemented a User → Role → Authority → Action hierarchy-based access control system. Route protection at the middleware level restricts features based on expert, admin, and general user roles.",
  },
  {
    title: "Notification System (SMS / Email)",
    description:
      "Integrated CoolSMS and NodeMailer to automatically send SMS/email notifications to parents when experts respond. Supports template-based variable substitution with delivery history tracking.",
  },
];

const stack = [
  {
    title: "Frontend",
    items: [
      "Next.js 14 (App Router)",
      "React 18",
      "Tailwind CSS",
      "Zustand (global state)",
      "React Hook Form + Zod",
      "Socket.io Client",
    ],
  },
  {
    title: "Backend",
    items: [
      "Next.js API Routes",
      "Prisma ORM (Multi-Schema)",
      "PostgreSQL + pgvector",
      "Redis (session / cache)",
      "Iron Session + JWT",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "OpenAI GPT-4o",
      "iLoRA Model",
      "RAG (Retrieval-Augmented Generation)",
      "Vector Embedding (pgvector)",
      "Upstage Solar API",
    ],
  },
  {
    title: "Infra",
    items: [
      "NodeMailer (email)",
      "CoolSMS (SMS)",
      "OAuth 2.0 (Naver / Kakao / Google)",
      "Pino Logger",
    ],
  },
];


const architectureItems = [
  { label: "Survey Parsing", detail: "Parse individual questions from external surveys into DB" },
  { label: "Thread Creation", detail: "Auto-generate chat threads based on parsed questions" },
  { label: "Vector Search", detail: "Find relevant survey responses via vector similarity" },
  { label: "AI Response", detail: "Generate responses with GPT-4o + iLoRA using references" },
  { label: "Expert Review", detail: "Experts review and refine AI responses before sending" },
  { label: "Notification", detail: "SMS/Email alerts and follow-up Q&A within threads" },
];

const challenges = [
  {
    title: "Multi-Model AI Response Quality",
    description:
      "Single-model responses lacked domain-specific accuracy for medical contexts. Combined GPT-4o for general reasoning with iLoRA for specialized medical responses, using survey data and medical references as RAG context to significantly improve answer relevance.",
  },
  {
    title: "Real-time Communication at Scale",
    description:
      "HTTP polling created latency in parent-expert conversations and increased server load. Implemented Socket.io for bidirectional real-time messaging with Redis-backed session management, enabling instant message delivery with proper state tracking.",
  },
  {
    title: "Complex Authorization Requirements",
    description:
      "The platform required granular access control across parents, experts, and admins with different feature sets. Built a hierarchical RBAC system (User → Role → Authority → Action) with middleware-level route protection and dynamic UI adaptation based on roles.",
  },
  {
    title: "Survey Data Integration for AI Context",
    description:
      "Raw survey data was unstructured and couldn't be directly used for AI context. Developed a parsing pipeline that extracts individual questions, vectorizes them with pgvector, and uses similarity search to feed the most relevant context into AI prompts.",
  },
];

export default function ChaHealthPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 px-6 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between">
          <Link href="/#experience" className="cursor-pointer font-mono text-sm text-gray-400 transition-colors hover:text-cyan-400">
            ← Back to Experience
          </Link>
          <span className="font-mono text-xs tracking-widest text-cyan-400">// CHA Health Systems · Full Stack Developer</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800 px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-cyan-400">
            // CHA Health Systems · Full Stack Developer
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            AI Newborn Health
            <br />
            Consultation Chatbot
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            An AI-powered chatbot platform where multiple AI models and human experts
            collaborate to answer parents&apos; newborn health questions. Built the full stack
            including RAG pipeline, real-time chat, role-based access control, and
            notification system from the ground up.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
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

      {/* System Flow */}
      <section className="border-b border-gray-800 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400">// System Flow</p>
          <h2 className="text-2xl font-bold md:text-3xl">Architecture Pipeline</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {architectureItems.map((item, i) => (
              <div key={item.label} className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-4 text-center">
                <span className="mr-2 font-mono text-xs text-cyan-400">{i + 1}</span>
                <span className="text-sm font-medium text-gray-100">{item.label}</span>
                <p className="mt-1 text-xs text-gray-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400">// Screenshot</p>
          <h2 className="text-2xl font-bold md:text-3xl">App Preview</h2>
          <p className="mt-2 text-gray-400">
            Expert chat management interface — user lists, chat threads, and AI response management in a single view.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-2 text-xs text-gray-500">chatbot.newborntrack.org/chat</span>
            </div>
            <Image
              src="/experience/cha-health/chat.png"
              alt="Expert chat management interface"
              width={1920}
              height={1080}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400">// Architecture</p>
          <h2 className="text-2xl font-bold md:text-3xl">Key Implementations</h2>
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

      {/* Challenges */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400">// Challenges</p>
          <h2 className="text-2xl font-bold md:text-3xl">Key Challenges & Solutions</h2>
          <div className="mt-10 space-y-4">
            {challenges.map((c) => (
              <div key={c.title} className="rounded-xl border border-gray-700 bg-gray-900 p-6">
                <h3 className="font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{c.description}</p>
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
