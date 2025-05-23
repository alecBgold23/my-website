import type React from "react"
import "@/app/globals.css"
import { Inter, Poppins, Roboto } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

// Properly load Poppins font with Next.js font system
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

// Add Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata = {
  title: "BluBerry - Selling Made Simpler",
  description:
    "BluBerry removes the hassle of selling second-hand items by doing all the work for you — from pricing to pickup — so you can make fast cash, effortlessly.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} ${roboto.variable} bg-gradient-to-b from-white to-[#f0f7ff]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* Navbar is completely outside the transition area */}
          <Navbar />

          <div className="flex flex-col min-h-screen">
            <div className="flex-grow relative">
              <PageTransition>{children}</PageTransition>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
