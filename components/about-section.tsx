"use client"

import { companyInfo } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Globe, Users } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export default function AboutSection() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 })
  const [leftRef, leftInView] = useInView({ threshold: 0.1 })
  const [rightRef, rightInView] = useInView({ threshold: 0.1 })

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-6xl mx-auto px-4">
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
            About {companyInfo.name}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Story */}
          <div 
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Story Qohua</h3>
                <p className="text-accent font-semibold">Established {companyInfo.founded}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Qohua lahir pada tahun 2022 sebagai solusi bagi industri kopi, mulai dari kedai kecil hingga pecinta kopi rumahan, yang sering menghadapi tantangan dalam menghasilkan kopi dengan cita rasa stabil dan berkualitas. Fokusnya adalah menjaga konsistensi rasa sekaligus meningkatkan efisiensi proses, mulai dari tahap roasting hingga brewing.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Kami menghadirkan berbagai inovasi berbasis IoT dan otomasi, seperti Roastrix 400, Pourfect60, Coffee Buddy, dan Roast & Brew Corner. Setiap solusi dirancang untuk memudahkan proses, menghadirkan data yang akurat, serta memberikan pengalaman menyeduh kopi yang lebih praktis, konsisten, dan menyenangkan.
            </p>

            {/* About Qimtronics */}
            <div className="bg-card border rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                About Qimtronics
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                PT. QImtronics didirikan oleh Bapak Yana S Raharja, Bapak Muhammad Pribadi, dan Bapak Achmad Anugrah pada 15 Juni 2012 di Bandung. Qimtronics menyediakan solusi elektronik, sistem informasi, dan aplikasi untuk mendukung proses Transformasi Digital di berbagai bidang, seperti pertanian, medis, infrastruktur, telekomunikasi, dan pertambangan melalui Riset, Desain, dan Pengembangan.
              </p>
            </div>
          </div>

          {/* Values */}
          <div 
            ref={rightRef}
            className={`space-y-8 transition-all duration-1000 ${
              rightInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Konsistensi Rasa</h4>
                    <p className="text-muted-foreground text-sm">
                      Menghadirkan kopi dengan kualitas rasa yang stabil, mulai dari proses roasting hingga brewing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Efisiensi Operasional</h4>
                    <p className="text-muted-foreground text-sm">
                      Mengotomatiskan proses di industri kopi untuk meningkatkan produktivitas dan mengurangi ketergantungan pada keterampilan manual.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Inovasi Teknologi IoT</h4>
                    <p className="text-muted-foreground text-sm">
                      Integrasi perangkat pintar yang terkoneksi dengan aplikasi untuk menghadirkan data akurat dan real-time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Kemudahan Akses</h4>
                    <p className="text-muted-foreground text-sm">
                      Memungkinkan siapa pun, termasuk pemula dan pelaku usaha kecil, untuk melakukan roasting dan brewing dengan hasil profesional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Fleksibilitas</h4>
                    <p className="text-muted-foreground text-sm">
                      Cocok digunakan di rumah, kedai kecil, hingga bisnis kafe yang ingin menjaga konsistensi dan kualitas tanpa mengganggu alur operasional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Pengalaman Interaktif</h4>
                    <p className="text-muted-foreground text-sm">
                      Memberikan ruang edukasi dan interaksi bagi pelanggan, memperkuat identitas brand, serta meningkatkan daya tarik bisnis F&B.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
