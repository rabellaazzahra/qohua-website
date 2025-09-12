"use client"

import { useInView } from "@/hooks/useInView"

export default function Footer() {
  const [ref, isInView] = useInView()

  return (
    <footer ref={ref} className="bg-sidebar text-sidebar-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-sidebar-primary">Qohua</h3>
            <p className="text-sm leading-relaxed">
              Premium roasting equipment for commercial and industrial applications. Quality, precision, and reliability
              you can trust.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Roastrix 400 Reguler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Roastrix 400 Pro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Pourfect 60
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Koffie Buddy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  I Scale uno electric
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-sidebar-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sidebar-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Parts & Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Qohua Project - Qimtronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
