import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductPageShell,
  ProductSectionHeading,
} from "@/components/product-page-shell";

const accent = "#3B82F6";

const steps = [
  {
    step: "01",
    title: "Create Your Account",
    description:
      "Sign up on the OpenHubble Metrics console and register your target host or server profile.",
  },
  {
    step: "02",
    title: "Install the Agent",
    description:
      "Deploy the lightweight OpenHubble Metrics Agent on your server with a single command.",
  },
  {
    step: "03",
    title: "Automatic Data Telemetry",
    description:
      "The server secure channel initiates communication, collecting CPU, memory, disk, and service telemetry.",
  },
  {
    step: "04",
    title: "Build Custom Dashboards",
    description:
      "Visualize your system metrics in real time with tailored charts and custom dashboard layouts.",
  },
];

const technologyGroups = [
  {
    title: "Backend",
    items: [
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "TimescaleDB",
      "Redis",
      "RabbitMQ",
      "Kafka",
      "Celery",
    ],
  },
  {
    title: "Frontend",
    items: ["Next.js", "TypeScript", "Material UI"],
  },
  {
    title: "Agent",
    items: ["Python", "Systemd", "Async Collectors", "Plugin driven"],
  },
];

const openSourceRepos = [
  {
    title: "Dashboard Backend",
    description:
      "FastAPI REST service handling metrics ingestion and API routing.",
    href: "https://github.com/OpenHubble/metrics-dashboard-backend",
    github: "OpenHubble/metrics-dashboard-backend",
  },
  {
    title: "Dashboard Frontend",
    description:
      "Next.js & Tailwind CSS dashboard for real-time visualization.",
    href: "https://github.com/OpenHubble/metrics-dashboard-frontend",
    github: "OpenHubble/metrics-dashboard-frontend",
  },
  {
    title: "Metrics Agent",
    description:
      "Lightweight Python daemon pushing server telemetry to your console.",
    href: "https://github.com/OpenHubble/metrics-agent",
    github: "OpenHubble/metrics-agent",
  },
  {
    title: "Metrics CLI",
    description:
      "Developer CLI tool to inspect, test, and debug your metrics agent.",
    href: "https://github.com/OpenHubble/metrics-cli",
    github: "OpenHubble/metrics-cli",
  },
];

export const metadata: Metadata = {
  title: "OpenHubble Metrics | Infrastructure Observability",
  description:
    "Live from Aug 1, 2026. Collect infrastructure metrics, register hosts, and build custom dashboards for your servers.",
};

export default function MetricsPage() {
  return (
    <ProductPageShell accent={accent}>
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="transition hover:text-black">
          OpenHubble
        </Link>
        <span>/</span>
        <span className="text-slate-400">Products</span>
        <span>/</span>
        <span className="font-semibold text-black">Metrics</span>
      </div>

      <section className="py-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold text-blue-900 border border-blue-200">
              Live from Aug 1, 2026
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              Open Source
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              Self Hosted
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              Real-time Telemetry
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Infrastructure observability built for real workloads.
          </h1>

          <p className="mb-6 text-xl font-semibold" style={{ color: accent }}>
            Register your hosts, run the lightweight agent, and build custom
            dashboards in minutes.
          </p>

          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            OpenHubble Metrics connects your servers directly to your central
            console. Monitor system resource utilization, service health, and
            containers through clean, responsive visualizations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="https://metrics.openhubble.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-8 py-3.5 text-center font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Open Console
            </a>
            <a
              href="#installation"
              className="rounded-full border border-slate-200 bg-white px-8 py-3.5 text-center font-semibold text-slate-900 transition hover:border-black hover:bg-slate-50 shadow-sm"
            >
              Install Agent
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="How It Works"
          title="From host registration to live custom dashboards"
          description="A straightforward workflow designed for system operators and developers."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <span
                className="mb-4 inline-block text-2xl font-black"
                style={{ color: accent }}
              >
                {item.step}
              </span>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="installation" className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Installation"
          title="Deploy the agent in seconds"
          description="Run the official installer on your Linux server host to connect to the cloud console."
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm text-blue-100 font-mono">
            <code>{`curl -s get.metrics.openhubble.com/agent | sudo bash`}</code>
          </pre>
          <p className="mt-4 text-sm text-slate-600">
            Once installed, the background daemon verifies credentials with your
            registered host and starts pushing telemetry to your dashboard
            immediately.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Technology"
          title="Built with proven open tools"
          description="The stack is lightweight, performant, and easily inspectable."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Open Source"
          title="Inspect, test, and contribute"
          description="Every component of OpenHubble Metrics is fully open-source and transparent."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {openSourceRepos.map((repo) => (
            <a
              key={repo.title}
              href={repo.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {repo.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  {repo.description}
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition">
                {repo.github}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-300">
            Built for Data Integrity
          </p>
          <h3 className="mb-4 text-3xl font-bold">
            In God we trust, everybody else must bring data.
          </h3>
          <p className="max-w-2xl text-blue-100/80 text-sm leading-6">
            Eliminate guesswork from server management. OpenHubble Metrics
            relies entirely on verified, real-time system telemetry—giving you
            precise, unbiased visibility into every host across your
            infrastructure.
          </p>
        </div>
      </section>
    </ProductPageShell>
  );
}
