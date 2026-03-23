import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TraceOne – Multi-tenant B2B SaaS Platform – Dongjin Cho",
  description:
    "Multi-tenant B2B SaaS survey platform with RBAC policy engine, device trust-based MFA, and Nx monorepo architecture.",
};

const techs = ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "TanStack Query", "TailwindCSS", "Zustand"];

const summaryBullets = [
  "Designed and implemented platform-wide auth/authorization: JWT RS256, RBAC policy engine, and device trust-based multi-factor authentication.",
  "Built core backend domain modules including permission invitations (7 use cases), outbound notification channels, and device trust management.",
  "Implemented 24+ domain-specific API service layers with TanStack Query and multi-step login/signup frontend flows.",
  "Designed multi-domain database schemas and established centralized error code system across the platform.",
];

const architectureApps = [
  { name: "admin-frontend", sub: "Next.js 15", type: "frontend" as const },
  { name: "end-user-frontend", sub: "Next.js 15", type: "frontend" as const },
  { name: "backend", sub: "NestJS", type: "backend" as const },
];

const architecturePackages = {
  Frontend: [
    { name: "shared/ui", detail: "Common Components" },
    { name: "shared/lib", detail: "ApiClient / TanStack" },
    { name: "composition", detail: "Login / Signup / Layout" },
    { name: "modules", detail: "Invite / Trust / Segment" },
  ],
  Backend: [
    { name: "core", detail: "JWT / Policy / Cache / EventBus" },
    { name: "domain", detail: "User / Tenant / Org / Policy" },
    { name: "feature", detail: "Auth / Invite / Messaging" },
  ],
};

const sharedPackages = [
  { name: "Prisma", detail: "14 Schemas" },
  { name: "Errors", detail: "Centralized error codes" },
  { name: "DTO", detail: "Shared contracts" },
  { name: "Keys", detail: "JWT RSA key pair" },
];

const pipelineSteps = [
  {
    title: "Client Request",
    badge: null,
    desc: "Bearer Token or Session Cookie included",
  },
  {
    title: "CustomValidationPipe",
    badge: "PIPE",
    badgeColor: "bg-yellow-400/15 text-yellow-400",
    desc: "DTO validation (class-validator) with disallowed field blocking",
  },
  {
    title: "JwtAuthGuard",
    badge: "GUARD",
    badgeColor: "bg-red-400/15 text-red-400",
    desc: "1. Check @Public() decorator\n2. Extract domain info from Origin (subDomain, mainDomain)\n3. Verify JWT RS256 signature\n4. Inject req.user",
    highlight: true,
  },
  {
    title: "PolicyGuard (RBAC)",
    badge: "GUARD",
    badgeColor: "bg-red-400/15 text-red-400",
    desc: "ContextExtractor → domain-based role/resource/action extraction\nPolicyLoader → load policies from DB\nDecisionBuilder → DENY-first evaluation (DENY > PERMIT > default deny)",
    highlight: true,
  },
  {
    title: "Route Handler",
    badge: "HANDLER",
    badgeColor: "bg-indigo-400/15 text-indigo-400",
    desc: "Execute business logic",
  },
  {
    title: "ResponseTransform + ExceptionFilter",
    badge: "INTERCEPTOR",
    badgeColor: "bg-green-400/15 text-green-400",
    desc: 'Success → { ok: true, data: ... }\nFailure → { ok: false, code: ErrorCode, error: message }',
  },
];

const authFlow = [
  {
    label: "Credentials",
    detail: "Domain-based user lookup (trace.com → User, traceone.com → EndUser) + Argon2id password verification",
  },
  {
    label: "Device Trust Check",
    detail: "Query TrustDevice table by browser fingerprint and deviceId to determine trust status",
  },
  {
    label: "Trusted → Login",
    detail: "Issue JWT RS256 token + create iron-session cookie → redirect to dashboard",
    isBranch: true,
  },
  {
    label: "Untrusted → OTP",
    detail: "Send OTP via email → user verifies → option to register device as trusted → issue tokens",
    isBranch: true,
  },
];

