import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import ProductSection from "@/components/product-section"
import VideoSection from "@/components/video-section"
import CompanyInfo from "@/components/company-info"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <ProductSection />
      <VideoSection />
      <CompanyInfo />
      <Footer />
    </main>
  )
}
