"use client"
import { useInView } from "@/hooks/useInView"

const galleryItems = [
  {
    id: 1,
    title: "Professional Coffee Roasting",
    image: "/placeholder.svg",
    description: "State-of-the-art commercial roasting equipment"
  },
  {
    id: 2,
    title: "Industrial Grain Processing",
    image: "/placeholder.svg",
    description: "Large-scale grain roasting solutions"
  },
  {
    id: 3,
    title: "Automated Roasting Systems",
    image: "/placeholder.svg",
    description: "Smart automation for consistent results"
  },
  {
    id: 4,
    title: "Quality Control Lab",
    image: "/placeholder.svg",
    description: "Testing and quality assurance facilities"
  },
  {
    id: 5,
    title: "Customer Training Center",
    image: "/placeholder.svg",
    description: "Hands-on training for optimal equipment use"
  },
  {
    id: 6,
    title: "Manufacturing Excellence",
    image: "/placeholder.svg",
    description: "Precision manufacturing and assembly"
  },
  {
    id: 7,
    title: "Custom Solutions",
    image: "/placeholder.svg",
    description: "Tailored equipment for unique requirements"
  },
  {
    id: 8,
    title: "Global Support Network",
    image: "/placeholder.svg",
    description: "Worldwide service and maintenance"
  },
  {
    id: 9,
    title: "Installation Services",
    image: "/placeholder.svg",
    description: "Professional installation and setup"
  }
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

        {/* Gallery Grid - Simple 3x3 Grid */}
        <div 
          ref={galleryRef}
          className={`transition-all duration-1000 ${
            galleryInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-plus-jakarta font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
