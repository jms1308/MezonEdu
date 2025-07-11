import Header from "@/components/header"
import IslamicHero from "@/components/islamic-hero"
import SearchSection from "@/components/search-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1">
        <IslamicHero />
        <SearchSection />
        <PricingSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
