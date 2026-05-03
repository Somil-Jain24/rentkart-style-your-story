// Mock data for The RentVerse marketplace — multi-vertical
import lehengaMaroon from "@/assets/ref-lehenga-maroon.jpg";
import sherwaniIvory from "@/assets/ref-sherwani-ivory.jpg";
import sareePink from "@/assets/ref-saree-pink.jpg";
import jewelleryKundan from "@/assets/ref-jewellery-kundan.jpg";

export type Listing = {
  id: string;
  title: string;
  category: string;        // top-level slug e.g. "fashion", "tools"
  categoryName: string;    // display name
  subcategory: string;     // e.g. "Lehenga", "Drill Machine"
  city: string;
  pincode: string;
  distanceKm: number;      // distance from buyer
  dailyRate: number;
  itemValue: number;
  rating: number;
  reviewCount: number;
  size?: string;
  condition: "Like New" | "Excellent" | "Very Good";
  sellerId: string;
  sellerName: string;
  sellerVerified: boolean;
  imageHue: number;
  imageSrc?: string;
  gallery?: string[];      // additional gallery images
  available: boolean;
  badge?: string;
  description: string;
  specs?: { label: string; value: string }[];
};

export const listings: Listing[] = [
  // Fashion
  {
    id: "RK-10240", title: "Royal Maroon Banarasi Lehenga", category: "fashion", categoryName: "Fashion & Ethnic Wear", subcategory: "Lehenga",
    city: "Mumbai", pincode: "400050", distanceKm: 3.2, dailyRate: 1450, itemValue: 28500, rating: 4.9, reviewCount: 142,
    size: "M", condition: "Like New", sellerId: "S-2201", sellerName: "Aarohi Couture", sellerVerified: true,
    imageHue: 350, imageSrc: lehengaMaroon, available: true, badge: "Wedding Pick",
    description: "Hand-embroidered Banarasi silk lehenga with zari work. Worn twice, professionally dry-cleaned after every rental. Perfect for sangeet and reception.",
    specs: [{ label: "Fabric", value: "Banarasi silk" }, { label: "Work", value: "Zari + sequin" }, { label: "Weight", value: "4.2 kg" }],
  },
  {
    id: "RK-10241", title: "Ivory Sherwani with Dupatta", category: "fashion", categoryName: "Fashion & Ethnic Wear", subcategory: "Sherwani",
    city: "Delhi", pincode: "110001", distanceKm: 5.4, dailyRate: 1100, itemValue: 22000, rating: 4.7, reviewCount: 96,
    size: "L", condition: "Excellent", sellerId: "S-2310", sellerName: "Karan Menswear", sellerVerified: true,
    imageHue: 25, imageSrc: sherwaniIvory, available: true,
    description: "Cream silk sherwani with embroidered dupatta and matching mojaris. Ideal for groom wear or reception.",
  },
  {
    id: "RK-10242", title: "Pastel Pink Sequin Saree", category: "fashion", categoryName: "Fashion & Ethnic Wear", subcategory: "Saree",
    city: "Bengaluru", pincode: "560001", distanceKm: 1.8, dailyRate: 850, itemValue: 14500, rating: 4.9, reviewCount: 213,
    size: "Free", condition: "Like New", sellerId: "S-1908", sellerName: "Meera Drapes", sellerVerified: true,
    imageHue: 320, imageSrc: sareePink, available: true,
    description: "Light-weight sequin saree perfect for cocktail nights. Comes pre-pleated with stitched blouse (size M).",
  },

  // Electronics
  {
    id: "RK-20011", title: "MacBook Pro 14\" M3 Pro (18GB / 512GB)", category: "electronics", categoryName: "Electronics", subcategory: "Laptop",
    city: "Bengaluru", pincode: "560034", distanceKm: 4.1, dailyRate: 899, itemValue: 195000, rating: 4.8, reviewCount: 84,
    condition: "Like New", sellerId: "S-3120", sellerName: "GearLoop Rentals", sellerVerified: true,
    imageHue: 220, available: true, badge: "Pro Pick",
    description: "Apple MacBook Pro M3 Pro with charger, USB-C hub and protective sleeve. Ideal for editors, devs and on-site shoots.",
    specs: [{ label: "Chip", value: "Apple M3 Pro" }, { label: "RAM", value: "18 GB" }, { label: "Storage", value: "512 GB SSD" }],
  },
  {
    id: "RK-20012", title: "BenQ 4K Home Cinema Projector", category: "electronics", categoryName: "Electronics", subcategory: "Projector",
    city: "Mumbai", pincode: "400053", distanceKm: 6.7, dailyRate: 599, itemValue: 85000, rating: 4.6, reviewCount: 51,
    condition: "Excellent", sellerId: "S-3160", sellerName: "ScreenIt", sellerVerified: true,
    imageHue: 240, available: true,
    description: "BenQ TK700STi 4K HDR projector with HDMI cables and pull-down screen. Perfect for IPL nights & home theatre.",
  },
  {
    id: "RK-20013", title: "PlayStation 5 + 2 Controllers", category: "electronics", categoryName: "Electronics", subcategory: "Gaming Console",
    city: "Pune", pincode: "411014", distanceKm: 2.3, dailyRate: 449, itemValue: 65000, rating: 4.9, reviewCount: 178,
    condition: "Like New", sellerId: "S-3201", sellerName: "PlayHub", sellerVerified: true,
    imageHue: 210, available: true, badge: "Trending",
    description: "Sony PS5 disc edition with 2 DualSense controllers. 5 game discs available as add-on.",
  },

  // Cameras
  {
    id: "RK-30021", title: "Sony A7 IV Mirrorless + 24-70mm", category: "cameras", categoryName: "Cameras & Lenses", subcategory: "Mirrorless",
    city: "Mumbai", pincode: "400028", distanceKm: 8.0, dailyRate: 1799, itemValue: 285000, rating: 4.9, reviewCount: 124,
    condition: "Excellent", sellerId: "S-3310", sellerName: "FrameRent", sellerVerified: true,
    imageHue: 30, imageSrc: "https://cdn.builder.io/api/v1/image/assets%2F684460e6637049f4ac75efefd246d064%2F407a73984dc84f60a4cba0953fadb966?format=webp&width=800&height=1200", available: true, badge: "Pro Pick",
    description: "Full-frame Sony A7 IV with Sony G Master 24-70mm f/2.8 lens, 2 batteries, 128GB SD card and pelican case.",
    specs: [{ label: "Sensor", value: "33 MP Full-frame" }, { label: "Video", value: "4K 60p 10-bit" }],
  },
  {
    id: "RK-30022", title: "DJI RS 3 Pro Gimbal", category: "cameras", categoryName: "Cameras & Lenses", subcategory: "Gimbal / Stabiliser",
    city: "Hyderabad", pincode: "500032", distanceKm: 5.5, dailyRate: 549, itemValue: 78000, rating: 4.8, reviewCount: 67,
    condition: "Like New", sellerId: "S-3340", sellerName: "Cine Cart", sellerVerified: true,
    imageHue: 35, imageSrc: "https://cdn.builder.io/api/v1/image/assets%2F684460e6637049f4ac75efefd246d064%2Fca135942da764866b8ca943d2384e513?format=webp&width=800&height=1200", available: true,
    description: "Carbon-fibre 3-axis gimbal supporting up to 4.5kg payloads. LiDAR focusing kit included.",
  },

  // Tools
  {
    id: "RK-40031", title: "Bosch GSB 13 RE Impact Drill", category: "tools", categoryName: "Tools & Equipment", subcategory: "Drill Machine",
    city: "Pune", pincode: "411001", distanceKm: 1.1, dailyRate: 149, itemValue: 4500, rating: 4.7, reviewCount: 219,
    condition: "Excellent", sellerId: "S-3401", sellerName: "ToolBay", sellerVerified: true,
    imageHue: 45, available: true, badge: "Under ₹200/day",
    description: "Reversible impact drill with 13mm chuck, drill bit set (10 pcs) and carry case. Ideal for home renovation.",
  },
  {
    id: "RK-40032", title: "Honda 2.5 kVA Petrol Generator", category: "tools", categoryName: "Tools & Equipment", subcategory: "Generator",
    city: "Gurugram", pincode: "122002", distanceKm: 4.8, dailyRate: 899, itemValue: 65000, rating: 4.8, reviewCount: 42,
    condition: "Excellent", sellerId: "S-3420", sellerName: "PowerOnRent", sellerVerified: true,
    imageHue: 50, available: true,
    description: "Silent inverter generator suitable for outdoor events, shoots and home backup. Includes 5L petrol cans.",
  },
  {
    id: "RK-40033", title: "Karcher K2 Pressure Washer", category: "tools", categoryName: "Tools & Equipment", subcategory: "Pressure Washer",
    city: "Chennai", pincode: "600041", distanceKm: 3.6, dailyRate: 249, itemValue: 9800, rating: 4.6, reviewCount: 73,
    condition: "Very Good", sellerId: "S-3440", sellerName: "CleanMate", sellerVerified: true,
    imageHue: 55, available: true,
    description: "Compact pressure washer for cars, balconies and driveways. 110 bar pressure, includes detergent bottle.",
  },

  // Furniture
  {
    id: "RK-50041", title: "3-Seater Fabric Sofa (Beige)", category: "furniture", categoryName: "Furniture & Appliances", subcategory: "Sofa",
    city: "Bengaluru", pincode: "560076", distanceKm: 2.9, dailyRate: 89, itemValue: 32000, rating: 4.5, reviewCount: 156,
    condition: "Excellent", sellerId: "S-3501", sellerName: "RentItHome", sellerVerified: true,
    imageHue: 160, available: true, badge: "Monthly plan",
    description: "Premium 3-seater fabric sofa with reversible cushions. Perfect for short-term stays and PG setups. Monthly rate available.",
  },
  {
    id: "RK-50042", title: "Whirlpool 265L Double-door Fridge", category: "furniture", categoryName: "Furniture & Appliances", subcategory: "Refrigerator",
    city: "Hyderabad", pincode: "500081", distanceKm: 6.1, dailyRate: 119, itemValue: 38000, rating: 4.6, reviewCount: 89,
    condition: "Very Good", sellerId: "S-3520", sellerName: "ApplianceClub", sellerVerified: true,
    imageHue: 165, available: true,
    description: "Energy-efficient 3-star double-door refrigerator. Free installation and pickup within city limits.",
  },

  // Vehicles
  {
    id: "RK-60051", title: "Royal Enfield Classic 350 (2024)", category: "vehicles", categoryName: "Vehicles & Mobility", subcategory: "Motorbike",
    city: "Goa", pincode: "403001", distanceKm: 0.8, dailyRate: 1199, itemValue: 195000, rating: 4.8, reviewCount: 412,
    condition: "Like New", sellerId: "S-3601", sellerName: "Goa Bike Co.", sellerVerified: true,
    imageHue: 200, available: true, badge: "Top Rated",
    description: "RE Classic 350 — fully insured, 2 helmets included. Daily, weekly and weekend packages available.",
  },
  {
    id: "RK-60052", title: "Ather 450X Electric Scooter", category: "vehicles", categoryName: "Vehicles & Mobility", subcategory: "Electric Scooter",
    city: "Bengaluru", pincode: "560066", distanceKm: 4.7, dailyRate: 549, itemValue: 145000, rating: 4.7, reviewCount: 138,
    condition: "Excellent", sellerId: "S-3620", sellerName: "EVRoam", sellerVerified: true,
    imageHue: 205, available: true,
    description: "Smart electric scooter with home delivery. Charging cable + helmet included. Great for daily commute or weekend trials.",
  },

  // Events
  {
    id: "RK-70061", title: "Wedding Stage Decor — Marigold Theme", category: "events", categoryName: "Event & Party", subcategory: "Decor & Backdrops",
    city: "Jaipur", pincode: "302001", distanceKm: 3.4, dailyRate: 4500, itemValue: 60000, rating: 4.9, reviewCount: 58,
    condition: "Excellent", sellerId: "S-3701", sellerName: "Rajwada Events", sellerVerified: true,
    imageHue: 320, available: true,
    description: "Complete marigold + drape backdrop with brass accents, side pillars and floor florals. Setup & teardown included in price.",
  },
  {
    id: "RK-70062", title: "JBL EON 715 PA Sound System", category: "events", categoryName: "Event & Party", subcategory: "Sound System",
    city: "Mumbai", pincode: "400060", distanceKm: 9.2, dailyRate: 1499, itemValue: 95000, rating: 4.7, reviewCount: 91,
    condition: "Excellent", sellerId: "S-3720", sellerName: "SoundHaus", sellerVerified: true,
    imageHue: 325, available: true,
    description: "Pair of JBL EON 715 active speakers + mixer + 2 wireless mics. Ideal for parties up to 200 guests.",
  },

  // Jewellery
  {
    id: "RK-80071", title: "Designer Kundan Necklace Set", category: "jewellery", categoryName: "Jewellery", subcategory: "Necklace Set",
    city: "Jaipur", pincode: "302002", distanceKm: 2.1, dailyRate: 480, itemValue: 9500, rating: 4.8, reviewCount: 98,
    condition: "Like New", sellerId: "S-2102", sellerName: "Rajwada Ornaments", sellerVerified: true,
    imageHue: 50, imageSrc: jewelleryKundan, available: true,
    description: "Heritage Kundan necklace with matching earrings and matha-patti. Comes in velvet jewellery box.",
  },

  // Musical
  {
    id: "RK-90081", title: "Fender Player Stratocaster Electric Guitar", category: "musical", categoryName: "Musical Instruments", subcategory: "Guitar",
    city: "Mumbai", pincode: "400061", distanceKm: 7.4, dailyRate: 349, itemValue: 65000, rating: 4.9, reviewCount: 64,
    condition: "Excellent", sellerId: "S-3801", sellerName: "Riff Rentals", sellerVerified: true,
    imageHue: 280, available: true,
    description: "Mexican-made Fender Strat with Boss Katana 50W amp + cable + strap + tuner. Perfect for gigs and recordings.",
  },

  // Sports
  {
    id: "RK-A0091", title: "Domyos Foldable Treadmill T540C", category: "sports", categoryName: "Sports & Fitness", subcategory: "Treadmill",
    city: "Pune", pincode: "411045", distanceKm: 5.6, dailyRate: 199, itemValue: 42000, rating: 4.6, reviewCount: 119,
    condition: "Excellent", sellerId: "S-3901", sellerName: "FitRent", sellerVerified: true,
    imageHue: 180, available: true, badge: "Monthly plan",
    description: "Foldable motorised treadmill with 12 programs and Bluetooth. Weekly & monthly plans get free maintenance.",
  },

  // Outdoor
  {
    id: "RK-B0101", title: "Quechua MH100 4-Person Tent", category: "outdoor", categoryName: "Outdoor & Travel", subcategory: "Camping Tent",
    city: "Manali", pincode: "175131", distanceKm: 1.5, dailyRate: 299, itemValue: 8500, rating: 4.8, reviewCount: 287,
    condition: "Very Good", sellerId: "S-4001", sellerName: "Trail & Trek", sellerVerified: true,
    imageHue: 130, available: true,
    description: "Easy 2-minute pitch tent with rainfly and inner mesh. Sleeps 4 — comes with footprint and stakes.",
  },

  // Baby
  {
    id: "RK-C0111", title: "Chicco Bravo Stroller", category: "baby", categoryName: "Baby & Kids", subcategory: "Stroller",
    city: "Mumbai", pincode: "400064", distanceKm: 4.0, dailyRate: 89, itemValue: 16000, rating: 4.7, reviewCount: 73,
    condition: "Like New", sellerId: "S-4101", sellerName: "TinyWheels", sellerVerified: true,
    imageHue: 15, available: true,
    description: "Travel-system stroller compatible with KeyFit infant car-seat. Sanitised between every rental.",
  },

  // Electronics (Continued)
  {
    id: "RK-20014", title: "Premium PA Speaker System (Pair)", category: "electronics", categoryName: "Electronics", subcategory: "Speaker System",
    city: "Mumbai", pincode: "400055", distanceKm: 5.3, dailyRate: 799, itemValue: 42000, rating: 4.8, reviewCount: 42,
    condition: "Like New", sellerId: "S-3280", sellerName: "AudioPro Rentals", sellerVerified: true,
    imageHue: 200, imageSrc: "https://cdn.builder.io/api/v1/image/assets%2F684460e6637049f4ac75efefd246d064%2Fcb48ae7925ba4ab68ab03edb7a94c240?format=webp&width=800&height=1200", available: true, badge: "Pro Sound",
    description: "High-performance dual-woofer PA speakers perfect for events, parties and professional settings. Includes speaker stands and cables.",
    specs: [{ label: "Power", value: "600W RMS" }, { label: "Frequency", value: "40Hz - 20kHz" }, { label: "Impedance", value: "8 Ohms" }],
  },

  // Wearables
  {
    id: "RK-E0121", title: "Apple Watch Series 9 (45mm)", category: "electronics", categoryName: "Electronics", subcategory: "Smartwatch",
    city: "Bengaluru", pincode: "560040", distanceKm: 3.2, dailyRate: 299, itemValue: 42000, rating: 4.9, reviewCount: 156,
    condition: "Like New", sellerId: "S-3250", sellerName: "TechGear Rentals", sellerVerified: true,
    imageHue: 220, imageSrc: "https://cdn.builder.io/api/v1/image/assets%2F684460e6637049f4ac75efefd246d064%2Fb46e9fec5a3e472ca7cff7b59bcc5a3a?format=webp&width=800&height=1200", available: true,
    description: "Latest Apple Watch Series 9 with Always-On display, fitness tracking and health monitoring. Includes original band and charger.",
    specs: [{ label: "Screen", value: "1.9\" LTPO OLED" }, { label: "Water Resistance", value: "50m" }, { label: "Battery", value: "18 hours" }],
  },
];

