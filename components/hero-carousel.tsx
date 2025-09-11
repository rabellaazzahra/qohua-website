"use client"

import { useState, useEffect } from "react"
import { productData } from "@/lib/data"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productData.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[calc(100dvh-4.5rem)] overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary">
      {/* Modern Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-8 h-8 rounded-full border-2 border-primary transform rotate-12" />
        <div className="absolute top-32 right-20 w-6 h-6 rounded-full border-2 border-primary transform -rotate-45" />
        <div className="absolute bottom-20 left-32 w-10 h-10 rounded-full border-2 border-primary transform rotate-45" />
        <div className="absolute bottom-40 right-16 w-7 h-7 rounded-full border-2 border-primary transform -rotate-12" />
        
        {/* Bean Patterns */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-5 bg-primary/10 rounded-full transform rotate-45"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Sliding carousel container */}
      <div 
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {productData.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-full relative"
          >
            <div className="absolute inset-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-40" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-muted/20" />
            </div>
            
            {/* Enhanced Steam Animation */}
            <div className="absolute top-16 right-16 opacity-30">
              <div className="flex space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-20 bg-gradient-to-t from-primary/60 via-accent/40 to-transparent rounded-full animate-pulse"
                    style={{ 
                      animationDelay: `${i * 400}ms`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-6xl w-full">
                <div className="mb-2 sm:mb-4">
                  <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm sm:text-base md:text-lg text-primary font-bold mb-2 sm:mb-4 tracking-wide backdrop-blur-sm">
                    {item.subtitle}
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-plus-jakarta font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                  {item.title}
                </h2>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {productData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-5 h-5 rounded-full transition-all duration-300 border-2 hover:scale-110 ${
              index === currentSlide 
                ? "bg-primary border-primary scale-125 shadow-lg" 
                : "bg-secondary border-muted-foreground/50 hover:border-primary/70"
            }`}
          />
        ))}
      </div>

      {/* Steam Particles */}
      <div className="absolute bottom-12 left-12 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary animate-bounce"
            style={{
              left: `${i * 6}px`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2.5s'
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 opacity-10 animate-pulse">
        <div className="w-12 h-12 rounded-full bg-primary/20 blur-sm" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="w-8 h-8 rounded-full bg-accent/20 blur-sm" />
      </div>
    </div>
  )
}


