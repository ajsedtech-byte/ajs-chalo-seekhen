export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  icon: string;
  logo?: string;
  cardLogo?: string;
  brandColor?: string;
  externalUrl?: string;
  status: "live" | "beta" | "coming-soon" | "coming-q3";
  href: string;
  features: string[];
}

export interface Module {
  id: string;
  name: string;
  hindi: string;
  description: string;
  icon: string;
  logo?: string;
  color: string;
  status: "live" | "early-access" | "coming-soon" | "coming-q3";
}

export const products: Product[] = [
  {
    id: "learnx",
    name: "LearnX",
    tagline: "Powering - Endless - Progress",
    description:
      "A comprehensive student platform with 12+ modules covering academics, life skills, values, and holistic growth. Your mission control for education.",
    gradient: "from-indigo-500 via-purple-500 to-indigo-600",
    icon: "🎓",
    logo: "/logos/learnx-logo-full.png",
    cardLogo: "/logos/Modules_logo/14.png",
    brandColor: "#6366f1",
    externalUrl: "https://learnx.seekhen.com",
    status: "live",
    href: "/products/learnx",
    features: [
      "SPARK — AI-powered learning sessions",
      "Daily Blueprint — Plan your day",
      "Mastery Genome — Track your growth DNA",
      "12+ learning modules",
      "Subjects & Revision tools",
      "Life Skills development",
    ],
  },
  {
    id: "santulan-ai",
    name: "Santulan AI",
    tagline: "Personalized Learning, Perfected",
    description:
      "AI-driven personalized learning engine that adapts to each student's unique learning style, pace, and goals. Balance in education.",
    gradient: "from-teal-500 via-cyan-600 to-teal-700",
    icon: "⚖️",
    logo: "/logos/Modules_logo/13.png",
    cardLogo: "/logos/Modules_logo/13.png",
    externalUrl: "https://santulan.seekhen.com",
    status: "coming-q3",
    href: "/products/santulan-ai",
    features: [
      "Adaptive learning paths",
      "Real-time progress analysis",
      "Personalized content recommendations",
      "Learning style detection",
      "Smart revision scheduling",
      "Performance insights",
    ],
  },
  {
    id: "groerx",
    name: "GroerX",
    tagline: "Gamified Growth Engine",
    description:
      "Turn learning into an adventure. GroerX gamifies personal growth with challenges, achievements, and social competition to keep students motivated.",
    gradient: "from-emerald-500 via-green-500 to-purple-600",
    icon: "🚀",
    logo: "/logos/Modules_logo/15.png",
    cardLogo: "/logos/Modules_logo/15.png",
    externalUrl: "https://groerx.seekhen.com",
    status: "beta",
    href: "/products/groerx",
    features: [
      "Growth challenges & quests",
      "Achievement system & badges",
      "Leaderboards & competitions",
      "Streak tracking & rewards",
      "Social learning circles",
      "Progress visualization",
    ],
  },
];

export const modules: Module[] = [
  { id: "vaani", name: "Vaani", hindi: "वाणी", description: "Vocabulary", icon: "🗣️", logo: "/logos/Modules_logo/1.png", color: "from-red-500 to-orange-500", status: "coming-soon" },
  { id: "pratibimb", name: "Pratibimb", hindi: "प्रतिबिम्ब", description: "Self-reflection", icon: "🪞", logo: "/logos/Modules_logo/2.png", color: "from-pink-500 to-rose-500", status: "coming-soon" },
  { id: "nirmaan", name: "Nirmaan", hindi: "निर्माण", description: "Creation & Innovation", icon: "🏗️", logo: "/logos/Modules_logo/3.png", color: "from-blue-500 to-indigo-500", status: "coming-soon" },
  { id: "prajna", name: "Prajna", hindi: "प्रज्ञा", description: "Deep Knowledge", icon: "🔍", logo: "/logos/Modules_logo/4.png", color: "from-violet-500 to-purple-500", status: "coming-soon" },
  { id: "shikha", name: "Shikha", hindi: "शिखा", description: "Structured Courses", icon: "📖", logo: "/logos/Modules_logo/5.png", color: "from-cyan-500 to-blue-500", status: "coming-soon" },
  { id: "artha", name: "Artha", hindi: "अर्थ", description: "Financial Planning", icon: "💰", logo: "/logos/Modules_logo/6.png", color: "from-yellow-500 to-amber-500", status: "coming-soon" },
  { id: "sangam", name: "Sangam", hindi: "संगम", description: "Culture & Unity", icon: "🤝", logo: "/logos/Modules_logo/7.png", color: "from-orange-500 to-red-500", status: "coming-soon" },
  { id: "guru", name: "Guru", hindi: "गुरु", description: "Wisdom & Moral", icon: "🙏", logo: "/logos/Modules_logo/8.png", color: "from-amber-500 to-yellow-500", status: "coming-soon" },
  { id: "mitra", name: "Mitra", hindi: "मित्र", description: "Peer Learning", icon: "💚", logo: "/logos/Modules_logo/9.png", color: "from-green-500 to-emerald-500", status: "coming-soon" },
  { id: "karma", name: "Karma", hindi: "कर्म", description: "Discipline & Values", icon: "⚡", logo: "/logos/Modules_logo/10.png", color: "from-indigo-500 to-blue-500", status: "coming-soon" },
  { id: "prayas", name: "Prayas", hindi: "प्रयास", description: "Practice & Values", icon: "🎯", logo: "/logos/Modules_logo/11.png", color: "from-rose-500 to-pink-500", status: "coming-soon" },
  { id: "netritva", name: "Netritva", hindi: "नेतृत्व", description: "Leadership Skills", icon: "👑", logo: "/logos/Modules_logo/12.png", color: "from-purple-500 to-violet-500", status: "coming-soon" },
];
