"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogPortal, DialogOverlay } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, CheckCircle, User, Phone, GraduationCap } from "lucide-react"

interface SignupModalProps {
  children: React.ReactNode
  className?: string
}

const courseOptions = [
  { value: "boshlangich", label: "Boshlang'ich" },
  { value: "orta", label: "O'rta" },
  { value: "professional", label: "Professional" },
]

export default function SignupModal({ children, className }: SignupModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", phone: "", course: "" })
      }, 3000)
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={className}>
          {children}
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <DialogContent className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-card rounded-[20px] p-0 shadow-2xl border border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:max-w-[500px] sm:w-auto">
        {/* Close Button */}
                  <DialogClose className="absolute right-4 top-4 z-10 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-all duration-200 hover:scale-110 border border-border">
            <X className="w-4 h-4 text-muted-foreground" />
          </DialogClose>

        {/* Modal Content */}
        <div className="p-6 sm:px-8 sm:py-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6 sm:mb-6">
                <h2 className="text-2xl sm:text-2xl font-bold text-card-foreground mb-2 font-poppins">
                  Ro'yxatdan o'ting
                </h2>
                <p className="text-muted-foreground text-sm sm:text-sm">
                  Islom moliyasi kursiga ro'yxatdan o'tish uchun ma'lumotlaringizni kiriting
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-4">
                {/* Name Input */}
                <div className="space-y-2 sm:space-y-2">
                                             <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
                             <User className="w-4 h-4 text-primary" />
                             Ism
                           </label>
                                             <Input
                             type="text"
                             placeholder="Ismingizni kiriting"
                             value={formData.name}
                             onChange={(e) => handleInputChange("name", e.target.value)}
                             className="h-11 sm:h-10 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-200 text-sm"
                             required
                           />
                </div>

                {/* Phone Input */}
                <div className="space-y-2 sm:space-y-2">
                  <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Telefon raqam
                  </label>
                  <Input
                    type="tel"
                    placeholder="+998 XX XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-11 sm:h-10 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Course Selection */}
                <div className="space-y-2 sm:space-y-2">
                  <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    Kurs tanlang
                  </label>
                  <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                    <SelectTrigger className="h-11 sm:h-10 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-200 text-sm">
                      <SelectValue placeholder="Kurs darajasini tanlang" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border rounded-xl">
                      {courseOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="text-card-foreground hover:bg-muted rounded-lg">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-11 sm:h-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-[1.01] font-poppins text-sm"
                >
                  Jo'natish
                </Button>
              </form>

              {/* Footer */}
              <div className="mt-4 sm:mt-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Ma'lumotlaringiz xavfsiz saqlanadi va faqat kurs maqsadida ishlatiladi
                </p>
              </div>
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-6 sm:py-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2 font-poppins">
                ✅ Ma'lumotlaringiz yuborildi!
              </h3>
              <p className="text-muted-foreground text-sm">
                Tez orada siz bilan bog'lanamiz
              </p>
            </div>
          )}
        </div>
      </DialogContent>
      </DialogPortal>
    </Dialog>
  )
} 