const challenges = [
  {
    title: "Multi-tenant Data Isolation",
    description:
      "Organizations, tenants, and end-users share the same database but must never access each other's data. Designed tenant-scoped queries enforced at the service layer, with domain-based context extraction from request origins to automatically resolve tenant boundaries.",
  },
  {
    title: "Beyond Standard RBAC",
    description:
      "Standard role-based access control couldn't express the granular permissions the platform required — such as per-tenant resource restrictions and conditional action scoping. Designed a PBAC policy engine that evaluates Subject/Action/Resource conditions from DB-stored policies, enabling fine-grained permission control that simple role assignment alone cannot achieve.",
  },
  {
    title: "Device Trust + Stateless Auth Balance",
    description:
      "Needed multi-factor security without forcing OTP on every login. Combined stateless JWT RS256 tokens with a device trust registry — trusted devices skip OTP, while new devices trigger email-based verification with optional trust registration.",
  },
  {
    title: "Monorepo Package Boundary Management",
    description:
      "Two frontends and one backend sharing types, UI components, and business logic risked tight coupling. Structured Nx packages with clear dependency rules — shared DTOs and error codes as contracts, UI components isolated from backend logic, and domain modules scoped per feature.",
  },
];

const rbacStages = [
  {
    num: 1,
    label: "ContextExtractor",
    items: [
      { name: "Subject", detail: "userId / role / tenantDomain", color: "bg-blue-400/10 text-blue-400" },
      { name: "Action", detail: "HTTP method / route path", color: "bg-indigo-400/10 text-indigo-400" },
      { name: "Resource", detail: "resource type (user, survey ...)", color: "bg-green-400/10 text-green-400" },
    ],
  },
  {
    num: 2,
    label: "PolicyLoader",
    desc: "Load policies from DB at User / Role / Tenant / Organization levels",
    tags: ["User Policy", "Role Policy", "Tenant Policy", "Organization Policy"],
  },
  {
    num: 3,
    label: "PolicyEvaluator",
    evals: [
      { logic: "AND", desc: "Subject conditions — all must match" },
      { logic: "AND", desc: "Resource conditions — all must match" },
      { logic: "OR", desc: "Action conditions — any match" },
    ],
    results: ["PERMIT", "DENY", "N/A"],
  },
  {
    num: 4,
    label: "DecisionBuilder",
    decisions: [
      { icon: "bg-red-400", text: "If any DENY exists → deny" },
      { icon: "bg-green-400", text: "If any PERMIT exists → allow" },
      { icon: "bg-gray-500", text: "Otherwise → default deny" },
    ],
  },
];

const stack = [
  {
    title: "Frontend",
    items: [
      "Next.js 15 (App Router)",
      "TanStack Query (24+ services)",
      "Zustand (global state)",
      "Tailwind CSS",
      "React Hook Form + Zod",
      "Shared UI component library",
    ],
  },
  {
    title: "Backend",
    items: [
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "JWT RS256 + iron-session",
    ],
  },
  {
    title: "Auth & Security",
    items: [
      "PBAC Policy Engine",
      "Device trust-based MFA",
      "Argon2id password hashing",
      "OTP email verification",
      "Centralized error codes",
    ],
  },
  {
    title: "Infra & DX",
    items: [
      "Nx Monorepo",
      "Shared DTO contracts",
      "RSA key pair management",
    ],
  },
];

