"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, BookOpen, Laptop, Award, Target } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const teachers = [
  {
    name: "Muhammad Ayyubxon ustoz",
    experience: "20 yillik tajriba",
    image: "https://i.postimg.cc/DfgSnGVZ/Post-to-FB-Muzaffar-1.png",
    description: "Islom moliyasida ekspert",
    specialization: "Islomiy Bankchilik",
    achievements: "500+ talaba tayyorlagan",
    rating: 4.9,
  },
  {
    name: "Muzaffar Husniddinov",
    experience: "12 yil Biznes Sohasida",
    image: "https://i.postimg.cc/BvPnZWxg/Post-to-FB-Muzaffar.png",
    description: "Islom moliyasida ekspert",
    specialization: "Halol Investitsiya",
    achievements: "200+ biznes loyiha",
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
                Bizning Mutaxassis Ustozlarimiz
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Siz bilan ishlaydigan malakali mutaxassislar
              </p>
            </div>
          </ScrollAnimation>

          {/* Teachers Grid */}
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 max-w-6xl">
              {teachers.map((teacher, index) => (
                <ScrollAnimation
                  key={index}
                  animationType="slideUp"
                  delay={index * 200}
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

        {/* Subtle divider line below */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>


    </div>
  )
}
