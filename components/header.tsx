"use client"
import { Button } from "@/components/ui/button"
import { GraduationCapIcon } from "lucide-react"
import SignupModal from "./signup-modal"

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
    <header className="sticky top-0 z-50 w-full border-b border-white/20 backdrop-blur supports-[backdrop-filter]:bg-black/80 bg-green-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between bg-transparent">
        <div className="flex items-center gap-2">
          <GraduationCapIcon className="h-6 w-6 text-green-400" />
          <span className="text-xl font-bold text-white">MezonEdu</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => smoothScrollTo("teachers")}
            className="text-sm font-medium text-white transition-colors hover:text-green-400 cursor-pointer"
          >
            Kurs haqida
          </button>
          <button
            onClick={() => smoothScrollTo("pricing")}
            className="text-sm font-medium text-white transition-colors hover:text-green-400 cursor-pointer"
          >
            Narxlar
          </button>
          <button
            onClick={() => smoothScrollTo("faq")}
            className="text-sm font-medium text-white transition-colors hover:text-green-400 cursor-pointer"
          >
            Savollar uchun
          </button>
          <button
            onClick={() => smoothScrollTo("footer")}
            className="text-sm font-medium text-white transition-colors hover:text-green-400 cursor-pointer"
          >
            Bog'lanish
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <SignupModal>
            <Button className="bg-green-600 hover:bg-green-700 border border-white/20 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25 rounded-xl text-white">
              Ro'yxatdan o'tish
            </Button>
          </SignupModal>
        </div>
      </div>
    </header>
  )
}
