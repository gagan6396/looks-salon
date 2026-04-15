"use client"

import { useState } from "react";

type Service = {
  id: number;
  category: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  tag?: string;
};

const services: Service[] = [
  // ========== MEN'S STYLING ==========
  {
    id: 1,
    category: "Men's Styling",
    name: "Hair Cut",
    description: "Professional precision haircut tailored to your preference.",
    duration: "45 min",
    price: "₹600",
  },
  {
    id: 2,
    category: "Men's Styling",
    name: "Senior Stylist Hair Cut",
    description: "Expert haircut by our senior stylist for a premium finish.",
    duration: "45 min",
    price: "₹1,000",
    tag: "Premium",
  },
  {
    id: 3,
    category: "Men's Styling",
    name: "Child Hair Cut",
    description: "Gentle haircut for kids in a comfortable environment.",
    duration: "30 min",
    price: "₹550",
  },
  {
    id: 4,
    category: "Men's Styling",
    name: "Shave",
    description: "Classic hot towel shave for a smooth, clean finish.",
    duration: "30 min",
    price: "₹400",
  },
  {
    id: 5,
    category: "Men's Styling",
    name: "Shave (Royal)",
    description: "Luxury royal shave experience with premium products.",
    duration: "45 min",
    price: "₹1,000",
    tag: "Premium",
  },
  {
    id: 6,
    category: "Men's Styling",
    name: "Beard Trim",
    description: "Precision beard shaping and grooming.",
    duration: "20 min",
    price: "₹450",
  },
  {
    id: 7,
    category: "Men's Styling",
    name: "Beard Color",
    description: "Professional beard coloring for a distinguished look.",
    duration: "30 min",
    price: "₹750",
  },
  {
    id: 8,
    category: "Men's Styling",
    name: "Hair Wash",
    description: "Revitalizing hair wash with premium products.",
    duration: "15 min",
    price: "₹500",
  },
  {
    id: 9,
    category: "Men's Styling",
    name: "Conditioner",
    description: "Deep conditioning treatment for soft, manageable hair.",
    duration: "15 min",
    price: "₹300",
  },
  {
    id: 10,
    category: "Men's Styling",
    name: "Wash & Conditioner",
    description: "Complete wash and conditioning service.",
    duration: "25 min",
    price: "₹450",
  },
  {
    id: 11,
    category: "Men's Styling",
    name: "Head Massage",
    description: "Relaxing head massage to relieve stress and tension.",
    duration: "30 min",
    price: "₹600",
  },
  {
    id: 12,
    category: "Men's Styling",
    name: "Hair Bond Treatment",
    description: "Strengthening treatment for damaged hair.",
    duration: "45 min",
    price: "₹2,000",
  },
  {
    id: 13,
    category: "Men's Styling",
    name: "Loreal Wash",
    description: "Premium Loreal professional hair wash.",
    duration: "20 min",
    price: "₹450",
  },
  {
    id: 14,
    category: "Men's Styling",
    name: "Kerastase Wash",
    description: "Luxury Kerastase hair wash experience.",
    duration: "20 min",
    price: "₹550",
    tag: "Premium",
  },
  {
    id: 15,
    category: "Men's Styling",
    name: "Coconut Oil Massage",
    description: "Nourishing coconut oil head massage.",
    duration: "30 min",
    price: "₹650",
  },
  {
    id: 16,
    category: "Men's Styling",
    name: "Almond Oil Massage",
    description: "Hydrating almond oil scalp massage.",
    duration: "30 min",
    price: "₹800",
  },
  {
    id: 17,
    category: "Men's Styling",
    name: "Olive Oil Massage",
    description: "Rich olive oil treatment for healthy hair.",
    duration: "30 min",
    price: "₹750",
  },
  {
    id: 18,
    category: "Men's Styling",
    name: "Elixir Oil Massage With Wash",
    description: "Premium elixir oil massage followed by hair wash.",
    duration: "45 min",
    price: "₹1,500",
    tag: "Bestseller",
  },
  {
    id: 19,
    category: "Men's Styling",
    name: "Hair Color",
    description: "Professional full hair coloring service.",
    duration: "60 min",
    price: "₹1,500",
  },
  {
    id: 20,
    category: "Men's Styling",
    name: "Hair Color - Ammonia Free",
    description: "Gentle ammonia-free color for sensitive scalps.",
    duration: "60 min",
    price: "₹1,700",
  },
  {
    id: 21,
    category: "Men's Styling",
    name: "Highlights",
    description: "Dimensional highlights for added depth and style.",
    duration: "90 min",
    price: "₹3,000",
  },
  {
    id: 22,
    category: "Men's Styling",
    name: "Loreal Hair Spa",
    description: "Rejuvenating hair spa treatment by Loreal.",
    duration: "60 min",
    price: "₹1,800",
    tag: "Bestseller",
  },
  {
    id: 23,
    category: "Men's Styling",
    name: "Loreal Scrub Ritual",
    description: "Exfoliating scalp scrub ritual for deep cleansing.",
    duration: "45 min",
    price: "₹2,000",
  },
  {
    id: 24,
    category: "Men's Styling",
    name: "Dry Damaged Hair Treatment",
    description: "Intensive repair for dry, damaged hair.",
    duration: "60 min",
    price: "₹2,000",
  },
  {
    id: 25,
    category: "Men's Styling",
    name: "Frizzy & Unruly Hair Treatment",
    description: "Smoothing treatment for frizzy, hard-to-manage hair.",
    duration: "60 min",
    price: "₹1,500",
  },
  {
    id: 26,
    category: "Men's Styling",
    name: "Chemically Treated Hair Treatment",
    description: "Restorative care for chemically processed hair.",
    duration: "60 min",
    price: "₹1,500",
  },
  {
    id: 27,
    category: "Men's Styling",
    name: "Scalp Advanced Ritual",
    description: "Advanced scalp treatment for overall scalp health.",
    duration: "60 min",
    price: "₹3,000",
    tag: "Premium",
  },

  // ========== LADIES STYLING ==========
  {
    id: 28,
    category: "Ladies Styling",
    name: "Rebonding/Straightening",
    description: "Professional straightening for sleek, smooth hair.",
    duration: "180 min",
    price: "₹6,500+",
  },
  {
    id: 29,
    category: "Ladies Styling",
    name: "Smoothing",
    description: "Frizz-control smoothing treatment.",
    duration: "150 min",
    price: "₹6,500+",
  },
  {
    id: 30,
    category: "Ladies Styling",
    name: "Perming",
    description: "Beautiful, long-lasting curls and waves.",
    duration: "150 min",
    price: "₹6,500+",
  },
  {
    id: 31,
    category: "Ladies Styling",
    name: "Keratin Treatment",
    description: "Protein-rich smoothing treatment for manageable hair.",
    duration: "120 min",
    price: "₹6,000+",
    tag: "Bestseller",
  },
  {
    id: 32,
    category: "Ladies Styling",
    name: "Hair Botox",
    description: "Deep rejuvenation treatment for damaged hair.",
    duration: "120 min",
    price: "₹8,000+",
    tag: "Premium",
  },
  {
    id: 33,
    category: "Ladies Styling",
    name: "Nanoplastia",
    description: "Advanced nano-technology hair straightening.",
    duration: "150 min",
    price: "₹8,000+",
    tag: "Premium",
  },
  {
    id: 34,
    category: "Ladies Styling",
    name: "Root Touch Up",
    description: "Perfect coverage for regrowth and roots.",
    duration: "45 min",
    price: "₹1,500",
  },
  {
    id: 35,
    category: "Ladies Styling",
    name: "Root Touch Up (Ammonia Free)",
    description: "Gentle ammonia-free root coverage.",
    duration: "45 min",
    price: "₹1,700",
  },
  {
    id: 36,
    category: "Ladies Styling",
    name: "Global Hair Color With Ammonia",
    description: "Full head color with long-lasting results.",
    duration: "90 min",
    price: "₹5,000+",
  },
  {
    id: 37,
    category: "Ladies Styling",
    name: "Global Hair Color Ammonia Free",
    description: "Full head color without harsh chemicals.",
    duration: "90 min",
    price: "₹6,000+",
  },
  {
    id: 38,
    category: "Ladies Styling",
    name: "Highlights",
    description: "Professional highlighting for dimensional color.",
    duration: "120 min",
    price: "₹6,000+",
  },
  {
    id: 39,
    category: "Ladies Styling",
    name: "Crown Highlights",
    description: "Focused highlighting on crown area.",
    duration: "90 min",
    price: "₹3,500+",
  },
  {
    id: 40,
    category: "Ladies Styling",
    name: "Blow Dry",
    description: "Professional blowout for volume and shine.",
    duration: "30 min",
    price: "₹500",
  },
  {
    id: 41,
    category: "Ladies Styling",
    name: "Hair Set & Up Style",
    description: "Elegant setting and updo for special occasions.",
    duration: "60 min",
    price: "₹1,500",
  },
  {
    id: 42,
    category: "Ladies Styling",
    name: "Ironing",
    description: "Sleek straightening with professional iron.",
    duration: "30 min",
    price: "₹1,000",
  },
  {
    id: 43,
    category: "Ladies Styling",
    name: "Roller Setting",
    description: "Classic roller set for bouncy, voluminous curls.",
    duration: "60 min",
    price: "₹1,500",
  },
  {
    id: 44,
    category: "Ladies Styling",
    name: "Hair Cut",
    description: "Professional haircut tailored to your face shape.",
    duration: "45 min",
    price: "₹1,200",
  },
  {
    id: 45,
    category: "Ladies Styling",
    name: "Senior Stylist Hair Cut",
    description: "Expert haircut by our senior stylist.",
    duration: "45 min",
    price: "₹1,500",
    tag: "Premium",
  },
  {
    id: 46,
    category: "Ladies Styling",
    name: "Child Hair Cut",
    description: "Gentle haircut for children.",
    duration: "30 min",
    price: "₹850",
  },
  {
    id: 47,
    category: "Ladies Styling",
    name: "Hair Wash",
    description: "Revitalizing hair wash treatment.",
    duration: "15 min",
    price: "₹550",
  },
  {
    id: 48,
    category: "Ladies Styling",
    name: "Hair Conditioning",
    description: "Deep conditioning for soft, manageable hair.",
    duration: "20 min",
    price: "₹200",
  },
  {
    id: 49,
    category: "Ladies Styling",
    name: "Hair Wash + Hair Conditioning",
    description: "Complete wash and conditioning service.",
    duration: "30 min",
    price: "₹550",
  },
  {
    id: 50,
    category: "Ladies Styling",
    name: "Hair Wash + Conditioning With Straight Dry",
    description: "Wash, condition, and straight blow-dry.",
    duration: "45 min",
    price: "₹1,000",
  },
  {
    id: 51,
    category: "Ladies Styling",
    name: "Head Massage",
    description: "Relaxing therapeutic head massage.",
    duration: "30 min",
    price: "₹600+",
  },
  {
    id: 52,
    category: "Ladies Styling",
    name: "Bond Protection Treatment - Olaplex",
    description: "Advanced bond repair treatment for damaged hair.",
    duration: "60 min",
    price: "₹2,500",
    tag: "Premium",
  },
  {
    id: 53,
    category: "Ladies Styling",
    name: "Coconut Oil Massage",
    description: "Nourishing coconut oil scalp massage.",
    duration: "30 min",
    price: "₹650",
  },
  {
    id: 54,
    category: "Ladies Styling",
    name: "Almond Oil Massage",
    description: "Hydrating almond oil treatment.",
    duration: "30 min",
    price: "₹800",
  },
  {
    id: 55,
    category: "Ladies Styling",
    name: "Olive Oil Massage",
    description: "Rich olive oil scalp massage.",
    duration: "30 min",
    price: "₹750",
  },
  {
    id: 56,
    category: "Ladies Styling",
    name: "Elixir Oil With Wash",
    description: "Premium elixir oil massage with wash.",
    duration: "45 min",
    price: "₹1,500",
  },
  {
    id: 57,
    category: "Ladies Styling",
    name: "Dry Damaged Hair Treatment",
    description: "Intensive repair for dry, damaged hair.",
    duration: "60 min",
    price: "₹2,000",
  },
  {
    id: 58,
    category: "Ladies Styling",
    name: "Frizzy & Unruly Hair Treatment",
    description: "Smoothing treatment for frizzy hair.",
    duration: "60 min",
    price: "₹2,000",
  },
  {
    id: 59,
    category: "Ladies Styling",
    name: "Chemically Treated Hair Treatment",
    description: "Restorative care for chemically processed hair.",
    duration: "60 min",
    price: "₹2,000",
  },
  {
    id: 60,
    category: "Ladies Styling",
    name: "Scalp Advanced Ritual",
    description: "Advanced scalp treatment for optimal health.",
    duration: "60 min",
    price: "₹2,500",
  },

  // ========== LADIES BEAUTY ==========
  {
    id: 61,
    category: "Ladies Beauty",
    name: "Face Bleach",
    description: "Gentle facial bleaching for a brighter complexion.",
    duration: "30 min",
    price: "₹600",
  },
  {
    id: 62,
    category: "Ladies Beauty",
    name: "Face Bleach Gold",
    description: "Premium gold-infused face bleach.",
    duration: "30 min",
    price: "₹1,000",
    tag: "Premium",
  },
  {
    id: 63,
    category: "Ladies Beauty",
    name: "D - Tan",
    description: "Deep de-tanning treatment for even skin tone.",
    duration: "45 min",
    price: "₹1,000",
  },
  {
    id: 64,
    category: "Ladies Beauty",
    name: "Full Arms Bleach",
    description: "Bleaching for full arms.",
    duration: "30 min",
    price: "₹800",
  },
  {
    id: 65,
    category: "Ladies Beauty",
    name: "Full Legs Bleach",
    description: "Bleaching for full legs.",
    duration: "40 min",
    price: "₹1,200",
  },
  {
    id: 66,
    category: "Ladies Beauty",
    name: "Face & Neck Bleach",
    description: "Bleaching for face and neck area.",
    duration: "30 min",
    price: "₹900",
  },
  {
    id: 67,
    category: "Ladies Beauty",
    name: "Full Front & Back Bleach",
    description: "Complete front and back body bleaching.",
    duration: "45 min",
    price: "₹1,000",
  },
  {
    id: 68,
    category: "Ladies Beauty",
    name: "Full Body Bleach",
    description: "Complete full body bleaching treatment.",
    duration: "90 min",
    price: "₹4,000",
  },
  {
    id: 69,
    category: "Ladies Beauty",
    name: "Half Legs Bleach",
    description: "Bleaching for half legs.",
    duration: "25 min",
    price: "₹950",
  },
  {
    id: 70,
    category: "Ladies Beauty",
    name: "Feet Massage",
    description: "Relaxing therapeutic foot massage.",
    duration: "30 min",
    price: "₹750",
  },
  {
    id: 71,
    category: "Ladies Beauty",
    name: "Manicure",
    description: "Classic manicure for beautiful hands.",
    duration: "40 min",
    price: "₹1,000",
  },
  {
    id: 72,
    category: "Ladies Beauty",
    name: "French Manicure",
    description: "Elegant French-style manicure.",
    duration: "45 min",
    price: "₹1,500",
  },
  {
    id: 73,
    category: "Ladies Beauty",
    name: "Pedicure",
    description: "Classic pedicure for pampered feet.",
    duration: "40 min",
    price: "₹1,000",
  },
  {
    id: 74,
    category: "Ladies Beauty",
    name: "French Pedicure",
    description: "Elegant French-style pedicure.",
    duration: "45 min",
    price: "₹1,500",
  },
  {
    id: 75,
    category: "Ladies Beauty",
    name: "Nail Paint",
    description: "Professional nail polish application.",
    duration: "15 min",
    price: "₹150",
  },
  {
    id: 76,
    category: "Ladies Beauty",
    name: "Nail Filing",
    description: "Precision nail shaping and filing.",
    duration: "10 min",
    price: "₹100",
  },
  {
    id: 77,
    category: "Ladies Beauty",
    name: "Footprints Manicure",
    description: "Premium Footprints brand manicure.",
    duration: "45 min",
    price: "₹1,300",
  },
  {
    id: 78,
    category: "Ladies Beauty",
    name: "Footprints Pedicure",
    description: "Premium Footprints brand pedicure.",
    duration: "45 min",
    price: "₹1,300",
  },
  {
    id: 79,
    category: "Ladies Beauty",
    name: "Pedilabs Manicure",
    description: "Advanced Pedilabs manicure treatment.",
    duration: "50 min",
    price: "₹1,600",
    tag: "Bestseller",
  },
  {
    id: 80,
    category: "Ladies Beauty",
    name: "Pedilabs Pedicure",
    description: "Advanced Pedilabs pedicure treatment.",
    duration: "50 min",
    price: "₹1,600",
    tag: "Bestseller",
  },
  {
    id: 81,
    category: "Ladies Beauty",
    name: "Ice Cream Manicure",
    description: "Fun, refreshing ice cream themed manicure.",
    duration: "50 min",
    price: "₹1,700",
  },
  {
    id: 82,
    category: "Ladies Beauty",
    name: "Ice Cream Pedicure",
    description: "Fun, refreshing ice cream themed pedicure.",
    duration: "50 min",
    price: "₹1,700",
  },
  {
    id: 83,
    category: "Ladies Beauty",
    name: "Pedi Lab Plus",
    description: "Enhanced Pedi Lab treatment.",
    duration: "60 min",
    price: "₹2,381",
    tag: "Premium",
  },
  {
    id: 84,
    category: "Ladies Beauty",
    name: "Lyco Pedi",
    description: "Luxury lycopene-infused pedicure.",
    duration: "60 min",
    price: "₹2,700",
    tag: "Premium",
  },
  {
    id: 85,
    category: "Ladies Beauty",
    name: "Arms Polishing",
    description: "Exfoliating polish for smooth, radiant arms.",
    duration: "30 min",
    price: "₹1,500",
  },
  {
    id: 86,
    category: "Ladies Beauty",
    name: "Full Back Polish",
    description: "Exfoliating polish for the full back area.",
    duration: "40 min",
    price: "₹2,000",
  },
  {
    id: 87,
    category: "Ladies Beauty",
    name: "Full Body Polish",
    description: "Complete body exfoliation for radiant skin.",
    duration: "90 min",
    price: "₹5,000",
  },
  {
    id: 88,
    category: "Ladies Beauty",
    name: "Full Body Polish Premium",
    description: "Premium full body polishing treatment.",
    duration: "90 min",
    price: "₹8,000",
    tag: "Premium",
  },
  {
    id: 89,
    category: "Ladies Beauty",
    name: "Full Body Massage",
    description: "Relaxing full body massage.",
    duration: "60 min",
    price: "₹3,500",
    tag: "Bestseller",
  },

  // ========== NATURLIV ==========
  {
    id: 90,
    category: "Naturliv",
    name: "Hyperpigmented Cells Faster Clean Up",
    description: "Targets hyperpigmentation with sea algae mask.",
    duration: "30 min",
    price: "₹1,600",
  },
  {
    id: 91,
    category: "Naturliv",
    name: "De-Tan Clean Up",
    description: "Removes tan and speeds up cell turnover.",
    duration: "30 min",
    price: "₹1,800",
  },
  {
    id: 92,
    category: "Naturliv",
    name: "Detox Clean Up",
    description: "Deep detox for oily, congested skin.",
    duration: "30 min",
    price: "₹2,000",
  },
  {
    id: 93,
    category: "Naturliv",
    name: "Aquademm Facial",
    description: "Melanin balancing facial for pigmented skin.",
    duration: "30 min",
    price: "₹2,500",
  },
  {
    id: 94,
    category: "Naturliv",
    name: "Vitademm Facial",
    description: "Brightening and lifting facial to redefine features.",
    duration: "30 min",
    price: "₹2,500",
  },
  {
    id: 95,
    category: "Naturliv",
    name: "Sensiderm Facial",
    description: "Calming facial for sensitive skin.",
    duration: "30 min",
    price: "₹2,500",
  },

  // ========== LAAMIS ORGANIC ==========
  {
    id: 96,
    category: "Laamis Organic",
    name: "Pure White Facial",
    description: "Revives dull, pigmented skin with plant peptides.",
    duration: "60 min",
    price: "₹5,000",
    tag: "Premium",
  },
  {
    id: 97,
    category: "Laamis Organic",
    name: "Pure Youth Facial",
    description: "Boosts luminosity and counters signs of aging.",
    duration: "60 min",
    price: "₹5,000",
    tag: "Premium",
  },
  {
    id: 98,
    category: "Laamis Organic",
    name: "Hydra Facial Treatment",
    description: "Advanced hydrating facial for deep moisture.",
    duration: "60 min",
    price: "₹7,000",
    tag: "Premium",
  },
  {
    id: 99,
    category: "Laamis Organic",
    name: "Pure White Cleanup",
    description: "Brightening cleanup with plant peptides.",
    duration: "30 min",
    price: "₹2,500",
  },
  {
    id: 100,
    category: "Laamis Organic",
    name: "Pure Youth Cleanup",
    description: "Youth-boosting cleanup treatment.",
    duration: "30 min",
    price: "₹2,500",
  },
  {
    id: 101,
    category: "Laamis Organic",
    name: "Sea Algae Mask",
    description: "Purifying sea algae mask treatment.",
    duration: "20 min",
    price: "₹1,500",
  },
  {
    id: 102,
    category: "Laamis Organic",
    name: "Hydra Facial Lightning Mask",
    description: "Brightening hydra facial mask.",
    duration: "20 min",
    price: "₹1,800",
  },

  // ========== KERASTASE ==========
  {
    id: 103,
    category: "Kerastase",
    name: "Discipline Ritual",
    description: "Smoothing ritual for frizz control.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 104,
    category: "Kerastase",
    name: "Curl Manifesto Ritual",
    description: "Defines and enhances natural curls.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 105,
    category: "Kerastase",
    name: "Volume Control & Smoothing Ritual",
    description: "Controls volume and adds smoothness.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 106,
    category: "Kerastase",
    name: "Colour Protection & Radiance Ritual",
    description: "Protects color-treated hair and boosts radiance.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 107,
    category: "Kerastase",
    name: "Intensive Nourishing Ritual",
    description: "Deep nourishment for dry, thirsty hair.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 108,
    category: "Kerastase",
    name: "Bond & Fiber Strengthening Ritual",
    description: "Strengthens hair bonds and fibers.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 109,
    category: "Kerastase",
    name: "Therapiste Reconstructing Ritual",
    description: "Reconstructs severely damaged hair.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 110,
    category: "Kerastase",
    name: "Chronologiste VIP Ritual",
    description: "Youth-revitalizing VIP ritual for aging hair.",
    duration: "90 min",
    price: "₹5,500",
    tag: "VIP",
  },
  {
    id: 111,
    category: "Kerastase",
    name: "Ultimate Bespoke Ritual",
    description: "Customized VIP hair and scalp experience.",
    duration: "90 min",
    price: "₹5,500",
    tag: "VIP",
  },
  {
    id: 112,
    category: "Kerastase",
    name: "Genesis Hair Fall Ritual",
    description: "Targets hair fall with dual-action treatment.",
    duration: "90 min",
    price: "₹5,500",
    tag: "VIP",
  },
  {
    id: 113,
    category: "Kerastase",
    name: "Kerastase Wash + Conditioner",
    description: "Quick luxury wash and condition.",
    duration: "25 min",
    price: "₹650",
  },
  {
    id: 114,
    category: "Kerastase",
    name: "K-water Instant Gloss Blow-dry",
    description: "Instant gloss and blow-dry treatment.",
    duration: "20 min",
    price: "₹1,500",
  },
  {
    id: 115,
    category: "Kerastase",
    name: "Fusio Scrub Detox Ritual",
    description: "Quick detox scrub for scalp refresh.",
    duration: "25 min",
    price: "₹2,500",
  },
  {
    id: 116,
    category: "Kerastase",
    name: "Instant Conditioning Ritual",
    description: "Quick intensive conditioning treatment.",
    duration: "20 min",
    price: "₹2,500",
  },
  {
    id: 117,
    category: "Kerastase",
    name: "Color Gloss Treatment",
    description: "Quick color gloss for shine and tone.",
    duration: "25 min",
    price: "₹2,500",
  },
  {
    id: 118,
    category: "Kerastase",
    name: "Densifying Ritual",
    description: "Promotes hair density and thickness.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 119,
    category: "Kerastase",
    name: "Anti Hair Loss Ritual",
    description: "Targets and reduces hair fall.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 120,
    category: "Kerastase",
    name: "Anti Dandruff Ritual",
    description: "Eliminates dandruff and soothes scalp.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 121,
    category: "Kerastase",
    name: "Soothing Scalp Ritual",
    description: "Calms irritated, sensitive scalps.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
  {
    id: 122,
    category: "Kerastase",
    name: "Anti Oiliness Ritual",
    description: "Controls excess scalp oil production.",
    duration: "60 min",
    price: "₹4,000",
    tag: "Premium",
  },
];

const categories = ["All", "Men's Styling", "Ladies Styling", "Ladies Beauty", "Naturliv", "Laamis Organic", "Kerastase"];
const ITEMS_PER_PAGE = 9;

export default function SalonServices() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedServices = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const getTagStyle = (tag: string) => {
    switch (tag) {
      case "Premium":
        return "bg-gray-100 text-gray-700 border border-gray-300";
      case "VIP":
        return "bg-black text-amber-400 border border-amber-400";
      case "Trending":
        return "bg-black text-white";
      default:
        return "bg-black text-white";
    }
  };

  // Fixed pagination rendering without window reference
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisible = 5;
    
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    // Adjust if we're near the start or end
    if (currentPage <= 3) {
      endPage = Math.min(totalPages, maxVisible);
    }
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(1, totalPages - maxVisible + 1);
    }
    
    // Always show first page
    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => setCurrentPage(1)}
          className="w-8 h-8 text-xs font-body rounded transition-all text-gray-500 hover:bg-gray-100"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="dots-start" className="px-1 text-gray-400 text-xs">...</span>
        );
      }
    }
    
    // Middle pages
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-8 h-8 text-xs font-body rounded transition-all ${
            currentPage === i
              ? "bg-black text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }
    
    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="dots-end" className="px-1 text-gray-400 text-xs">...</span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className="w-8 h-8 text-xs font-body rounded transition-all text-gray-500 hover:bg-gray-100"
        >
          {totalPages}
        </button>
      );
    }
    
    return buttons;
  };

  return (
    <section className="bg-white text-black font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Header - Compact */}
        <div className="mb-10">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-2">
            Our Offerings
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Services & <span className="italic">Treatments</span>
            </h2>
            <p className="font-body text-sm text-gray-500 max-w-md">
              Every service is a ritual. Curated for results, delivered with intention.
            </p>
          </div>
          <div className="w-12 h-px bg-black mt-4" />
        </div>

        {/* Category Filter - Compact */}
        <div className="flex gap-5 mb-8 overflow-x-auto pb-2 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`font-body text-xs tracking-wider uppercase whitespace-nowrap pb-1.5 transition-all ${
                activeCategory === cat
                  ? "text-black border-b border-black font-medium"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-100 rounded-lg p-5 hover:shadow-md transition-all hover:border-gray-200 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-body text-[10px] tracking-wider uppercase text-gray-400">
                  {service.category}
                </span>
                {service.tag && (
                  <span className={`font-body text-[9px] tracking-wider uppercase px-1.5 py-0.5 rounded ${getTagStyle(service.tag)}`}>
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display text-base font-semibold mb-1.5 group-hover:italic transition-all">
                {service.name}
              </h3>

              {/* Description */}
              <p className="font-body text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                {service.description}
              </p>

              {/* Price & Duration */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <span className="font-display text-lg font-bold tracking-tight">{service.price}</span>
                <span className="font-body text-[10px] text-gray-400">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-3 mt-10">
            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`px-2 sm:px-3 py-1.5 text-xs font-body tracking-wide rounded border transition-all ${
                  currentPage === 1
                    ? "text-gray-300 border-gray-100 cursor-not-allowed"
                    : "text-black border-gray-200 hover:bg-black hover:text-white hover:border-black"
                }`}
              >
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">←</span>
              </button>
              
              <div className="flex gap-1">
                {renderPaginationButtons()}
              </div>
              
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`px-2 sm:px-3 py-1.5 text-xs font-body tracking-wide rounded border transition-all ${
                  currentPage === totalPages
                    ? "text-gray-300 border-gray-100 cursor-not-allowed"
                    : "text-black border-gray-200 hover:bg-black hover:text-white hover:border-black"
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">→</span>
              </button>
            </div>
            
            {/* Page indicator for mobile */}
            <div className="sm:hidden text-center">
              <p className="font-body text-[11px] text-gray-400">
                Page {currentPage} of {totalPages}
              </p>
            </div>
          </div>
        )}

        {/* Result count */}
        <div className="text-center mt-6">
          <p className="font-body text-[11px] text-gray-400">
            Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)} of {filtered.length} services
          </p>
        </div>

        {/* Bottom CTA - Compact */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-8">
          <p className="font-display italic text-base text-gray-400">
            Can't find what you're looking for?
          </p>
          <button className="font-body text-[11px] tracking-[0.2em] uppercase bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
