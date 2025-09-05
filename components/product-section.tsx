"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/useInView"
import ProductDialog from "@/components/product-dialog"
import { productData, type ProductData } from "@/lib/data"

function ProductItem({ product, index, isReversed }: { 
  product: ProductData, 
  index: number,
  isReversed: boolean 
}) {
  const [itemRef, itemInView] = useInView<HTMLDivElement>({ threshold: 0.1 })
  const [selectedProduct, setSelectedProduct] = useState<typeof product | null>(null)
  
  return (
    <>
      <div
        ref={itemRef}
        data-product-id={product.id}
        className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12 transition-all duration-1000 ${
          itemInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Coffee Steam Effect */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-12 bg-gradient-to-t from-primary/60 to-transparent rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-4">
            <h3 className="text-3xl lg:text-4xl font-plus-jakarta font-bold text-foreground leading-tight">
              {product.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-3">
            {product.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20"
              >
                {feature}
              </span>
            ))}
          </div>

          <Button 
            onClick={() => setSelectedProduct(product)}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>

      <ProductDialog 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}

export default function ProductSection() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>({ threshold: 0.2 })
  
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 rounded-full bg-white/30" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-plus-jakarta font-bold text-foreground">
              Our Premium Roasting Equipment
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of professional roasting equipment designed for commercial and industrial
            applications. Each machine is engineered for precision, efficiency, and reliability.
          </p>
        </div>

        {/* Product List - Alternating Layout */}
        <div className="space-y-20 lg:space-y-32">
          {productData.map((product, index) => (
            <ProductItem 
              key={product.id} 
              product={product} 
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
