import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from 'next/font/google'
import "@/styles/globals.css"

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://securitymonks.in'),
  title: "Security Monks - Leading Cybersecurity Solutions Provider",
  description: "Security Monks provides cutting-edge cybersecurity solutions, including 24/7 monitoring, threat detection, and data protection services. Protect your business with industry-leading security experts.",
  keywords: "cybersecurity, security solutions, data protection, threat detection, security monitoring, IT security, penetration testing, security assessment, compliance services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://securitymonks.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://securitymonks.in',
    siteName: 'Security Monks',
    title: 'Security Monks - Leading Cybersecurity Solutions Provider',
    description: 'Protect your business with industry-leading cybersecurity solutions from Security Monks.',
    images: [
      {
        url: '/SecurityMonks.png',
        width: 800,
        height: 600,
        alt: 'Security Monks Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Monks - Leading Cybersecurity Solutions Provider',
    description: 'Protect your business with industry-leading cybersecurity solutions from Security Monks.',
    images: ['/SecurityMonks.png'],
    creator: '@securitymonks',
  },
  verification: {
    google: 'add-your-verification-code',
    yandex: 'add-your-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Security Monks",
              url: "https://securitymonks.in",
              logo: "https://securitymonks.in/SecurityMonks.png",
              sameAs: [
                "https://twitter.com",
                "https://linkedin.com/company/the-security-monks/",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans overflow-x-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}


