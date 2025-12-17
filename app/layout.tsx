import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import "@/components/landing-page/styles.css"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Custom Software Development for Startups | SoftVibe Services",
  description:
    "Building scalable, production-ready digital solutions for startups and growing enterprises. Full-stack development, UI/UX design, cloud architecture, and MVP development.",
  icons: {
    icon: [{ url: "/softvibe-favicon.png", type: "image/png" }],
    apple: [{ url: "/softvibe-favicon.png" }],
  },
  generator: "v0.app",

  // ✅ Google Search Console verification
  verification: {
    google: "6jIVwB2wOh5ovkyo79uFlwPsup0LY1r7rRSidc1sREw",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
