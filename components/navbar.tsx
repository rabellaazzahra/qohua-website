"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Coffee } from "lucide-react"
import { navigationItems, companyInfo } from "@/lib/data"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId.replace('#', ''))
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav className="bg-white backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-plus-jakarta font-bold text-foreground">
                {companyInfo.name}
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => smoothScrollTo(item.href)} 
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium border-b-2 border-transparent hover:border-primary/50"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary hover:bg-primary/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border rounded-b-lg shadow-lg">
              {navigationItems.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => smoothScrollTo(item.href)} 
                  className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-all duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
