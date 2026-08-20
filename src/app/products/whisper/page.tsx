import type { Metadata } from "next";

import Link from "next/link";

import {
  ProductPageShell,
  ProductSectionHeading,
} from "@/components/product-page-shell";

const accent = "#F59E0B";

const features = [
  {
    title: "SIP Monitoring",
    description:
      "Monitor SIP infrastructure and keep track of registration state, signaling health, and service availability.",
  },
  {
    title: "Call Quality",
    description:
      "Understand the quality of your VoIP traffic with visibility into the signals that affect every conversation.",
  },
  {
    title: "Trunk Health",
    description:
      "Keep an eye on SIP trunks and identify availability problems before they become customer-facing incidents.",
  },
  {
    title: "Latency & Jitter",
    description:
      "Detect network conditions that can turn a perfectly healthy call into a frustrating conversation.",
  },
  {
    title: "Packet Loss",
    description:
      "Surface packet loss and degraded network conditions that can impact voice quality and call reliability.",
  },
  {
    title: "Call Failures",
    description:
      "Identify failed calls, abnormal responses, and recurring signaling problems across your VoIP infrastructure.",
  },
];

const monitoredSystems = [
  {
    title: "SIP Infrastructure",
    description:
      "Monitor SIP endpoints, registrations, trunks, and signaling activity from a single observability layer.",
  },
  {
    title: "PBX Systems",
    description:
      "Bring your voice infrastructure into the same monitoring workflow used for the rest of your systems.",
  },
  {
    title: "VoIP Gateways",
    description:
      "Track gateway availability and detect connectivity or signaling problems affecting your voice services.",
  },
];

const metrics = [
  "Call Availability",
  "SIP Response Codes",
  "Latency",
  "Jitter",
  "Packet Loss",
  "Call Failures",
  "Registrations",
  "Trunk Health",
];

export const metadata: Metadata = {
  title: "OpenHubble Whisper | VoIP Monitoring",
  description:
    "OpenHubble Whisper is a VoIP monitoring platform for SIP infrastructure, call quality, trunks, and voice service health.",
};

export default function WhisperPage() {
  return (
    <ProductPageShell accent={accent}>
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="transition hover:text-black">
          OpenHubble
        </Link>

        <span>/</span>

        <span className="text-slate-400">Products</span>

        <span>/</span>

        <span className="font-semibold text-black">Whisper</span>
      </div>

      <section className="py-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-amber-200 bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-900">
              Launching Oct, 2027
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              VoIP Monitoring
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              SIP
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
              Call Quality
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
            VoIP monitoring for every call and every signal.
          </h1>

          <p className="mb-6 text-xl font-semibold" style={{ color: accent }}>
            Monitor your voice infrastructure before your users notice a
            problem.
          </p>

          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            OpenHubble Whisper brings VoIP observability into the OpenHubble
            ecosystem. Monitor SIP infrastructure, call quality, trunks, and
            voice service health from one clear and focused platform.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#features"
              className="rounded-full px-8 py-3.5 text-center font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Explore Features
            </a>

            <span className="inline-flex cursor-not-allowed items-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-500">
              Service Available October 2027
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="What It Monitors"
          title="A clearer view of your voice infrastructure"
          description="Whisper is designed to give engineering and infrastructure teams a focused observability layer for the systems behind their calls."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {monitoredSystems.map((system) => (
            <div
              key={system.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black"
                style={{
                  backgroundColor: `${accent}1A`,
                  color: accent,
                }}
              >
                {system.title[0]}
              </div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {system.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="py-12 lg:py-16">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Capabilities"
          title="Everything you need to understand VoIP health"
          description="Focus on the signals that matter when your infrastructure carries real conversations."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md"
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
          eyebrow="Observability"
          title="Listen to the signals behind every conversation"
          description="Voice quality is more than whether a call connects. Whisper focuses on the infrastructure and network signals that determine how that call actually feels."
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-wrap gap-3">
            {metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {metric}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
            From signaling failures to network degradation, Whisper is built
            around the idea that every voice incident leaves observable signals
            behind.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 p-8 text-white shadow-xl sm:p-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-300">
            Built for Voice
          </p>

          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            Every call leaves a signal.
          </h3>

          <p className="max-w-2xl text-sm leading-6 text-amber-100/80">
            When a call drops, audio becomes distorted, or a trunk stops
            responding, the problem rarely appears out of nowhere. Whisper is
            built to help you find the signals behind those failures and
            understand what is happening across your voice infrastructure.
          </p>
        </div>
      </section>
    </ProductPageShell>
  );
}
