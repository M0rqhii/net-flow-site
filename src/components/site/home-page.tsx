"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Braces,
  Layers3,
  Palette,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import {
  caseStudies,
  clientTrail,
  cmsModules,
  cmsSignals,
  contactChecklist,
  deliverySteps,
  heroMetrics,
  manifestoNotes,
  serviceBands,
  socialLinks,
  stackGroups,
} from "@/data/site-content";
import { Reveal } from "./reveal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const serviceIcons = [Palette, ShoppingBag, ShieldCheck];
const moduleIcons = [Blocks, Braces, ServerCog, Layers3, BadgeCheck, Workflow];

const toneClasses = {
  blue: {
    glow: "from-[rgba(25,183,255,0.2)] via-[rgba(25,183,255,0.08)] to-transparent",
    badge:
      "border-[rgba(25,183,255,0.18)] bg-[rgba(25,183,255,0.08)] text-[rgba(7,93,132,0.92)]",
  },
  green: {
    glow: "from-[rgba(52,243,190,0.2)] via-[rgba(52,243,190,0.08)] to-transparent",
    badge:
      "border-[rgba(52,243,190,0.2)] bg-[rgba(52,243,190,0.08)] text-[rgba(16,110,83,0.92)]",
  },
  warm: {
    glow: "from-[rgba(255,207,157,0.26)] via-[rgba(255,207,157,0.08)] to-transparent",
    badge:
      "border-[rgba(255,207,157,0.24)] bg-[rgba(255,207,157,0.14)] text-[rgba(129,76,26,0.92)]",
  },
};

