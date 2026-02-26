export type Room = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: string;
  view: "Ocean" | "Garden" | "Lagoon";
  bedType: string;
  featured: boolean;
  images: string[];
  highlights: string[];
  inclusions: string[];
  policies: string[];
};

export const rooms: Room[] = [
  {
    id: "rm_001",
    slug: "ocean-pearl-suite",
    name: "Ocean Pearl Suite",
    description:
      "A signature suite with wall-to-wall ocean views, private balcony soaking tub, and handcrafted coastal interiors.",
    price: 460,
    capacity: 2,
    size: "62 sqm",
    view: "Ocean",
    bedType: "1 King Bed",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: ["Oceanfront Balcony", "Sunrise Butler Breakfast", "Rain Shower"],
    inclusions: [
      "Daily breakfast for two",
      "Welcome drinks on arrival",
      "Complimentary mini bar replenished daily",
      "Evening turndown service",
    ],
    policies: [
      "Check-in at 3:00 PM, check-out at 11:00 AM",
      "Free cancellation up to 7 days before arrival",
      "No pets allowed in this room category",
    ],
  },
  {
    id: "rm_002",
    slug: "tidepool-deluxe-room",
    name: "Tidepool Deluxe Room",
    description:
      "Bright and airy room made for relaxed stays with direct access to tropical courtyards and calm water features.",
    price: 290,
    capacity: 2,
    size: "38 sqm",
    view: "Garden",
    bedType: "1 Queen Bed",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1576675784201-0e142b423952?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: ["Garden Terrace", "Premium Linen", "Smart Room Controls"],
    inclusions: [
      "Daily breakfast for two",
      "High-speed WiFi",
      "Beach shuttle service",
      "Access to fitness center",
    ],
    policies: [
      "Check-in at 3:00 PM, check-out at 11:00 AM",
      "Free cancellation up to 5 days before arrival",
      "Extra bed available on request",
    ],
  },
  {
    id: "rm_003",
    slug: "sunset-cliff-villa",
    name: "Sunset Cliff Villa",
    description:
      "A private villa perched above the beach with plunge pool, open-plan living, and dramatic golden-hour views.",
    price: 680,
    capacity: 4,
    size: "95 sqm",
    view: "Ocean",
    bedType: "1 King + 2 Twin Beds",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: ["Private Plunge Pool", "Ocean Deck", "In-villa Dining"],
    inclusions: [
      "Daily breakfast for four",
      "Airport transfer both ways",
      "Complimentary sunset cocktails",
      "Butler service from 7:00 AM to 9:00 PM",
    ],
    policies: [
      "Check-in at 3:00 PM, check-out at 11:00 AM",
      "50% deposit required on confirmation",
      "Free cancellation up to 14 days before arrival",
    ],
  },
  {
    id: "rm_004",
    slug: "lagoon-family-suite",
    name: "Lagoon Family Suite",
    description:
      "Two connected bedrooms with a generous lounge area and lagoon-view terrace designed for families.",
    price: 520,
    capacity: 5,
    size: "88 sqm",
    view: "Lagoon",
    bedType: "1 King + 2 Double Beds",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: ["Connecting Bedrooms", "Family Lounge", "Kids Welcome Pack"],
    inclusions: [
      "Daily breakfast for four",
      "Children activity access",
      "Laundry credits",
      "Private family cabana at the pool",
    ],
    policies: [
      "Check-in at 3:00 PM, check-out at 11:00 AM",
      "Children under 6 stay free with parents",
      "Free cancellation up to 7 days before arrival",
    ],
  },
  {
    id: "rm_005",
    slug: "azure-penthouse",
    name: "Azure Penthouse",
    description:
      "Top-floor penthouse with panoramic sea views, entertainment lounge, and curated concierge service.",
    price: 920,
    capacity: 4,
    size: "120 sqm",
    view: "Ocean",
    bedType: "2 King Beds",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: ["Panoramic Terrace", "Private Check-in", "Signature Concierge"],
    inclusions: [
      "Chef-curated breakfast in-suite",
      "Complimentary premium bar setup",
      "One private wellness session",
      "Airport fast-track service",
    ],
    policies: [
      "Check-in at 3:00 PM, check-out at 11:00 AM",
      "Non-smoking suite",
      "Cancellation allowed up to 21 days before arrival",
    ],
  },
  {
    id: "rm_006",
    slug: "garden-breeze-studio",
    name: "Garden Breeze Studio",
    description:
      "A serene studio retreat with textured wood finishes, spa-like bath, and tropical garden outlook.",
    price: 240,
    capacity: 2,
    size: "32 sqm",
    view: "Garden",
    bedType: "1 Queen Bed",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: ["Garden View", "Spa Bathroom", "Quiet Wing"],
    inclusions: [
      "Daily breakfast for two",
      "Welcome fruit platter",
      "Access to yoga pavilion",
      "Complimentary bike rental",
    ],
    policies: [
      "Check-in at 3:00 PM, check-out at 11:00 AM",
      "No extra bed available",
      "Free cancellation up to 3 days before arrival",
    ],
  },
  {
    id: "rm_007",
    slug: "private-cove-villa",
    name: "Private Cove Villa",
    description:
      "An ultra-private beachfront villa with direct sand access and romantic outdoor dining deck.",
    price: 760,
    capacity: 3,
    size: "102 sqm",
    view: "Ocean",
    bedType: "1 King Bed + Daybed",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: ["Beachfront Access", "Private Dining Deck", "Outdoor Shower"],
    inclusions: [
      "Daily breakfast for two",
      "In-villa afternoon tea",
      "Private beach setup",
      "Dedicated concierge",
    ],
    policies: [
      "Check-in at 3:00 PM, check-out at 11:00 AM",
      "Credit card guarantee required",
      "Free cancellation up to 10 days before arrival",
    ],
  },
  {
    id: "rm_008",
    slug: "horizon-honeymoon-suite",
    name: "Horizon Honeymoon Suite",
    description:
      "Designed for couples with canopy bed, sunset bathtub, and intimate private balcony dining.",
    price: 540,
    capacity: 2,
    size: "58 sqm",
    view: "Ocean",
    bedType: "1 King Bed",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: ["Couples Retreat", "Sunset Soaking Tub", "Sparkling Wine Setup"],
    inclusions: [
      "Daily breakfast for two",
      "One 60-minute couple spa session",
      "Sunset beach picnic",
      "Late check-out subject to availability",
    ],
    policies: [
      "Check-in at 3:00 PM, check-out at 11:00 AM",
      "Valid ID required at check-in",
      "Free cancellation up to 7 days before arrival",
    ],
  },
];

export const roomTypes = rooms.map((room) => ({
  value: room.id,
  label: room.name,
}));

