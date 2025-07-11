"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animationType?:
    | "up"
    | "left"
    | "right"
    | "scale"
    | "fade"
    | "slideUp"
    | "slideDown"
    | "rotateIn"
    | "bounceIn"
    | "zoomIn"
    | "flipIn"
  delay?: number
  duration?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  animationType = "up",
  delay = 0,
  duration = 300,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Add client-ready class to body when component mounts
    document.body.classList.add('client-ready')
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay, isClient])

  const getAnimationClass = () => {
    switch (animationType) {
      case "left":
        return "animate-on-scroll-left"
      case "right":
        return "animate-on-scroll-right"
      case "scale":
        return "animate-on-scroll-scale"
      case "fade":
        return "animate-on-scroll-fade"
      case "slideUp":
        return "animate-on-scroll-slide-up"
      case "slideDown":
        return "animate-on-scroll-slide-down"
      case "rotateIn":
        return "animate-on-scroll-rotate"
      case "bounceIn":
        return "animate-on-scroll-bounce"
      case "zoomIn":
        return "animate-on-scroll-zoom"
      case "flipIn":
        return "animate-on-scroll-flip"
      default:
        return "animate-on-scroll"
    }
  }

  // Show content immediately on server or if client-side rendering fails
  if (!isClient) {
    return <div className={`${className} opacity-0`}>{children}</div>
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}
