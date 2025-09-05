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
          <div className="relative group overflow-hidden rounded-3xl shadow-coffee-lg coffee-hover">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/70 via-transparent to-transparent" />
            
            {/* Enhanced Coffee Steam Effect */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-16 bg-gradient-to-t from-gold-coffee/70 via-coffee-400/50 to-transparent rounded-full animate-pulse coffee-steam"
                    style={{ animationDelay: `${i * 300}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Coffee Bean Decoration */}
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-3 bg-gold-coffee/30 rounded-full transform rotate-45"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-plus-jakarta font-bold text-gradient-coffee leading-tight">
              {product.title}
            </h3>
            <p className="text-lg text-coffee-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features with Coffee Theme */}
          <div className="flex flex-wrap gap-3">
            {product.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-coffee-100 text-coffee-800 rounded-full text-sm font-semibold border border-coffee-200 coffee-hover cursor-default"
              >
                {feature}
              </span>
            ))}
          </div>

          <Button 
            onClick={() => setSelectedProduct(product)}
            className="btn-coffee-primary px-10 py-4 text-lg shadow-coffee-lg hover:shadow-coffee transform hover:scale-105 rounded-2xl"
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
    <section id="products" className="py-24 bg-coffee-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Coffee Theme */}
        <div 
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-coffee-dark flex items-center justify-center shadow-coffee-lg coffee-hover">
              <div className="w-10 h-10 rounded-2xl bg-coffee-50/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gold-coffee animate-pulse" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-plus-jakarta font-bold text-gradient-coffee">
              Our Premium Roasting Equipment
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-coffee-600 max-w-5xl mx-auto leading-relaxed font-medium">
            Discover our comprehensive range of professional roasting equipment designed for commercial and industrial
            applications. Each machine is engineered for precision, efficiency, and reliability.
          </p>
        </div>

        {/* Product List - Alternating Layout */}
        <div className="space-y-24 lg:space-y-40">
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
