"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    id: 1,
    question: "What can I expect when we work together?",
    answer:
      "We start with a discovery call to understand your business goals and technical requirements. Then we provide a detailed proposal with project scope, timeline, and transparent pricing. Throughout development, you'll receive regular updates and have direct access to our team for feedback and collaboration.",
  },
  {
    id: 2,
    question: "How long does it take to build a custom solution?",
    answer:
      "Timeline varies based on project complexity. Landing Pages take around 1-2 weeks, MVPs typically take 2-4 weeks, while full-scale platforms range from 1-3 months. We provide realistic timelines during the proposal phase and maintain clear communication throughout development to ensure on-time delivery.",
  },
  {
    id: 3,
    question: "What technologies do you specialize in?",
    answer:
      "We use modern, production-tested technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like AWS and Vercel. Our stack is chosen based on your specific needs—no one-size-fits-all approach. We focus on maintainable, scalable solutions.",
  },
  {
    id: 4,
    question: "How is pricing structured?",
    answer:
      "We offer flexible pricing models: fixed-price for well-defined projects, or time and materials for evolving requirements. Most projects start around $1000 for MVPs, while enterprise solutions range from $1500 - $5000 and Landing Pages cost around $500 - $1000 . We provide detailed quotes after understanding your needs.",
  },
  {
    id: 5,
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! We provide ongoing maintenance, technical support, and feature development. Our support packages include bug fixes, performance monitoring, security updates, and iterative improvements as your business grows. We're in it for the long term.",
  },
  {
    id: 6,
    question: "What industries do you have experience in?",
    answer:
      "We've delivered solutions for hospitality (hotel management), food & beverage (restaurant platforms), retail (inventory systems), and service-based businesses. Our experience spans startups to growing enterprises, with a focus on operational efficiency and scalability.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Questions?
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn more about our process, pricing, and how we can help transform your ideas into reliable software.
          </p>
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="flex justify-between items-start w-full text-left py-2 group"
                    aria-expanded={openItem === faq.id}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-semibold text-lg group-hover:text-primary transition-colors pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-all mt-1 ${
                        openItem === faq.id ? "rotate-180 text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  {openItem === faq.id && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="mt-3 text-muted-foreground leading-relaxed animate-fade-in"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
