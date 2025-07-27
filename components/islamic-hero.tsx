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
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700 ease-in-out" />
      
      {/* Light Mode Background Elements */}
      <div className="absolute inset-0 dark:hidden">
        {/* Top-left soft circle */}
        <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 md:w-48 lg:w-48 bg-green-400 opacity-10 rounded-full blur-2xl sm:blur-3xl transition-all duration-700 ease-in-out" />
        {/* Top-right soft circle */}
        <div className="absolute top-32 right-16 w-16 h-16 sm:w-24 md:w-32 lg:w-32 bg-green-400 opacity-8 rounded-full blur-2xl sm:blur-3xl transition-all duration-700 ease-in-out" />
        {/* Bottom-left soft wave */}
        <div className="absolute bottom-32 left-12 w-32 h-32 sm:w-48 md:w-64 lg:w-64 bg-green-400 opacity-6 rounded-full blur-2xl sm:blur-3xl transition-all duration-700 ease-in-out" />
        {/* Center-right soft element */}
        <div className="absolute top-1/2 right-24 w-24 h-24 sm:w-32 md:w-40 lg:w-40 bg-green-400 opacity-8 rounded-full blur-2xl sm:blur-3xl transition-all duration-700 ease-in-out" />
        {/* Bottom-center soft dot */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 md:w-24 lg:w-24 bg-green-400 opacity-5 rounded-full blur-xl sm:blur-2xl transition-all duration-700 ease-in-out" />
        {/* Top-center thin line */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-1 sm:w-32 md:w-48 lg:w-48 bg-green-400 opacity-8 rounded-full blur-sm transition-all duration-700 ease-in-out" />
      </div>

      {/* Dark Mode Background Elements */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Top-left neon glow */}
        <div className="absolute top-16 left-8 w-28 h-28 sm:w-40 md:w-56 lg:w-56 bg-green-400 opacity-15 rounded-full blur-2xl sm:blur-3xl transition-all duration-700 ease-in-out" />
        {/* Top-right neon glow */}
        <div className="absolute top-24 right-12 w-20 h-20 sm:w-28 md:w-40 lg:w-40 bg-green-400 opacity-12 rounded-full blur-2xl sm:blur-3xl transition-all duration-700 ease-in-out" />
        {/* Bottom-left neon wave */}
        <div className="absolute bottom-24 left-8 w-40 h-40 sm:w-56 md:w-80 lg:w-80 bg-green-400 opacity-10 rounded-full blur-2xl sm:blur-3xl transition-all duration-700 ease-in-out" />
        {/* Center-right neon element */}
        <div className="absolute top-1/2 right-20 w-24 h-24 sm:w-32 md:w-48 lg:w-48 bg-green-400 opacity-12 rounded-full blur-2xl sm:blur-3xl transition-all duration-700 ease-in-out" />
        {/* Bottom-right neon dot */}
        <div className="absolute bottom-16 right-8 w-16 h-16 sm:w-20 md:w-32 lg:w-32 bg-green-400 opacity-8 rounded-full blur-xl sm:blur-2xl transition-all duration-700 ease-in-out" />
        {/* Center-left neon line */}
        <div className="absolute top-1/2 left-8 w-20 h-1 sm:w-28 md:w-40 lg:w-40 bg-green-400 opacity-10 rounded-full blur-sm transition-all duration-700 ease-in-out" />
        {/* Top-center neon dot */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 md:w-16 lg:w-16 bg-green-400 opacity-12 rounded-full blur-lg sm:blur-xl transition-all duration-700 ease-in-out" />
      </div>

      {/* Subtle overlay for content readability */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-[1px] transition-all duration-700 ease-in-out" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 lg:px-1.5">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-4 lg:pt-8 my-0 pb-0 lg:pb-1">
          {/* Mobile: Image First, Desktop: Text First */}
          <div className="lg:hidden order-1 mb-1 pt-3">
            <ScrollAnimation animationType="zoomIn" delay={200}>
              <div className="relative flex items-center justify-center">
                <div className="relative group">
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border border-border">
                    <img
                      src="https://i.postimg.cc/Hsjz4Cyb/Untitled-design.jpg"
                      alt="Islamic Finance Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-full px-4 py-3 shadow-xl">
                    <div className="text-center">
                      <div className="text-foreground text-base font-semibold whitespace-nowrap">Muxtorjon Akramov</div>
                      <div className="text-primary text-sm">Moliya Mutaxassisi</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1 text-left lg:pl-16">
            <ScrollAnimation animationType="slideDown" delay={100}>
              <div className="space-y-2 mt-0 pt-0">
                <div className="h-px w-16 bg-gradient-to-r from-green-400 to-transparent" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="left" delay={300}>
              <div className="space-y-4 leading-7 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center leading-9">
                  <span className="text-foreground text-5xl">Islom </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 text-5xl">
                    Moliyasi 1.0
                  </span>
                  <br />
                  <span className="text-foreground leading-7 text-5xl">          {""}   </span>
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-xl px-0 text-center">
                  Moliyaviy savodxonlikni Islomiy qadriyatlar asosida o'rganing — halollik, adolat va ijtimoiy mas'uliyat bilan yo'lingizni boshlang
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="bounceIn" delay={500}>
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">12 ta </div>
                  <div className="text-muted-foreground text-sm">darslar</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1.5 oy</div>
                  <div className="text-muted-foreground text-sm">ichida</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">3 dan ortiq</div>
                  <div className="text-muted-foreground text-sm">ustozlar</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="slideUp" delay={700}>
              <div className="flex flex-row gap-4 border-0 px-0 text-justify items-center justify-center mb-8 sm:mb-0">
                <SignupModal>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-border hover:border-primary hover:shadow-primary/25 rounded-xl btn-responsive"
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
                  className="bg-transparent hover:bg-primary/20 border-2 hover:border-primary transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 rounded-xl text-foreground border-gray-300 dark:border-white btn-responsive"
                >
                  Batafsil Ma'lumot
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Content - Instructor Profile */}
          <div className="hidden lg:flex order-1 lg:order-2 justify-center mt-8">
            <ScrollAnimation animationType="rotateIn" delay={400}>
              <div className="relative group">
                <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 border border-border">
                  <img
                    src="https://i.postimg.cc/Hsjz4Cyb/Untitled-design.jpg"
                    alt="Islamic Finance Instructor"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-full px-6 py-4 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                  <div className="text-center">
                    <div className="text-foreground text-lg font-semibold whitespace-nowrap">Muzaffar Husniddinov</div>
                    <div className="text-primary text-sm font-medium">Moliya Sohasida Mutaxassis</div>
                    <div className="text-muted-foreground text-xs mt-1">10+ yillik tajriba</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <ScrollAnimation animationType="fade" delay={800}>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </ScrollAnimation>
      {/* Add bottom padding for mobile */}
      <div className="block sm:hidden pb-8" />
    </section>
  )
}
