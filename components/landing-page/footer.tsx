"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Mail, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-4 group">
              {mounted ? (
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="text-xl font-bold group-hover:text-primary transition-colors">
                    SoftVibe Services
                  </span>
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
              {[
                { href: "mailto:softvibeservices@gmail.com", icon: Mail, label: "Email" },
                {
                  href: "https://www.linkedin.com/in/amar-tiwari-cs2026",
                  icon: Linkedin,
                  label: "LinkedIn",
                  external: true,
                },
                { href: "https://github.com/Amar5623", icon: Github, label: "GitHub", external: true },
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              {["Full-Stack Development", "UI/UX Design", "Cloud Architecture", "MVP Development"].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    className="hover:text-primary transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "Team", href: "#team" },
                { label: "FAQ", href: "#faq" },
                { label: "Start a Project", href: "/start" },
              ].map((link) => (
                <li key={link.label}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link href={link.href} className="hover:text-primary transition-colors inline-block">
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SoftVibe Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <motion.a href="/privacy" className="hover:text-primary transition-colors" whileHover={{ y: -2 }}>
              Privacy Policy
            </motion.a>
            <motion.a href="/terms" className="hover:text-primary transition-colors" whileHover={{ y: -2 }}>
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
