import Header from "./header"
import Hero from "./hero"
import Projects from "./projects"
import Services from "./services"
import Team from "./team"
import Faq from "./faq"
import CallToAction from "./call-to-action"
import Footer from "./footer"
import ContactFormButton from "./contact-form-button"
import StartProject from "./start-project"
import type { LandingPageProps } from "./types"
import { AnimatedBackground } from "../ui/animated-background"
import { FloatingOrbs } from "../ui/floating-orbs"

// Export individual components for flexible usage
export { Header, Hero, Projects, Services, Team, Faq, CallToAction, Footer, ContactFormButton, StartProject }

// Main component that combines all sections
export default function LandingPage({ showHeader = true, showFooter = true }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111] relative overflow-hidden">
      <AnimatedBackground />
      <FloatingOrbs />
      {/* </CHANGE> */}
      {showHeader && <Header />}
      <div className="container pt-4 relative z-10">
        <Hero />
        <Services />
        <Projects />
        <Team />
        <Faq />
        <CallToAction />
      </div>
      {showFooter && <Footer />}
    </main>
  )
}
