export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    id: "faq_1",
    question: "What time is check-in and check-out?",
    answer: "Check-in begins at 3:00 PM and check-out is at 11:00 AM.",
  },
  {
    id: "faq_2",
    question: "Can I request early check-in?",
    answer:
      "Yes, early check-in can be requested and is subject to room availability on arrival day.",
  },
  {
    id: "faq_3",
    question: "What is the cancellation policy?",
    answer:
      "Most rates offer free cancellation between 3 and 14 days before arrival depending on room category.",
  },
  {
    id: "faq_4",
    question: "Are pets allowed?",
    answer: "Pets are currently not allowed in guest rooms and villas.",
  },
  {
    id: "faq_5",
    question: "Is breakfast included?",
    answer: "Breakfast is included in most packages and room offers.",
  },
  {
    id: "faq_6",
    question: "Do you have parking?",
    answer: "Yes, complimentary valet and self-parking are available for all guests.",
  },
  {
    id: "faq_7",
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, bank transfer, and selected digital wallets.",
  },
  {
    id: "faq_8",
    question: "Do you provide airport transfers?",
    answer:
      "Yes, private airport transfers are available as an add-on during inquiry or booking.",
  },
  {
    id: "faq_9",
    question: "Is the resort suitable for children?",
    answer: "Yes, family suites and supervised activities are available daily.",
  },
  {
    id: "faq_10",
    question: "What is the best time to visit?",
    answer:
      "The best weather is typically from November to May with clear skies and calm sea conditions.",
  },
];

