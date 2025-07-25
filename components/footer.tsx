import Link from "next/link"
import { GraduationCapIcon, Instagram, Send } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function Footer() {
  return (
    <footer id="footer" className="bg-black border-t border-white/20 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Geometric Border */}
        <ScrollAnimation animationType="slideUp">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mb-8"></div>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <ScrollAnimation animationType="left" delay={200}>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <GraduationCapIcon className="h-5 w-5 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">MezonEdu</span>
            </div>
          </ScrollAnimation>

          {/* Contact Info & Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Contact Information */}
            <ScrollAnimation animationType="slideUp" delay={400}>
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <Link
                  href="tel:+998123456789"
                  className="text-white hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="text-green-400 group-hover:scale-110 transition-transform duration-300">📞</span>
                  +998 12 345 67 89
                </Link>

                <Link
                  href="mailto:info@mezonedu.uz"
                  className="text-white hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="text-green-400 group-hover:scale-110 transition-transform duration-300">✉️</span>
                  info@mezonedu.uz
                </Link>
              </div>
            </ScrollAnimation>

            {/* Social Media Icons */}
            <ScrollAnimation animationType="right" delay={600}>
              <div className="flex items-center gap-4">
                <Link
                  href="https://instagram.com/mezonedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/25"
                >
                  <Instagram className="h-5 w-5" />
                </Link>

                <Link
                  href="https://t.me/mezonedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/25"
                >
                  <Send className="h-5 w-5" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <ScrollAnimation animationType="fade" delay={800}>
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="text-center">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} MezonEdu. Barcha huquqlar himoyalangan.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}
