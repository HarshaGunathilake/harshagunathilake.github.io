export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "AYOZAT Holdings LTD",
    role: "Software Engineer",
    duration: "March 2022 — Present",
    location: "London, UK (Remote) / Sri Lanka (On-site)",
    description:
      "Spearhead the conception, design and development of custom websites and web applications, leading cross-functional teams of designers, developers and QA engineers. Direct the end-to-end development lifecycle of complex OTT platforms, mentor junior developers, and drive SEO strategy across client projects.",
    tech: ["Angular", "React.js", "Redux", "Node.js", "Laravel", "MySQL", "MongoDB"],
  },
  {
    company: "Drifting Desk LLC",
    role: "Front-end Developer (Angular)",
    duration: "May 2022 — May 2023",
    location: "Wyoming, United States (Remote)",
    description:
      "Led the migration of legacy applications to Angular, refactoring the codebase and modernising UI components for maintainability and performance. Worked within an agile team on daily stand-ups and sprint planning, collaborating with backend developers on REST API design and consumption.",
    tech: ["Angular", "TypeScript", "REST APIs"],
  },
  {
    company: "Codestage Pvt Ltd",
    role: "Intern & Associate Software Engineer",
    duration: "March 2020 — March 2022",
    location: "Sri Lanka (On-site)",
    description:
      "Built web-based applications and services across Angular, Ionic, Firebase and Laravel. Assisted in designing RESTful APIs, database schemas and data models, and researched emerging technologies including Express.js and TypeScript to improve development workflows.",
    tech: ["Angular", "Ionic", "Firebase", "Laravel", "PHP", "MySQL"],
  },
  {
    company: "Insighture",
    role: "Quality Assurance Analyst",
    duration: "January 2020 — March 2020",
    location: "Sri Lanka",
    description:
      "Identified and documented errors, inconsistencies and formatting issues across documents, and supported version control and configuration management. Generated quality and compliance metrics for management and stakeholders.",
    tech: ["QA", "Document Control", "Reporting"],
  },
  {
    company: "EEEFA Organization",
    role: "Social Media Manager",
    duration: "May 2019 — May 2021",
    location: "Sri Lanka",
    description:
      "Managed the organisation's social media channels — Facebook, Twitter and LinkedIn — keeping branding and messaging consistent. Planned, ran and optimised Facebook ad campaigns to drive website traffic and lead generation, alongside building out the organisation's web platform.",
    tech: ["Social Media", "Meta Ads", "WordPress"],
  },
];
