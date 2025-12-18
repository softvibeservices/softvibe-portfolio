"use client"

import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { motion } from "framer-motion"

const team = [
  {
    name: "Amar Tiwari",
    role: "Co-founder • Tech Consultant • Developer",
    bio: "Specialized in full-stack development and cloud architecture. Passionate about building scalable systems that drive business growth.",
    email: "amar.tiwari.8355@gmail.com",
    linkedin: "https://www.linkedin.com/in/amar-tiwari-cs2026",
    github: "https://github.com/Amar5623",
    avatarLabel: "AT",
  },
  {
    name: "Nitrajsinh Solanki",
    role: "Co-founder • Full-Stack Developer",
    bio: "Expert in React, Next.js, and modern web technologies. Committed to delivering high-quality, user-centric solutions.",
    email: "nrsolanki2005@gmail.com",
    linkedin: "https://www.linkedin.com/in/nitrajsinh-solanki-647b11293",
    github: "https://github.com/Nitrajsinh-Solanki/",
    portfolio: "https://my-portfolio-ptpl7cc8d-nitrajsinh-solankis-projects.vercel.app",
    avatarLabel: "NS",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      {/* </CHANGE> */}

      <div className="max-w-7xl mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Meet the
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SoftVibe Team
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experienced developers and consultants dedicated to transforming your ideas into reality with scalable,
              production-ready solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <ScrollReveal key={member.email} delay={index * 0.2} direction={index % 2 === 0 ? "left" : "right"}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-20 transition-opacity blur-xl pointer-events-none" />

                  <CardContent className="p-8 relative z-10">
                    {/* </CHANGE> */}
                    <div className="flex flex-col items-center text-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Avatar className="w-24 h-24 bg-gradient-to-br from-primary to-accent text-white text-3xl font-bold ring-4 ring-primary/20 group-hover:ring-8 transition-all">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-2xl">
                            {member.avatarLabel}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">{member.role}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed pt-2">{member.bio}</p>
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        {[
                          { href: `mailto:${member.email}`, icon: Mail, label: `Email ${member.name}` },
                          { href: member.linkedin, icon: Linkedin, label: `${member.name} on LinkedIn` },
                          { href: member.github, icon: Github, label: `${member.name} on GitHub` },
                          member.portfolio && {
                            href: member.portfolio,
                            icon: ExternalLink,
                            label: `${member.name}'s portfolio`,
                          },
                        ]
                          .filter(Boolean)
                          .map((link: any) => (
                            <motion.div key={link.href} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                              <Button size="sm" variant="ghost" asChild>
                                <a
                                  href={link.href}
                                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  aria-label={link.label}
                                >
                                  <link.icon className="w-5 h-5" />
                                </a>
                              </Button>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
