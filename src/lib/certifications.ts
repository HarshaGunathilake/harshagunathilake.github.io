export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Social Media Marketing",
    issuer: "Udemy",
    date: "August 2020",
    credentialId: "UC-f92dcee4-344a-494a-88ee-0d6c41b9c3b8",
    credentialUrl: "https://www.udemy.com/certificate/UC-f92dcee4-344a-494a-88ee-0d6c41b9c3b8/",
  },
  {
    title: "The Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    date: "April 2020",
    credentialId: "DJC 7HF 28C",
  },
];
