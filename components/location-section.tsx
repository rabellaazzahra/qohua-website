'use client'

import { useInView } from '@/hooks/useInView'

export default function LocationSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="location" className="py-16 lg:py-24 bg-gradient-to-b from-background to-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Lokasi <span className="text-gradient-coffee">Kantor Kami</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kunjungi kantor kami di Bandung untuk konsultasi langsung tentang solusi roasting dan brewing kopi Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Address Info */}
            <div 
              className={`transition-all duration-1000 delay-300 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-30 translate-y-10'
              }`}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-coffee-lg border border-coffee-200">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Informasi Lokasi
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coffee-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-coffee-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Alamat</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Qimtronics<br />
                        Jl. Hegarmanah Tengah No.181<br />
                        Kel. Hegarmanah Kec. Cidadap<br />
                        Kota Bandung 40141
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coffee-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-coffee-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Telepon</h4>
                      <p className="text-muted-foreground">+62 22 320 99001</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coffee-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-coffee-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email</h4>
                      <p className="text-muted-foreground">qohua@qimtronics.com</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coffee-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-coffee-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Jam Operasional</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Senin - Jumat: 08:00 - 17:00</p>
                        <p>Sabtu: 08:00 - 12:00</p>
                        <p>Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href="https://maps.google.com/?q=Qimtronics,+Jl.+Hegarmanah+Tengah+No.181+Kel.+Hegarmanah+Kec.Cidadap+Kota+Bandung+40141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-coffee-700 text-white rounded-lg hover:bg-coffee-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                    </svg>
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div 
              className={`transition-all duration-1000 delay-500 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-30 translate-y-10'
              }`}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-coffee-lg border border-coffee-200">
                <div className="aspect-w-16 aspect-h-12 h-96 lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7862284687755!2d107.58793631536562!3d-6.918540669706738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6b8b3c6b8a5%3A0x7a9b8c2d4e5f6a7b!2sJl.%20Hegarmanah%20Tengah%20No.181%2C%20Hegarmanah%2C%20Kec.%20Cidadap%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040141!5e0!3m2!1sen!2sid!4v1694509847123!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kantor Qohua - Qimtronics"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div 
            className={`mt-12 text-center transition-all duration-1000 delay-700 ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-30 translate-y-10'
            }`}
          >
            <div className="bg-coffee-100 rounded-2xl p-6 lg:p-8 border border-coffee-200">
              <h3 className="text-xl font-semibold text-coffee-900 mb-4">
                Hubungi Kami untuk Konsultasi
              </h3>
              <p className="text-coffee-700 mb-6 max-w-2xl mx-auto">
                Tim ahli kami siap membantu Anda memilih solusi roasting dan brewing yang tepat sesuai kebutuhan bisnis kopi Anda. 
                Kunjungi showroom kami untuk melihat langsung produk-produk Qohua.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+622232099001"
                  className="inline-flex items-center justify-center px-6 py-3 bg-coffee-700 text-white rounded-lg hover:bg-coffee-600 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hubungi Sekarang
                </a>
                <a
                  href="mailto:qohua@qimtronics.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-coffee-700 border border-coffee-300 rounded-lg hover:bg-coffee-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kirim Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
