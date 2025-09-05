"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Settings, Zap, Shield, Coffee } from "lucide-react"
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
}

export default function ProductDialog({ product, isOpen, onClose }: ProductDialogProps) {
  if (!product) return null

  const details = productDetails[product.title]
  if (!details) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[calc(100vw-40px)] sm:max-w-4xl max-h-[90vh] overflow-hidden bg-background border border-border shadow-xl">
        <div className="overflow-y-auto max-h-[85vh] scrollbar-hide">
          <DialogHeader className="pb-6 border-b border-border">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{product.title}</span>
                </DialogTitle>
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/25">
                    <Award className="w-3 h-3 mr-1" />
                    Premium Quality
                  </Badge>
                </div>
              </div>
            </div>
          </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          {/* Left Column - Image and Description */}
          <div className="space-y-6">
            <div className="relative group hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={product.image || "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop"} 
                alt={product.title}
                className="w-full h-72 object-cover rounded-2xl shadow-lg border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <div className="bg-muted p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Coffee className="w-5 h-5 text-primary" />
                </div>
                Product Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">{details.fullDescription}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded-xl text-center border border-border hover:bg-secondary transition-colors duration-200">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground">High Performance</div>
                <div className="text-xs text-muted-foreground mt-1">Superior efficiency</div>
              </div>
              <div className="bg-muted p-4 rounded-xl text-center border border-border hover:bg-secondary transition-colors duration-200">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground">Advanced Control</div>
                <div className="text-xs text-muted-foreground mt-1">Precise monitoring</div>
              </div>
              <div className="bg-muted p-4 rounded-xl text-center border border-border hover:bg-secondary transition-colors duration-200">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground">Reliable Quality</div>
                <div className="text-xs text-muted-foreground mt-1">Consistent results</div>
              </div>
            </div>
          </div>

          {/* Right Column - Specifications and Features */}
          <div className="space-y-6">
            {/* Specifications */}
            <div className="bg-muted p-6 rounded-2xl border border-border hover:bg-secondary transition-colors duration-200">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                Technical Specifications
              </h3>
              <div className="space-y-3">
                {details.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-sm font-medium">{spec.split(':')[0]}:</span>
                    <span className="text-foreground font-semibold text-sm">{spec.split(':')[1]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-muted p-6 rounded-2xl border border-border hover:bg-secondary transition-colors duration-200">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                Key Features
              </h3>
              <div className="space-y-3">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-secondary to-muted p-6 rounded-2xl border border-border hover:from-muted hover:to-secondary transition-colors duration-200">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                Key Benefits
              </h3>
              <div className="space-y-3">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-foreground text-sm font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold py-3 px-6 rounded-xl">
            <Coffee className="w-4 h-4 mr-2" />
            Request Quote
          </Button>
          <Button variant="secondary" className="flex-1 text-base font-semibold py-3 px-6 rounded-xl">
            <Award className="w-4 h-4 mr-2" />
            Download Brochure
          </Button>
          <Button variant="secondary" className="flex-1 text-base font-semibold py-3 px-6 rounded-xl">
            <Settings className="w-4 h-4 mr-2" />
            Schedule Demo
          </Button>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
