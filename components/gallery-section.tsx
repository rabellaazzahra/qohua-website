"use client"
import { useInView } from "@/hooks/useInView"
import Image from "next/image"

const galleryItems = [
  { id: 1, image: "/gallery-1.jpg" },
  { id: 2, image: "/gallery-2.jpg" },
  { id: 3, image: "/gallery-3.jpg" },
  { id: 4, image: "/gallery-4.jpg" },
  { id: 5, image: "/gallery-5.jpg" },
  { id: 6, image: "/gallery-6.jpg" },
  { id: 7, image: "/gallery-7.jpg" },
  { id: 8, image: "/gallery-8.jpg" },
  { id: 9, image: "/gallery-9.jpg" },
  { id: 10, image: "/gallery-10.jpg" }
]

export default function GallerySection() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>({ threshold: 0.2 })
  const [galleryRef, galleryInView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-plus-jakarta font-bold text-foreground mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our facilities, equipment showcase, and customer success stories
          </p>
        </div>

        {/* Gallery Grid - 4 images per row for better landscape positioning */}
        <div 
          ref={galleryRef}
          className={`transition-all duration-1000 ${
            galleryInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg border border-border transition-all duration-300 hover:shadow-xl"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <Image
                  src={item.image}
                  alt={`Gallery ${item.id}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
