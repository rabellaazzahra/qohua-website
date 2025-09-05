"use client"

import { useInView } from "@/hooks/useInView"

export default function VideoSection() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>({ threshold: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className={`py-16 bg-muted transition-all duration-1000 ${
        sectionInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">See Our Equipment in Action</h2>
          <p className="text-xl text-muted-foreground">
            Watch how our roasting equipment delivers consistent, high-quality results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="RoastPro Equipment Demo"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
