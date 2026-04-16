import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import PracticeAreasSection from "./sections/practice-areas-section";
import DifferentiatorsSection from "./sections/differentiators-section";
import TestimonialsSection from "./sections/testimonials-section";
import FAQSection from "./sections/faq-section";
import CTASection from "./sections/cta-section";
import ContactSection from "./sections/contact-section";
import FloatingWhatsApp from "./components/floating-whatsapp";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <FloatingWhatsApp />
    </main>
  );
}