"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Settings, Zap, Shield, Coffee, Download, QrCode, ChevronLeft, ChevronRight } from "lucide-react"
import { type ProductData } from "@/lib/data"
import { useState } from "react"
import Image from "next/image"

interface ProductDialogProps {
  product: ProductData | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductDialog({ product, isOpen, onClose }: ProductDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  if (!product) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[calc(100vw-40px)] sm:max-w-4xl max-h-[90vh] overflow-hidden bg-background border border-border shadow-xl">
        <div className="overflow-y-auto max-h-[85vh] scrollbar-hide">
          <DialogHeader className="pb-6 border-b border-border">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{product.title}</span>
                </DialogTitle>
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/25">
                    <Award className="w-3 h-3 mr-1" />
                    Premium Quality
                  </Badge>
                </div>
              </div>
            </div>
          </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          {/* Left Column - Image Carousel and Description */}
          <div className="space-y-6">
            {/* Image Carousel */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border">
                <Image 
                  src={product.images[currentImageIndex]} 
                  alt={`${product.title} - Image ${currentImageIndex + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Navigation Buttons */}
                {product.images.length > 1 && (
                  <>
                    <Button
                      onClick={prevImage}
                      size="sm"
                      variant="secondary"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={nextImage}
                      size="sm"
                      variant="secondary"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>
              
              {/* Image Indicators */}
              {product.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div className="bg-muted p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Coffee className="w-5 h-5 text-primary" />
                </div>
                Product Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">{product.detailedDescription}</p>
            </div>
          </div>

          {/* Right Column - Specifications and Features */}
          <div className="space-y-6">
            {/* Specifications */}
            <div className="bg-muted p-6 rounded-2xl border border-border hover:bg-secondary transition-colors duration-200">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                Technical Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-sm font-medium">{key}:</span>
                    <span className="text-foreground font-semibold text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-muted p-6 rounded-2xl border border-border hover:bg-secondary transition-colors duration-200">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                Key Features
              </h3>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                Downloads & Resources
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Product Brochure Download */}
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <a href={product.brochureUrl} download className="flex items-center gap-3">
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">Brochure Product</span>
                  </a>
                </Button>

                {/* QR Code Download */}
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                >
                  <a href={product.qrCodeUrl} download className="flex items-center gap-3">
                    <QrCode className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-foreground">QR</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
