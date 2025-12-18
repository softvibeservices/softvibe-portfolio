"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "../ui/scroll-reveal"
import { motion } from "framer-motion"

const projects = [
  {
    title: "LuxeStay – Premium Hotel Experience Platform",
    description:
      "A visually rich, animation-driven hotel experience platform designed to showcase luxury hospitality through immersive UI/UX. The system uses section-based rendering instead of page routing, delivering seamless transitions, modern motion effects, and highly interactive hotel content such as rooms, amenities, offers, gallery, restaurant, and reservations. Built with performance, aesthetics, and user engagement as top priorities.",
    features: [
      "Single-page section-based navigation with smooth animated transitions",
      "Highly interactive Navbar with active section tracking and responsive mobile menu",
      "Animated content rendering using Framer Motion with enter/exit transitions",
      "Luxury-focused UI design with gradients, glassmorphism, and micro-interactions",
      "Rooms, amenities, offers, restaurant, and gallery sections with rich visuals",
      "Advanced amenities filtering by category with premium and 24/7 badges",
      "Gallery lightbox with category filtering and image previews",
      "Reservation and contact form with animated submission feedback",
      "Testimonials, hotel images, and location preview for trust building",
      "Fully responsive layout optimized for mobile, tablet, and desktop",
      "Dark mode–ready design using Tailwind utility classes",
      "Reusable component-based architecture for scalability"
    ],
    technologies: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React Icons"
    ],
    image: "/hotel-management-dashboard.png",
    logo: "/elegant-hotel-logo.png",
    href: "https://hotel-management-1hflsskiz-amars-projects-fbd95eb7.vercel.app",
  },
  {
    "title": "Restaurant Website",
    "description": "A visually rich, animation-driven restaurant website built with React and Vite, designed to showcase menus, promote online ordering, and strengthen brand identity. The project focuses heavily on modern UI/UX, smooth micro-interactions, and responsive layouts to create an engaging digital dining experience.",
    "features": [
      "Animated hero section with auto-rotating slides and call-to-action buttons",
      "Sticky, scroll-aware navigation header with mobile-friendly menu",
      "Dynamic menu system powered by live API data with category filtering",
      "Quick View modal for menu items with detailed information",
      "Interactive menu cards with pricing, ratings, and hover effects",
      "About section with brand story, statistics, values, and team showcase",
      "Contact form with validation, success feedback, and quick action buttons",
      "Fully responsive design optimized for mobile, tablet, and desktop",
      "Smooth animations and transitions using Framer Motion",
      "Footer with navigation links, services, newsletter subscription, and social media",
      "Performance-optimized image loading and graceful error handling",
      "Modern gradient-based visual language with consistent branding"
    ],
    "technologies": [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "TheMealDB API",
      "ESLint"
    ],
    image: "/modern-restaurant-website.png",
    logo: "/restaurant-logo.png",
    href: "https://restaurant-website-fjrqhuclw-amars-projects-fbd95eb7.vercel.app",
  },
  {
    title: "Ice Cream Inventory Management",
    description:
      "Enterprise-grade inventory and distribution management system designed for ice cream wholesalers and retailers. The platform centralizes stock control, customer billing, delivery partner workflows, and sales tracking with OTP-based authentication, real-time updates, and scalable API-driven architecture.",
    features: [
      "Real-time inventory and stock level monitoring with restock history",
      "Product catalog management with categories, pricing, and quantity tracking",
      "Customer management with ledger-style credit, debit, and total sales tracking",
      "End-to-end order lifecycle management (creation, assignment, delivery status)",
      "Delivery partner module with approval, rejection, OTP login, and order assignment",
      "OTP-based user authentication, registration, verification, and password recovery",
      "Billing system with dynamic invoice generation and PDF export",
      "Seller profile and bank details management for invoicing and payments",
      "Sales analytics and summaries with customer-ledger reports",
      "Image upload and asset management via cloud storage",
      "Email notifications for OTPs, delivery partner approvals, and system events",
      "Role-aware dashboards for admins, shop owners, and delivery partners",
      "Secure API routes with validation, authorization checks, and error handling",
      "Responsive dashboard UI optimized for desktop and mobile usage"
    ],
    technologies: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "MongoDB with Mongoose",
      "Next.js API Routes (Backend)",
      "Tailwind CSS",
      "Cloudinary (Image & Asset Storage)",
      "Nodemailer (Email & OTP Delivery)",
      "jsPDF & jsPDF-Autotable (Invoice PDFs)",
      "Framer Motion (UI Animations)",
      "Vercel (Deployment)"
    ],
    image: "/inventory-management-dashboard.png",
    logo: "/ice-cream-logo.png",
    href: "https://icecream-inventory-8iyzqwpj1-amars-projects-fbd95eb7.vercel.app/",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      {/* </CHANGE> */}

      <div className="max-w-7xl mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Featured Work &
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From hospitality platforms to retail solutions, our work helps businesses scale smarter. Explore
              real-world projects we've built for startups and growing enterprises.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Card
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden h-48">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="text-sm font-medium text-white"
                      >
                        Click to view details
                      </motion.div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="inline-flex items-center text-primary text-sm font-medium group">
                      View Details
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              {/* </CHANGE> */}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="flex justify-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg shadow-primary/25"
              >
                View Full Portfolio
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center p-2">
                    <Image
                      src={selectedProject.logo || "/placeholder.svg"}
                      alt={`${selectedProject.title} logo`}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-base mt-1">{selectedProject.description}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button asChild>
                    <a href={selectedProject.href} target="_blank" rel="noopener noreferrer">
                      Visit Live Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedProject(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
