import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductPageShell,
  ProductSectionHeading,
} from "@/components/product-page-shell";

const accent = "#8B5CF6";

const features = [
  {
    title: "Privacy-First Tracking",
    description:
      "Collect essential visitor and product usage metrics without tracking cookies or personal data invasion.",
  },
  {
    title: "Lightweight SDK",
    description:
      "Embed simple client components into modern web applications with zero impact on performance.",
  },
  {
    title: "Real-Time Visitors",
    description:
      "Track live active users, current pages, and concurrent traffic spikes as they happen.",
  },
  {
    title: "Custom Event Tracking",
    description:
      "Record meaningful user actions, button clicks, conversions, and feature interactions.",
  },
  {
    title: "Sessions & Journeys",
    description:
      "Analyze how visitors navigate through your application flow over time.",
  },
  {
    title: "Referrer Attribution",
    description:
      "Identify top acquisition channels, search engines, and social direct sources.",
  },
  {
    title: "Geographic Distribution",
    description:
      "Break down traffic by country, region, and primary audience clusters.",
  },
  {
    title: "Devices & Environments",
    description:
      "Understand visitor operating systems, browsers, and screen resolutions.",
  },
  {
    title: "Client-Side Performance",
    description:
      "Monitor page load experiences, Core Web Vitals, and web app responsiveness.",
  },
  {
    title: "Automated Bot Filtering",
    description:
      "Automatically identify and filter out search crawlers and automated bots for clean metrics.",
  },
];

export const metadata: Metadata = {
  title: "OpenHubble Analytics | Privacy-First Web Insights",
  description:
    "OpenHubble Analytics launches Dec 1, 2026. Lightweight, privacy-first web and product analytics.",
};

export default function AnalyticsPage() {
  return (
    <ProductPageShell accent={accent}>
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="transition hover:text-black">
          OpenHubble
        </Link>
        <span>/</span>
        <span className="text-slate-400">Products</span>
        <span>/</span>
        <span className="font-semibold text-black">Analytics</span>
      </div>

      <section className="py-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-900 border border-purple-200">
              Launching Winter, 2026
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              Privacy First
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              Zero Cookies
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Privacy-first analytics for modern web products.
          </h1>

          <p className="mb-6 text-xl font-semibold" style={{ color: accent }}>
            Understand your visitors, product usage, and performance without
            compromising user privacy.
          </p>

          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            OpenHubble Analytics delivers clear, real-time website and
            application insights without complex tracking scripts, invasive
            cookie banners, or heavy client overhead.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#features"
              className="rounded-full px-8 py-3.5 text-center font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Explore Features
            </a>
            {/* <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-500 cursor-not-allowed">
              Console Available Winter, 2026
            </span> */}
          </div>
        </div>
      </section>

      <section id="features" className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Capabilities"
          title="Essential product insights out of the box"
          description="Everything you need to measure growth and engagement while keeping user trust intact."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md"
            >
              <div
                className="mb-3 h-2 w-2 rounded-full"
                style={{ backgroundColor: accent }}
              />
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Integration"
          title="Simple, single-line setup"
          description="Drop the lightweight SDK directly into your application root."
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm text-purple-100 font-mono">
            <code>{`import { OpenHubbleAnalytics } from "@openhubble/analytics-react";

export default function App() {
  return (
    <>
      <OpenHubbleAnalytics appId="app_live_8f3a1" />
      <YourComponents />
    </>
  );
}`}</code>
          </pre>
          <p className="mt-4 text-sm text-slate-600">
            The lightweight client script automatically captures pageviews,
            performance metrics, and session details with sub-10ms execution
            times.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-300">
            Built for Compliance
          </p>
          <h3 className="mb-4 text-3xl font-bold">
            GDPR, CCPA, and cookie-banner free.
          </h3>
          <p className="max-w-2xl text-purple-100/80 text-sm leading-6">
            By avoiding persistent cross-site tracking IDs and personal
            identifiers, OpenHubble Analytics allows you to understand user
            trends while completely eliminating invasive cookie consent prompts.
          </p>
        </div>
      </section>
    </ProductPageShell>
  );
}
