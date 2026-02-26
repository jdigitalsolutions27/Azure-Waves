export type GalleryItem = {
  id: string;
  category: "Rooms" | "Amenities" | "Beach" | "Dining" | "Activities";
  title: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "Rooms",
    title: "Ocean Pearl Suite Interior",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g2",
    category: "Rooms",
    title: "Sunset Cliff Villa",
    image:
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g3",
    category: "Amenities",
    title: "Infinity Pool Deck",
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "g4",
    category: "Amenities",
    title: "Azure Spa Ritual Room",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g5",
    category: "Beach",
    title: "Private Beachfront",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g6",
    category: "Beach",
    title: "Golden Hour Shoreline",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g7",
    category: "Dining",
    title: "Terrace Breakfast",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g8",
    category: "Dining",
    title: "Skyline Bar Evenings",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g9",
    category: "Activities",
    title: "Guided Snorkeling",
    image:
      "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g10",
    category: "Activities",
    title: "Sunset Cruise",
    image:
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g11",
    category: "Rooms",
    title: "Horizon Honeymoon Suite",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g12",
    category: "Amenities",
    title: "Resort Lounge",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
  },
];

export const galleryCategories = ["All", "Rooms", "Amenities", "Beach", "Dining", "Activities"] as const;

