"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  ChartNoAxesCombined,
  Globe,
  Palette,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  capabilities,
  caseStudies,
  clientTrail,
  cmsModules,
  contactChecklist,
  deliverySteps,
  problemSignals,
  socialLinks,
  stackGroups,
} from "@/data/site-content";
import { Reveal } from "./reveal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const capabilityIcons = [
  Globe,
  ShoppingBag,
  Workflow,
  ShieldCheck,
  Sparkles,
  Palette,
];

const socialLabels = {
  linkedin: "LinkedIn",
  github: "GitHub",
  instagram: "Instagram",
};

const toneClasses = {
  blue: {
    badge:
      "border-[rgba(25,183,255,0.18)] bg-[rgba(25,183,255,0.06)] text-[rgba(13,88,124,0.92)]",
    glow: "from-[rgba(25,183,255,0.16)] to-transparent",
  },
  green: {
    badge:
      "border-[rgba(52,243,190,0.18)] bg-[rgba(52,243,190,0.08)] text-[rgba(18,110,88,0.92)]",
    glow: "from-[rgba(52,243,190,0.16)] to-transparent",
  },
  warm: {
    badge:
      "border-[rgba(255,207,157,0.24)] bg-[rgba(255,207,157,0.16)] text-[rgba(135,77,22,0.92)]",
    glow: "from-[rgba(255,207,157,0.22)] to-transparent",
  },
};

