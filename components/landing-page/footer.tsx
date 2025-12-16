"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              {mounted ? (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                  <span className="text-xl font-bold">SoftVibe Services</span>
                </div>
              ) : (
                <div className="h-8 w-[200px]" />
              )}
            </Link>
            <p className="text-muted-foreground max-w-md mb-4 leading-relaxed">
              Modern software development and technology consulting for startups and growing enterprises. Building
              scalable, production-ready solutions with transparency and expertise.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:softvibeservices@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/softvibeservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Full-Stack Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Cloud Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  MVP Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/start" className="hover:text-primary transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SoftVibe Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
