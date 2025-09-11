// Centralized data config for the RoastPro Equipment website
export interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
  shortFeatures: string[];
  specifications: {
    capacity: string;
    power: string;
    dimensions?: string;
    weight?: string;
    heatTransfer?: string;
    heater?: string;
  };
  ctaText: string;
  ctaLink: string;
}

export const productData: ProductData[] = [
  {
    id: "roastmaster-pro-500",
    title: "Roastrix 400 Reguler",
    subtitle: "Discover our premium line of commercial coffee roasting equipment designed for the modern roastery",
    image: "/images/products/roastrix-400-reguler.jpg",
    description: "Our flagship commercial coffee roaster combines precision engineering with intuitive controls. Perfect for high-volume roasting operations that demand consistency and quality.",
    features: [
      "Dilengkapi LCD 4.3\" touchscreen",
      "Dapat terkoneksi ke Artisan apps melalui USB-C",
      "Dapat terkoneksi dengan Roastrix Apps melalui BLE",
      "Dual temperature channel monitoring (Drum & Bean temperature)",
      "Full control: Manual Mode untuk mengatur suhu, putaran drum dan air flow",
      "Dilengkapi fitur save profile untuk Auto Mode dengan satu klik"
    ],
    shortFeatures: [
      "LCD 4.3\" touchscreen",
      "USB-C & BLE connectivity",
      "Dual temperature monitoring",
      "Manual & Auto mode",
      "Save profile feature",
      "Full control system"
    ],
    specifications: {
      capacity: "Max 400g, Best 100-300g",
      power: "1000W, 110-240V",
      heatTransfer: "Drum",
      heater: "Electric"
    },
    ctaText: "Learn More",
    ctaLink: "#products"
  },
  {
    id: "nutroast-industrial-1000",
    title: "Roastrix 400 Pro",
    subtitle: "Advanced automated systems for consistent, high-quality grain roasting at commercial scale",
    image: "/images/products/roastrix-400-pro.jpg", 
    description: "State-of-the-art automated roasting system designed for consistent, high-volume grain processing. Features advanced sensors and AI-driven optimization.",
    features: [
      "Heavy-duty stainless steel construction",
      "Multi-zone heating control",
      "Automated loading and unloading",
      "Advanced safety systems",
      "Remote monitoring capability",
      "Energy-efficient design"
    ],
    shortFeatures: [
      "Stainless steel construction",
      "Multi-zone heating control",
      "Automated loading/unloading",
      "Advanced safety systems",
      "Remote monitoring",
      "Energy-efficient design"
    ],
    specifications: {
      capacity: "1000kg batch size",
      power: "380V, 8.5kW", 
      dimensions: "150cm x 100cm x 180cm",
      weight: "350kg"
    },
    ctaText: "Learn More",
    ctaLink: "#products"
  },
  {
    id: "grainroast-automated",
    title: "Pourfect 60",
    subtitle: "Cutting-edge technology combined with time-honored roasting techniques for perfect results",
    image: "/images/products/pourfect-60.jpg",
    description: "Purpose-built for nut roasting operations with precise temperature control and even heat distribution. Ideal for almonds, peanuts, cashews, and specialty nuts.",
    features: [
      "Fully automated operation",
      "AI-powered roasting optimization",
      "Predictive maintenance alerts",
      "Quality control sensors",
      "Recipe management system",
      "Mobile app integration"
    ],
    shortFeatures: [
      "Fully automated operation",
      "AI-powered optimization",
      "Predictive maintenance",
      "Quality control sensors",
      "Recipe management",
      "Mobile app integration"
    ],
    specifications: {
      capacity: "750kg batch size",
      power: "380V, 6.8kW",
      dimensions: "120cm x 80cm x 150cm", 
      weight: "280kg"
    },
    ctaText: "Learn More",
    ctaLink: "#products"
  },
  {
    id: "espressoroast-compact",
    title: "Koffie Buddy",
    subtitle: "Supporting the entire coffee journey with professional-grade roasting solutions",
    image: "/images/products/koffie-buddy.jpg",
    description: "Comprehensive grain processing system that handles everything from raw grain intake to finished product packaging. Perfect for large-scale operations.",
    features: [
      "Compact footprint design",
      "Precision temperature control",
      "Manual and auto modes",
      "Built-in cooling system",
      "Easy cleaning access",
      "Quiet operation"
    ],
    shortFeatures: [
      "Compact design",
      "Precision temperature control",
      "Manual & auto modes",
      "Built-in cooling system",
      "Easy cleaning access",
      "Quiet operation"
    ],
    specifications: {
      capacity: "250g batch size",
      power: "220V, 2.1kW",
      dimensions: "60cm x 45cm x 75cm",
      weight: "65kg"
    },
    ctaText: "Learn More",
    ctaLink: "#products"
  },
  {
    id: "megaroast-industrial-2000",
    title: "I Scale uno electric",
    subtitle: "Ultimate solution for large-scale commercial operations",
    image: "/images/products/i-scale-uno-electric.jpg",
    description: "The ultimate solution for large-scale commercial operations. Combines massive capacity with precision control, delivering consistent results across enormous batches.",
    features: [
      "Massive processing capacity",
      "Multi-stage roasting zones",
      "Advanced control systems",
      "Automated material handling",
      "Integrated quality monitoring",
      "Energy recovery systems"
    ],
    shortFeatures: [
      "Massive processing capacity",
      "Multi-stage roasting zones",
      "Advanced control systems",
      "Automated material handling",
      "Integrated quality monitoring",
      "Energy recovery systems"
    ],
    specifications: {
      capacity: "2000kg batch size",
      power: "380V, 12.5kW",
      dimensions: "200cm x 150cm x 220cm",
      weight: "580kg"
    },
    ctaText: "Learn More",
    ctaLink: "#products"
  }
];

// Company information
export const companyInfo = {
  name: "Qohua",
  tagline: "From Green Bean to the Cup",
  description: "Leading manufacturer of commercial coffee and grain roasting equipment, serving roasteries and food processing facilities worldwide.",
  founded: "1985",
  headquarters: "Portland, Oregon",
  certifications: ["ISO 9001", "CE Certified", "UL Listed", "Energy Star Partner"],
  contact: {
    phone: "+1 (503) 555-0123",
    email: "info@roastproequipment.com",
    address: "1234 Industrial Way, Portland, OR 97201"
  }
};

// Navigation menu items (removed Support)
export const navigationItems = [
  { name: "Home", href: "#hero" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" }, 
  { name: "Contact", href: "#contact" }
];
