import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LazyToaster from "@/components/LazyToaster";
import { profile } from "@/data/profile";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "optional" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "optional" });

const title = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: title, template: `%s · ${profile.name}` },
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.url,
    siteName: profile.name,
    title,
    description: profile.headline,
  },
  twitter: { card: "summary_large_image", title, description: profile.headline },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: profile.url,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  knowsAbout: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript", "OpenAI API"],
  sameAs: [profile.linkedin, profile.github].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
          >
            Skip to content
          </a>
          <LazyToaster />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
