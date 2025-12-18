"use client"

import ProjectForm from "./project-form"
import { useEffect } from "react"
import { useTheme } from "next-themes"
import { FloatingOrbs } from "@/components/ui/floating-orbs"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { motion } from "framer-motion"

export default function StartProject() {
  const { resolvedTheme } = useTheme()

  // Function to load Tally embeds
  const loadTallyEmbeds = () => {
    if (typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds()
    }
  }

  // Load Tally embeds when component mounts or theme changes
  useEffect(() => {
    loadTallyEmbeds()

    // Add a class to the iframe's parent element based on the current theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const iframe = document.querySelector("iframe[data-tally-src]")
          if (iframe) {
            // Set a data attribute on the iframe that can be used in CSS
            iframe.setAttribute("data-theme", resolvedTheme || "light")

            // Try to access the iframe content if possible
            try {
              if (iframe instanceof HTMLIFrameElement) {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
                if (iframeDoc && iframeDoc.documentElement) {
                  iframeDoc.documentElement.setAttribute("data-theme", resolvedTheme || "light")
                }
              }
            } catch (e) {
              console.log("Cannot access iframe content due to same-origin policy")
            }
          }
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [resolvedTheme])

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] relative overflow-hidden">
      <FloatingOrbs />

      <ScrollReveal>
        <div className="mb-8 text-center pt-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-black dark:text-white text-3xl md:text-5xl font-bold mb-4">
              Ready to Start Your Next{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Project</span>?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Let's discuss your vision and bring it to life with cutting-edge technology and expert craftsmanship.
            </p>
          </motion.div>
        </div>
      </ScrollReveal>

      <ProjectForm />
    </div>
  )
}
