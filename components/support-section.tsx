"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { companyInfo } from "@/lib/data"
import { 
  HelpCircle, 
  Download, 
  BookOpen, 
  Phone, 
  MessageCircle, 
  Wrench,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const supportResources = [
  {
    title: "User Manuals",
    description: "Comprehensive guides for all our equipment models",
    icon: BookOpen,
    action: "Download PDFs",
    count: "25+ Guides"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video instructions for setup and maintenance",
    icon: HelpCircle,
    action: "Watch Videos",
    count: "50+ Videos"
  },
  {
    title: "Technical Support",
    description: "Direct access to our expert technical team",
    icon: Wrench,
    action: "Get Help",
    count: "24/7 Available"
  },
  {
    title: "Live Chat",
    description: "Instant support for quick questions and troubleshooting",
    icon: MessageCircle,
    action: "Start Chat",
    count: "Online Now"
  }
]

const supportPlans = [
  {
    name: "Basic Support",
    price: "Included",
    features: [
      "Email support",
      "Documentation access",
      "Standard warranty coverage",
      "Remote diagnostics"
    ]
  },
  {
    name: "Premium Support",
    price: "$299/month",
    features: [
      "Priority phone support",
      "24/7 technical assistance",
      "Extended warranty",
      "On-site maintenance",
      "Preventive maintenance alerts"
    ],
    popular: true
  },
  {
    name: "Enterprise Support",
    price: "Custom",
    features: [
      "Dedicated support manager",
      "Custom maintenance schedules",
      "Training programs",
      "Performance optimization",
      "Emergency response guarantee"
    ]
  }
]

export default function SupportSection() {
  return (
    <section id="support" className="py-20 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Support & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the help you need to maximize your equipment's performance with our comprehensive support services.
          </p>
        </div>

        {/* Support Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {supportResources.map((resource) => {
            const Icon = resource.icon
            return (
              <div 
                key={resource.title}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {resource.count}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {resource.action}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Support Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Support Plans</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the level of support that best fits your operation's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative bg-card border rounded-xl p-8 transition-all duration-300 hover:shadow-lg ${
                  plan.popular 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">{plan.name}</h4>
                  <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                  {plan.price !== "Included" && plan.price !== "Custom" && (
                    <p className="text-muted-foreground text-sm">per equipment unit</p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90' 
                      : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Support CTA */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Need Emergency Support?</h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Our technical experts are standing by 24/7 for critical equipment issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => window.open(`tel:${companyInfo.contact.phone}`, '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => window.open(`mailto:emergency@roastproequipment.com`, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Emergency Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
