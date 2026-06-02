import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Coverage from "@/components/sections/Coverage";
import WhyTMF from "@/components/sections/WhyTMF";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import Careers from "@/components/sections/Careers";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import Divider from "@/components/ui/Divider";

/**
 * Single-scroll landing page. Sections are ordered client-first (Hero →
 * Coverage → Why → How → About), then transition to the agent-facing Careers
 * section, then shared social proof (Testimonials, FAQ) and conversion
 * (Final CTA, Contact form). Edit all copy in data/site-content.ts.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Coverage />
        <WhyTMF />
        <HowItWorks />
        <About />
        <Divider />
        <Careers />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
