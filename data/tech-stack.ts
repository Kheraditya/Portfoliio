export type TechItem = {
  name: string;
  icon?: string; // Optional icon class or path
  category: "Languages" | "Frameworks" | "Backend" | "DevOps" | "Database" | "Tools";
};

export const techStack: TechItem[] = [
  // Languages
  { name: ".NET 8 / C#", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Languages" },

  // Frameworks & Libraries
  { name: "Next.js", category: "Frameworks" },
  { name: "React", category: "Frameworks" },
  { name: "React Native", category: "Frameworks" },
  { name: "Tailwind CSS", category: "Frameworks" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "ASP.NET Core", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  
  // Database
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Firebase", category: "Database" },

  // Tools & DevOps
  { name: "Docker", category: "DevOps" },
  { name: "Git / GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];
