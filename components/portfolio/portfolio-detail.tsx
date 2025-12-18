"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import type { PortfolioItem } from "@/utils/csv-parser"
import { FloatingOrbs } from "@/components/ui/floating-orbs"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { motion } from "framer-motion"

interface PortfolioDetailPageProps {
  project: PortfolioItem
}

export default function PortfolioDetailPage({ project }: PortfolioDetailPageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111] relative overflow-hidden">
      <FloatingOrbs />
      {/* </CHANGE> */}

      <Header />
      <div className="container py-12 pb-32 md:pb-12 relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>
        {/* </CHANGE> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <motion.div
                className="bg-muted rounded-xl p-6 mb-8 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={project.mainImage || "/placeholder.svg?height=600&width=800&query=project"}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="max-w-full h-auto object-contain max-h-[600px] rounded-lg"
                  priority
                />
              </motion.div>
            </ScrollReveal>
            {/* </CHANGE> */}

            <ScrollReveal>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1">
            <ScrollReveal delay={0.2}>
              <motion.div
                className="lg:sticky lg:top-24 bg-card border border-border/50 p-6 rounded-3xl shadow-lg backdrop-blur-sm relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  {project.logo && (
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center p-2 shadow-sm">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.title} logo`}
                        width={64}
                        height={64}
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">{project.title}</h1>
                    <p className="text-muted-foreground leading-relaxed">{project.shortDescription}</p>
                  </div>
                </div>

                {project.projectUrl && (
                  <motion.a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-primary-foreground rounded-xl text-base font-semibold hover:bg-primary/90 transition-colors shadow-md group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Visit Project
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>
                )}

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.categories
                      ?.filter((cat) => cat !== "all")
                      .map((category) => (
                        <motion.span
                          key={category}
                          className="px-3 py-1.5 bg-muted border border-border rounded-full text-sm font-medium text-foreground"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.span>
                      ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
            {/* </CHANGE> */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
