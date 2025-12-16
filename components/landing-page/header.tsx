"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import MobileMenu from "./mobile-menu"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/")
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* LOGO – always sharp */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3"
            >
              {mounted ? (
                <>
                  <div className="relative w-[44px] h-[44px] flex-shrink-0">
                    <Image
                      src="/softvibe-logo.png"
                      alt="SoftVibe Services Logo"
                      width={44}
                      height={44}
                      priority
                      quality={100}
                      sizes="44px"
                      className="object-contain select-none"
                      draggable={false}
                    />
                  </div>

                  <div className="flex flex-col leading-tight">
                    <span className="text-lg font-extrabold tracking-tight">
                      SoftVibe Services
                    </span>
                    <span className="text-xs text-muted-foreground italic">
                      Transforming Ideas into Reality
                    </span>
                  </div>
                </>
              ) : (
                <div className="h-[44px] w-[220px]" />
              )}
            </Link>

            {/* Right Section */}
            <div className="flex items-center gap-5">
              <nav className="hidden md:block">
                <ul className="flex items-center gap-6">
                  <li>
                    <Link
                      href="/#services"
                      className={`font-medium transition-colors ${
                        pathname === "/#services"
                          ? "text-primary"
                          : "hover:text-primary"
                      }`}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={`font-medium transition-colors ${
                        pathname === "/portfolio"
                          ? "text-primary"
                          : "hover:text-primary"
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

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
