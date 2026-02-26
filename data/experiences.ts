export type Experience = {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    id: "island-hopping",
    title: "Island Hopping",
    description:
      "Explore hidden coves and clear lagoons aboard a private speedboat with curated picnic stops.",
    duration: "Half day",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "snorkeling",
    title: "Guided Snorkeling",
    description:
      "Dive into reef gardens with our marine guide and discover vibrant aquatic life in calm waters.",
    duration: "2 hours",
    image:
      "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "sunset-cruise",
    title: "Sunset Cruise",
    description:
      "A golden-hour yacht cruise with sparkling drinks, curated music, and uninterrupted horizon views.",
    duration: "90 minutes",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "bonfire-nights",
    title: "Bonfire Nights",
    description:
      "Beachfront fire pits, handcrafted desserts, and acoustic storytelling under the stars.",
    duration: "Evenings",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "kayak-tour",
    title: "Lagoon Kayak Tour",
    description:
      "Paddle through mangrove passages and quiet lagoons at sunrise with local eco-guides.",
    duration: "75 minutes",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cultural-walk",
    title: "Coastal Heritage Walk",
    description:
      "Discover local history, artisan studios, and culinary traditions through curated village tours.",
    duration: "3 hours",
    image:
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1400&q=80",
  },
];

