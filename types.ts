
export interface Project {
  title: string;
  period: string;
  description: string;
  role?: string;
  scale?: string;
  status?: string;
}

export interface Experience {
  year: string;
  role: string;
  organization: string;
}

export interface ResearchInterest {
  category: string;
  items: string[];
}
