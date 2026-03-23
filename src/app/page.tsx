import { HomePage } from "@/components/site/home-page";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Net-Flow",
  url: "https://net-flow.pl",
  email: "kontakt@net-flow.pl",
  areaServed: ["PL", "EU", "Remote"],
  sameAs: [
    "https://www.linkedin.com/company/net-flow-pl",
    "https://github.com/net-flow-pl",
    "https://www.instagram.com/netflow.pl",
  ],
  description:
    "Net-Flow projektuje i wdra\u017ca premium strony firmowe, e-commerce, integracje i warstw\u0119 operacyjn\u0105 dla marek, kt\u00f3re chc\u0105 wygl\u0105da\u0107 mocno i dzia\u0142a\u0107 bez chaosu.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Net-Flow",
  url: "https://net-flow.pl",
  inLanguage: "pl-PL",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />
      <HomePage />
    </>
  );
}