export const cities = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Kolkata", "Jaipur", "Lucknow", "Gurugram", "Goa", "Manali"];

export type Order = {
  id: string;
  listingId: string;
  title: string;
  imageHue: number;
  status: "Pending" | "Confirmed" | "In Transit" | "Active" | "Return Due" | "Returned" | "Refunded" | "Disputed";
  rentStart: string;
  rentEnd: string;
  daysLeft: number;
  rentalFee: number;
  refundableHold: number;
  delivery: number;
  total: number;
  buyerName?: string;
  sellerName: string;
};

export const buyerOrders: Order[] = [
  { id: "ORD-88241", listingId: "RK-20011", title: "MacBook Pro 14\" M3 Pro", imageHue: 220, status: "Active", rentStart: "12 Nov 2025", rentEnd: "15 Nov 2025", daysLeft: 2, rentalFee: 2697, refundableHold: 195000, delivery: 180, total: 197877, sellerName: "GearLoop Rentals" },
  { id: "ORD-88119", listingId: "RK-40031", title: "Bosch Impact Drill", imageHue: 45, status: "Return Due", rentStart: "08 Nov 2025", rentEnd: "10 Nov 2025", daysLeft: 0, rentalFee: 447, refundableHold: 4500, delivery: 80, total: 5027, sellerName: "ToolBay" },
  { id: "ORD-87740", listingId: "RK-10242", title: "Pastel Pink Sequin Saree", imageHue: 320, status: "Refunded", rentStart: "20 Oct 2025", rentEnd: "22 Oct 2025", daysLeft: 0, rentalFee: 1700, refundableHold: 14500, delivery: 100, total: 16300, sellerName: "Meera Drapes" },
];

