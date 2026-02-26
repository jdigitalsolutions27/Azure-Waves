export type Offer = {
  id: string;
  title: string;
  description: string;
  inclusions: string[];
  conditions: string;
  badge: string;
};

export const offers: Offer[] = [
  {
    id: "romantic-getaway",
    title: "Romantic Getaway",
    description: "A curated two-night couples retreat in a Horizon Honeymoon Suite.",
    inclusions: [
      "Daily breakfast for two",
      "One couple spa ritual",
      "Sunset beach dinner",
    ],
    conditions: "Valid for 2-night stays. Blackout dates apply.",
    badge: "Limited 20 Slots",
  },
  {
    id: "family-weekend",
    title: "Family Weekend Escape",
    description: "Perfect for families seeking beach play and tailored kid-friendly experiences.",
    inclusions: [
      "Kids stay and eat free (up to 2 children)",
      "Complimentary activity pass",
      "Family photo session",
    ],
    conditions: "Weekend check-in only. Minimum 2 nights.",
    badge: "Most Popular",
  },
  {
    id: "long-stay",
    title: "Long Stay Savings",
    description: "Stay longer and enjoy deeper nightly savings with premium inclusions.",
    inclusions: [
      "Up to 25% room savings",
      "Laundry credit",
      "Resort dining voucher",
    ],
    conditions: "Minimum 5 nights required.",
    badge: "Save 25%",
  },
  {
    id: "wellness-reset",
    title: "Wellness Reset",
    description: "Recharge with restorative spa and movement sessions by the sea.",
    inclusions: [
      "Daily yoga",
      "Two spa therapies",
      "Wellness tasting menu",
    ],
    conditions: "Available for selected room categories.",
    badge: "New",
  },
  {
    id: "advance-purchase",
    title: "Advance Purchase",
    description: "Book early to unlock premium rates and complimentary extras.",
    inclusions: [
      "18% discount",
      "Welcome minibar setup",
      "Priority check-in",
    ],
    conditions: "Full prepayment required. Non-refundable.",
    badge: "Book 30 Days Ahead",
  },
  {
    id: "wedding-honeymoon",
    title: "Wedding & Honeymoon",
    description: "An intimate beachfront ceremony and post-wedding stay package.",
    inclusions: [
      "Ceremony styling",
      "Dedicated event planner",
      "2-night honeymoon suite",
    ],
    conditions: "Subject to venue and planner availability.",
    badge: "Premium Package",
  },
];

