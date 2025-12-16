import { ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=softvibeservices@gmail.com&su=Project Inquiry&body=Hi SoftVibe Services Agency,%0A%0AI would like to discuss a new project.%0A`

export default function CallToAction() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Let's Build Something Great</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Transform Your Ideas Into Reality?
            </h2>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Have a project in mind? Let's chat about your vision and explore how we can help you build scalable,
              production-ready software.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href={gmailLink} target="_blank" rel="noopener noreferrer">
                  Start a Conversation
                </a>
              </Button>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
