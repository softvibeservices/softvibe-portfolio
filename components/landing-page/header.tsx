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
import { motion, useScroll, useTransform } from "framer-motion"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 50], [0.8, 1])

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
      <motion.header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border/50" : "bg-transparent"
        }`}
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group" onClick={handleLogoClick}>
              {mounted ? (
                <>
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <Image
                      src="/softvibe-logo.png"
                      alt="SoftVibe Services Logo"
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-xl shadow-md"
                    />
                  </motion.div>
                  <div className="flex flex-col">
                    <motion.span
                      className="text-xl font-bold leading-tight"
                      whileHover={{ color: "hsl(var(--primary))" }}
                    >
                      SOFTVIBE SERVICES
                    </motion.span>
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
                  {[
                    { href: "/#services", label: "Services" },
                    { href: "/portfolio", label: "Portfolio" },
                  ].map((link) => (
                    <motion.li key={link.href} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={link.href}
                        className={`transition-colors font-medium ${
                          pathname === link.href ? "text-primary" : "hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="sm" className="ml-2 shadow-md">
                      <Link href="/start">Start a Project</Link>
                    </Button>
                  </motion.li>
                </ul>
              </nav>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md hover:bg-accent/10 md:hidden"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      {/* </CHANGE> */}

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
