"use client"

import { useState, useEffect } from "react"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import PortfolioMasonryGridFinal from "./portfolio-masonry-grid-final"
import PortfolioFilters from "./portfolio-filters"
import type { PortfolioItem } from "@/utils/csv-parser"
import { FloatingOrbs } from "@/components/ui/floating-orbs"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { motion } from "framer-motion"

interface PortfolioPageProps {
  initialData: PortfolioItem[]
}

export default function PortfolioPage({ initialData }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const filteredItems =
    activeFilter === "all" ? initialData : initialData.filter((item) => item.categories?.includes(activeFilter))

  return (
    <main className="min-h-screen bg-white dark:bg-[#111111] relative overflow-hidden">
      <FloatingOrbs />
      {/* </CHANGE> */}

      <Header />
      <div className="container pt-8 pb-20 relative z-10">
        <ScrollReveal>
          <div className="mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
            </motion.h1>
            <motion.p
              className="text-gray-700 dark:text-gray-300 max-w-2xl text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore our latest projects and case studies. From hotel management systems to inventory solutions, our
              work helps businesses scale smarter.
            </motion.p>
          </div>
        </ScrollReveal>
        {/* </CHANGE> */}

        <PortfolioFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="animate-pulse rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800 h-80"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
            ))}
          </div>
        ) : (
          <PortfolioMasonryGridFinal items={filteredItems} />
        )}
      </div>
      <Footer />
    </main>
  )
}
