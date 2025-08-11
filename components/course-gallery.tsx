"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const courseImages = [
  {
    id: 1,
    src: "https://i.postimg.cc/tJpDBVTY/1.jpg",
    alt: "",
    title: ""
  },
  {
    id: 2,
    src: "https://i.postimg.cc/pdvZWFfk/2.jpg",
    alt: "",
    title: ""
  },
  {
    id: 3,
    src: "https://i.postimg.cc/3r0nZYxX/3.jpg",
    alt: "",
    title: ""
  },
  {
    id: 4,
    src: "https://i.postimg.cc/0N6wq53Z/4.jpg",
    alt: "",
    title: ""
  },
  {
    id: 5,
    src: "https://i.postimg.cc/R0jnC5xm/5.jpg",
    alt: "",
    title: ""
  },
  {
    id: 6,
    src: "https://i.postimg.cc/rsT0W1pY/6.jpg",
    alt: "",
    title: ""
  }
]

export default function CourseGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Get slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth >= 1024) return 3 // Desktop
    if (window.innerWidth >= 768) return 2  // Tablet
    return 1 // Mobile
  }

  // Auto-play functionality
  useEffect(() => {
    const slidesPerView = getSlidesPerView()
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(courseImages.length / slidesPerView))
    }, 4000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const slidesPerView = getSlidesPerView()
      return prev === 0 ? Math.ceil(courseImages.length / slidesPerView) - 1 : prev - 1
    })
  }

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const slidesPerView = getSlidesPerView()
      return (prev + 1) % Math.ceil(courseImages.length / slidesPerView)
    })
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Touch/Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX - translateX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX - startX
    setTranslateX(currentX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    const slidesPerView = getSlidesPerView()
    const slideWidth = carouselRef.current?.offsetWidth || 0
    const threshold = slideWidth / 3

    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        goToPrevious()
      } else {
        goToNext()
      }
    }
    setTranslateX(0)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX - translateX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX - startX
    setTranslateX(currentX)
  }

  const handleTouchEnd = () => {
    handleMouseUp()
  }

  // Calculate transform for current slide
  const getTransform = () => {
    const slidesPerView = getSlidesPerView()
    const slideWidth = 100 / slidesPerView
    return `translateX(-${currentIndex * slideWidth}%)`
  }

  const totalSlides = Math.ceil(courseImages.length / getSlidesPerView())

  return (
    <section className="py-[70px] bg-muted relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <ScrollAnimation animationType="slideDown">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
              Kurslarimizdan lavhalar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O'quvchilarimizning real dars jarayonlaridan sur'atlar
            </p>
          </div>
        </ScrollAnimation>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-[20px]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: getTransform() }}
            >
              {courseImages.map((image, index) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 w-full lg:w-1/3 md:w-1/2 px-2"
                >
                  <div className="group relative overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 md:h-80 object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-primary-foreground font-semibold text-sm">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary shadow-lg shadow-primary/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 