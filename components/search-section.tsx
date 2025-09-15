"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, BookOpen, Laptop, Award, Target } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const teachers = [
  {
    name: "Muhammad Ayyubxon Homidov",
    experience: "O'zbekiston musulmonlari idorasi fatvo markazi ulamosi, Toshkent islom instituti katta ustozi",
    image: "https://mezonkengashi.uz/img/Muhammad-Ayyubxon-Homidov.png",
    description: "",
    specialization: "",
    achievements: "",
    rating: 4.9,
  },
  {
    name: "Muzaffar Husniddinov",
    experience: "Mezon Kengashi kompaniyasi direktori. Islom moliyasi, korporativ boshqaruv, moliya hisobi va audit bo'yicha mutaxassis",
    image: "https://i.postimg.cc/3RG7Dw0M/photo-2025-08-17-21-09-12.jpg",
    description: "",
    specialization: "",
    achievements: "",
    rating: 4.9,
  },
]

export default function SearchSection() {
  return (
    <div className="bg-background relative z-30">
      {/* Teachers Section */}
      <section id="teachers" className="py-[70px] bg-background relative">
        {/* Subtle divider line above */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <ScrollAnimation animationType="slideDown">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
                Mutaxassis ustozlarimiz
              </h2>
          
            </div>
          </ScrollAnimation>

          {/* Teachers Grid - Optimized for 2/3 screen width */}
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 lg:gap-12 justify-items-center">
                {teachers.map((teacher, index) => (
                  <ScrollAnimation
                    key={index}
                    animationType="slideUp"
                    delay={index * 200}
                    className="w-full max-w-md"
                  >
                    <div className="group h-full">
                      {/* Teacher Card */}
                      <div className="bg-card border border-border rounded-[20px] p-8 text-center shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 h-full flex flex-col">
                        {/* Profile Image */}
                        <div className="relative mb-6 flex-shrink-0">
                          <div className="relative mx-auto w-40 h-40">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border group-hover:border-primary/40 transition-all duration-500">
                              <img
                                src={teacher.image || "/placeholder.svg"}
                                alt={teacher.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Teacher Info */}
                        <div className="space-y-4 flex-1 flex flex-col justify-center">
                          {/* Name */}
                          <h3 className="text-2xl font-bold text-card-foreground font-poppins group-hover:text-primary transition-colors duration-300">
                            {teacher.name}
                          </h3>

                          {/* Specialty */}
                          <p className="text-primary font-semibold text-lg">
                            {teacher.specialization}
                          </p>

                          {/* Experience */}
                          <p className="text-muted-foreground text-base">
                            {teacher.experience}
                          </p>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {teacher.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle divider line below */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>
    </div>
  )
}