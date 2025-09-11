import Link from "next/link"
import { GraduationCapIcon, Instagram, Send } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function Footer() {
  return (
    <footer id="footer" className="bg-card border-t border-border/40 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Geometric Border */}
        <ScrollAnimation animationType="slideUp">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <ScrollAnimation animationType="left" delay={200}>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <GraduationCapIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-card-foreground">Mezon Ta'lim</span>
            </div>
          </ScrollAnimation>

          {/* Contact Info & Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Contact Information */}
            <ScrollAnimation animationType="slideUp" delay={400}>
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <Link
                  href="tel:+998123456789"
                  className="text-card-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform duration-300">📞</span>
                   +998 90 109 77 99
                </Link>

                <Link
                  href="mailto:info@mezonedu.uz"
                  className="text-card-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform duration-300">✉️</span>
                  mezontalim@gmail.com
                </Link>
              </div>
            </ScrollAnimation>

            {/* Social Media Icons */}
            <ScrollAnimation animationType="right" delay={600}>
              <div className="flex items-center gap-4">
                <Link
                  href="https://instagram.com/mezonkengashi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Instagram className="h-5 w-5" />
                </Link>

                <Link
                  href="https://t.me/mezontalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send className="h-5 w-5" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <ScrollAnimation animationType="fade" delay={800}>
          <div className="mt-8 pt-6 border-t border-border/40">
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} MezonTa'lim. Barcha huquqlar himoyalangan.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}
