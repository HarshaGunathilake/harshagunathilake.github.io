export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  note?: string;
}

export const education: EducationItem[] = [
  {
    degree: "MSc Computing - Merit",
    institution: "Wrexham University, United Kingdom",
    duration: "2025 — 2026",
  },
  {
    degree: "BSc (Hons) Computer Science and Software Engineering",
    institution: "Sri Lanka Institute of Information Technology Academy",
    duration: "2018 — 2021",
  },
  {
    degree: "Diploma in Information & Communication Technology",
    institution: "IMBS Green Campus, Sri Lanka",
    duration: "",
  },
  {
    degree: "G.C.E. Advanced Level (Maths Stream)",
    institution: "Christ Church Boys' College, Galle",
    duration: "2017",
  },
];
