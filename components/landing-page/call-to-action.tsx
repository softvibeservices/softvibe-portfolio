"use client"

import { ArrowRight, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { motion } from "framer-motion"
import Link from "next/link"

const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=softvibeservices@gmail.com&su=Project Inquiry&body=Hi SoftVibe Services Agency,%0A%0AI would like to discuss a new project.%0A`

export default function CallToAction() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-16 text-center shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
            <motion.div
              className="absolute top-10 left-10 text-white/30"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <motion.div
              className="absolute bottom-10 right-10 text-white/30"
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-1/4 text-white/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Sparkles className="w-10 h-10" />
            </motion.div>
            {/* </CHANGE> */}

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's Build Something Great</span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Ideas Into Reality?
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Have a project in mind? Let's chat about your vision and explore how we can help you build scalable,
                production-ready software.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                    asChild
                  >
                    <Link href="/start">Start a Conversation</Link>
                  </Button>
                </motion.div>
                {/* </CHANGE> */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <a href="#services" className="flex items-center gap-2">
                      Learn About Our Process
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