const socialLabels = {
  linkedin: "LinkedIn",
  github: "GitHub",
  instagram: "Instagram",
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
        className={`font-display mt-6 text-4xl leading-[0.98] font-semibold tracking-[-0.05em] sm:text-5xl lg:text-[3.75rem] ${
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

function BulletList({
  items,
  dark = true,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 text-sm leading-7 ${
            dark ? "text-white/72" : "text-[var(--text-dark)]"
          }`}
        >
          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,var(--blue),var(--green))]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function HomePage() {
  const featuredCase = caseStudies[0];
  const secondaryCases = caseStudies.slice(1);

  return (
    <div className="page-shell" id="top">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_18%_18%,rgba(25,183,255,0.2),transparent_24%),radial-gradient(circle_at_80%_24%,rgba(52,243,190,0.16),transparent_20%)]" />
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-32 sm:pt-36 lg:pt-40">
            <div className="grid gap-14 xl:grid-cols-[1.03fr_0.97fr] xl:items-center">
              <Reveal>
                <div className="relative">
                  <div className="hidden xl:flex xl:items-start xl:gap-6">
                    <div className="mt-2 w-24">
                      <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-white/32">
                        01 / stance
                      </p>
                    </div>
                    <div className="max-w-3xl">
                      <span className="section-kicker">
                        Warszawa / remote / premium web systems
                      </span>
                      <h1 className="font-display mt-8 text-[5.9rem] leading-[0.9] font-semibold tracking-[-0.08em] text-white">
                        Budujemy
                        <br />
                        strony i
                        <br />
                        systemy,
                        <br />
                        <span className="text-gradient">ktore</span>
                        <br />
                        <span className="text-gradient">wygladaja</span>
                        <br />
                        <span className="text-gradient">premium</span>
                        <br />i dzialaja bez
                        <br />
                        chaosu.
                      </h1>
                    </div>
                  </div>

                  <div className="xl:hidden">
                    <span className="section-kicker">
                      Warszawa / remote / premium web systems
                    </span>
                    <h1 className="font-display mt-8 max-w-xl text-[3.9rem] leading-[0.92] font-semibold tracking-[-0.07em] text-white sm:text-[5rem]">
                      Budujemy strony i systemy,
                      <span className="text-gradient block">ktore wygladaja premium</span>
                      i dzialaja bez chaosu.
                    </h1>
                  </div>

                  <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_13rem]">
                    <div>
                      <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                        Net-Flow laczy custom art direction, web development,
                        e-commerce, integracje i warstwe operacyjna w jednym
                        systemie odpowiedzialnosci. Chodzi o to, zeby marka
                        wygladala drogo, a projekt nie rozsypal sie po starcie.
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
                    </div>

                    <div className="grid gap-4 xl:content-start">
                      <div className="glass-panel rounded-[1.7rem] p-5">
                        <p className="font-mono text-[0.66rem] uppercase tracking-[0.26em] text-white/34">
                          Signature move
                        </p>
                        <p className="mt-4 text-sm leading-7 text-white/72">
                          Jedna marka, jeden standard wykonania, jedna warstwa
                          odpowiedzialnosci.
                        </p>
                      </div>
                      <div className="glass-panel rounded-[1.7rem] p-5">
                        <p className="font-mono text-[0.66rem] uppercase tracking-[0.26em] text-white/34">
                          Built for
                        </p>
                        <p className="mt-4 text-sm leading-7 text-white/72">
                          firmy, ktore chca wygladac premium i dzialac bez
                          pluginowego teatru po publikacji.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {heroMetrics.map((item) => (
                      <div
                        key={item.label}
                        className="glass-panel rounded-[1.8rem] px-5 py-5"
                      >
                        <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-white/34">
                          {item.label}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/74">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="relative mx-auto w-full max-w-[38rem]">
                  <div className="absolute -left-2 top-14 h-56 w-56 rounded-full bg-[rgba(25,183,255,0.18)] blur-3xl" />
                  <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[rgba(52,243,190,0.14)] blur-3xl" />
                  <div className="glass-panel hero-panel-grid relative isolate overflow-hidden rounded-[2.9rem] p-6 sm:p-8">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_36%),radial-gradient(circle_at_18%_18%,rgba(25,183,255,0.14),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(52,243,190,0.12),transparent_22%)]" />
                    <div className="absolute inset-x-8 top-[7.25rem] h-px bg-white/10" />
                    <div className="absolute inset-x-8 bottom-[7rem] h-px bg-white/10" />
                    <div className="absolute bottom-8 left-8 top-8 w-px bg-white/10" />
                    <div className="absolute bottom-8 right-8 top-8 w-px bg-white/10" />

                    <div className="relative flex flex-wrap gap-3">
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/52">
                        premium web surfaces
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/52">
                        commerce ops
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/52">
                        system control
                      </span>
                    </div>

                    <motion.div
                      className="absolute left-8 top-24 w-[36%] rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/34">
                        Build layer
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/76">
                        custom UI, editorial layouts, launch-ready frontends
                      </p>
                    </motion.div>

                    <motion.div
                      className="absolute right-8 top-28 w-[31%] rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                      animate={{ y: [0, -14, 0] }}
                      transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/34">
                        Control layer
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/76">
                        monitoring, integrations, maintenance and rollout logic
                      </p>
                    </motion.div>

                    <div className="relative mx-auto mt-24 flex w-full max-w-[19rem] flex-col items-center rounded-[2.4rem] border border-white/10 bg-[rgba(7,19,29,0.84)] px-7 py-9 text-center shadow-[0_36px_100px_rgba(0,0,0,0.36)] backdrop-blur-xl">
                      <Image
                        src="/brand/logo-symbol.png"
                        alt="Net-Flow symbol"
                        width={260}
                        height={260}
                        priority
                        className="h-40 w-40 object-contain mix-blend-screen"
                      />
                      <p className="font-mono mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-white/34">
                        flagship product
                      </p>
                      <p className="font-display mt-4 text-[2rem] leading-none text-white">
                        NetFlow-CMS
                      </p>
                      <p className="mt-4 text-sm leading-7 text-white/62">
                        all-in-one standard dla klientow, ktorzy potrzebuja mniej
                        paneli i wiecej operacyjnej kontroli
                      </p>
                      <span className="mt-6 rounded-full border border-emerald-400/16 bg-emerald-400/8 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-emerald-200/84">
                        ~70% ready / launch in progress
                      </span>
                    </div>

                    <motion.div
                      className="absolute bottom-10 left-8 w-[34%] rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                      animate={{ y: [0, -9, 0] }}
                      transition={{ duration: 9.1, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/34">
                        Readiness
                      </p>
                      <div className="mt-4 space-y-3">
                        {[
                          { label: "Performance", value: 92 },
                          { label: "Conversions", value: 89 },
                          { label: "Control", value: 96 },
                        ].map((item) => (
                          <div key={item.label}>
                            <div className="mb-1 flex items-center justify-between text-[0.72rem] text-white/54">
                              <span>{item.label}</span>
                              <span>{item.value}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/8">
                              <div
                                className="h-full rounded-full bg-[linear-gradient(90deg,var(--blue),var(--green))]"
                                style={{ width: `${item.value}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="absolute bottom-8 right-8 w-[32%] rounded-[1.7rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-4 backdrop-blur-md">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/34">
                        Signature promise
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/76">
                        premium wyglad, realna kontrola i mniej technologicznego
                        balaganu po starcie
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 pb-8">
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
          <div className="grid gap-10 xl:grid-cols-[0.86fr_1.14fr]">
            <Reveal>
              <div className="max-w-2xl">
                <span className="section-kicker">Design doctrine</span>
                <h2 className="font-display mt-6 text-4xl leading-[0.98] font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.65rem]">
                  High-end nie oznacza u nas glosniejszych efektow.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/64 sm:text-lg">
                  Oznacza lepsza selekcje, ostrzejsza hierarchie, mocniejsza
                  typografie i spokoj operacyjny po starcie. Jesli premium znika po
                  pierwszym foldzie, to nie bylo premium.
                </p>

                <div className="glass-panel mt-10 rounded-[2.2rem] p-7">
                  <p className="font-display text-[1.8rem] leading-[1.05] tracking-[-0.04em] text-white">
                    Design ma otwierac rozmowe.
                    <br />
                    System ma ja domykac.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-4">
              {manifestoNotes.map((note, index) => (
                <Reveal key={note.title}>
                  <article className="glass-panel rounded-[2rem] p-6 sm:p-7">
                    <div className="grid gap-5 md:grid-cols-[4.5rem_minmax(0,1fr)] md:items-start">
                      <div className="font-display text-[3rem] leading-none text-white/20">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="font-display text-[2rem] leading-[1] text-white">
                          {note.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-white/62">
                          {note.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="paper-section" id="services">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <Reveal>
              <SectionIntro
                eyebrow="Service architecture"
                title="Oferta zaprojektowana jak system, nie jak lista przypadkowych uslug."
                description="Zamiast wrzucac wszystko do jednego worka, dzielimy projekt na warstwy: marka i surface, commerce i automations, oraz control layer po starcie. To daje drozszy efekt wizualny i lepsza odpowiedzialnosc wykonawcza."
                light
              />
            </Reveal>

            <div className="mt-16 space-y-8">
              {serviceBands.map((band, index) => {
                const Icon = serviceIcons[index];
                const tone = toneClasses[band.tone as keyof typeof toneClasses];

                return (
                  <Reveal key={band.id}>
                    <article className="paper-panel relative overflow-hidden rounded-[2.8rem] p-7 sm:p-10">
                      <div
                        className={`absolute inset-y-0 right-0 w-full bg-gradient-to-l ${tone.glow} opacity-90`}
                      />
                      <div className="relative grid gap-8 xl:grid-cols-[0.94fr_1.06fr]">
                        <div>
                          <div className="flex items-center gap-4">
                            <div
                              className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${tone.badge}`}
                            >
                              <Icon size={22} />
                            </div>
                            <div>
                              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--text-dark-muted)]">
                                {band.id} / {band.eyebrow}
                              </p>
                              <div className="mt-2 h-px w-20 bg-[rgba(17,32,50,0.08)]" />
                            </div>
                          </div>
                          <h3 className="font-display mt-7 text-[2.5rem] leading-[0.95] tracking-[-0.05em] text-[var(--text-dark)] sm:text-[3.15rem]">
                            {band.title}
                          </h3>
                          <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--text-dark-muted)] sm:text-base">
                            {band.description}
                          </p>
                          <div className="mt-7">
                            <BulletList items={band.bullets} dark={false} />
                          </div>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                          <div className="rounded-[2rem] border border-[rgba(17,32,50,0.08)] bg-white/72 p-6">
                            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--text-dark-muted)]">
                              {band.supportTitle}
                            </p>
                            <div className="mt-5">
                              <BulletList items={band.support} dark={false} />
                            </div>
                          </div>

                          <div className="grid gap-4">
                            <div className="rounded-[2rem] border border-[rgba(17,32,50,0.08)] bg-[rgba(255,255,255,0.58)] p-6">
                              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--text-dark-muted)]">
                                Why it feels premium
                              </p>
                              <p className="mt-4 text-sm leading-7 text-[var(--text-dark)]">
                                Kazda z tych warstw eliminuje cos, co zwykle odbiera
                                projektom klase: generyczny layout, balagan danych albo
                                operacyjny chaos po publikacji.
                              </p>
                            </div>

                            <div className="rounded-[2rem] border border-[rgba(17,32,50,0.08)] bg-[rgba(17,32,50,0.03)] p-6">
                              <p className="font-display text-[3rem] leading-none text-[var(--text-dark)]">
                                {band.id}
                              </p>
                              <p className="mt-3 text-sm leading-7 text-[var(--text-dark-muted)]">
                                Net-Flow sklada warstwy projektu w jeden standard
                                wykonania, zamiast rozrzucac odpowiedzialnosc po kilku
                                podwykonawcach i pluginach.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28" id="work">
          <Reveal>
            <SectionIntro
              eyebrow="Selected work"
              title="Realizacje pokazane bardziej jak strategie wdrozenia niz zwykle karty portfolio."
              description="Tu liczy sie nie tylko estetyka. Pokazujemy, jak Net-Flow laczy surface, system i operacje po starcie w rzeczywistych projektach."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="glass-panel relative overflow-hidden rounded-[3rem] p-7 sm:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--blue),var(--green),var(--peach))]" />
              <div className="grid gap-10 xl:grid-cols-[0.94fr_1.06fr]">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/34">
                    featured case / {featuredCase.category}
                  </p>
                  <h3 className="font-display mt-6 text-[2.7rem] leading-[0.95] tracking-[-0.05em] text-white sm:text-[3.4rem]">
                    {featuredCase.name}
                  </h3>
                  <p className="mt-5 text-sm leading-8 text-white/62 sm:text-base">
                    {featuredCase.summary}
                  </p>

                  <div className="mt-7 rounded-[2rem] border border-white/10 bg-white/5 p-5">
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-white/34">
                      Business impact
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      {featuredCase.impact}
                    </p>
                  </div>

                  <div className="mt-7">
                    <BulletList items={featuredCase.deliverables} />
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {featuredCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={featuredCase.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5"
                  >
                    Otworz realizacje
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="relative min-h-[24rem] rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(25,183,255,0.14),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(52,243,190,0.14),transparent_24%)]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.7rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-5">
                        <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/34">
                          Surface
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/76">
                          storefront, storytelling i premium merchandising
                        </p>
                      </div>
                      <div className="rounded-[1.7rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-5">
                        <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/34">
                          Ops
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/76">
                          content publishing i marketing support w jednym rytmie
                        </p>
                      </div>
                    </div>

                    <div className="mx-auto flex w-full max-w-[16rem] flex-col items-center rounded-[2.1rem] border border-white/10 bg-[rgba(7,19,29,0.72)] px-6 py-7 text-center shadow-[0_28px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                      <Image
                        src="/brand/logo-symbol.png"
                        alt="Net-Flow symbol"
                        width={180}
                        height={180}
                        className="h-28 w-28 object-contain mix-blend-screen"
                      />
                      <p className="font-display mt-3 text-2xl text-white">
                        Outcome stack
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/62">
                        design, commerce i operations zamkniete w jednej realizacji
                      </p>
                    </div>

                    <div className="rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5">
                      <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/34">
                        Why this case matters
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/78">
                        Pokazuje ten model pracy, o ktory tu chodzi: nie tylko
                        wdrozenie, ale tez caly porzadek po nim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            <div className="space-y-5">
              {secondaryCases.map((caseStudy) => (
                <motion.article
                  key={caseStudy.name}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="glass-panel rounded-[2.3rem] p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-white/34">
                        {caseStudy.category}
                      </p>
                      <h3 className="font-display mt-4 text-[2rem] leading-none text-white">
                        {caseStudy.name}
                      </h3>
                    </div>
                    <a
                      href={caseStudy.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/78 hover:border-white/18 hover:text-white"
                      aria-label={`Open ${caseStudy.name}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/62">
                    {caseStudy.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/58"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.7rem] border border-white/10 bg-white/5 p-5">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/34">
                      Outcome
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/76">
                      {caseStudy.impact}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28" id="cms">
          <div className="glass-panel relative overflow-hidden rounded-[3rem] px-7 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(25,183,255,0.16),transparent_24%),radial-gradient(circle_at_86%_20%,rgba(52,243,190,0.14),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%)]" />
            <div className="relative grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="section-kicker">Flagship product / NetFlow-CMS</span>
                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-full border border-emerald-300/16 bg-emerald-300/8 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-emerald-200/86">
                    status ~70% / in progress
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/48">
                    CMS + builder + hosting + ops
                  </span>
                </div>

                <h2 className="font-display mt-7 text-4xl leading-[0.98] font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.7rem]">
                  NetFlow-CMS nie ma byc kolejnym builderem.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                  To produktowy standard, ktory ma zamknac content, builder,
                  hosting, maintenance i control layer w jednej platformie. Bez
                  przeskakiwania miedzy pluginami, hostingiem i piecioma panelami.
                </p>

                <div className="mt-8 space-y-4">
                  {cmsSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5"
                    >
                      <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-white/34">
                        {signal.label}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/74">
                        {signal.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-[2.2rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-6 lg:col-span-2">
                  <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                    <div className="flex items-center justify-center rounded-[2rem] border border-white/10 bg-[rgba(7,19,29,0.78)] p-7">
                      <div className="text-center">
                        <Image
                          src="/brand/logo-symbol.png"
                          alt="Net-Flow symbol"
                          width={210}
                          height={210}
                          className="mx-auto h-32 w-32 object-contain mix-blend-screen"
                        />
                        <p className="font-display mt-4 text-[2rem] text-white">
                          NetFlow-CMS
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white/62">
                          operating system for controlled digital rollouts
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        "tenant isolation",
                        "RBAC",
                        "audit logs",
                        "hosting",
                        "builder",
                        "automation",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-4 text-center text-xs uppercase tracking-[0.18em] text-white/62"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {cmsModules.map((module, index) => {
                  const Icon = moduleIcons[index];

                  return (
                    <div
                      key={module.title}
                      className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-6"
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white/84">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display mt-5 text-[1.9rem] leading-none text-white">
                        {module.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/62">
                        {module.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28" id="process">
          <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr]">
            <Reveal>
              <div className="xl:sticky xl:top-28">
                <SectionIntro
                  eyebrow="Delivery model"
                  title="Premium execution to proces, ktory ma wytrzymac spotkanie z rzeczywistoscia."
                  description="Ukladamy projekt od diagnozy problemu, przez kierunek artystyczny i development, po kontrolowana operacje po wdrozeniu. To dlatego efekt koncowy ma szanse naprawde wygladac i dzialac drogo."
                />

                <div className="glass-panel mt-8 rounded-[2.2rem] p-7">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-white/34">
                    Working rule
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    Im mniej przypadkowosci w decyzjach projektowych, tym bardziej
                    luksusowy jest odbior koncowy. High-end to porzadek, nie chaos
                    z dobrym gradientem.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="relative space-y-5 xl:pl-10">
              <div className="absolute left-2 top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 xl:block" />
              {deliverySteps.map((step) => (
                <Reveal key={step.step}>
                  <article className="glass-panel relative rounded-[2.2rem] px-6 py-7 sm:px-7">
                    <div className="absolute -left-[2.05rem] top-9 hidden h-4 w-4 rounded-full border border-white/18 bg-[linear-gradient(135deg,var(--blue),var(--green))] xl:block" />
                    <div className="grid gap-4 md:grid-cols-[4.6rem_minmax(0,1fr)]">
                      <div className="font-display text-[3rem] leading-none text-white/24">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-display text-[2rem] leading-none text-white">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-white/62">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stackGroups.map((group) => (
              <Reveal key={group.title}>
                <article className="glass-panel h-full rounded-[2rem] p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/34">
                    stack / standards
                  </p>
                  <h3 className="font-display mt-4 text-[2rem] leading-none text-white">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/62"
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

        <section className="mx-auto max-w-7xl px-6 pb-10 pt-4" id="contact">
          <Reveal>
            <div className="glass-panel relative overflow-hidden rounded-[3rem] px-7 py-8 sm:px-10 sm:py-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(25,183,255,0.14),transparent_24%),radial-gradient(circle_at_85%_15%,rgba(52,243,190,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%)]" />
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--blue),var(--green),var(--peach))]" />
              <div className="relative grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
                <div>
                  <span className="section-kicker">Start a project</span>
                  <h2 className="font-display mt-6 max-w-4xl text-4xl leading-[0.98] font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.9rem]">
                    Jesli chcesz strony, ktora ma wygladac bezczelnie dobrze i
                    dzialac bez wstydu po publikacji, napisz do Net-Flow.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                    Najlepszy start to kilka konkretow o firmie, obecnym serwisie i
                    miejscu, w ktorym dzisiaj wycieka czas albo sprzedaz.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {contactChecklist.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/74"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2.3rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-7">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/34">
                    direct line
                  </p>
                  <a
                    href="mailto:kontakt@net-flow.pl?subject=Nowy%20projekt%20-%20Net-Flow"
                    className="font-display mt-4 inline-block text-3xl leading-none text-white sm:text-[2.9rem]"
                  >
                    kontakt@net-flow.pl
                  </a>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Warszawa / remote. Strony firmowe, e-commerce, integracje,
                    maintenance i kierunek produktowy rozwijany w NetFlow-CMS.
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
