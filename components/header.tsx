"use client"

import { Button } from "@/components/ui/button"
import SignupModal from "./signup-modal"
import { ThemeToggle } from "./theme-toggle"

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

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/80 bg-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between bg-transparent">
        <div className="flex items-center gap-2">
          <img
  src="/4.svg"
  alt="Mezon Ta'lim Logo"
  className="h-[230px] w-[230px] sm:h-[170px] sm:w-[170px] md:h-[230px] md:w-[230px] object-contain"
/>
        </div>
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => smoothScrollTo("teachers")}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
          >
            Kurs haqida
          </button>
          <button
            onClick={() => smoothScrollTo("pricing")}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
          >
            Narxlar
          </button>
          <button
            onClick={() => smoothScrollTo("faq")}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
          >
            Savollar uchun
          </button>
          <button
            onClick={() => smoothScrollTo("footer")}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
          >
            Bog'lanish
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <SignupModal>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 rounded-xl">
              Ro'yxatdan o'tish
            </Button>
          </SignupModal>
        </div>
      </div>
    </header>
  )
}