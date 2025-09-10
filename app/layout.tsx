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
  title: "Qohua",
  description: "From Green Bean to The Cup",
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
