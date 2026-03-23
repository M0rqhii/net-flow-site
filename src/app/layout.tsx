import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://net-flow.pl"),
  applicationName: "Net-Flow",
  title: {
    default: "Net-Flow | Premium web, commerce and digital systems",
    template: "%s | Net-Flow",
  },
  description:
    "Net-Flow projektuje i wdra\u017ca strony firmowe, e-commerce, integracje i warstw\u0119 operacyjn\u0105, kt\u00f3ra porz\u0105dkuje biznes zamiast dodawa\u0107 kolejny chaos.",
  keywords: [
    "Net-Flow",
    "strony internetowe",
    "WooCommerce",
    "WordPress",
    "integracje API",
    "automatyzacje",
    "Next.js",
    "Warszawa",
  ],
  openGraph: {
    title: "Net-Flow | Premium web, commerce and digital systems",
    description:
      "Strony, sklepy i systemy budowane z naciskiem na design, performance i porz\u0105dek operacyjny.",
    url: "https://net-flow.pl",
    siteName: "Net-Flow",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Net-Flow | Premium web, commerce and digital systems",
    description:
      "Design, commerce i operational control zamkni\u0119te w jednym standardzie wykonania.",
  },
  icons: {
    icon: "/brand/logo-symbol.png",
    shortcut: "/brand/logo-symbol.png",
    apple: "/brand/logo-symbol.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://net-flow.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${manrope.variable} ${syne.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
