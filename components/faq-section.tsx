"use client"

import { useState } from "react"
import { useInView } from "@/hooks/useInView"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "Apakah produk Qohua cocok untuk pemula yang belum pernah melakukan roasting?",
    answer: "Ya, sangat cocok! Produk Qohua dirancang khusus dengan mode otomatis yang memungkinkan pemula melakukan roasting dengan mudah. Dengan fitur save profile, Anda bisa mendapatkan hasil yang konsisten tanpa perlu keahlian khusus."
  },
  {
    id: 2,
    question: "Bagaimana cara menghubungkan perangkat Qohua dengan aplikasi mobile?",
    answer: "Semua produk Qohua dilengkapi dengan konektivitas BLE (Bluetooth Low Energy) dan USB-C. Anda tinggal download aplikasi Qohua, aktifkan Bluetooth, dan ikuti panduan pairing yang mudah. Aplikasi tersedia untuk iOS dan Android."
  },
  {
    id: 3,
    question: "Berapa lama garansi untuk produk Qohua?",
    answer: "Semua produk Qohua dilengkapi dengan garansi resmi 1 tahun untuk komponen elektronik dan 6 bulan untuk spare parts. Kami juga menyediakan layanan after-sales dan technical support."
  },
  {
    id: 4,
    question: "Apakah bisa menggunakan Roastrix 400 untuk bisnis kafe kecil?",
    answer: "Absolutely! Roastrix 400 dirancang khusus untuk kedai kopi kecil hingga menengah. Dengan kapasitas optimal 100-300 gram per batch, sangat cocok untuk supply harian kafe kecil dengan hasil yang profesional."
  },
  {
    id: 5,
    question: "Apa perbedaan antara Roastrix 400 Reguler dan Pro?",
    answer: "Roastrix 400 Pro dilengkapi dengan sensor first crack, color detection, dan PID control untuk presisi yang lebih tinggi. Pro version juga memiliki dual touchscreen (7\" dan 2.4\") serta station pengukuran terintegrasi untuk analisis kualitas yang lebih detail."
  },
  {
    id: 6,
    question: "Bagaimana cara perawatan perangkat Qohua?",
    answer: "Perawatan sangat mudah! Semua produk dirancang dengan easy cleaning access. Aplikasi mobile juga memberikan reminder untuk maintenance berkala dan panduan cleaning step-by-step. Support team kami siap membantu jika diperlukan."
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 })

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section 
      id="faq"
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-background via-muted/30 to-background transition-all duration-1000 ${
        sectionInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-plus-jakarta font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions about Qohua products? We've got answers to help you make the right choice.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
                sectionInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(item.id) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Still have questions? Our expert team is here to help.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  )
}
