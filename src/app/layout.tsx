import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PayFlares - Sparking Creator Success, Fueling Fan Engagement",
  description: "Empower your favorite creators and engage with brands in meaningful ways through PayFlares' innovative platform for micro-transactions.",
  keywords: ["creator monetization", "micro-transactions", "fan engagement", "brand rewards", "PayFlares"],
  
  openGraph: {
    title: "PayFlares - Sparking Creator Success, Fueling Fan Engagement",
    description: "Empower your favorite creators and engage with brands in meaningful ways through PayFlares' innovative platform for micro-transactions.",
    url: "https://payflares.com",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Support creators on PayFlares - a platform for micro-transactions and brand engagement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PayFlares - Sparking Creator Success, Fueling Fan Engagement",
    description: "Support creators, earn rewards, and interact with brands in fun ways on PayFlares.",
    images: ["/logo.png"],
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PayFlares",
    "url": "https://payflares.com",
    "logo": "https://payflares.com/logo.png",
    "description": "A platform to support creators, engage with fans, and reward brand interactions through micro-transactions.",
    "sameAs": [
      "https://www.facebook.com/PayFlares",
      "https://www.twitter.com/PayFlares",
      "https://www.instagram.com/PayFlares",
      "https://www.linkedin.com/company/PayFlares"
    ]
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
