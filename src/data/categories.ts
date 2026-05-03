// Category taxonomy for The RentVerse — multi-vertical rental marketplace
import {
  Shirt,
  Wrench,
  Camera,
  Sofa,
  Bike,
  PartyPopper,
  Gem,
  Music2,
  Dumbbell,
  Tent,
  Baby,
  Laptop,
  MoreHorizontal,
  type LucideIcon,
} from "lucide-react";

export type SubCategory = { slug: string; name: string };
export type Category = {
  slug: string;
  name: string;
  icon: LucideIcon;
  hue: number;
  blurb: string;
  subcategories: SubCategory[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "fashion",
    name: "Fashion & Ethnic Wear",
    icon: Shirt,
    hue: 350,
    blurb: "Lehengas, sherwanis, sarees, gowns",
    subcategories: [
      { slug: "lehenga", name: "Lehenga" },
      { slug: "sherwani", name: "Sherwani" },
      { slug: "saree", name: "Saree" },
      { slug: "anarkali", name: "Anarkali" },
      { slug: "gown", name: "Gown" },
      { slug: "tuxedo", name: "Tuxedo / Suit" },
      { slug: "kurta", name: "Kurta" },
    ],
  },
  {
    slug: "electronics",
    name: "Electronics",
    icon: Laptop,
    hue: 220,
    blurb: "Laptops, projectors, gaming, audio",
    subcategories: [
      { slug: "laptop", name: "Laptop" },
      { slug: "projector", name: "Projector" },
      { slug: "gaming-console", name: "Gaming Console" },
      { slug: "speaker", name: "Speakers / Audio" },
      { slug: "drone", name: "Drone" },
      { slug: "vr-headset", name: "VR Headset" },
    ],
  },
  {
    slug: "cameras",
    name: "Cameras & Lenses",
    icon: Camera,
    hue: 30,
    blurb: "DSLRs, mirrorless, lenses, gimbals",
    subcategories: [
      { slug: "dslr", name: "DSLR" },
      { slug: "mirrorless", name: "Mirrorless" },
      { slug: "lens", name: "Lens" },
      { slug: "gimbal", name: "Gimbal / Stabiliser" },
      { slug: "lighting", name: "Lighting Kit" },
      { slug: "action-cam", name: "Action Camera" },
    ],
  },
  {
    slug: "tools",
    name: "Tools & Equipment",
    icon: Wrench,
    hue: 45,
    blurb: "Power tools, ladders, generators",
    subcategories: [
      { slug: "drill", name: "Drill Machine" },
      { slug: "saw", name: "Saw / Cutter" },
      { slug: "ladder", name: "Ladder" },
      { slug: "generator", name: "Generator" },
      { slug: "pressure-washer", name: "Pressure Washer" },
      { slug: "welding", name: "Welding Kit" },
    ],
  },
  {
    slug: "furniture",
    name: "Furniture & Appliances",
    icon: Sofa,
    hue: 160,
    blurb: "Sofas, fridges, washing machines",
    subcategories: [
      { slug: "sofa", name: "Sofa" },
      { slug: "bed", name: "Bed & Mattress" },
      { slug: "fridge", name: "Refrigerator" },
      { slug: "washing-machine", name: "Washing Machine" },
      { slug: "ac", name: "Air Conditioner" },
      { slug: "study-table", name: "Study Table" },
    ],
  },
  {
    slug: "vehicles",
    name: "Vehicles & Mobility",
    icon: Bike,
    hue: 200,
    blurb: "Bikes, scooters, cycles, EVs",
    subcategories: [
      { slug: "bike", name: "Motorbike" },
      { slug: "scooter", name: "Scooter" },
      { slug: "cycle", name: "Bicycle" },
      { slug: "ev-scooter", name: "Electric Scooter" },
      { slug: "car", name: "Self-drive Car" },
    ],
  },
  {
    slug: "events",
    name: "Event & Party",
    icon: PartyPopper,
    hue: 320,
    blurb: "Decor, sound systems, catering gear",
    subcategories: [
      { slug: "decor", name: "Decor & Backdrops" },
      { slug: "sound-system", name: "Sound System" },
      { slug: "tables-chairs", name: "Tables & Chairs" },
      { slug: "tents", name: "Tents & Canopy" },
      { slug: "lighting-event", name: "Stage Lighting" },
    ],
  },
  {
    slug: "jewellery",
    name: "Jewellery",
    icon: Gem,
    hue: 50,
    blurb: "Kundan, polki, statement sets",
    subcategories: [
      { slug: "necklace", name: "Necklace Set" },
      { slug: "earrings", name: "Earrings" },
      { slug: "bangles", name: "Bangles" },
      { slug: "matha-patti", name: "Matha Patti" },
      { slug: "watch", name: "Designer Watch" },
    ],
  },
  {
    slug: "musical",
    name: "Musical Instruments",
    icon: Music2,
    hue: 280,
    blurb: "Guitars, keyboards, tabla, dhol",
    subcategories: [
      { slug: "guitar", name: "Guitar" },
      { slug: "keyboard", name: "Keyboard / Piano" },
      { slug: "drums", name: "Drum Kit" },
      { slug: "tabla", name: "Tabla / Dhol" },
      { slug: "dj-controller", name: "DJ Controller" },
    ],
  },
  {
    slug: "sports",
    name: "Sports & Fitness",
    icon: Dumbbell,
    hue: 180,
    blurb: "Treadmills, cycles, gear",
    subcategories: [
      { slug: "treadmill", name: "Treadmill" },
      { slug: "exercise-bike", name: "Exercise Bike" },
      { slug: "cricket-kit", name: "Cricket Kit" },
      { slug: "skates", name: "Skates" },
    ],
  },
  {
    slug: "outdoor",
    name: "Outdoor & Travel",
    icon: Tent,
    hue: 130,
    blurb: "Camping gear, luggage, treks",
    subcategories: [
      { slug: "tent-camping", name: "Camping Tent" },
      { slug: "sleeping-bag", name: "Sleeping Bag" },
      { slug: "backpack", name: "Trek Backpack" },
      { slug: "luggage", name: "Luggage" },
    ],
  },
  {
    slug: "baby",
    name: "Baby & Kids",
    icon: Baby,
    hue: 15,
    blurb: "Strollers, cribs, car seats",
    subcategories: [
      { slug: "stroller", name: "Stroller" },
      { slug: "crib", name: "Crib / Cot" },
      { slug: "car-seat", name: "Car Seat" },
      { slug: "toys", name: "Toys & Play Gym" },
    ],
  },
  {
    slug: "other",
    name: "Other",
    icon: MoreHorizontal,
    hue: 0,
    blurb: "Don't see it? Suggest a custom category",
    subcategories: [],
  },
];

export const findCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
