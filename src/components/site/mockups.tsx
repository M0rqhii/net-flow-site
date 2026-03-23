"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Blocks, Braces, ChartColumnBig, Layers3, ShieldCheck, ShoppingBag, Sparkles, Workflow } from "lucide-react";

function WindowChrome({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(7,19,29,0.74)] shadow-[0_28px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl">
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/22" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        </div>
        <div className="min-w-0 flex-1 rounded-full border border-white/8 bg-white/5 px-3 py-2">
          <p className="truncate font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/34">
            {eyebrow}
          </p>
        </div>
      </div>

      <div className="p-5">
        <p className="font-display text-[1.45rem] leading-none text-white">{title}</p>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

export function HeroSystemVisual() {
  return (
    <div className="relative">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-3 top-16 w-44 rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-md"
      >
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/34">
          Surface
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(25,183,255,0.14)] text-sky-200">
            <Sparkles size={18} />
          </span>
          <p className="text-sm leading-6 text-white/74">
            art direction, motion, premium conversion layout
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-20 w-44 rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-md"
      >
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/34">
          Control
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(52,243,190,0.14)] text-emerald-200">
            <ShieldCheck size={18} />
          </span>
          <p className="text-sm leading-6 text-white/74">
            monitoring, integrations, maintenance and rollout logic
          </p>
        </div>
      </motion.div>

      <WindowChrome eyebrow="net-flow.pl / system-view" title="Signature stack">
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-[1.18fr_0.82fr]">
            <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(25,183,255,0.12),rgba(255,255,255,0.03))] p-5">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/34">
                premium surface
              </p>
              <div className="mt-4 grid gap-3">
                <div className="h-28 rounded-[1.3rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(25,183,255,0.22),rgba(52,243,190,0.14))]" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-12 rounded-2xl bg-white/8" />
                  <div className="h-12 rounded-2xl bg-white/6" />
                  <div className="h-12 rounded-2xl bg-white/8" />
                </div>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/34">
                readiness
              </p>
              <div className="mt-4 space-y-4">
                {[
                  ["Performance", 92],
                  ["Conversions", 89],
                  ["Control", 96],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-1 flex items-center justify-between text-[0.72rem] text-white/52">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--blue),var(--green))]"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/34">
                flagship product
              </p>
              <div className="mt-4 rounded-[1.4rem] border border-white/8 bg-[rgba(7,19,29,0.8)] p-4">
                <p className="font-display text-[1.5rem] text-white">NetFlow-CMS</p>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  CMS, builder, hosting and ops in one controlled layer.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["RBAC", "logs", "tenants"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-white/4 px-2.5 py-1 text-[0.64rem] uppercase tracking-[0.18em] text-white/56"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/34">
                one standard
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "design"],
                  ["02", "commerce"],
                  ["03", "operations"],
                ].map(([index, label]) => (
                  <div
                    key={label}
                    className="rounded-[1.3rem] border border-white/8 bg-white/5 p-4"
                  >
                    <p className="font-display text-[1.5rem] leading-none text-white/28">
                      {index}
                    </p>
                    <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/66">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WindowChrome>
    </div>
  );
}

export function CasePreviewVisual() {
  return (
    <WindowChrome eyebrow="case-preview / fashion-commerce" title="Storefront + operations">
      <div className="grid gap-4">
        <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(25,183,255,0.12),rgba(52,243,190,0.1))] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-[1.5rem] leading-none text-white">
                Premium commerce front
              </p>
              <p className="mt-2 text-sm leading-6 text-white/62">
                storytelling, merchandising and content rhythm
              </p>
            </div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white/78">
              <ShoppingBag size={18} />
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="h-24 rounded-[1.2rem] bg-white/12" />
            <div className="h-24 rounded-[1.2rem] bg-white/8" />
            <div className="h-24 rounded-[1.2rem] bg-white/10" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.7rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/34">
              outcome layers
            </p>
            <div className="mt-4 space-y-3">
              {[
                { label: "Surface", icon: Sparkles },
                { label: "Content ops", icon: Workflow },
                { label: "Conversion", icon: ArrowUpRight },
              ].map(({ label, icon: Comp }) => {
                return (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-[1.2rem] border border-white/8 bg-white/4 p-3"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 text-white/74">
                      <Comp size={16} />
                    </span>
                    <span className="text-sm text-white/72">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/34">
              operational pulse
            </p>
            <div className="mt-4 rounded-[1.3rem] border border-white/8 bg-[rgba(7,19,29,0.82)] p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1rem] bg-white/6 p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                    catalog
                  </p>
                  <p className="mt-2 text-sm text-white/76">clean, repeatable, ready</p>
                </div>
                <div className="rounded-[1rem] bg-white/6 p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                    workflow
                  </p>
                  <p className="mt-2 text-sm text-white/76">publishing without chaos</p>
                </div>
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-white/8">
                <div className="h-full w-[88%] rounded-full bg-[linear-gradient(90deg,var(--blue),var(--green))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function CmsPreviewVisual() {
  return (
    <WindowChrome eyebrow="netflow-cms / product-preview" title="Controlled rollout system">
      <div className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[1.7rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5">
            <div className="space-y-3">
              {[
                { label: "Content", icon: Blocks },
                { label: "Builder", icon: Layers3 },
                { label: "Logic", icon: Braces },
                { label: "Audit", icon: ShieldCheck },
              ].map(({ label, icon: Comp }) => {
                return (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-[1.1rem] border border-white/8 bg-white/4 px-3 py-3"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 text-white/76">
                      <Comp size={16} />
                    </span>
                    <span className="text-sm text-white/72">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(25,183,255,0.1),rgba(255,255,255,0.04),rgba(52,243,190,0.08))] p-5">
            <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[1.3rem] border border-white/8 bg-[rgba(7,19,29,0.72)] p-4">
                <p className="font-display text-[1.45rem] leading-none text-white">
                  Multi-site control
                </p>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  one system, multiple properties, clean tenant isolation
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="h-14 rounded-[1rem] bg-white/8" />
                  <div className="h-14 rounded-[1rem] bg-white/6" />
                  <div className="h-14 rounded-[1rem] bg-white/6" />
                  <div className="h-14 rounded-[1rem] bg-white/8" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-[1.2rem] border border-white/8 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                    rollout
                  </p>
                  <p className="mt-2 text-sm text-white/76">predictable deployments</p>
                </div>
                <div className="rounded-[1.2rem] border border-white/8 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                    ops
                  </p>
                  <p className="mt-2 text-sm text-white/76">hosting, logs and permissions</p>
                </div>
                <div className="rounded-[1.2rem] border border-white/8 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                    builder
                  </p>
                  <p className="mt-2 text-sm text-white/76">creative flexibility under control</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.7rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/34">
                product readiness
              </p>
              <p className="mt-2 text-sm leading-6 text-white/62">
                CMS, automation and hosting aligned inside one operating model
              </p>
            </div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white/74">
              <ChartColumnBig size={18} />
            </span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              "tenant isolation",
              "RBAC and logs",
              "hosting included",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-white/8 bg-white/5 p-4 text-center text-xs uppercase tracking-[0.18em] text-white/58"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}
