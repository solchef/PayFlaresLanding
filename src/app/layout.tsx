import { Metadata } from 'next';
import localFont from "next/font/local";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL('https://payflares.com'),
  title: {
    template: "PayFlares %s - Sparking Creator Success, Fueling Fan Engagement",
    default: 'Acme Dashboard',
  },
  description: "Empower your favorite creators and engage with brands in meaningful ways through PayFlares' innovative platform for micro-transactions.",
  keywords: ["creator monetization", "micro-transactions", "fan engagement", "brand rewards", "PayFlares"],
  referrer: 'origin-when-cross-origin',

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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },


};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6903760000729483"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
