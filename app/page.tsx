import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import ProductSection from "@/components/product-section"
import GallerySection from "@/components/gallery-section"
import VideoSection from "@/components/video-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <ProductSection />
      <VideoSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
