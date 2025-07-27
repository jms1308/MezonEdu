"use client"

import { Button } from "@/components/ui/button"
import ScrollAnimation from "./scroll-animation"
import SignupModal from "./signup-modal"
import { useState } from "react";

const smoothScrollTo = (elementId: string) => {
  if (typeof window === "undefined") return

  try {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  } catch (error) {
    console.warn("Scroll error:", error)
  }
}

export default function IslamicHero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 60%, #232526 100%)' }}>
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-slate-950" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 bg-gray-950 lg:px-1.5">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-2 lg:pt-16 my-0">
          {/* Mobile: Image First, Desktop: Text First */}
          <div className="lg:hidden order-1 mb-1 pt-3">
            <ScrollAnimation animationType="zoomIn" delay={200}>
              <div className="relative flex items-center justify-center">
                <div className="relative group">
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border border-white/20">
                    <img
                      src="https://i.postimg.cc/BvPnZWxg/Post-to-FB-Muzaffar.png"
                      alt="Islamic Finance Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3 shadow-xl">
                    <div className="text-center">
                      <div className="text-white text-base font-semibold whitespace-nowrap">Muzaffar Husniddinov</div>
                      <div className="text-green-400 text-sm">Moliya Mutaxassisi</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1 text-left lg:pl-16">
            <ScrollAnimation animationType="slideDown" delay={100}>
              <div className="space-y-2 text-white mt-0 pt-0">
                <div className="h-px w-16 bg-gradient-to-r from-green-400 to-transparent" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="left" delay={300}>
              <div className="space-y-4 leading-7 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center leading-9">
                  <span className="text-white text-5xl">Islom </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 text-5xl">
                    Moliyasi 1.0
                  </span>
                  <br />
                  <span className="text-white leading-7 text-5xl">          {""}   </span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl px-0 text-center">
                  Moliyaviy savodxonlikni Islomiy qadriyatlar asosida o‘rganing — halollik, adolat va ijtimoiy mas’uliyat bilan yo‘lingizni boshlang
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="bounceIn" delay={500}>
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">12 ta </div>
                  <div className="text-white/70 text-sm">darslar</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[rgba(73,224,129,1)]">1.5 oy</div>
                  <div className="text-white/70 text-sm">ichida</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3 dan ortiq</div>
                  <div className="text-white/70 text-sm">ustozlar</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="slideUp" delay={700}>
              <div className="flex flex-row gap-4 border-0 px-0 text-justify items-center justify-center mb-8 sm:mb-0">
                <SignupModal>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-green-400 hover:shadow-green-400/25 rounded-xl btn-responsive"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-book-open mr-2 h-5 w-5"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Ro'yxatdan o'tish
                  </Button>
                </SignupModal>
                <Button
                  size="lg"
                  onClick={() => smoothScrollTo("teachers")}
                  className="bg-transparent hover:bg-green-600/20 border-2 hover:border-green-400 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-green-400/25 hover:scale-105 rounded-xl text-white border-white btn-responsive"
                >
                  Batafsil Ma'lumot
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Content - Instructor Profile */}
          <div className="hidden lg:flex order-1 lg:order-2 justify-center">
            <ScrollAnimation animationType="rotateIn" delay={400}>
              <div className="relative group">
                <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 border border-white/20">
                  <img
                    src="https://i.postimg.cc/BvPnZWxg/Post-to-FB-Muzaffar.png"
                    alt="Islamic Finance Instructor"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-sm border border-white/20 rounded-full px-6 py-4 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                  <div className="text-center">
                    <div className="text-white text-lg font-semibold whitespace-nowrap">Muzaffar Husniddinov</div>
                    <div className="text-green-400 text-sm font-medium">Moliya Sohasida Mutaxassis</div>
                    <div className="text-white/70 text-xs mt-1">10+ yillik tajriba</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <ScrollAnimation animationType="fade" delay={800}>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </ScrollAnimation>
      {/* Add bottom padding for mobile */}
      <div className="block sm:hidden pb-8" />
    </section>
  )
}
