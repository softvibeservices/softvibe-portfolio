import { ArrowRight, Code2, Sparkles } from "lucide-react"
import ContactFormButton from "./contact-form-button"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Transforming Ideas into Reality</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-balance mb-6 animate-fade-in-up">
          Build Software That
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Scales With Your Vision
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Modern software development and technology consulting for startups and enterprises. We transform ideas into
          reliable, high-performance digital products—from MVP to scale. As we say - "Transforming Ideas Into Reality."
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <ContactFormButton />
          <Button variant="outline" size="lg" className="group bg-transparent" asChild>
            <a href="#services" className="flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-center text-sm text-muted-foreground mb-6">Powered by modern technologies</p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
            {["React", "Next.js", "TypeScript", "Node.js", "AWS", "Vercel"].map((tech) => (
              <div key={tech} className="flex items-center gap-2 text-sm font-medium">
                <Code2 className="w-4 h-4" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
