import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ninjagames Corp - Roblox Development by LokisDreams",
  description: "Portfolio of Ninjagames Corp, a leading Roblox game development company led by LokisDreams (JiyoDev)",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-[url('/roblox-grid.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20"></div>
        </div>
        {children}
      </body>
    </html>
  )
}

