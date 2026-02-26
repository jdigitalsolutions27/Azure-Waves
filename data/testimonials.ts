export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t_1",
    name: "Isabella R.",
    location: "Los Angeles, USA",
    quote:
      "Every detail felt intentional. The service, the room scent, the sunsets from our suite. It felt effortlessly luxurious.",
    rating: 5,
  },
  {
    id: "t_2",
    name: "Marcus L.",
    location: "Toronto, Canada",
    quote:
      "We inquired online and got a fast, polished reply. The stay matched every promise and then exceeded it.",
    rating: 5,
  },
  {
    id: "t_3",
    name: "Nina P.",
    location: "Sydney, Australia",
    quote:
      "The oceanfront villa and private dinner setup were exceptional. Perfect for a honeymoon escape.",
    rating: 5,
  },
  {
    id: "t_4",
    name: "David C.",
    location: "Austin, USA",
    quote:
      "Family friendly without losing the high-end feel. Kids had activities while we relaxed by the pool.",
    rating: 5,
  },
  {
    id: "t_5",
    name: "Maya K.",
    location: "Singapore",
    quote:
      "The spa therapists were outstanding. I left feeling completely reset and already planning a return trip.",
    rating: 5,
  },
  {
    id: "t_6",
    name: "Rafael G.",
    location: "Madrid, Spain",
    quote:
      "A genuinely premium experience from airport pickup to checkout. Smooth communication and beautiful design throughout.",
    rating: 5,
  },
  {
    id: "t_7",
    name: "Emma W.",
    location: "London, UK",
    quote:
      "The sunset cruise and bonfire night were highlights. Every team member was warm, attentive, and professional.",
    rating: 5,
  },
  {
    id: "t_8",
    name: "Jonas T.",
    location: "Berlin, Germany",
    quote:
      "Booking was simple and the concierge helped customize our itinerary with zero stress.",
    rating: 5,
  },
];

