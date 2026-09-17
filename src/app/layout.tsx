import { ThemeProvider } from "@/components/providers/theme-provider"
import { ThemeShortcut } from "@/components/providers/theme-shortcut"
import { PageViewAnalytics } from "@/components/site/analytics"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SITE_INFO, USER } from "@/data"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: SITE_INFO.siteName,
    default: SITE_INFO.siteName,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: USER.fullName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.fullName,
  openGraph: {
    siteName: SITE_INFO.siteName,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.siteName,
    description: SITE_INFO.description,
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full antialiased`}
      >
        <PageViewAnalytics />
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="portfolio-theme"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <ThemeShortcut />
          </ThemeProvider>
        </TooltipProvider>
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      </body>
    </html>
  )
}
