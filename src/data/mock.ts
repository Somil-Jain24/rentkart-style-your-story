// Mock data for The RentVerse marketplace
// Realistic Indian fashion rental context
import lehengaMaroon from "@/assets/ref-lehenga-maroon.jpg";
import sherwaniIvory from "@/assets/ref-sherwani-ivory.jpg";
import sareePink from "@/assets/ref-saree-pink.jpg";
import jewelleryKundan from "@/assets/ref-jewellery-kundan.jpg";

export type Listing = {
  id: string;
  title: string;
  category: string;
  city: string;
  pincode: string;
  dailyRate: number;
  itemValue: number; // refundable hold
  rating: number;
  reviewCount: number;
  size: string;
  condition: "Like New" | "Excellent" | "Very Good";
  sellerId: string;
  sellerName: string;
  sellerVerified: boolean;
  imageHue: number; // for placeholder gradient
  imageSrc?: string;
  available: boolean;
  badge?: string;
  description: string;
};

const HUES = [25, 8, 350, 320, 45, 200, 160, 12, 60, 280, 30, 15];

const make = (i: number, p: Partial<Listing>): Listing => ({
  id: `RK-${10240 + i}`,
  title: "Royal Maroon Banarasi Lehenga",
  category: "Lehenga",
  city: "Mumbai",
  pincode: "400050",
  dailyRate: 1200,
  itemValue: 24500,
  rating: 4.7,
  reviewCount: 142,
  size: "M",
  condition: "Like New",
  sellerId: "S-2201",
  sellerName: "Aarohi Couture",
  sellerVerified: true,
  imageHue: HUES[i % HUES.length],
  available: true,
  description:
    "Hand-embroidered Banarasi silk lehenga with zari work. Worn twice, professionally dry-cleaned after every rental. Perfect for sangeet and reception.",
  ...p,
});

export const listings: Listing[] = [
  make(0, { title: "Royal Maroon Banarasi Lehenga", category: "Lehenga", dailyRate: 1450, itemValue: 28500, badge: "Wedding Pick", imageSrc: lehengaMaroon }),
  make(1, { title: "Ivory Sherwani with Dupatta", category: "Sherwani", city: "Delhi", pincode: "110001", dailyRate: 1100, itemValue: 22000, sellerName: "Karan Menswear", sellerId: "S-2310", imageSrc: sherwaniIvory }),
  make(2, { title: "Pastel Pink Sequin Saree", category: "Saree", city: "Bengaluru", pincode: "560001", dailyRate: 850, itemValue: 14500, rating: 4.9, reviewCount: 213, sellerName: "Meera Drapes", sellerId: "S-1908", imageSrc: sareePink }),
  make(3, { title: "Emerald Anarkali Suit", category: "Anarkali", city: "Hyderabad", pincode: "500032", dailyRate: 720, itemValue: 11800, sellerName: "Zarina Boutique", sellerId: "S-2455", badge: "Trending" }),
  make(4, { title: "Designer Kundan Necklace Set", category: "Jewellery", city: "Jaipur", pincode: "302001", dailyRate: 480, itemValue: 9500, sellerName: "Rajwada Ornaments", sellerId: "S-2102", rating: 4.8, reviewCount: 98, imageSrc: jewelleryKundan }),
  make(5, { title: "Velvet Bandhgala Suit", category: "Bandhgala", city: "Mumbai", pincode: "400028", dailyRate: 1350, itemValue: 26000, sellerName: "Atelier Verma", sellerId: "S-2199" }),
  make(6, { title: "Mint Organza Lehenga", category: "Lehenga", city: "Pune", pincode: "411001", dailyRate: 980, itemValue: 18500, sellerName: "Saanvi Studio", sellerId: "S-2280", badge: "Under ₹1500" }),
  make(7, { title: "Black Tuxedo with Bow Tie", category: "Tuxedo", city: "Gurugram", pincode: "122002", dailyRate: 1250, itemValue: 19000, sellerName: "Suit Society", sellerId: "S-2055", sellerVerified: true }),
  make(8, { title: "Floral Print Sangeet Gown", category: "Gown", city: "Chennai", pincode: "600001", dailyRate: 690, itemValue: 9800, sellerName: "Tara Closet", sellerId: "S-2611", rating: 4.6, reviewCount: 76 }),
  make(9, { title: "Heritage Silk Dhoti Kurta", category: "Kurta", city: "Kolkata", pincode: "700019", dailyRate: 540, itemValue: 7200, sellerName: "Banga Vastra", sellerId: "S-2700" }),
  make(10, { title: "Rose Gold Designer Clutch", category: "Accessories", city: "Mumbai", pincode: "400050", dailyRate: 220, itemValue: 3800, sellerName: "Aarohi Couture", sellerId: "S-2201", rating: 4.5, reviewCount: 41 }),
  make(11, { title: "Royal Blue Velvet Sherwani", category: "Sherwani", city: "Lucknow", pincode: "226001", dailyRate: 1180, itemValue: 23500, sellerName: "Awadhi Threads", sellerId: "S-2390", badge: "Top Rated" }),
];

