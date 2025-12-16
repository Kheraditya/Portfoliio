export type Experience = {
  role: string;
  company: string;
  start: string; // e.g. 'Nov 2023'
  end: string; // e.g. 'Present' or 'Nov 2024'
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Associate Software Developer",
    company: "Eicore Technologies Pvt. Ltd.",
    start: "March 2025",
    end: "Present",
    bullets: [
      "Leading end-to-end development of a backend application using .NET 8, C#, Node.js, and SQL.",
      "Promoted to project ownership within 2 months of joining as a fresher.",
      "Managing and mentoring a team of 3–4 developers, including task allocation and code reviews.",
      "Handling client communication, requirement gathering, sprint planning, and delivery updates.",
      "Designing RESTful APIs, business logic layers, and scalable database schemas.",
      "Responsible for performance optimization, bug fixes, and production issue resolution.",
    ],
  },
  {
    role: "Node.js Web Developer",
    company: "VinraTech",
    start: "Nov 2023",
    end: "Nov 2024",
    bullets: [
      "Developed full-stack applications using React, Next.js, and Node.js.",
      "Designed and optimized PostgreSQL and MongoDB databases.",
      "Built and integrated REST APIs and improved frontend performance.",
      "Collaborated with designers and stakeholders to deliver responsive UIs.",
    ],
  },
  {
    role: "Python Developer",
    company: "LeafyWheels Pvt. Ltd.",
    start: "Jun 2023",
    end: "Oct 2023",
    bullets: [
      "Developed backend APIs and application logic using Python.",
      "Performed security testing and vulnerability analysis.",
      "Assisted in building internal tools and improving code quality.",
    ],
  },
];

export default experience;
