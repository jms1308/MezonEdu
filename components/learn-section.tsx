"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Target, Award, TrendingUp, Calculator, Shield, Users, Zap } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const learningModules = [
  {
    week: "1-hafta",
    title: "Asosiy bilimlar",
    description: "Moliyaviy tushunchalar va asosiy tamoyillarni o'rganasiz.",
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    week: "2-hafta", 
    title: "Halol investitsiya",
    description: "Islomiy moliyaviy mahsulotlar va investitsiya usullari.",
    icon: <Target className="w-8 h-8" />,
  },
  {
    week: "3-hafta",
    title: "Shaxsiy moliya",
    description: "Shaxsiy moliyaviy rejalashtirish va boshqarish.",
    icon: <Calculator className="w-8 h-8" />,
  },
  {
    week: "4-hafta",
    title: "Amaliy loyihalar",
    description: "Real loyihalar va case study orqali tajriba.",
    icon: <TrendingUp className="w-8 h-8" />,
  },
]

export default function LearnSection() {
  return (
    <section className="py-[70px] bg-background relative">
      {/* Subtle divider line above */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <ScrollAnimation animationType="slideDown">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
              1.5 oyda siz nimalarni o'rganasiz?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Har bir modul sizni maqsadingizga yaqinlashtiradi.
            </p>
          </div>
        </ScrollAnimation>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {learningModules.map((module, index) => (
            <ScrollAnimation
              key={index}
              animationType="slideUp"
              delay={index * 150}
            >
              <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl rounded-[20px] border border-border bg-card shadow-lg hover:shadow-2xl hover:border-primary/50">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25">
                      {module.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                      {module.week}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground font-poppins group-hover:text-primary transition-colors duration-300">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]" />
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollAnimation animationType="zoomIn" delay={800}>
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-poppins border border-primary/20 hover:border-primary hover:shadow-primary/25"
            >
              Hoziroq boshlash
            </Button>
          </div>
        </ScrollAnimation>
      </div>

              {/* Subtle divider line below */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
} 