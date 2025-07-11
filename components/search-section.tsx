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
  },
  {
    name: "Kamola Rahimova",
    experience: "8 yil Moliya Sohasida",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    description: "Islom moliyasi bo'yicha ekspert",
  },
  {
    name: "Muzaffar Husniddinov",
    experience: "12 yil Biznes Sohasida",
    image: "https://i.postimg.cc/BvPnZWxg/Post-to-FB-Muzaffar.png",
    description: "Islom moliyasida ekspert",
  },
]

const learningOutcomes = [
  {
    number: "1",
    title: "Islom moliyasi asoslarini o'rganing",
    icon: <BookOpen className="w-5 h-5 text-white" />,
  },
  {
    number: "2",
    title: "Halol investitsiya usullarini bilib oling",
    icon: <Target className="w-5 h-5 text-white" />,
  },
  {
    number: "3",
    title: "Shaxsiy moliyaviy rejalashtirish",
    icon: <Award className="w-5 h-5 text-white" />,
  },
  {
    number: "4",
    title: "Islom bankchiligi tamoyillari",
    icon: <Code className="w-5 h-5 text-white" />,
  },
  {
    number: "5",
    title: "Amaliy loyihalar va case study",
    icon: <Laptop className="w-5 h-5 text-white" />,
  },
]

export default function SearchSection() {
  return (
    <div className="bg-black relative z-30">
      {/* Teachers Section */}
      <section id="teachers" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl my-8 py-4">
        <ScrollAnimation animationType="flipIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Bizning Mutaxassis Ustozlarimiz</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Tajribali mutaxassislardan o'rganing va o'z maqsadlaringizga erishing
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 mb-12 stagger-children">
          {teachers.map((teacher, index) => (
            <ScrollAnimation
              key={index}
              animationType="zoomIn"
              delay={index * 200}
              className="stagger-item"
              style={{ "--stagger-delay": index } as React.CSSProperties}
            >
              <Card className="bg-black border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group rounded-lg">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden border border-white/20 group-hover:border-green-400/60 transition-all duration-300">
                      <img
                        src={teacher.image || "/placeholder.svg"}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/10 to-green-600/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-white text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="font-medium text-green-300">{teacher.experience}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/70 text-sm">{teacher.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section id="learning" className="bg-black py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollAnimation animationType="slideDown">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">1.5 Oyda Nimalar O'rganasiz</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Qisqa muddat ichida katta natijalar - bizning intensiv dasturimiz orqali
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {learningOutcomes.map((outcome, index) => (
                <ScrollAnimation key={index} animationType={index % 2 === 0 ? "left" : "right"} delay={index * 150}>
                  <div className="flex items-center gap-6 p-6 bg-black border border-white/20 rounded-lg hover:border-green-400/30 transition-all duration-300 hover:bg-black group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:bg-green-700 transition-colors duration-300 bg-green-400">
                        {outcome.number}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-white text-lg font-semibold">{outcome.title}</h3>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 group-hover:bg-green-400/30 transition-colors duration-300">
                        {outcome.icon}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          <ScrollAnimation animationType="bounceIn" delay={800}>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-green-400 hover:shadow-green-400/25 rounded-xl"
              >
                Hoziroq O'rganishni Boshlang
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
