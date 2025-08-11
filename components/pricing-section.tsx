"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Shield, Zap } from "lucide-react"
import ScrollAnimation from "./scroll-animation"
import SignupModal from "./signup-modal"

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
      "Sertifikat (kurs tugatganlik bo'yicha)",
    ],
    buttonText: "Ro'yxatdan o'tish",
    popular: false,
    icon: <Shield className="h-8 w-8" />,
    priceColor: "text-blue-600",
    bgGradient: "from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent",
    borderHover: "hover:border-blue-400/50",
    shadowHover: "hover:shadow-blue-400/20",
  },
  {
    name: "Ilmiy-Amaliy Paket",
    price: "11,000,000 UZS",
    period: "",
    description: "Faoliyatida islomiy moliyani tatbiq etmoqchi bo'lgan ishbilarmonlar va amaliy bilim izlovchilar uchun.",
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
    icon: <Zap className="h-8 w-8" />,
    priceColor: "text-green-600",
    bgGradient: "from-green-50 to-transparent dark:from-green-950/20 dark:to-transparent",
    borderHover: "hover:border-green-400/50",
    shadowHover: "hover:shadow-green-400/20",
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-24 relative">
      {/* Subtle divider line above */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Sarlavha */}
        <ScrollAnimation animationType="slideDown">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-poppins">Tariflar</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto mt-4 mb-6"></div>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              O'zingizga mos tarifni tanlang va ro'yxatdan o'ting
            </p>
          </div>
        </ScrollAnimation>

        {/* Tarif kartalari */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {pricingPlans.map((plan, index) => (
            <ScrollAnimation
              key={index}
              animationType={index === 0 ? "left" : "right"}
              delay={index * 200}
              className="flex justify-center w-full md:w-auto"
            >
              <Card
                className={`relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl rounded-[20px] flex flex-col h-full w-full max-w-[380px] bg-gradient-to-b ${plan.bgGradient} ${plan.borderHover} ${plan.shadowHover} ${
                  plan.popular
                    ? "border-2 border-primary shadow-xl"
                    : index === 0 
                      ? "border-2 border-blue-500" 
                      : "border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 text-sm font-medium rounded-bl-2xl rounded-tr-[20px] shadow-md">
                    Eng Mashhur
                  </div>
                )}

                <CardHeader className="text-center pb-6 flex-shrink-0 pt-8">
                  <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 transform transition-all duration-300 hover:scale-110">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground font-poppins">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-center justify-center">
                    <span className={`text-2xl font-bold ${plan.priceColor}`}>{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-3 text-muted-foreground text-sm px-2">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 px-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 group">
                        <span className="flex-shrink-0 rounded-full p-1 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                        <span className="text-muted-foreground text-xs group-hover:text-foreground transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4 pb-6 px-6 flex-shrink-0">
                  <SignupModal>
                    <Button className={`w-full py-4 text-base font-semibold transition-all duration-300 rounded-xl h-auto ${
                      plan.popular 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground border-primary/20 hover:border-primary hover:shadow-primary/25" 
                        : "bg-card hover:bg-primary/10 text-foreground border border-border hover:border-primary/50 hover:text-primary"
                    } hover:shadow-lg`}>
                      {plan.buttonText}
                    </Button>
                  </SignupModal>
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
      
      {/* Subtle divider line below */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
