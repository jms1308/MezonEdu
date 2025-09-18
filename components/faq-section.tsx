"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import SignupModal from "./signup-modal"
import { Plus, Minus } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const faqData = [
  {
    question: "Kurs davomiyligi qancha?",
    answer:
      " Kurslarimiz odatda 1.5-2 oy davom etadi. Bu vaqt ichida siz Islom moliyasi asoslarini 12 ta darsda o‘rganib olasiz.",
  },
  {
    question: "Oldindan qanday bilimlar kerak?",
    answer:
      " “Biznesda Islom moliyasi” kursi tadbirkorlarga mo‘ljallangan bo’lib, oldindan Islom moliyasiga oid hech qanday bilim talab qilinmaydi. Kurs davomida eng asosiy tushunchalarni bosqichma-bosqich o’rgatamiz",
  },
  {
    question: "Qanday chegirmalar bor?",
    answer:
      "Ha, maxsus chegirmalar, xususan, kursga 3, 5 yo 10 talik guruhlar shaklida kasbdoshlari yo tanishlari bilan birga qatnashmoqchi bo'lganlar uchun alohida takliflarimiz mavjud. Batafsil ma'lumotlar va sizga to'g'ri keladigan takliflar uchun biz bilan bog'laning.",
  },
  {
    question: "Darslar qanday formatda o'tkaziladi?",
    answer:
      "Barcha darslar oflayn formatda o‘tkaziladi. Kurs o‘tkaziladigan manzil va dars vaqtlarini sizga ro‘yxatdan o‘tganingizdan keyin ham alohida jo‘natib qo‘yamiz. Har dars videoga yozib olinadi va ularning video yozuvlariga kirish imkoni bir necha oy davomida beriladi.",
  },
  {
    question: "Kurs narxi va to'lov usullari qanday?",
    answer:
      "Kurs narxi tanlagan tarifingizga ko‘ra bo‘ladi. To‘lovni plastik karta orqali va bo‘lib to‘lashingiz mumkin. Maxsus takliflar va batafsil ma‘lumot uchun biz bilan bog’laning.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <ScrollAnimation animationType="flipIn">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Eng ko'p so'raladigan savollar</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              
            </p>
          </div>
        </ScrollAnimation>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqData.map((faq, index) => (
            <ScrollAnimation key={index} animationType={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
              <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                >
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${openItems.includes(index) ? "rotate-180" : ""}`}
                  >
                    {openItems.includes(index) ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div
                  className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
                >
                  <div className="px-6 pb-5">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollAnimation animationType="zoomIn" delay={600}>
          <div className="text-center">
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-3"> Boshqa savollaringiz bormi?</h3>
              <p className="text-muted-foreground mb-6">Bizning mutaxassislarimiz sizga yordam berishga tayyor</p>
              <SignupModal>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 border border-border hover:border-primary hover:shadow-primary/25 rounded-xl"
                >
                  Biz bilan bog'laning
                </Button>
              </SignupModal>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
