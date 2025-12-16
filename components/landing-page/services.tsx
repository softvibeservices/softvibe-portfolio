import { Code, Layers, Rocket, Palette, Cloud, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Comprehensive Solutions for
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            End-to-end product development supporting you from early-stage concepts to fully deployed, scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
