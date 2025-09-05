"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Settings, Zap, Shield, Coffee } from "lucide-react"
import { type ProductData } from "@/lib/data"

interface ProductDialogProps {
  product: ProductData | null
  isOpen: boolean
  onClose: () => void
}

const productDetails: Record<string, {
  fullDescription: string
  specifications: string[]
  features: string[]
  benefits: string[]
  price: string
  warranty: string
  rating: number
  reviews: number
}> = {
  "RoastMaster Pro 500": {
    fullDescription: "The RoastMaster Pro 500 represents the pinnacle of coffee roasting technology. Engineered for precision and consistency, this commercial-grade roaster features advanced temperature control systems and automated monitoring to ensure perfect roasting profiles every time.",
    specifications: [
      "Capacity: 500g batch size",
      "Temperature Range: 100°C - 250°C",
      "Roasting Time: 8-15 minutes",
      "Power: 220V, 3.2kW",
      "Dimensions: 80cm x 60cm x 100cm",
      "Weight: 120kg"
    ],
    features: [
      "Digital temperature control with ±1°C precision",
      "Programmable roasting profiles",
      "Automatic cooling system",
      "Smoke suppression technology",
      "Real-time data logging",
      "Touch screen interface"
    ],
    benefits: [
      "Consistent roasting quality",
      "Reduced energy consumption",
      "Easy operation and maintenance",
      "Enhanced flavor development",
      "Professional grade reliability"
    ],
    price: "$15,500",
    warranty: "3 years comprehensive warranty",
    rating: 4.8,
    reviews: 156
  },
  "NutRoast Industrial 1000": {
    fullDescription: "Built for high-volume industrial applications, the NutRoast Industrial 1000 delivers exceptional performance for large-scale nut and seed roasting operations. Its robust construction and advanced heating systems ensure uniform roasting across large batches.",
    specifications: [
      "Capacity: 1000kg batch size", 
      "Temperature Range: 80°C - 220°C",
      "Roasting Time: 15-30 minutes",
      "Power: 380V, 8.5kW",
      "Dimensions: 150cm x 100cm x 180cm",
      "Weight: 350kg"
    ],
    features: [
      "Heavy-duty stainless steel construction",
      "Multi-zone heating control",
      "Automated loading and unloading",
      "Advanced safety systems",
      "Remote monitoring capability",
      "Energy-efficient design"
    ],
    benefits: [
      "Maximum productivity",
      "Uniform roasting results",
      "Minimal operator intervention",
      "Cost-effective operation",
      "Exceptional durability"
    ],
    price: "$45,900",
    warranty: "5 years industrial warranty",
    rating: 4.9,
    reviews: 89
  },
  "GrainRoast Automated": {
    fullDescription: "The future of grain roasting is here. Our fully automated GrainRoast system combines cutting-edge technology with intuitive controls to deliver perfect results with minimal human intervention. Ideal for medium to large-scale operations.",
    specifications: [
      "Capacity: 750kg batch size",
      "Temperature Range: 90°C - 200°C", 
      "Roasting Time: 12-25 minutes",
      "Power: 380V, 6.8kW",
      "Dimensions: 120cm x 80cm x 150cm",
      "Weight: 280kg"
    ],
    features: [
      "Fully automated operation",
      "AI-powered roasting optimization",
      "Predictive maintenance alerts",
      "Quality control sensors",
      "Recipe management system",
      "Mobile app integration"
    ],
    benefits: [
      "Zero human error",
      "Optimized roasting profiles",
      "Predictable maintenance",
      "Superior quality control",
      "Remote operation capability"
    ],
    price: "$38,200",
    warranty: "4 years full coverage",
    rating: 4.7,
    reviews: 203
  },
  "EspressoRoast Compact": {
    fullDescription: "Perfect for boutique coffee shops and small-scale roasters, the EspressoRoast Compact delivers professional-grade results in a space-saving design. Experience the perfect balance of quality, efficiency, and affordability.",
    specifications: [
      "Capacity: 250g batch size",
      "Temperature Range: 120°C - 240°C",
      "Roasting Time: 6-12 minutes", 
      "Power: 220V, 2.1kW",
      "Dimensions: 60cm x 45cm x 75cm",
      "Weight: 65kg"
    ],
    features: [
      "Compact footprint design",
      "Precision temperature control",
      "Manual and auto modes",
      "Built-in cooling system",
      "Easy cleaning access",
      "Quiet operation"
    ],
    benefits: [
      "Space-efficient design",
      "Perfect for small batches",
      "User-friendly operation",
      "Consistent quality",
      "Affordable investment"
    ],
    price: "$8,750",
    warranty: "2 years standard warranty",
    rating: 4.6,
    reviews: 124
  },
  "MegaRoast Industrial 2000": {
    fullDescription: "The ultimate solution for large-scale commercial operations. The MegaRoast Industrial 2000 combines massive capacity with precision control, delivering consistent results across enormous batches while maintaining the highest quality standards.",
    specifications: [
      "Capacity: 2000kg batch size",
      "Temperature Range: 70°C - 230°C",
      "Roasting Time: 20-40 minutes",
      "Power: 380V, 12.5kW", 
      "Dimensions: 200cm x 150cm x 220cm",
      "Weight: 580kg"
    ],
    features: [
      "Massive processing capacity",
      "Multi-stage roasting zones",
      "Advanced control systems",
      "Automated material handling",
      "Integrated quality monitoring",
      "Energy recovery systems"
    ],
    benefits: [
      "Unmatched production capacity",
      "Superior energy efficiency",
      "Consistent large-batch quality",
      "Minimal labor requirements",
      "Maximum ROI potential"
    ],
    price: "$89,500",
    warranty: "5 years premium warranty",
    rating: 4.9,
    reviews: 67
  }
}

export default function ProductDialog({ product, isOpen, onClose }: ProductDialogProps) {
  if (!product) return null

  const details = productDetails[product.title]
  if (!details) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-card via-card to-muted mx-4 sm:mx-auto">
        <DialogHeader className="pb-4 border-b border-border/20">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Coffee className="w-6 h-6 text-primary" />
                {product.title}
              </DialogTitle>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(details.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`}
                    />
                  ))}
                  <span className="text-sm font-medium ml-1">{details.rating}</span>
                  <span className="text-sm text-muted-foreground">({details.reviews} reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  <Award className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary mb-1">{details.price}</div>
              <div className="text-sm text-muted-foreground">{details.warranty}</div>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          {/* Left Column - Image and Description */}
          <div className="space-y-6">
            <div className="relative group">
              <img 
                src={product.image || "/placeholder.svg"} 
                alt={product.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-primary" />
                Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">{details.fullDescription}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">High Performance</div>
              </div>
              <div className="text-center">
                <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Advanced Control</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Reliable Quality</div>
              </div>
            </div>
          </div>

          {/* Right Column - Specifications and Features */}
          <div className="space-y-6">
            {/* Specifications */}
            <div className="bg-card/50 p-5 rounded-lg border border-border/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Technical Specifications
              </h3>
              <ul className="space-y-2">
                {details.specifications.map((spec, index) => (
                  <li key={index} className="text-sm text-muted-foreground border-b border-border/10 pb-1 last:border-0">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div className="bg-card/50 p-5 rounded-lg border border-border/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Key Benefits
              </h3>
              <ul className="space-y-2">
                {details.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/20">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            Request Quote
          </Button>
          <Button variant="outline" className="flex-1 border-primary/20 hover:bg-primary/5">
            Download Brochure
          </Button>
          <Button variant="secondary" className="flex-1">
            Schedule Demo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
