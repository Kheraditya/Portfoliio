export type Project = {
  slug: string;
  title: string;
  tagline: string;
  impact: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "women-safety",
    title: "Women Safety App",
    tagline:
      "One‑tap SOS with SMS, Firebase push notifications, email alerts and admin dashboard.",
    impact: [
      "Implemented SOS alerts with SMS, Firebase push notifications, and email alerts to ensure reliable multi-channel notification.",
      "Added authentication and email verification flows to secure user accounts.",
      "Implemented real-time location tracking and sharing to trusted contacts during emergencies.",
      "Developed an admin dashboard for monitoring users and emergency incidents.",
    ],
    stack: [
      "React Native",
      "Firebase (FCM)",
      "SMS",
      "Email",
      "Realtime Location",
      "Admin Dashboard",
    ],
  },
  {
  slug: "learnsd",
  title: "LearnSD – System Design Learning Platform",
  tagline:
    "A structured platform for mastering system design concepts through real-world architectures and guided learning paths.",
  impact: [
    "Built a full-stack learning platform focused on system design and interview preparation.",
    "Designed structured learning tracks covering scalability, reliability, consistency, and trade-offs.",
    "Implemented interactive architecture diagrams, flow explanations, and real-world case studies.",
    "Developed an admin dashboard to manage tracks, modules, lessons, and difficulty levels.",
    "Integrated AI-assisted feedback and grading for design explanations and submissions.",
    "Enabled learner progress tracking across modules and learning paths."
  ],
  stack: [
    "Next.js",
    "React",
    "MDX",
    "System Design",
    "AI-assisted Learning",
    "PostgreSQL"
  ],
},
  {
    slug: "stock-analyzer",
    title: "Stock Analyzer",
    tagline:
      "Technical indicators, backtesting and visualizations for stock strategy evaluation.",
    impact: [
      "Created a stock analysis tool using historical and real-time data.",
      "Implemented technical indicators like RSI, MACD, and Moving Averages.",
      "Built backtesting modules and data visualizations using Matplotlib/Plotly.",
    ],
    stack: ["Python", "Pandas", "Backtesting", "Matplotlib", "Plotly"],
  },
  {
    slug: "mcyber-academy",
    title: "MCyber Academy",
    tagline:
      "Marketing + lead generation website; improved conversions and performance.",
    impact: [
      "Helped improve engagement and conversion flow; reported sales uplift.",
    ],
    stack: ["Next.js", "React", "Node.js"],
  },
];