export const sellerOrders: Order[] = [
  { id: "ORD-88312", listingId: "RK-30021", title: "Sony A7 IV Mirrorless + 24-70mm", imageHue: 30, status: "Pending", rentStart: "18 Nov 2025", rentEnd: "21 Nov 2025", daysLeft: 7, rentalFee: 5397, refundableHold: 285000, delivery: 250, total: 290647, buyerName: "Priya Sharma", sellerName: "You" },
  { id: "ORD-88241", listingId: "RK-20011", title: "MacBook Pro 14\" M3 Pro", imageHue: 220, status: "Active", rentStart: "12 Nov 2025", rentEnd: "15 Nov 2025", daysLeft: 2, rentalFee: 2697, refundableHold: 195000, delivery: 180, total: 197877, buyerName: "Anjali Mehta", sellerName: "You" },
  { id: "ORD-88102", listingId: "RK-40031", title: "Bosch Impact Drill", imageHue: 45, status: "Returned", rentStart: "30 Oct 2025", rentEnd: "02 Nov 2025", daysLeft: 0, rentalFee: 447, refundableHold: 4500, delivery: 80, total: 5027, buyerName: "Riya Kapoor", sellerName: "You" },
];

export const reviews = [
  { name: "Anjali M.", city: "Mumbai", rating: 5, date: "2 weeks ago", text: "Item arrived spotless and exactly as photos. Hold was refunded in 36 hours after return — much faster than promised.", verified: true },
  { name: "Riya K.", city: "Pune", rating: 5, date: "1 month ago", text: "Saved me thousands over buying. Seller was super responsive and the doorstep pickup was on time.", verified: true },
  { name: "Sneha P.", city: "Bengaluru", rating: 4, date: "1 month ago", text: "Beautiful piece, slight delay in pickup but refund came through cleanly. Would recommend booking 5 days early.", verified: true },
];