export const categories = [
  { name: "Lehenga", count: 1240, hue: 350 },
  { name: "Sherwani", count: 860, hue: 25 },
  { name: "Saree", count: 1980, hue: 320 },
  { name: "Anarkali", count: 540, hue: 160 },
  { name: "Gown", count: 720, hue: 280 },
  { name: "Tuxedo", count: 310, hue: 220 },
  { name: "Jewellery", count: 1450, hue: 45 },
  { name: "Accessories", count: 980, hue: 12 },
];

export const cities = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Kolkata", "Jaipur", "Lucknow", "Gurugram"];

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
  {
    id: "ORD-88241",
    listingId: "RK-10240",
    title: "Royal Maroon Banarasi Lehenga",
    imageHue: 350,
    status: "Active",
    rentStart: "12 Nov 2025",
    rentEnd: "15 Nov 2025",
    daysLeft: 2,
    rentalFee: 4350,
    refundableHold: 24500,
    delivery: 180,
    total: 29030,
    sellerName: "Aarohi Couture",
  },
  {
    id: "ORD-88119",
    listingId: "RK-10243",
    title: "Emerald Anarkali Suit",
    imageHue: 160,
    status: "Return Due",
    rentStart: "08 Nov 2025",
    rentEnd: "10 Nov 2025",
    daysLeft: 0,
    rentalFee: 2160,
    refundableHold: 11800,
    delivery: 120,
    total: 14080,
    sellerName: "Zarina Boutique",
  },
  {
    id: "ORD-87740",
    listingId: "RK-10242",
    title: "Pastel Pink Sequin Saree",
    imageHue: 320,
    status: "Refunded",
    rentStart: "20 Oct 2025",
    rentEnd: "22 Oct 2025",
    daysLeft: 0,
    rentalFee: 1700,
    refundableHold: 14500,
    delivery: 100,
    total: 16300,
    sellerName: "Meera Drapes",
  },
];

export const sellerOrders: Order[] = [
  {
    id: "ORD-88312",
    listingId: "RK-10240",
    title: "Royal Maroon Banarasi Lehenga",
    imageHue: 350,
    status: "Pending",
    rentStart: "18 Nov 2025",
    rentEnd: "21 Nov 2025",
    daysLeft: 7,
    rentalFee: 4350,
    refundableHold: 24500,
    delivery: 180,
    total: 29030,
    buyerName: "Priya Sharma",
    sellerName: "You",
  },
  {
    id: "ORD-88241",
    listingId: "RK-10240",
    title: "Royal Maroon Banarasi Lehenga",
    imageHue: 350,
    status: "Active",
    rentStart: "12 Nov 2025",
    rentEnd: "15 Nov 2025",
    daysLeft: 2,
    rentalFee: 4350,
    refundableHold: 24500,
    delivery: 180,
    total: 29030,
    buyerName: "Anjali Mehta",
    sellerName: "You",
  },
  {
    id: "ORD-88102",
    listingId: "RK-10246",
    title: "Mint Organza Lehenga",
    imageHue: 160,
    status: "Returned",
    rentStart: "30 Oct 2025",
    rentEnd: "02 Nov 2025",
    daysLeft: 0,
    rentalFee: 2940,
    refundableHold: 18500,
    delivery: 150,
    total: 21590,
    buyerName: "Riya Kapoor",
    sellerName: "You",
  },
];

export const reviews = [
  { name: "Anjali M.", city: "Mumbai", rating: 5, date: "2 weeks ago", text: "Lehenga arrived spotless and exactly as photos. Hold was refunded in 2 days after return. Aarohi was super responsive!", verified: true },
  { name: "Riya K.", city: "Pune", rating: 5, date: "1 month ago", text: "Saved me ₹40,000 over buying. The fit was perfect with the size guide. Will rent again for cousin's wedding.", verified: true },
  { name: "Sneha P.", city: "Bengaluru", rating: 4, date: "1 month ago", text: "Beautiful piece, slight delay in pickup but refund came through. Recommend booking 5 days early.", verified: true },
];
