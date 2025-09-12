import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Nunito } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
})

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: {
    default: "Qohua - Professional Coffee Roasting Equipment",
    template: "%s | Qohua"
  },
  description: "Professional coffee roasting equipment from Indonesia. From Green Bean to The Cup with Qohua's premium roasting solutions including Koffie Buddy and Pourfect 60.",
  keywords: ["coffee roasting", "roasting equipment", "Koffie Buddy", "Pourfect 60", "coffee machine", "professional roasting", "Indonesia coffee", "Qohua"],
  authors: [{ name: "Qohua" }],
  creator: "Qohua",
  publisher: "Qohua",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://qohua.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Qohua - Professional Coffee Roasting Equipment",
    description: "Professional coffee roasting equipment from Indonesia. From Green Bean to The Cup with Qohua's premium roasting solutions.",
    url: "https://qohua.vercel.app",
    siteName: "Qohua",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Qohua Coffee Roasting Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qohua - Professional Coffee Roasting Equipment",
    description: "Professional coffee roasting equipment from Indonesia. From Green Bean to The Cup.",
    images: ["/og-image.jpg"],
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${nunito.variable} antialiased`}>
      <body className="font-nunito">{children}</body>
    </html>
  )
}
