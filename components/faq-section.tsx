"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const faqData = [
  {
    question: "Kurs davomiyligi qancha?",
    answer:
      "Bizning kurslarimiz odatda 1.5-2 oy davom etadi. Bu vaqt ichida siz Islom moliyasi asoslarini to'liq o'rganasiz va amaliy ko'nikmalarni egallaysiz.",
  },
  {
    question: "Oldindan tajriba kerakmi?",
    answer:
      "Yo'q, hech qanday oldindan tajriba talab qilinmaydi. Biz eng asosiy tushunchalardan boshlaymiz va bosqichma-bosqich o'rgatamiz.",
  },
  {
    question: "Kurs tugagandan keyin sertifikat berilarmı?",
    answer:
      "Ha, kursni muvaffaqiyatli tugatgan barcha talabalar rasmiy sertifikat olishadi. Bu sertifikat sizning bilim va ko'nikmalaringizni tasdiqlaydi.",
  },
  {
    question: "Darslar qanday formatda o'tkaziladi?",
    answer:
      "Darslar jonli efir va yozilgan video formatlarida o'tkaziladi. Shuningdek, amaliy mashg'ulotlar va guruh muhokamalariga ham ega bo'lasiz.",
  },
  {
    question: "Kurs narxi va to'lov usullari qanday?",
    answer:
      "Kurs narxi rejaga qarab farq qiladi. Biz naqd, plastik karta va bo'lib to'lash imkoniyatlarini taklif qilamiz. Batafsil ma'lumot uchun biz bilan bog'laning.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="bg-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <ScrollAnimation animationType="flipIn">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Tez-tez So'raladigan Savollar</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Kurs haqida eng ko'p so'raladigan savollarga javoblar
            </p>
          </div>
        </ScrollAnimation>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqData.map((faq, index) => (
            <ScrollAnimation key={index} animationType={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
              <div className="bg-black rounded-lg shadow-sm border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-green-400/50">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-200 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-black transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${openItems.includes(index) ? "rotate-180" : ""}`}
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
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-white/70 leading-relaxed">{faq.answer}</p>
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
            <div className="bg-black rounded-lg p-8 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Hali ham savollaringiz bormi?</h3>
              <p className="text-white/70 mb-6">Bizning mutaxassislarimiz sizga yordam berishga tayyor</p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 border border-white/20 hover:border-green-400 hover:shadow-green-400/25 rounded-xl"
              >
                Biz Bilan Bog'laning
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
