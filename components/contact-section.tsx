"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { companyInfo } from "@/lib/data"
import { useInView } from "@/hooks/useInView"

export default function ContactSection() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 })
  const [contentRef, contentInView] = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-plus-jakarta font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to upgrade your roasting operation? Our team of experts is here to help you find the perfect solution.
          </p>
        </div>

        {/* Contact Info and Map */}
        <div 
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Side - Contact Information */}
          <div 
            className={`transition-all duration-1000 ${
              contentInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-plus-jakarta font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div 
                    className={`flex items-start gap-4 transition-all duration-1000 ${
                      contentInView 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-12'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">{companyInfo.contact.phone}</p>
                      <p className="text-sm text-accent">Senin - Jumat, 08:30 - 17:00</p>
                    </div>
                  </div>

                  <div 
                    className={`flex items-start gap-4 transition-all duration-1000 ${
                      contentInView 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-12'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">{companyInfo.contact.email}</p>
                      <p className="text-sm text-accent">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div 
                    className={`flex items-start gap-4 transition-all duration-1000 ${
                      contentInView 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-12'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">{companyInfo.contact.address}</p>
                      <p className="text-sm text-accent">Visit our showroom by appointment</p>
                    </div>
                  </div>

                  <div 
                    className={`flex items-start gap-4 transition-all duration-1000 ${
                      contentInView 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-12'
                    }`}
                    style={{ transitionDelay: '800ms' }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Support Hours</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Senin - Jumat</span>
                          <span className="text-foreground font-medium">08:30 - 17:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sabtu</span>
                          <span className="text-foreground font-medium">08:00 - 12:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Minggu</span>
                          <span className="text-foreground font-medium">Tutup</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div 
                className={`transition-all duration-1000 ${
                  contentInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <div className="flex justify-center">
                  <a
                    href="mailto:qohua@qimtronics.com"
                    className="inline-flex items-center justify-center px-8 py-4 bg-coffee-700 text-white rounded-lg hover:bg-coffee-600 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Google Maps */}
          <div 
            className={`transition-all duration-1000 ${
              contentInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-coffee-lg border border-coffee-200">
              <div className="p-4 bg-coffee-50 border-b border-coffee-200">
                <h3 className="text-lg font-semibold text-coffee-900 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Our Location
                </h3>
              </div>
              <div className="aspect-w-16 aspect-h-12 h-96 lg:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7862284687755!2d107.58793631536562!3d-6.918540669706738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6b8b3c6b8a5%3A0x7a9b8c2d4e5f6a7b!2sJl.%20Hegarmanah%20Tengah%20No.181%2C%20Hegarmanah%2C%20Kec.%20Cidadap%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040141!5e0!3m2!1sen!2sid!4v1694509847123!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor Qohua - Qimtronics"
                />
              </div>
              <div className="p-4 bg-coffee-50">
                <a
                  href="https://maps.google.com/?q=Qimtronics,+Jl.+Hegarmanah+Tengah+No.181+Kel.+Hegarmanah+Kec.Cidadap+Kota+Bandung+40141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-coffee-700 hover:text-coffee-600 font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