export default function TracePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 px-6 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between">
          <Link href="/#experience" className="cursor-pointer font-mono text-sm text-gray-400 transition-colors hover:text-blue-400">
            &larr; Back to Experience
          </Link>
          <span className="font-mono text-xs tracking-widest text-blue-400">// CHA Health Systems &middot; Full Stack Developer</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800 px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-blue-400">
            // CHA Health Systems &middot; Full Stack Developer
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            TraceOne
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            A multi-tenant B2B SaaS platform where organizations design and deploy surveys,
            then collect and analyze end-user responses. Features 20+ question types, conditional branching,
            variable computation, RBAC access control, and device trust-based multi-factor authentication.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            PoC (Proof of Concept) stage MVP — validating technical feasibility of core features.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="rounded-full border border-blue-400/30 bg-blue-400/5 px-3 py-1 font-mono text-xs text-blue-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 01. Architecture */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-blue-400">// 01</p>
          <h2 className="text-2xl font-bold md:text-3xl">System Architecture</h2>
          <p className="mt-2 mb-10 text-gray-400">Nx monorepo structure with backend/frontend package separation</p>

          <div className="rounded-xl border border-gray-700 bg-gray-900 p-6 md:p-8">
            {/* Apps */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">Apps</p>
            <div className="grid grid-cols-3 gap-3">
              {architectureApps.map((app) => (
                <div
                  key={app.name}
                  className={`rounded-lg border p-4 text-center ${
                    app.type === "backend"
                      ? "border-indigo-400/20 bg-indigo-400/5"
                      : "border-blue-400/20 bg-blue-400/5"
                  }`}
                >
                  <p className={`text-sm font-semibold ${app.type === "backend" ? "text-indigo-400" : "text-blue-400"}`}>
                    {app.name}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{app.sub}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-4 flex justify-center">
              <div className="h-8 w-px border-l border-dashed border-gray-600" />
            </div>

            {/* Packages */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">Packages</p>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(architecturePackages).map(([group, items]) => (
                <div key={group} className="rounded-lg border border-gray-700 p-4">
                  <p className="mb-3 border-b border-gray-700 pb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {group}
                  </p>
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className={`flex items-center justify-between rounded-md px-3 py-2 text-sm ${
                          group === "Backend"
                            ? "border-l-2 border-indigo-400 bg-indigo-400/5"
                            : "border-l-2 border-blue-400 bg-blue-400/5"
                        }`}
                      >
                        <span className="font-medium text-gray-200">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-4 flex justify-center">
              <div className="h-6 w-px border-l border-dashed border-gray-600" />
            </div>

            {/* Shared */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">Shared</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {sharedPackages.map((pkg) => (
                <div key={pkg.name} className="rounded-lg border border-green-400/15 bg-green-400/5 px-3 py-2.5 text-center">
                  <p className="text-sm font-semibold text-green-400">{pkg.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{pkg.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. API Pipeline */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-blue-400">// 02</p>
          <h2 className="text-2xl font-bold md:text-3xl">API Request Pipeline</h2>
          <p className="mt-2 mb-10 text-gray-400">Authentication → authorization → response standardization flow for every request</p>

          <div className="mx-auto flex max-w-2xl flex-col items-center gap-2">
            {pipelineSteps.map((step, i) => (
              <div key={step.title} className="w-full">
                <div className="w-full rounded-lg border border-gray-700 bg-gray-900 p-4">
                  <div className="mb-1 flex items-center gap-2">
                    {step.badge && (
                      <span className={`rounded px-2 py-0.5 text-xs font-semibold ${step.badgeColor}`}>
                        {step.badge}
                      </span>
                    )}
                    <span className="text-sm font-semibold text-gray-100">{step.title}</span>
                  </div>
                  <p className="whitespace-pre-line text-xs leading-relaxed text-gray-500">{step.desc}</p>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <div className="flex justify-center py-1 text-gray-600">&darr;</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Auth Flow */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-blue-400">// 03</p>
          <h2 className="text-2xl font-bold md:text-3xl">Multi-step Authentication Flow</h2>
          <p className="mt-2 mb-10 text-gray-400">Credentials → device trust check → OTP verification</p>

          <div className="mx-auto flex max-w-2xl flex-col items-center gap-2">
            {authFlow.map((step, i) => (
              <div key={step.label} className="w-full">
                {/* Branch split indicator */}
                {i === 2 && (
                  <div className="mb-2 flex justify-center">
                    <span className="rounded-full border border-gray-600 bg-gray-800 px-3 py-0.5 text-xs text-gray-400">
                      branch by device trust
                    </span>
                  </div>
                )}
                <div className={`w-full rounded-lg border bg-gray-900 p-4 ${
                  step.isBranch ? "border-l-2 border-l-blue-400 border-gray-700" : "border-gray-700"
                }`}>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-mono text-xs text-blue-400">{i + 1}</span>
                    <span className="text-sm font-semibold text-gray-100">{step.label}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-500">{step.detail}</p>
                </div>
                {i < authFlow.length - 1 && !step.isBranch && (
                  <div className="flex justify-center py-1 text-gray-600">&darr;</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. RBAC */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-blue-400">// 04</p>
          <h2 className="text-2xl font-bold md:text-3xl">RBAC Policy Engine</h2>
          <p className="mt-2 mb-10 text-gray-400">PBAC policy evaluation pipeline</p>

          <div className="mx-auto flex max-w-2xl flex-col items-center gap-2">
            {rbacStages.map((stage, si) => (
              <div key={stage.num} className="w-full">
                <div className={`w-full rounded-xl border bg-gray-900 overflow-hidden ${
                  stage.num === 4 ? "border-blue-400/40 shadow-[0_0_24px_rgba(56,189,248,0.08)]" : "border-gray-700"
                }`}>
                  {/* Header */}
                  <div className="flex items-center gap-3 border-b border-gray-700 bg-blue-400/5 px-5 py-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-400 text-xs font-bold text-gray-950">
                      {stage.num}
                    </span>
                    <span className="text-sm font-semibold text-gray-100">{stage.label}</span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    {/* Stage 1: items */}
                    {"items" in stage && stage.items && (
                      <div className="space-y-2">
                        {stage.items.map((item) => (
                          <div key={item.name} className={`flex items-center justify-between rounded-lg px-4 py-2 text-sm ${item.color}`}>
                            <span className="font-semibold">{item.name}</span>
                            <span className="text-xs opacity-70">{item.detail}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Stage 2: desc + tags */}
                    {"tags" in stage && stage.tags && (
                      <>
                        <p className="mb-3 text-sm text-gray-400">{stage.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {stage.tags.map((tag) => (
                            <span key={tag} className="rounded-md border border-gray-600 bg-gray-800 px-2.5 py-1 text-xs text-gray-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    {/* Stage 3: evals + results */}
                    {"evals" in stage && stage.evals && (
                      <>
                        <div className="mb-4 space-y-2">
                          {stage.evals.map((ev) => (
                            <div key={ev.desc} className="flex items-center gap-3 text-sm text-gray-400">
                              <span className={`rounded px-2 py-0.5 font-mono text-xs font-bold ${
                                ev.logic === "AND" ? "bg-blue-400/15 text-blue-400" : "bg-yellow-400/15 text-yellow-400"
                              }`}>
                                {ev.logic}
                              </span>
                              {ev.desc}
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2 border-t border-gray-700 pt-3">
                          {stage.results!.map((r) => (
                            <span key={r} className={`rounded-md px-3 py-1 font-mono text-xs font-semibold ${
                              r === "PERMIT" ? "bg-green-400/10 text-green-400" :
                              r === "DENY" ? "bg-red-400/10 text-red-400" :
                              "bg-gray-700 text-gray-500"
                            }`}>
                              {r}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    {/* Stage 4: decisions */}
                    {"decisions" in stage && stage.decisions && (
                      <div className="space-y-2">
                        {stage.decisions.map((d) => (
                          <div key={d.text} className="flex items-center gap-3 text-sm text-gray-400">
                            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${d.icon}`} />
                            {d.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {si < rbacStages.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg width="24" height="28" viewBox="0 0 24 28" className="text-gray-600">
                      <path d="M12 0 L12 20 L7 15 M12 20 L17 15" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Invitation System */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-blue-400">// 05</p>
          <h2 className="text-2xl font-bold md:text-3xl">Permission Invitation System</h2>
          <p className="mt-2 mb-10 text-gray-400">7 use cases covering organization and tenant-level invitations with role assignment</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
              <h3 className="mb-3 font-semibold text-white">Organization Level</h3>
              <ul className="space-y-2">
                {[
                  "Invite new user to organization with role",
                  "Invite existing user to organization",
                  "Re-invite on expired invitation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
              <h3 className="mb-3 font-semibold text-white">Tenant Level</h3>
              <ul className="space-y-2">
                {[
                  "Invite organization member to tenant",
                  "Invite external user to tenant with org auto-join",
                  "Accept / decline invitation",
                  "Revoke pending invitation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Challenges */}
      <section className="border-b border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-blue-400">// 06</p>
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
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-blue-400">// Tech Stack</p>
          <h2 className="text-2xl font-bold md:text-3xl">Technology Overview</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((group) => (
              <div key={group.title} className="rounded-xl border border-gray-700 bg-gray-900 p-6">
                <h3 className="mb-4 font-semibold text-blue-400">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
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
          &copy; 2025 Dongjin Cho &middot;{" "}
          <Link href="/" className="cursor-pointer text-gray-500 transition-colors hover:text-blue-400">
            Portfolio
          </Link>
        </p>
      </footer>
    </div>
  );
}
