import { Inter } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/components/LanguageContext";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import DesktopFooter from "@/components/DesktopFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Somm.Tips — A Sommelier in Your Pocket",
  description:
    "Wine recommendations, classic pairings, cocktails, and beverage education. No signup required.",
  icons: {
    icon: "/somm-favicon.png",
    apple: "/somm-favicon.png",
  },
  openGraph: {
    title: "Somm.Tips — A Sommelier in Your Pocket",
    description:
      "Wine recommendations, classic pairings, cocktails, and beverage education. No signup required.",
    url: "https://somm.tips",
    siteName: "Somm.Tips",
    images: [
      {
        url: "/somm-socialcard.png",
        width: 1200,
        height: 630,
        alt: "Somm.Tips — A Sommelier in Your Pocket",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somm.Tips — A Sommelier in Your Pocket",
    description:
      "Wine recommendations, classic pairings, cocktails, and beverage education. No signup required.",
    images: ["/somm-socialcard.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4JT9FBG39M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4JT9FBG39M');
          `}
        </Script>
      </head>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <DesktopFooter />
          <BottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}