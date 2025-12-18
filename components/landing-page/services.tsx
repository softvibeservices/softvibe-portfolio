"use client"

import { Code, Layers, Rocket, Palette, Cloud, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "../ui/scroll-reveal"
import { Card3D } from "../ui/3d-card"
import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    title: "Full-Stack Development",
    description: "Custom web applications using React, Next.js, and TypeScript with robust backend systems.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centric interfaces emphasizing clarity, accessibility, and conversion optimization.",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Cloud Architecture",
    description: "Scalable infrastructure, APIs, and databases designed for performance and security.",
    icon: Cloud,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 4,
    title: "MVP Development",
    description: "Rapid prototyping and launch support to validate ideas and reach market quickly.",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Performance Optimization",
    description: "Fast load times, efficient systems, and enterprise-grade data protection.",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    title: "Ongoing Support",
    description: "Documentation, CI/CD workflows, and structured sprints for future scaling.",
    icon: Layers,
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />
      {/* </CHANGE> */}

      <div className="max-w-7xl mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Comprehensive Solutions for
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </motion.h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              End-to-end product development supporting you from early-stage concepts to fully deployed, scalable
              systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <Card3D>
                <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <CardContent className="p-6 relative">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Card3D>
              {/* </CHANGE> */}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
