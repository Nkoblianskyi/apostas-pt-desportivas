import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { TopOffersModal } from "@/components/top-offers-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apostas PT Desportivas - Melhores Sites de Apostas em Portugal 2024",
  description:
    "🏆 Descubra os melhores sites de apostas desportivas licenciados em Portugal. Comparação de bónus, odds e promoções. Guia completo para apostas online seguras e legais.",
  keywords: [
    "apostas desportivas portugal",
    "sites apostas licenciados",
    "bónus apostas portugal",
    "apostas online legais",
    "SRIJ licenciados",
    "melhores casas apostas",
    "odds portugal",
    "apostas futebol",
    "casino portugal",
    "jogo responsável",
  ],
  authors: [{ name: "Apostas PT Desportivas" }],
  creator: "Apostas PT Desportivas",
  publisher: "Apostas PT Desportivas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://apostasptdesportivas.com"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
    },
  },
  openGraph: {
    title: "Apostas PT Desportivas - Melhores Sites de Apostas em Portugal 2024",
    description:
      "🏆 Descubra os melhores sites de apostas desportivas licenciados em Portugal. Comparação de bónus, odds e promoções.",
    url: "https://apostasptdesportivas.com",
    siteName: "Apostas PT Desportivas",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apostas PT Desportivas - Melhores Sites de Apostas",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apostas PT Desportivas - Melhores Sites de Apostas em Portugal",
    description: "🏆 Descubra os melhores sites de apostas desportivas licenciados em Portugal.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ff0000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Apostas PT Desportivas",
              url: "https://apostasptdesportivas.com",
              description: "Melhores sites de apostas desportivas licenciados em Portugal",
              inLanguage: "pt-PT",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://apostasptdesportivas.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
        <TopOffersModal />
      </body>
    </html>
  )
}
