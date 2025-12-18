"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { useTheme } from "next-themes"
import MobileMenu from "./mobile-menu"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/")
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group" onClick={handleLogoClick}>
              {mounted ? (
                <>
                  <Image
                    src="/softvibe-logo.png"
                    alt="SoftVibe Services Logo"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-xl group-hover:scale-105 transition-transform shadow-md"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold leading-tight">SOFTVIBE SERVICES</span>
                    <span className="text-xs text-muted-foreground italic">Transforming Ideas into Reality</span>
                  </div>
                </>
              ) : (
                <div className="h-14 w-[280px]" />
              )}
            </Link>

            <div className="flex items-center gap-6">
              <nav className="hidden md:block">
                <ul className="flex items-center gap-6">
                  <li>
                    <Link
                      href="/#services"
                      className={`transition-colors font-medium ${
                        pathname === "/#services" ? "text-primary" : "hover:text-primary"
                      }`}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={`transition-colors font-medium ${
                        pathname === "/portfolio" ? "text-primary" : "hover:text-primary"
                      }`}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Button asChild size="sm" className="ml-2">
                      <Link href="/start">Start a Project</Link>
                    </Button>
                  </li>
                </ul>
              </nav>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md hover:bg-accent/10 md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
