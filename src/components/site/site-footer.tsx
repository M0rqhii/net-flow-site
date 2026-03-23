import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { navItems, socialLinks } from "@/data/site-content";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 pb-10 pt-10 text-white/72">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.1fr_0.7fr_0.8fr]">
        <div>
          <p className="font-display text-2xl font-semibold text-white">Net-Flow</p>
          <p className="mt-2 max-w-md text-sm leading-7 text-white/56">
            Premium web, commerce i warstwa operacyjna dla firm, ktore chca
            wygladac mocno i dzialac bez chaosu po wdrozeniu.
          </p>
        </div>

        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.26em] text-white/40">
            Navigate
          </p>
          <div className="mt-4 space-y-3 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.26em] text-white/40">
            Contact
          </p>
          <a
            href="mailto:kontakt@net-flow.pl"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white hover:text-white/78"
          >
            <Mail size={16} />
            kontakt@net-flow.pl
          </a>
          <div className="mt-5 flex gap-3">
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

      <div className="mx-auto mt-10 max-w-7xl px-6 text-xs text-white/38">
        © {new Date().getFullYear()} Net-Flow. Warszawa / remote.
      </div>
    </footer>
  );
}
