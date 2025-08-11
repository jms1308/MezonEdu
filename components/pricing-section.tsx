"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const pricingPlans = [
  {
    name: "Asosiy Paket",
    price: "7,000,000 UZS",
    period: "",
    description: "Islomiy moliya haqida chuqur bilim olishni xohlovchi talabalar va yangi boshlovchilar uchun.",
    features: [
      "12 ta dars (offline)",
      "Coffee break + networking",
      "Kurs materiallari: kitob, bloknot, ruchka",
      "Umumiy Telegram guruh",
      "Sertifikat (kurs tugatganlik bo‘yicha)",
    ],
    buttonText: "Ro'yxatdan o'tish",
    popular: false,
    icon: <Check className="h-6 w-6 text-primary" />,
    priceColor: "text-blue-600",
  },
  {
    name: "Ilmiy-Amaliy Paket",
    price: "11,000,000 UZS",
    period: "",
    description: "Faoliyatida islomiy moliyani tatbiq etmoqchi bo‘lgan ishbilarmonlar va amaliy bilim izlovchilar uchun.",
    features: [
      "Asosiy Paketdagi barcha imkoniyatlar",
      "Darslarning yozuvlariga kirish (video)",
      "Boshqa kurslarga 10% chegirma",
      "Individual mentorlik",
      "3 marta jonli savol-javob sessiyasi",
      "Elektron testlar va mustahkamlovchi materiallar",
      "Premium qatnashchilar uchun yopiq guruh",
    ],
    buttonText: "Ro'yxatdan o'tish",
    popular: true,
    icon: <Star className="h-6 w-6 text-primary" />,
    priceColor: "text-green-600",
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Sarlavha */}
        <ScrollAnimation animationType="rotateIn">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Tariflar</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto mt-4 mb-6"></div>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              O'zingizga mos tarifni tanlang va ro'yxatdan o'ting
            </p>
          </div>
        </ScrollAnimation>

        {/* Tarif kartalari */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 justify-center">
          {pricingPlans.map((plan, index) => (
            <ScrollAnimation
              key={index}
              animationType={index === 0 ? "left" : "right"}
              delay={index * 200}
            >
              <Card
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg flex flex-col w-full max-w-[400px] mx-auto ${
                  plan.popular
                    ? "border-2 border-primary bg-card shadow-xl"
                    : "border border-border bg-card hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Eng Mashhur
                  </div>
                )}

                <CardHeader className="text-center pb-8 flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className={`text-xl font-bold ${plan.priceColor}`}>{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-muted-foreground text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6 flex-shrink-0">
                  <Button className="w-full py-3 text-lg font-semibold transition-all duration-300 rounded-lg border border-border hover:border-primary hover:shadow-primary/25 bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-lg">
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Pastki matn */}
        <ScrollAnimation animationType="fade" delay={600}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm">
              Hamma tariflar 12 ta darsdan iborat to'liq kursni inobatga olgan holda tuzilgan
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
