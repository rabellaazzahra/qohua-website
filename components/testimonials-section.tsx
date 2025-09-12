"use client"

import { useInView } from "@/hooks/useInView"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Owner, Kopi Nusantara",
    location: "Jakarta",
    content: "Roastrix 400 Pro benar-benar mengubah bisnis kopi saya. Dengan sensor first crack dan color detection, hasil roasting jadi sangat konsisten. Customer notice perbedaan kualitas yang signifikan!",
    rating: 5,
    product: "Roastrix 400 Pro"
  },
  {
    id: 2,
    name: "Sari Dewi",
    role: "Home Coffee Enthusiast",
    location: "Bandung",
    content: "Pourfect 60 sempurna untuk rumahan! Manual brewing yang selama ini ribet, sekarang jadi mudah dan hasilnya konsisten. Save profile-nya membantu banget untuk repeat resep favorit.",
    rating: 5,
    product: "Pourfect 60"
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    role: "Coffee Roaster",
    location: "Yogyakarta",
    content: "Koffie Buddy adalah game-changer untuk quality control. Data TDS, moisture, dan density yang akurat membantu saya create profil roasting yang perfect. Plug and play modulenya praktis banget!",
    rating: 5,
    product: "Koffie Buddy"
  },
  {
    id: 4,
    name: "Lisa Permata",
    role: "Cafe Manager",
    location: "Surabaya",
    content: "Tim saya yang awalnya pemula bisa langsung operate Roastrix 400 Reguler dengan mudah. Auto mode-nya reliable, dan connectivitynya dengan app memudahkan monitoring dari jauh.",
    rating: 5,
    product: "Roastrix 400 Reguler"
  }
]

export default function TestimonialsSection() {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 })

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-muted/20 via-background to-muted/20 transition-all duration-1000 ${
        sectionInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-plus-jakarta font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from coffee professionals and enthusiasts who trust Qohua equipment
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 ${
                sectionInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{testimonial.product}</div>
                  <div className="text-xs text-muted-foreground">Verified Purchase</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the difference Qohua equipment can make for your coffee business or home brewing setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Products
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
