"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const products = [
  {
    id: 1,
    name: "RoastMaster Pro 500",
    image: "/placeholder-ar10l.png",
    shortDescription: "Professional coffee roasting machine with precise temperature control",
    fullDescription:
      "The RoastMaster Pro 500 is our flagship coffee roasting machine, designed for commercial operations. Features include: digital temperature control, automated roasting profiles, 500kg capacity per batch, energy-efficient heating system, and comprehensive safety features. Perfect for coffee shops, roasteries, and medium-scale production facilities.",
    position: "left",
  },
  {
    id: 2,
    name: "NutRoast Industrial 1000",
    image: "/placeholder-avqb4.png",
    shortDescription: "High-capacity industrial roasting system for nuts and seeds",
    fullDescription:
      "The NutRoast Industrial 1000 handles large-scale nut and seed roasting operations. Key features: 1000kg hourly capacity, continuous conveyor system, multi-zone temperature control, automated sorting system, and food-grade stainless steel construction. Ideal for food processing plants and large-scale manufacturers.",
    position: "right",
  },
  {
    id: 3,
    name: "GrainRoast Automated",
    image: "/automated-grain-roaster.png",
    shortDescription: "Fully automated grain roasting system with digital controls",
    fullDescription:
      "The GrainRoast Automated system revolutionizes grain processing with full automation. Features include: PLC-controlled operation, recipe management system, moisture content monitoring, variable speed controls, and remote monitoring capabilities. Perfect for cereal manufacturers and grain processing facilities.",
    position: "left",
  },
]

export default function ProductSection() {
  return (
    <section id="products" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Premium Roasting Equipment</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of professional roasting equipment designed for commercial and industrial
            applications. Each machine is engineered for precision, efficiency, and reliability.
          </p>
        </div>

        {/* Product Showcases */}
        <div className="space-y-24">
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col ${
                product.position === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12`}
            >
              {/* Product Image */}
              <div className="flex-1">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Product Description */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-foreground">{product.name}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{product.shortDescription}</p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