function SectionIntro({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <span className={`section-kicker ${light ? "light" : ""}`}>{eyebrow}</span>
      <h2
        className={`font-display mt-6 text-4xl leading-[1.02] font-semibold tracking-[-0.04em] sm:text-5xl ${
          light ? "text-[var(--text-dark)]" : "text-white"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${
          light ? "text-[var(--text-dark-muted)]" : "text-white/64"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="page-shell" id="top">
      <SiteHeader />

      <main>
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 pb-18 pt-32 sm:pt-36 lg:pt-40">
            <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <div className="max-w-3xl">
                  <span className="section-kicker">
                    Warszawa / remote / web, commerce, systems
                  </span>
                  <h1 className="font-display mt-7 text-[3.2rem] leading-[0.95] font-semibold tracking-[-0.06em] text-white sm:text-[4.4rem] lg:text-[5.8rem]">
                    Budujemy strony i systemy,
                    <span className="text-gradient block">ktore wygladaja premium</span>
                    i dzialaja bez chaosu.
                  </h1>
                  <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                    Net-Flow projektuje i wdraza strony firmowe, e-commerce,
                    integracje i warstwe operacyjna, ktora nie doklada kolejnych
                    paneli do pilnowania. Design ma robic wrazenie. System ma
                    wytrzymac codzienna prace.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="mailto:kontakt@net-flow.pl?subject=Nowy%20projekt%20-%20Net-Flow"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(255,255,255,0.16)]"
                    >
                      Umow rozmowe
                      <ArrowUpRight size={16} />
                    </a>
                    <a
                      href="#work"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-6 py-4 text-sm font-semibold text-white/84 hover:border-white/24 hover:bg-white/10"
                    >
                      Zobacz wybrane realizacje
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  <div className="mt-12 grid gap-4 sm:grid-cols-3">
                    {[
                      {
                        label: "End-to-end",
                        value: "art direction -> wdrozenie -> utrzymanie",
                      },
                      {
                        label: "Commerce-ready",
                        value: "WordPress, WooCommerce, pluginy i data ops",
                      },
                      {
                        label: "Product thinking",
                        value: "NetFlow-CMS w budowie jako wlasny standard",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="glass-panel rounded-[1.6rem] px-5 py-5"
                      >
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/38">
                          {item.label}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/76">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="relative mx-auto w-full max-w-[34rem]">
                  <div className="absolute inset-x-6 top-12 h-56 rounded-full bg-[rgba(25,183,255,0.22)] blur-3xl" />
                  <div className="absolute inset-x-14 bottom-12 h-48 rounded-full bg-[rgba(52,243,190,0.18)] blur-3xl" />
                  <div className="glass-panel hero-panel-grid relative aspect-[0.9] overflow-hidden rounded-[2.4rem] border border-white/12 p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,183,255,0.16),transparent_26%),radial-gradient(circle_at_78%_22%,rgba(52,243,190,0.18),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%)]" />

                    <motion.div
                      className="drift-slow absolute left-6 top-6 w-[42%] rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/38">
                        Build layer
                      </p>
                      <p className="mt-3 text-sm text-white/80">
                        web / e-commerce / custom UI
                      </p>
                    </motion.div>

                    <motion.div
                      className="drift-fast absolute right-6 top-12 w-[40%] rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                      animate={{ y: [0, -14, 0] }}
                      transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/38">
                        Control layer
                      </p>
                      <p className="mt-3 text-sm text-white/80">
                        integracje / monitoring / ops
                      </p>
                    </motion.div>

                    <motion.div
                      className="drift-slower absolute bottom-8 left-6 w-[44%] rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                      animate={{ y: [0, -9, 0] }}
                      transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/38">
                        Readiness
                      </p>
                      <div className="mt-4 space-y-3">
                        {[
                          "Performance",
                          "Conversions",
                          "Operational order",
                        ].map((label, index) => (
                          <div key={label}>
                            <div className="mb-1 flex items-center justify-between text-xs text-white/54">
                              <span>{label}</span>
                              <span>{86 + index * 5}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/8">
                              <div
                                className="h-full rounded-full bg-[linear-gradient(90deg,var(--blue),var(--green))]"
                                style={{ width: `${86 + index * 5}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center px-10">
                      <div className="relative flex w-full max-w-[18rem] flex-col items-center rounded-[2rem] border border-white/10 bg-[rgba(7,19,29,0.78)] px-6 py-8 text-center shadow-[0_28px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl">
                        <Image
                          src="/brand/logo-symbol.png"
                          alt="Net-Flow symbol"
                          width={240}
                          height={240}
                          priority
                          className="h-36 w-36 object-contain mix-blend-screen"
                        />
                        <p className="font-mono mt-2 text-[0.64rem] uppercase tracking-[0.26em] text-white/38">
                          Flagship system
                        </p>
                        <p className="mt-3 font-display text-2xl text-white">
                          NetFlow-CMS
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white/62">
                          All-in-one standard dla klientow, ktorzy chca mniej
                          paneli i wiecej kontroli.
                        </p>
                        <span className="mt-5 rounded-full border border-emerald-400/18 bg-emerald-400/8 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-emerald-200/86">
                          ~70% ready / launch soon
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 rounded-[1.4rem] border border-white/10 bg-[rgba(255,255,255,0.06)] px-4 py-3 text-right shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-md">
                      <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/38">
                        Signature promise
                      </p>
                      <p className="mt-3 max-w-[10rem] text-sm leading-6 text-white/80">
                        premium wyglad, realna kontrola, jedna odpowiedzialnosc
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 pb-10">
            <div className="soft-separator" />
            <div className="marquee mt-7">
              <div className="marquee-track gap-4">
                {[...clientTrail, ...clientTrail].map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-white/52"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <SectionIntro
              eyebrow="Perspective"
              title="To nie ma byc tylko ladna wizytowka."
              description="High-end strona firmowa ma wygladac mocno, ale jeszcze wazniejsze jest to, zeby porzadkowala proces, wspierala sprzedaz i nie rozwalala sie operacyjnie po publikacji."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {problemSignals.map((signal, index) => (
              <Reveal key={signal.title} delay={0.08 * index}>
                <article className="glass-panel relative overflow-hidden rounded-[2rem] p-7">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--blue),var(--green))]" />
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/38">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-5 text-2xl text-white">
                    {signal.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    {signal.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="paper-section" id="services">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <Reveal>
              <SectionIntro
                eyebrow="Capabilities"
                title="Net-Flow jest najmocniejsze tam, gdzie design musi spotkac operacje."
                description="Projekt ma robic wrazenie, ale musi tez byc przewidywalny w utrzymaniu. Dlatego laczymy warstwe wizualna z wdrozeniem, integracjami i odpowiedzialnoscia po starcie."
                light
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((capability, index) => {
                const Icon = capabilityIcons[index];
                const tone = toneClasses[capability.tone as keyof typeof toneClasses];

                return (
                  <Reveal key={capability.title} delay={0.05 * index}>
                    <article className="paper-panel relative h-full overflow-hidden rounded-[2rem] p-7">
                      <div
                        className={`absolute inset-x-8 top-0 h-24 bg-gradient-to-b ${tone.glow}`}
                      />
                      <div
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.72rem] font-medium ${tone.badge}`}
                      >
                        <Icon size={15} />
                        {capability.eyebrow}
                      </div>
                      <h3 className="font-display mt-6 text-[1.85rem] leading-[1.02] text-[var(--text-dark)]">
                        {capability.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-dark-muted)]">
                        {capability.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {capability.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm text-[var(--text-dark)]"
                          >
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,var(--blue),var(--green))]" />
                            <span className="leading-7">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 pb-24" id="work">
            <Reveal>
              <SectionIntro
                eyebrow="Selected work"
                title="Realizacje, w ktorych wazny byl nie tylko wyglad, ale caly system dzialania."
                description="Ponizej nie ma generycznych case studies. Kazdy projekt pokazuje, jak laczymy estetyke z porzadkiem operacyjnym, automatyzacjami i odpowiedzialnoscia za efekt."
                light
              />
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {caseStudies.map((caseStudy, index) => (
                <Reveal key={caseStudy.name} delay={0.06 * index}>
                  <article className="paper-panel relative overflow-hidden rounded-[2.1rem] p-7 sm:p-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--blue),var(--green),var(--peach))]" />
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--text-dark-muted)]">
                      {caseStudy.category}
                    </p>
                    <div className="mt-4 flex items-start justify-between gap-6">
                      <h3 className="font-display text-[2rem] leading-none text-[var(--text-dark)]">
                        {caseStudy.name}
                      </h3>
                      <a
                        href={caseStudy.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(17,32,50,0.1)] text-[var(--text-dark)] hover:-translate-y-0.5 hover:border-[rgba(17,32,50,0.18)]"
                        aria-label={`Open ${caseStudy.name}`}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-[var(--text-dark-muted)]">
                      {caseStudy.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[rgba(17,32,50,0.08)] bg-white/66 px-3 py-1.5 text-xs text-[var(--text-dark-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 rounded-[1.5rem] border border-[rgba(17,32,50,0.08)] bg-[rgba(255,255,255,0.64)] p-5">
                      <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-[var(--text-dark-muted)]">
                        Business impact
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-dark)]">
                        {caseStudy.impact}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24" id="cms">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="glass-panel h-full rounded-[2.4rem] p-8 sm:p-10">
                <span className="section-kicker">Flagship product / NetFlow-CMS</span>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-emerald-300/16 bg-emerald-300/8 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-emerald-200/86">
                    status ~70% / in progress
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/48">
                    CMS + builder + hosting + ops
                  </span>
                </div>
                <h2 className="font-display mt-7 text-4xl leading-[1.02] font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  NetFlow-CMS ma zamknac caly chaos wdrozeniowy w jednym
                  standardzie.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                  To nie jest kolejna wtyczka ani kolejny page builder. To nasza
                  produktowa odpowiedz na problem wielu paneli, braku kontroli i
                  wysokiego kosztu utrzymania po starcie projektu.
                </p>

                <div className="mt-8 space-y-4 text-sm leading-7 text-white/68">
                  <p>
                    NetFlow-CMS ma dac klientowi jedno miejsce do zarzadzania
                    trescia, warstwa wizualna, hostingiem i procesem publikacji.
                  </p>
                  <p>
                    Dla nas oznacza to szybsze wdrozenia i wieksza przewidywalnosc.
                    Dla klienta: mniej chaosu, mniej wtyczek, mniej ping-ponga z
                    odpowiedzialnoscia.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {cmsModules.map((module, index) => (
                <Reveal key={module.title} delay={0.05 * index}>
                  <article className="glass-panel h-full rounded-[2rem] p-6">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white/84">
                        {index % 3 === 0 ? (
                          <Boxes size={18} />
                        ) : index % 3 === 1 ? (
                          <ChartNoAxesCombined size={18} />
                        ) : (
                          <ServerCog size={18} />
                        )}
                      </div>
                      <h3 className="font-display text-2xl text-white">{module.title}</h3>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-white/62">
                      {module.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24" id="process">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <SectionIntro
                eyebrow="Delivery model"
                title="Premium execution to nie bajer. To powtarzalny proces."
                description="Dobra strona nie konczy sie na oddaniu plikow. Dlatego caly projekt prowadzimy od diagnozy, przez art direction i development, az po warstwe operacyjna po starcie."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-5">
                {deliverySteps.map((step) => (
                  <article
                    key={step.step}
                    className="glass-panel rounded-[2rem] px-6 py-6 sm:px-7"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="font-display text-4xl text-white/28">{step.step}</div>
                      <div className="min-w-0">
                        <h3 className="font-display text-2xl text-white">{step.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/62">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-4">
            {stackGroups.map((group, index) => (
              <Reveal key={group.title} delay={0.04 * index}>
                <article className="glass-panel h-full rounded-[2rem] p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/36">
                    stack / standards
                  </p>
                  <h3 className="font-display mt-4 text-2xl text-white">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/66"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-10 pt-6" id="contact">
          <Reveal>
            <div className="glass-panel fine-grid relative overflow-hidden rounded-[2.6rem] px-7 py-8 sm:px-10 sm:py-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--blue),var(--green),var(--peach))]" />
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <span className="section-kicker">Start a project</span>
                  <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                    Jesli chcesz strone, ktora ma wygladac i dzialac na poziomie,
                    napisz do Net-Flow.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                    Najprostszy start: wyslij link do obecnej strony albo materialow
                    i napisz, co dzisiaj najbardziej cie spowalnia. Reszte
                    poukladamy w proces.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {contactChecklist.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/72"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-7">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/36">
                    direct line
                  </p>
                  <a
                    href="mailto:kontakt@net-flow.pl?subject=Nowy%20projekt%20-%20Net-Flow"
                    className="font-display mt-4 inline-block text-3xl leading-none text-white sm:text-4xl"
                  >
                    kontakt@net-flow.pl
                  </a>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Warszawa / remote. Strony firmowe, e-commerce, integracje,
                    maintenance i kierunek produktowy w postaci NetFlow-CMS.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="mailto:kontakt@net-flow.pl?subject=Nowy%20projekt%20-%20Net-Flow"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5"
                    >
                      Napisz teraz
                      <ArrowUpRight size={16} />
                    </a>
                    <a
                      href="#services"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white/82 hover:border-white/22 hover:bg-white/6"
                    >
                      Wroc do oferty
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/56 hover:border-white/18 hover:text-white/84"
                      >
                        {socialLabels[link.icon as keyof typeof socialLabels]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
