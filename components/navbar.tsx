"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Coffee, Home, Package, Info, Headphones, Phone } from "lucide-react"
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
        return <Coffee className={iconClass} />
    }
  }

  return (
    <nav className="bg-background/80 backdrop-blur-xl border-b border-border sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Coffee className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-plus-jakarta font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {companyInfo.name}
                </h1>
                <p className="text-xs text-muted-foreground font-medium">Premium Coffee Equipment</p>
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
              <div className="ml-6 pl-6 border-l border-border">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold shadow-sm hover:shadow-md">
                  <Coffee className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </div>
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
            <div className={`pt-4 border-t border-border mt-4 transform transition-all duration-300 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: `${navigationItems.length * 50}ms` }}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl font-semibold shadow-sm">
                <Coffee className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
