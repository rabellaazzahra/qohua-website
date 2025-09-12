// Centralized data config for the RoastPro Equipment website
export interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  images: string[];
  description: string;
  detailedDescription: string;
  features: string[];
  shortFeatures: string[];
  specifications: {
    [key: string]: string;
  };
  brochureUrl: string;
  qrCodeUrl: string;
  ctaText: string;
  ctaLink: string;
}

export const productData: ProductData[] = [
  {
    id: "roastmaster-pro-500",
    title: "Roastrix 400 Reguler",
    subtitle: "Discover our premium line of commercial coffee roasting equipment designed for the modern roastery",
    image: "/images/products/roastrix-1.jpg",
    images: [
      "/images/products/roastrix-1.jpg",
      "/images/products/roastrix-2.jpg",
      "/images/products/roastrix-3.jpg",
      "/images/products/roastrix-4.jpg",
      "/images/products/roastrix-5.jpg"
    ],
    description: "Our flagship commercial coffee roaster combines precision engineering with intuitive controls. Perfect for high-volume roasting operations that demand consistency and quality.",
    detailedDescription: "Proses pemanggangan kopi sering kali memerlukan keahlian khusus dan pengawasan ketat agar hasilnya konsisten dan berkualitas. Hal ini menjadi tantangan bagi kedai kopi kecil atau individu yang ingin melakukan roasting sendiri. Roastrix 400 hadir sebagai mesin pemanggang kopi pintar dengan mode otomatis, memungkinkan siapapun bahkan tanpa pengalaman memanggang kopi dari awal hingga akhir dengan mudah. Solusi ini sangat ideal untuk kedai kopi yang ingin menghadirkan kopi hasil sangrai sendiri dalam skala kecil, dengan hasil yang praktis, konsisten, dan tetap berkualitas.",
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
      "Capacity": "Max 400g, Best 100-300g",
      "Power": "1000W, 110-240V",
      "Heat Transfer": "Drum",
      "Heater": "Electric"
    },
    brochureUrl: "/downloads/brochures/roastrix.pdf",
    qrCodeUrl: "/downloads/qr-codes/roastrix-qr.png",
    ctaText: "Learn More",
    ctaLink: "#products"
  },
  {
    id: "nutroast-industrial-1000",
    title: "Roastrix 400 Pro",
    subtitle: "Advanced automated systems for consistent, high-quality grain roasting at commercial scale",
    image: "/images/products/roastrix-pro-1.jpg",
    images: [
      "/images/products/roastrix-pro-1.jpg",
      "/images/products/roastrix-pro-2.jpg",
      "/images/products/roastrix-pro-3.jpg",
      "/images/products/roastrix-pro-4.jpg",
      "/images/products/roastrix-pro-5.jpg"
    ],
    description: "State-of-the-art automated roasting system designed for consistent, high-volume grain processing. Features advanced sensors and AI-driven optimization.",
    detailedDescription: "Roastrix 400 Pro hadir dilengkapi sensor first crack untuk mendeteksi tahapan penting saat biji kopi mulai retak pertama kali, mesin ini membantu roaster menentukan momen yang tepat dalam proses roasting. Selain itu, fitur colour detection memantau warna biji kopi secara real-time untuk memastikan profil roasting tercapai sesuai standar yang diinginkan. Solusi ini sangat ideal untuk kedai kopi yang ingin menghadirkan kopi hasil sangrai sendiri dalam skala kecil, dengan hasil yang praktis, konsisten, dan tetap berkualitas.",
    features: [
      "Dilengkapi LCD 7\" dan 2.4\" touchscreen",
      "Dapat terkoneksi ke Artisan apps melalui USB-C",
      "Dapat terkoneksi dengan Roastrix Apps melalui BLE",
      "Threeple temperature channel monitoring (Drum & Bean temperature plus air flow temperature & humidity)",
      "Full control: Manual Mode untuk mengatur suhu, putaran drum dan air flow",
      "Dilengkapi fitur save profile untuk Auto Mode dengan satu klik",
      "Crack detection, color detection dan PID control untuk presisi auto mode",
      "Station pengukuran berat, moisture, Density dan TDS"
    ],
    shortFeatures: [
      "LCD 7\" dan 2.4\" touchscreen",
      "USB-C & BLE connectivity",
      "Threeple temperature monitoring",
      "Manual & Auto mode",
      "Crack & color detection",
      "Station pengukuran terintegrasi"
    ],
    specifications: {
      "Capacity": "Max 400g, Best 100-300g",
      "Power": "1000W, 110-240V",
      "Heat Transfer": "Drum",
      "Heater": "Electric"
    },
    brochureUrl: "/downloads/brochures/nutroast-industrial-1000.pdf",
    qrCodeUrl: "/downloads/qr-codes/nutroast-industrial-1000-qr.png",
    ctaText: "Learn More",
    ctaLink: "#products"
  },
  {
    id: "grainroast-automated",
    title: "Pourfect 60",
    subtitle: "Cutting-edge technology combined with time-honored roasting techniques for perfect results",
    image: "/images/products/pourfect-1.jpg",
    images: [
      "/images/products/pourfect-1.jpg",
      "/images/products/pourfect-2.jpg",
      "/images/products/pourfect-3.jpg",
      "/images/products/pourfect-4.jpg",
      "/images/products/pourfect-5.jpg"
    ],
    description: "Purpose-built for nut roasting operations with precise temperature control and even heat distribution. Ideal for almonds, peanuts, cashews, and specialty nuts.",
    detailedDescription: "Menyeduh kopi dengan metode manual seperti V60 membutuhkan keterampilan, konsistensi, dan waktu, yang tidak selalu dimiliki semua orang. Banyak pecinta kopi kesulitan mencapai rasa yang stabil layaknya seduhan barista. Pourfect 60 menjadi solusi dengan mesin otomatis yang dapat melakukan teknis hand drip secara presisi dan menghasilkan seduhan yang konsisten setiap saat. Untuk penggunaan rumahan, Pourfect 60 memungkinkan siapa pun membuat kopi yang terinspirasi dari seduhan ala barista, belajar resep seduhan dengan hasil yang stabil, sekaligus menjadi media pembelajaran manual brew yang praktis. Untuk penggunaan di kafe, alat ini menarik bagi penikmat kopi manual brew, memudahkan penyeduhan sambil menyiapkan menu lain, dan mendukung eksplorasi racikan baru tanpa mengganggu alur operasional.",
    features: [
      "Heater: PTC",
      "Dilengkapi LCD 4.3\" touchscreen",
      "Dapat terkoneksi dengan Apps melalui BLE",
      "Food grade",
      "Full control: memungkinkan pengguna untuk mengatur suhu, waktu dan sesi penyeduhan, dan volume air penyeduhan sesuai dengan resep yang diinginkan (Manual Mode)",
      "Dilengkapi dengan fitur save profile sehingga memungkinkan untuk mengulangi hasil penyeduhan dengan satu klik (Auto Mode)"
    ],
    shortFeatures: [
      "PTC Heater",
      "LCD 4.3\" touchscreen",
      "BLE connectivity",
      "Food grade",
      "Full control Manual Mode",
      "Save profile Auto Mode"
    ],
    specifications: {
      "Heater": "PTC",
      "Power": "600 Watt",
      "Dimensions": "0,2m x 0,4m x 0,4m",
      "Weight": "3,5 - 5 Kg",
      "Voltage": "160 - 230 VAC",
      "Water Storage Capacity": "1.8 L",
      "Brewing Volume": "250 mL - 1 L"
    },
    brochureUrl: "/downloads/brochures/grainroast-automated.pdf",
    qrCodeUrl: "/downloads/qr-codes/grainroast-automated-qr.png",
    ctaText: "Learn More",
    ctaLink: "#products"
  },
  {
    id: "espressoroast-compact",
    title: "Koffie Buddy",
    subtitle: "Supporting the entire coffee journey with professional-grade roasting solutions",
    image: "/images/products/koffie-buddy-1.jpg",
    images: [
      "/images/products/koffie-buddy-1.jpg",
      "/images/products/koffie-buddy-2.jpg",
      "/images/products/koffie-buddy-3.jpg",
      "/images/products/koffie-buddy-4.jpg",
      "/images/products/koffie-buddy-5.jpg"
    ],
    description: "Comprehensive grain processing system that handles everything from raw grain intake to finished product packaging. Perfect for large-scale operations.",
    detailedDescription: "Banyak pelaku kopi, khususnya roaster dan barista, mengalami kesulitan dalam memperoleh data akurat terkait kualitas biji kopi sebelum dan sesudah proses pemanggangan. Ketidaktepatan dalam mengukur kelembapan, kepadatan, berat, dan konsentrasi kopi dapat mengakibatkan hasil akhir yang tidak konsisten. Koffie Buddy hadir sebagai solusi lengkap yang menggabungkan tiga alat penting pengukur kelembapan & kepadatan, timbangan digital, dan refraktometer dalam satu perangkat yang terhubung dengan aplikasi mobile melalui BLE. Dengan data yang akurat dan real-time, pengguna dapat menyusun profil roasting dan rasio seduhan yang lebih tepat, menghasilkan kopi yang lebih baik, konsisten, dan sesuai standar kualitas.",
    features: [
      "Compact design",
      "Dilengkapi LCD 2.4\" touchscreen",
      "Konektivitas: memungkinkan terkoneksi dengan apps melalui BLE",
      "Plug and play modul: memudahkan pengguna berganti modul sesuai alat ukur yang dibutuhkan",
      "Dapat mengukur TDS, temperature, Moisture, Density dan Scales"
    ],
    shortFeatures: [
      "Compact design",
      "LCD 2.4\" touchscreen",
      "BLE connectivity",
      "Plug and play modul",
      "Multi measurement (TDS, temp, moisture, density, scales)",
      "Mobile app integration"
    ],
    specifications: {
      "Design": "Compact",
      "Display": "LCD 2.4\" touchscreen",
      "Power": "2 x Battery 14500 4.2V",
      "Battery Capacity": "2500mAh",
      "Charger Input": "USB type C 5V 1A",
      "Connectivity": "BLE",
      "Measurements": "TDS, Temperature, Moisture, Density, Scales"
    },
    brochureUrl: "/downloads/brochures/espressoroast-compact.pdf",
    qrCodeUrl: "/downloads/qr-codes/espressoroast-compact-qr.png",
    ctaText: "Learn More",
    ctaLink: "#products"
  },
  {
    id: "megaroast-industrial-2000",
    title: "I Scale uno electric",
    subtitle: "Ultimate solution for large-scale commercial operations",
    image: "/images/products/i-scale-1.jpg",
    images: [
      "/images/products/i-scale-1.jpg",
      "/images/products/i-scale-2.jpg",
      "/images/products/i-scale-3.jpg",
      "/images/products/i-scale-4.jpg",
      "/images/products/i-scale-5.jpg"
    ],
    description: "The ultimate solution for large-scale commercial operations. Combines massive capacity with precision control, delivering consistent results across enormous batches.",
    detailedDescription: "Mesin pembuat kopi pintar Qohua menghadirkan cita rasa kopi dari berbagai resep dunia langsung ke rumah. Dengan fitur canggih, pengguna dapat menikmati kopi berkualitas tinggi dengan rasa konsisten, seolah dibuat oleh barista profesional. Qohua hadir sebagai solusi bagi pecinta kopi: menjaga konsistensi rasa dari satu seduhan ke seduhan berikutnya dengan harga terjangkau untuk pengguna rumahan, namun tetap powerful bagi barista profesional. Lebih dari itu, Qohua mendukung eksperimen pribadi untuk mengeksplorasi keunikan biji kopi, menyimpan catatan resep, serta menjadi platform berbagi melalui IoT, termasuk mengunduh kreasi dari barista kelas dunia.",
    features: [
      "Smart coffee brewing system",
      "Global recipe database",
      "Consistent flavor profiles",
      "IoT platform integration",
      "Recipe sharing community",
      "Professional-grade precision"
    ],
    shortFeatures: [
      "Smart brewing system",
      "Global recipe database",
      "Consistent flavor profiles",
      "IoT integration",
      "Recipe sharing",
      "Professional precision"
    ],
    specifications: {
      "Type": "Smart Coffee Brewing System",
      "Connectivity": "IoT enabled",
      "Recipe Database": "Global recipes",
      "User Level": "Home to Professional",
      "Features": "Recipe sharing, flavor profiling",
      "Platform": "Mobile app integration"
    },
    brochureUrl: "/downloads/brochures/megaroast-industrial-2000.pdf",
    qrCodeUrl: "/downloads/qr-codes/megaroast-industrial-2000-qr.png",
    ctaText: "Learn More",
    ctaLink: "#products"
  }
];

// Company information
export const companyInfo = {
  name: "Qohua",
  tagline: "From Green Bean to the Cup",
  description: "Industri perkopian sering menghadapi tantangan dalam menjaga konsistensi rasa dan efisiensi proses. Untuk itu kami menghadirkan solusi IoT untuk mengotomatiskan operasional dan meningkatkan konsistensi layanan di industri perkopian. Mulai dari proses roasting hingga brewing, Qohua membantu menghasilkan kopi yang nikmat dengan cara yang lebih praktis, efisien, dan hasil yang selalu konsisten.",
  founded: "2022",
  headquarters: "Bandung, Indonesia",
  contact: {
    phone: "+62 22 320 99001",
    email: "qohua@qimtronics.com",
    address: "Qimtronics, Jl. Hegarmanah Tengah No.181 Kel. Hegarmanah Kec.Cidadap Kota Bandung 40141"
  }
};

// Navigation menu items
export const navigationItems = [
  { name: "Home", href: "#hero" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" }, 
  { name: "Contact", href: "#contact" }
];
