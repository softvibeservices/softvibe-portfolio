"use client"

import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

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
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={member.email}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <Avatar className="w-24 h-24 bg-gradient-to-br from-primary to-accent text-white text-3xl font-bold ring-4 ring-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-2xl">
                      {member.avatarLabel}
                    </AvatarFallback>
                  </Avatar>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-2">{member.bio}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    {member.portfolio && (
                      <Button size="sm" variant="ghost" asChild>
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${member.name}'s portfolio`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
