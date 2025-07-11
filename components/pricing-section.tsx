"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown, Zap } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$29",
    period: "/month",
    description: "Perfect for beginners looking to start their learning journey.",
    features: [
      "Access to core course content",
      "5 video lessons per month",
      "Community support",
      "Certificate of completion",
    ],
    buttonText: "Get Started",
    popular: false,
    icon: <Zap className="h-6 w-6" />,
    bgColor: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    textColor: "text-white",
  },
  {
    name: "Pro Plan",
    price: "$59",
    period: "/month",
    description: "Ideal for serious learners who want more resources and support.",
    features: [
      "All Basic Plan features",
      "15 video lessons per month",
      "Priority email support",
      "Monthly live Q&A sessions",
      "Access to premium resources",
    ],
    buttonText: "Choose Pro",
    popular: true,
    icon: <Star className="h-6 w-6" />,
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    textColor: "text-white",
  },
  {
    name: "Elite Plan",
    price: "$99",
    period: "/month",
    description: "For professionals aiming to master the course with exclusive benefits.",
    features: [
      "All Pro Plan features",
      "Unlimited video lessons",
      "1-on-1 mentorship sessions",
      "Exclusive projects and case studies",
      "Lifetime access to course updates",
    ],
    buttonText: "Go Elite",
    popular: false,
    icon: <Crown className="h-6 w-6" />,
    bgColor: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    textColor: "text-white",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animationType="rotateIn">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Tariflar</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4 mb-6"></div>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              O'zingizga qulay tarifni tanlang va ro'yxatdan o'ting
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <ScrollAnimation
              key={index}
              animationType={index === 0 ? "left" : index === 1 ? "slideUp" : "right"}
              delay={index * 200}
            >
              <Card
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg ${
                  plan.popular
                    ? "border-2 border-green-400 bg-black shadow-xl"
                    : "border border-white/20 bg-black hover:border-green-400/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-green-400 text-black px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                      plan.popular ? "bg-green-400/20 text-green-400" : "bg-white/20 text-white"
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/70">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-white/70">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-green-400" : "text-green-500"}`}
                        />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    className={`w-full py-3 font-semibold transition-all duration-300 rounded-lg border border-white/20 hover:border-green-400 hover:shadow-green-400/25 ${plan.bgColor} ${plan.hoverColor} ${plan.textColor} hover:shadow-lg`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animationType="fade" delay={600}>
          <div className="mt-16 text-center">
            <p className="text-white/70 text-sm">
              Hamma tariflar 12ta darsdan iborat to'liq kursni inobatga olgan holda tuzib chiqilgan
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
