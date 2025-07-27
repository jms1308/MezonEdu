import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "MezonEdu - Islom Moliyasi Kurslari",
  description: "Zamonaviy dunyoda Islom moliya tamoyillarini o'rganish va amalda qo'llash",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body className={`${inter.className} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
