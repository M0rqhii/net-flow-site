export const navItems = [
  { label: "Oferta", href: "#services" },
  { label: "Realizacje", href: "#work" },
  { label: "NetFlow-CMS", href: "#cms" },
  { label: "Proces", href: "#process" },
  { label: "Kontakt", href: "#contact" },
];

export const clientTrail = [
  "Fajna Szafa",
  "Okazje u Marii",
  "Votillo",
  "Net-Flow BIP",
  "Biblioteka Wilanowska",
  "Nansen",
  "WordPress",
  "WooCommerce",
  "Integracje API",
  "Hosting i opieka",
];

export const heroMetrics = [
  {
    label: "Delivery model",
    value: "art direction -> build -> operations",
  },
  {
    label: "Operating focus",
    value: "performance, conversion, control",
  },
  {
    label: "Built around",
    value: "WordPress, WooCommerce, Next.js, custom systems",
  },
];

export const manifestoNotes = [
  {
    title: "Luxury feel, zero theatre",
    description:
      "Design ma wygladac drogo, ale nie moze byc pustym efektem. Kazdy ekran ma wspierac sprzedaz, pozycjonowanie albo kontrole procesu po starcie.",
  },
  {
    title: "One standard instead of ten excuses",
    description:
      "Net-Flow laczy art direction, wdrozenie, integracje i maintenance w jednej odpowiedzialnosci. Mniej pluginowego chaosu, mniej przerzucania winy.",
  },
  {
    title: "Operational power is part of the product",
    description:
      "Strona ma nie tylko dobrze wygladac. Ma tez wytrzymac katalog, kampanie, content ops, role, uprawnienia i dalszy rozwoj bez rozpadania sie po kwartale.",
  },
];

export const serviceBands = [
  {
    id: "01",
    eyebrow: "Brand surfaces",
    title: "Company websites that feel bespoke from the first fold.",
    description:
      "Projektujemy strony firmowe i landing pages, ktore od razu ustawiaja marke wyzej. To nie jest skladanie klockow pod placeholder content, tylko spojny kierunek wizualny, typografia i narrativa sprzedazowa.",
    bullets: [
      "custom art direction i niegeneryczny hero",
      "architektura informacji pod conversion path",
      "copy i UX writing bez agencyjnej waty",
    ],
    supportTitle: "W tej warstwie domykamy",
    support: [
      "landing pages, strony firmowe, premium one-pagery",
      "UX, content structure i kampanijne flow",
      "branding, key visuals i assety pod social / ads",
    ],
    tone: "blue",
  },
  {
    id: "02",
    eyebrow: "Commerce and automation",
    title: "E-commerce z porzadkiem danych, logika promocji i systemem po zakupie.",
    description:
      "Sklep traktujemy jak system operacyjny. Nie tylko wyglad, ale tez katalog, taksonomie, bulk operations, integracje i warstwa akcji po zakupie maja byc zaprojektowane, a nie doszyte na koncu.",
    bullets: [
      "WooCommerce build / rebuild / cleanup",
      "promocje, gratisy, kupony i price logic",
      "webhooki, Stripe i procesy po zakupie",
    ],
    supportTitle: "Tu Net-Flow dowozi",
    support: [
      "porzadek w katalogu i masowe operacje",
      "custom pluginy i automatyzacje pod sklep",
      "integracje z CRM, formularzami i zewnetrznymi systemami",
    ],
    tone: "green",
  },
  {
    id: "03",
    eyebrow: "Control layer",
    title: "Hosting, security i maintenance, ktore zamykaja projekt w jednym standardzie.",
    description:
      "High-end nie konczy sie na publikacji. Monitoring, backupy, hardening, logi, aktualizacje i dalszy rozwoj musza dzialac w tym samym standardzie co design i frontend.",
    bullets: [
      "maintenance, SLA i predictable rollouts",
      "backupy, monitoring, hardening i access control",
      "kierunek produktowy rozwijany w NetFlow-CMS",
    ],
    supportTitle: "Efekt dla klienta",
    support: [
      "mniej paneli, mniej pluginow, mniej chaosu",
      "szybsze wdrozenia i wyzsza kontrola po starcie",
      "jedna odpowiedzialnosc za design, build i operations",
    ],
    tone: "warm",
  },
];

