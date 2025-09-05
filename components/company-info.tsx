"use client"

import { useInView } from "@/hooks/useInView"

export default function CompanyInfo() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>({ threshold: 0.2 })
  const [statsRef, statsInView] = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-16 bg-background transition-all duration-1000 ${
        sectionInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Company Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About RoastPro</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For over 25 years, RoastPro has been at the forefront of roasting equipment innovation. We specialize
                  in designing and manufacturing premium roasting solutions for commercial and industrial applications
                  worldwide.
                </p>
                <p>
                  Our commitment to quality, precision engineering, and customer satisfaction has made us the trusted
                  choice for coffee roasters, food processors, and industrial manufacturers across the globe.
                </p>
                <p>
                  From small-batch artisanal roasters to large-scale industrial operations, our equipment delivers
                  consistent results, energy efficiency, and reliable performance that our customers depend on.
                </p>
              </div>
            </div>

            {/* Company Stats */}
            <div 
              ref={statsRef}
              className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${
                statsInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center p-6 bg-card rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Installations Worldwide</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Location</h3>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1635959000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RoastPro Location"
              />
            </div>

            {/* Contact Information */}
            <div className="bg-card p-6 rounded-lg space-y-4 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Address:</strong> Jl. Industri Raya No. 123, Jakarta, Indonesia
                </p>
                <p>
                  <strong>Phone:</strong> +62 21 1234 5678
                </p>
                <p>
                  <strong>Email:</strong> info@roastpro.com
                </p>
                <p>
                  <strong>Business Hours:</strong> Mon-Fri 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
