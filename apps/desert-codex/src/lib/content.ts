export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Brand + Identity",
    description:
      "Name, logo, visual system — the foundation that makes everything else easier. A clear identity from day one, not an afterthought.",
  },
  {
    number: "02",
    title: "Design + Interface",
    description:
      "Product design that ships. From early concepts to polished UI, built in systems that scale. No handoffs, no Figma files that collect dust.",
  },
  {
    number: "03",
    title: "Build + Launch",
    description:
      "Full stack implementation — landing pages, apps, integrations. I write the code and get it live. You end the month with something real.",
  },
  {
    number: "04",
    title: "AI + Automate",
    description:
      "Intelligent workflows and AI integrations. I help you ship smarter, not just faster. Finally implement AI that works for your customers.",
  },
];

export const FAQS: Faq[] = [
  {
    question: "What's included in a monthly engagement?",
    answer:
      "Strategy, design, and development hours. We scope work together at the start of each month.",
  },
  {
    question: "How long do engagements typically last?",
    answer:
      "Most clients work with me for 2-4 months. Some stay on for ongoing product work.",
  },
  {
    question: "What if we need to pause or cancel?",
    answer:
      "Month-to-month. No long-term contracts. Cancel anytime before the next billing cycle.",
  },
  {
    question: "Do you work with teams or just founders?",
    answer:
      "Both. I can plug into an existing team or be your entire product function.",
  },
  {
    question: "What's your availability?",
    answer:
      "I take on 2-3 clients at a time. Reach out to check current openings.",
  },
  {
    question: "How do we communicate?",
    answer: "Async-first via Slack or email. Calls as needed, not required.",
  },
];

export const WORK_LOGO_COUNT = 12;