export const caseStudies = [
  {
    name: "Fajna Szafa",
    category: "Fashion commerce / end-to-end delivery",
    summary:
      "Sklep odziezowy zbudowany od zera: wyglad, struktura, wdrozenie WooCommerce i regularna obsluga contentu w jednym standardzie.",
    impact:
      "Sprawny storefront, spojne tresci i operacje marketingowe, ktore nie wygladaja jak doszyte po fakcie.",
    deliverables: [
      "brand-facing storefront i custom UI direction",
      "content ops i publikacja bez chaosu",
      "social i marketing support pod sprzedaz",
    ],
    tags: ["WooCommerce", "Design", "Content ops", "Social media"],
    url: "https://fajnaszafa.pl",
    tone: "blue",
  },
  {
    name: "Okazje u Marii",
    category: "Large catalog / operational cleanup",
    summary:
      "Duzy sklep WooCommerce wymagajacy porzadku w danych, masowych operacji i narzedzi do szybszej pracy na asortymencie.",
    impact:
      "Mniej chaosu w katalogu, lepsza higiena SEO i realnie szybsze operacje na tysiacach produktow.",
    deliverables: [
      "custom tooling do bulk changes",
      "cleanup taksonomii, nazw i struktur",
      "workflow pod duzy katalog i SEO hygiene",
    ],
    tags: ["Custom plugins", "Bulk operations", "SEO hygiene", "WooCommerce"],
    url: "https://okazjaumarii.pl/",
    tone: "green",
  },
  {
    name: "Votillo",
    category: "Education platform / process design",
    summary:
      "Platforma edukacyjna oparta o Tutor LMS, Google Calendar i logike umawiania lekcji z rozdzieleniem rol nauczyciel-uczen.",
    impact:
      "Spojny proces rezerwacji i prowadzenia lekcji, bez recznego spinania kilku narzedzi po stronie administracji.",
    deliverables: [
      "booking flow i role permissions",
      "Google Calendar integration",
      "komunikacja i process layer dla platformy",
    ],
    tags: ["Tutor LMS", "Integrations", "Booking flow", "Permissions"],
    url: "https://votillo.pl",
    tone: "warm",
  },
  {
    name: "Net-Flow BIP",
    category: "Public sector / native template + CMS",
    summary:
      "Natywny szablon BIP z dedykowanym CMS-em, kontrola dostepu i logami zmian przygotowany pod standardy urzedowe.",
    impact:
      "Szybka redakcja tresci przy zachowaniu audytowalnosci, porzadku i bezpieczenstwa w codziennej pracy.",
    deliverables: [
      "dedykowany CMS i controlled publishing",
      "audit logs i access whitelists",
      "template gotowy pod standard jednostek publicznych",
    ],
    tags: ["BIP", "CMS", "Audit logs", "Access control"],
    url: "https://bip.net-flow.pl/",
    tone: "blue",
  },
];

export const cmsSignals = [
  {
    label: "What it replaces",
    value: "plugin pile-ups, scattered dashboards and blame ping-pong",
  },
  {
    label: "Core mode",
    value: "CMS + builder + hosting + ops control in one product",
  },
  {
    label: "Ready for",
    value: "multi-site operations, tenant isolation, RBAC and log-driven control",
  },
];

export const cmsModules = [
  {
    title: "Content ops",
    description:
      "Strony, wpisy, sekcje i media w jednym przewidywalnym modelu edycji.",
  },
  {
    title: "Builder standard",
    description:
      "Page builder pod kontrola. Elastycznosc bez niszczenia layoutu i bez pluginowego chaosu.",
  },
  {
    title: "Hosting included",
    description:
      "Monitoring, backupy i wdrozenia zamkniete w jednej warstwie odpowiedzialnosci.",
  },
  {
    title: "Multi-tenant",
    description:
      "Wiele serwisow i klientow w jednym systemie, z izolacja danych i standaryzacja procesu.",
  },
  {
    title: "RBAC + logs",
    description:
      "Role, uprawnienia i logi zmian przygotowane pod realna kontrole operacyjna.",
  },
  {
    title: "Automation layer",
    description:
      "Webhooki, integracje i procesy po publikacji lub zakupie, bez przepinania miedzy piecioma panelami.",
  },
];

export const deliverySteps = [
  {
    step: "01",
    title: "Diagnose the business reality",
    description:
      "Najpierw ustalamy, co ma sprzedawac, co ma byc zautomatyzowane i gdzie dzisiaj ginie czas albo odpowiedzialnosc.",
  },
  {
    step: "02",
    title: "Build the visual and system direction",
    description:
      "Tworzymy kierunek wizualny, uklad tresci i decyzje technologiczne pod efekt, a nie pod przypadkowa mode.",
  },
  {
    step: "03",
    title: "Ship, integrate, harden",
    description:
      "Wdrozenie, integracje, testy, performance i warstwa operacyjna, ktora ma wytrzymac codzienna prace zespolu.",
  },
  {
    step: "04",
    title: "Operate with one standard",
    description:
      "Po starcie projekt nie ma sie rozsypywac. Utrzymanie, monitoring i dalszy rozwoj robimy w tym samym standardzie.",
  },
];

export const stackGroups = [
  {
    title: "Frontend i experience",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Motion"],
  },
  {
    title: "CMS i commerce",
    items: ["WordPress", "WooCommerce", "custom plugins", "content workflows"],
  },
  {
    title: "Integracje",
    items: ["Stripe", "webhooks", "JSON API", "Google Calendar", "CRM connectors"],
  },
  {
    title: "Ops i maintenance",
    items: ["hosting", "backupy", "monitoring", "hardening", "predictable rollouts"],
  },
];

export const contactChecklist = [
  "czym zajmuje sie firma i co strona ma sprzedawac",
  "link do obecnego serwisu albo materialow",
  "termin, budzet i co dzisiaj najbardziej boli",
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/net-flow-pl",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/net-flow-pl",
    icon: "github",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/netflow.pl",
    icon: "instagram",
  },
];
