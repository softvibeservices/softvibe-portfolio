"use client"

import { ArrowRight, Code2, Sparkles, Rocket, Zap } from "lucide-react"
import ContactFormButton from "./contact-form-button"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "../ui/scroll-reveal"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      {/* Animated gradient orb that follows mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <ScrollReveal delay={0}>
          <motion.div
            className="flex justify-center mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span>Transforming Ideas into Reality</span>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-balance mb-6">
            Build Software That
            <motion.span
              className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Scales With Your Vision
            </motion.span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Modern software development and technology consulting for startups and enterprises. We transform ideas into
            reliable, high-performance digital products—from MVP to scale.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ContactFormButton />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="group bg-transparent backdrop-blur-sm" asChild>
                <a href="#services" className="flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-16">
            <p className="text-center text-sm text-muted-foreground mb-6">Powered by modern technologies</p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
              {[
                { name: "React", icon: Code2 },
                { name: "Next.js", icon: Rocket },
                { name: "TypeScript", icon: Code2 },
                { name: "Node.js", icon: Zap },
                { name: "AWS", icon: Code2 },
                { name: "Vercel", icon: Rocket },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-2 text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ opacity: 1, y: -5 }}
                >
                  <tech.icon className="w-4 h-4" />
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
      {/* </CHANGE> */}
    </section>
  )
}
