import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { navItems, socialLinks } from "@/data/site-content";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10 pt-10">
      <div className="glass-panel rounded-[2.8rem] px-7 py-8 sm:px-10 sm:py-10">
        <div className="grid gap-10 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-white/34">
              Net-Flow / premium web systems
            </p>
            <p className="font-display mt-5 max-w-3xl text-[2.5rem] leading-[0.96] tracking-[-0.05em] text-white sm:text-[3.2rem]">
              Design, commerce i operational control zamkniete w jednym
              standardzie wykonania.
            </p>
            <a
              href="mailto:kontakt@net-flow.pl"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/78 hover:text-white"
            >
              <Mail size={16} />
              kontakt@net-flow.pl
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.26em] text-white/34">
                Navigate
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/60 hover:border-white/18 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.26em] text-white/34">
                Social
              </p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/72 hover:border-white/20 hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/38">
          © {new Date().getFullYear()} Net-Flow. Warszawa / remote.
        </div>
      </div>
    </footer>
  );
}
