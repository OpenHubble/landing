import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductPageShell,
  ProductSectionHeading,
} from "@/components/product-page-shell";

const accent = "#10B981";

const benchmarks = [
  { name: "Supabase Status", url: "status.supabase.com" },
  { name: "Vercel Status", url: "www.vercel-status.com" },
  { name: "Cloudflare Status", url: "www.cloudflarestatus.com" },
];

const features = [
  {
    title: "Custom Domain Status Pages",
    description:
      "Host public status pages directly at status.yourcompany.com or via uptime.openhubble.com/yourcompany.",
  },
  {
    title: "HTTP & API Endpoint Checks",
    description:
      "Continuous pinging, latency tracking, and status code verification for web applications and microservices.",
  },
  {
    title: "Incident Management",
    description:
      "Communicate ongoing incidents, scheduled maintenance windows, and resolution updates to your users.",
  },
  {
    title: "SSL & DNS Tracking",
    description:
      "Proactive alerts for expiring SSL certificates, DNS changes, and domain health.",
  },
];

export const metadata: Metadata = {
  title: "OpenHubble Uptime | Status Pages & Monitoring",
  description:
    "OpenHubble Uptime launches Oct 1, 2026. Custom status pages for websites, APIs, and incidents.",
};

export default function UptimePage() {
  return (
    <ProductPageShell accent={accent}>
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="transition hover:text-black">
          OpenHubble
        </Link>
        <span>/</span>
        <span className="text-slate-400">Products</span>
        <span>/</span>
        <span className="font-semibold text-black">Uptime</span>
      </div>

      <section className="py-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-900 border border-emerald-200">
              Launching Spring, 2027
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              Status Pages
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              Global Probes
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Reliable status pages and service uptime tracking.
          </h1>

          <p className="mb-6 text-xl font-semibold" style={{ color: accent }}>
            Build transparent, high-trust status pages for your users and
            customer base.
          </p>

          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            OpenHubble Uptime helps engineering teams monitor APIs, websites,
            and infrastructure while providing seamless public status
            communication—just like top developer tools.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#features"
              className="rounded-full px-8 py-3.5 text-center font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Explore Capabilities
            </a>
            {/* <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-500 cursor-not-allowed">
              Service Available Spring 2027
            </span> */}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Industry Benchmarks"
          title="The gold standard of status communication"
          description="Designed to offer the level of clarity, responsiveness, and trust delivered by industry leaders."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {benchmarks.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <h3 className="text-base font-bold text-slate-900">
                {item.name}
              </h3>
              <p className="mt-1 text-xs font-mono text-slate-500">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Core Features"
          title="Everything needed for service transparency"
          description="Built to keep your customers informed during incidents and maintenance."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
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
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
            Built for Transparency
          </p>
          <h3 className="mb-4 text-3xl font-bold">
            Your brand, your status domain.
          </h3>
          <p className="max-w-2xl text-emerald-100/80 text-sm leading-6">
            Publish your live status board on your own domain at{" "}
            <code className="text-emerald-300 font-mono bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
              status.yourcompany.com
            </code>{" "}
            or share direct hosted links via{" "}
            <code className="text-emerald-300 font-mono bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
              uptime.openhubble.com/yourcompany
            </code>{" "}
            with automatic SSL provisioning.
          </p>
        </div>
      </section>
    </ProductPageShell>
  );
}
