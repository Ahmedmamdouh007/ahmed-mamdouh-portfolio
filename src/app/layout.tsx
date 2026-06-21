import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import { clashDisplay } from "@/lib/fonts";
import "./globals.css";

const siteUrl = "https://ahmed-mamdouh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Cybersecurity & Backend Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.intro,
  keywords: [
    "Ahmed Mamdouh",
    "Penetration Tester",
    "Cybersecurity",
    "Backend Developer",
    "Python Automation",
    "OSCP",
    "CEH",
    "BugBuster",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${profile.name} | Cybersecurity Portfolio`,
    description: profile.intro,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Cybersecurity Portfolio`,
    description: profile.intro,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#002f2b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.shortTitle,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "Egypt",
    },
    url: siteUrl,
    sameAs: [profile.linkedin, profile.instagram],
    knowsAbout: profile.interests,
  };

  return (
    <html lang="en" className={clashDisplay.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
