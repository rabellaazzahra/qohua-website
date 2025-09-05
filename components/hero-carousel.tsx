"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { productData } from "@/lib/data"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productData.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productData.length) % productData.length)
  }

  const smoothScrollToProduct = (productId: string) => {
    // First scroll to products section
    const productsSection = document.getElementById('products')
    if (productsSection) {
      const offsetTop = productsSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      
      // Then highlight the specific product after scrolling
      setTimeout(() => {
        const productElement = document.querySelector(`[data-product-id="${productId}"]`)
        if (productElement) {
          productElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }
      }, 1000)
    }
  }

  return (
    <div className="relative h-[calc(100dvh-4rem)] overflow-hidden bg-gradient-to-br from-background to-secondary">
      {/* Modern Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-8 h-8 rounded-full border-2 border-current transform rotate-12" />
        <div className="absolute top-32 right-20 w-6 h-6 rounded-full border-2 border-current transform -rotate-45" />
        <div className="absolute bottom-20 left-32 w-10 h-10 rounded-full border-2 border-current transform rotate-45" />
        <div className="absolute bottom-40 right-16 w-7 h-7 rounded-full border-2 border-current transform -rotate-12" />
      </div>

      {productData.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover opacity-20" 
            />
          </div>
          
          {/* Modern Animation Effect */}
          <div className="absolute top-20 right-20 opacity-30">
            <div className="flex space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-16 bg-gradient-to-t from-primary/60 to-transparent rounded-full animate-pulse"
                  style={{ 
                    animationDelay: `${i * 300}ms`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center text-foreground max-w-5xl w-full">
              <div className="inline-flex items-center gap-3 mb-2 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/30" />
                </div>
              </div>
              
              <p className="text-sm sm:text-lg md:text-xl text-primary font-semibold mb-1 sm:mb-2 tracking-wide">
                {item.subtitle}
              </p>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus-jakarta font-bold mb-3 sm:mb-4 md:mb-6 text-foreground leading-tight">
                {item.title}
              </h2>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  onClick={() => smoothScrollToProduct(item.id)}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 backdrop-blur-md rounded-full p-3 transition-all duration-300 border border-primary/30 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 backdrop-blur-md rounded-full p-3 transition-all duration-300 border border-primary/30 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {productData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentSlide 
                ? "bg-primary border-primary scale-125" 
                : "bg-transparent border-foreground/50 hover:border-primary/70"
            }`}
          />
        ))}
      </div>

      {/* Modern Particles */}
      <div className="absolute bottom-10 left-10 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary animate-bounce"
            style={{
              left: `${i * 8}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  )
}
