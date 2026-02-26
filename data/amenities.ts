export type Amenity = {
  id: string;
  title: string;
  description: string;
  image: string;
  highlight: string;
};

export const amenities: Amenity[] = [
  {
    id: "infinity-pool",
    title: "Infinity Pool",
    description:
      "A tiered infinity pool overlooking the bay, with private cabanas, sun decks, and crafted refreshments.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    highlight: "Open 6:00 AM - 10:00 PM",
  },
  {
    id: "beach-access",
    title: "Private Beach Access",
    description:
      "Step from resort gardens onto pristine sand with dedicated loungers, umbrellas, and beach concierge service.",
    image:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1400&q=80",
    highlight: "Reserved guest-only shorefront",
  },
  {
    id: "spa",
    title: "Azure Spa",
    description:
      "A calm wellness sanctuary featuring aromatherapy rituals, couple rooms, and ocean-sound recovery lounges.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
    highlight: "Signature 90-minute wave ritual",
  },
  {
    id: "restaurant",
    title: "Coastal Restaurant",
    description:
      "All-day dining with seasonal seafood, chef tasting menus, and sunrise breakfasts on an open terrace.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
    highlight: "Farm-to-shore ingredients",
  },
  {
    id: "sky-bar",
    title: "Skyline Bar",
    description:
      "Sunset cocktails, live acoustic sets, and panoramic coastline views from the rooftop lounge.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80",
    highlight: "Happy hour 5:00 PM - 7:00 PM",
  },
  {
    id: "wifi",
    title: "High-Speed WiFi",
    description:
      "Reliable resort-wide high-speed connectivity in rooms, beach lounges, work nooks, and event spaces.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    highlight: "Complimentary for all guests",
  },
];

