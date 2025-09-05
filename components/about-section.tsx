"use client"

import { companyInfo } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Globe, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-plus-jakarta font-bold text-foreground mb-4">
            About {companyInfo.name}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Story */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Story</h3>
                <p className="text-accent font-semibold">Established {companyInfo.founded}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              For nearly four decades, {companyInfo.name} has been at the forefront of 
              commercial roasting innovation. What started as a small family business in 
              {companyInfo.headquarters} has grown into a trusted global partner for 
              roasting professionals worldwide.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              We combine traditional craftsmanship with cutting-edge technology to create 
              roasting equipment that delivers exceptional results, batch after batch. 
              Our commitment to quality, reliability, and customer success has made us 
              the preferred choice for thousands of roasters globally.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-card border">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">38+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Certifications & Values */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {companyInfo.certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="text-sm px-4 py-2">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quality First</h4>
                    <p className="text-muted-foreground text-sm">
                      Every product undergoes rigorous testing to ensure exceptional performance and durability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      Continuous research and development to stay ahead of industry trends and needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Customer Success</h4>
                    <p className="text-muted-foreground text-sm">
                      Dedicated support and service to help our customers achieve their roasting goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Sustainability</h4>
                    <p className="text-muted-foreground text-sm">
                      Environmentally conscious manufacturing and energy-efficient equipment design.
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
