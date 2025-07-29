"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogPortal, DialogOverlay, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, CheckCircle, User, Phone, GraduationCap, XCircle } from "lucide-react"

interface SignupModalProps {
  children: React.ReactNode
  className?: string
}

const courseOptions = [
  { value: "tadbirkor", label: "Tadbirkor" },
  { value: "talaba", label: "Talaba" },
  { value: "iqtisodchi", label: "Iqtisodchi" },
  { value: "boshqa", label: "Boshqa" },
]


export default function SignupModal({ children, className }: SignupModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  })
  const [courseError, setCourseError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.course) {
      setCourseError(true);
      return;
    } else {
      setCourseError(false);
    }
    const params = new URLSearchParams();
    params.append("name", formData.name);
    params.append("number", formData.phone);
    params.append("job", formData.course);
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbwA1izeC-6JYcoem4yvLfJQ7qix2H2Chpw91f3o7u0DG9YS8jXofkX0TQMgil0JX1xKoA/exec", {
        method: "POST",
        body: params
      });
      // If status is not 200, treat as error (for robustness, though Apps Script may not return status)
      if (!res.ok) {
        throw new Error("Request failed");
      }
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", course: "" });
      }, 3000);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
      console.log("Signup error", e);
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (field === "course" && value) {
      setCourseError(false);
    }
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
        <DialogTitle className="sr-only">Ro'yxatdan o'ting</DialogTitle>

        {/* Modal Content */}
        <div className="p-6 sm:px-8 sm:py-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-10">
              <svg className="animate-spin h-10 w-10 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
              <div className="text-primary text-lg font-semibold">Yuborilmoqda...</div>
            </div>
          ) : isError ? (
            /* Error Message */
            <div className="text-center py-6 sm:py-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2 font-poppins">
                ❌ Ma'lumotlarni yuborishda xatolik yuz berdi!
              </h3>
              <p className="text-muted-foreground text-sm">
                Iltimos, qayta urinib ko'ring
              </p>
            </div>
          ) : !isSubmitted ? (
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
                    Sohangizni tanlang
                  </label>
                  <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                    <SelectTrigger className={`h-11 sm:h-10 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-200 text-sm ${courseError ? 'border-red-500' : ''}`}>
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
                  {courseError && (
                    <div className="text-xs text-red-500 mt-1">Sohangizni tanlash majburiy</div>
                  )}
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