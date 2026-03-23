"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "@/data/site-content";

const contactHref =
  "mailto:kontakt@net-flow.pl?subject=Nowy%20projekt%20-%20Net-Flow";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-4 sm:px-6">
          <div className="glass-panel flex w-full items-center justify-between rounded-full px-5 py-3">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6">
                <span className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,183,255,0.9),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(52,243,190,0.86),transparent_60%)] blur-[2px]" />
                <span className="relative h-4 w-4 rounded-full bg-white/90 shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold tracking-[0.04em] text-white">
                  Net-Flow
                </p>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.26em] text-white/46">
                  Premium web systems
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={contactHref}
                className="hidden items-center gap-2 rounded-full border border-white/14 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(255,255,255,0.14)] sm:inline-flex"
              >
                Porozmawiajmy
                <ArrowUpRight size={16} />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/78 hover:border-white/22 hover:text-white lg:hidden"
                aria-label="Otw\u00f3rz menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(4,16,24,0.82)] backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 32, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-4 mt-4 rounded-[2rem] border border-white/10 bg-[rgba(8,17,27,0.94)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="font-display text-xl font-semibold text-white">
                    Net-Flow
                  </p>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-white/40">
                    Premium web systems
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/76"
                  aria-label="Zamknij menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-[1.4rem] border border-white/8 bg-white/4 px-4 py-4 text-base text-white/82"
                  >
                    {item.label}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </nav>

              <a
                href={contactHref}
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3.5 text-sm font-semibold text-slate-950"
              >
                Napisz na kontakt@net-flow.pl
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
