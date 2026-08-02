import Link from "next/link";
import type { ReactNode } from "react";

type ProductPageShellProps = {
  accent: string;
  children: ReactNode;
};

type ProductPageShellConfig = {
  accent: string;
  productName: string;
};

const productsList = [
  { name: "Metrics", href: "/products/metrics", accent: "#3B82F6" },
  { name: "Uptime", href: "/products/uptime", accent: "#10B981" },
  { name: "Analytics", href: "/products/analytics", accent: "#8B5CF6" },
];

function getShellConfig(accent: string): ProductPageShellConfig {
  if (accent.toUpperCase() === "#10B981") {
    return {
      accent,
      productName: "Uptime",
    };
  }

  if (accent.toUpperCase() === "#8B5CF6") {
    return {
      accent,
      productName: "Analytics",
    };
  }

  return {
    accent: "#3B82F6",
    productName: "Metrics",
  };
}

export function ProductPageShell({ accent, children }: ProductPageShellProps) {
  const config = getShellConfig(accent);

  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background: `radial-gradient(circle at top, ${accent}0D 0%, #F8FAFC 45%)`,
      }}
    >
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl font-black text-white shadow-sm transition group-hover:scale-105"
              style={{ backgroundColor: accent }}
            >
              O
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              OpenHubble{" "}
              <span className="text-sm font-medium text-slate-400">
                / {config.productName}
              </span>
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <div className="relative group">
              <button className="flex items-center gap-1.5 py-1 text-slate-700 transition hover:text-black">
                Products
                <svg
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute right-0 top-full pt-2 hidden group-hover:block w-48">
                <div className="rounded-2xl border border-slate-200/90 bg-white p-2 shadow-xl backdrop-blur-lg">
                  {productsList.map((item) => {
                    const isActive = item.name === config.productName;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                          isActive
                            ? "bg-slate-100 text-slate-900"
                            : "text-slate-600 hover:bg-slate-50 hover:text-black"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: item.accent }}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <a
              href="https://github.com/OpenHubble"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-slate-700 transition hover:text-black"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-8">{children}</main>

      <footer id="contact" className="mt-20 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:justify-between lg:px-8">
          <div>
            <h4 className="text-lg font-bold text-slate-900">OpenHubble</h4>
            <p className="mt-1 text-sm text-slate-500">
              Exploring Data, Unveiling Insights.
            </p>
            <p className="mt-4 text-xs font-semibold text-slate-400">
              OpenHubble since 2024
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h5 className="mb-3 font-bold text-slate-900 text-sm">
                Products
              </h5>
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href="/products/metrics"
                  className="font-medium hover:underline"
                  style={{
                    color:
                      accent.toUpperCase() === "#3B82F6" ? accent : "#64748B",
                  }}
                >
                  Metrics
                </Link>
                <Link
                  href="/products/uptime"
                  className="font-medium hover:underline"
                  style={{
                    color:
                      accent.toUpperCase() === "#10B981" ? accent : "#64748B",
                  }}
                >
                  Uptime
                </Link>
                <Link
                  href="/products/analytics"
                  className="font-medium hover:underline"
                  style={{
                    color:
                      accent.toUpperCase() === "#8B5CF6" ? accent : "#64748B",
                  }}
                >
                  Analytics
                </Link>
              </div>
            </div>
            <div>
              <h5 className="mb-3 font-bold text-slate-900 text-sm">
                Social Media
              </h5>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <a
                  href="https://github.com/OpenHubble"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <h5 className="mb-3 font-bold text-slate-900 text-sm">Contact</h5>
              <a
                href="mailto:info@openhubble.com"
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                info@openhubble.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function ProductSectionHeading({
  accent,
  eyebrow,
  title,
  description,
}: {
  accent: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p
        className="mb-2 text-xs font-bold uppercase tracking-widest"
        style={{ color: accent }}
      >
        {eyebrow}
      </p>
      <h3 className="mb-3 text-3xl font-bold text-slate-900">{title}</h3>
      <p className="text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}
