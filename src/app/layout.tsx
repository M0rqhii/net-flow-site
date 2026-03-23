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
  title: {
    default: "Net-Flow | Premium web, commerce and digital systems",
    template: "%s | Net-Flow",
  },
  description:
    "Net-Flow projektuje i wdraza strony firmowe, e-commerce, integracje i warstwe operacyjna, ktora porzadkuje biznes zamiast dodawac kolejny chaos.",
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
      "Strony, sklepy i systemy budowane z naciskiem na design, performance i porzadek operacyjny.",
    url: "https://net-flow.pl",
    siteName: "Net-Flow",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/brand/logo-symbol.png",
        width: 768,
        height: 768,
        alt: "Net-Flow symbol",
      },
    ],
  },
  icons: {
    icon: "/brand/logo-symbol.png",
    shortcut: "/brand/logo-symbol.png",
    apple: "/brand/logo-symbol.png",
  },
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
