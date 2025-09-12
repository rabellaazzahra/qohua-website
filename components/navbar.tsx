"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Package, Info, Headphones, Phone } from "lucide-react"
import { navigationItems, companyInfo } from "@/lib/data"
import Image from "next/image"

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

  const getNavIcon = (itemName: string) => {
    const iconClass = "w-4 h-4 mr-3 inline text-primary"
    switch (itemName) {
      case 'Home':
        return <Home className={iconClass} />
      case 'Products':
        return <Package className={iconClass} />
      case 'About':
        return <Info className={iconClass} />
      case 'Support':
        return <Headphones className={iconClass} />
      case 'Contact':
        return <Phone className={iconClass} />
      default:
        return <Package className={iconClass} />
    }
  }

  return (
    <nav className="bg-background/80 backdrop-blur-xl border-b border-border sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  src="/qohua-logo.png"
                  alt="Qohua Logo"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <button 
                  key={item.name}
                  onClick={() => smoothScrollTo(item.href)} 
                  className="relative px-4 py-2 text-foreground hover:text-primary font-semibold transition-all duration-300 rounded-xl hover:bg-secondary group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary hover:bg-secondary p-3 rounded-xl"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu with improved animation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-4 pb-6 space-y-2 bg-background/95 border-t border-border shadow-lg backdrop-blur-sm">
            {navigationItems.map((item, index) => (
              <button 
                key={item.name}
                onClick={() => smoothScrollTo(item.href)} 
                className={`block w-full text-left px-4 py-4 text-foreground hover:text-primary hover:bg-secondary rounded-xl transition-all duration-300 font-semibold border border-transparent hover:border-border transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {getNavIcon(item.name)}
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
