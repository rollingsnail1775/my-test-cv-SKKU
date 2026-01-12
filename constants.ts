
import { Project, Experience, ResearchInterest } from './types';

export const PROFILE = {
  name: "조현진 (Hyeonjin Cho)",
  titles: ["MD (Medical Doctor)", "Ph.D. Candidate in Digital Health"],
  email: "guswls1775@skku.edu",
  phone: "010-1234-1234",
  location: "Seoul, South Korea",
  organizations: [
    { name: "삼성서울병원 (Samsung Medical Center)", role: "MD (의사)" },
    { 
      name: "성균관대학교 (Sungkyunkwan University)", 
      role: "디지털헬스학과 박사 과정 (Ph.D. Candidate)",
      url: "https://www.saihst.kr/"
    }
  ],
  biography: "임상 역학(Clinical Epidemiology)과 디지털 헬스(Digital Health)를 전공하며, 고독(Loneliness)과 멘탈 헬스(Mental Health)라는 현대적 사회 문제를 데이터 사이언스로 해결하고자 노력하는 연구자입니다. EMA(Ecological Momentary Assessment)와 패시브 센싱 데이터를 활용하여 인간의 건강 행동을 심도 있게 분석합니다."
};

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    category: "Main Fields",
    items: ["Clinical Epidemiology", "Digital Health"]
  },
  {
    category: "Core Themes",
    items: ["Loneliness", "Mental Health"]
  },
  {
    category: "Methodology",
    items: [
      "Ecological Momentary Assessment (EMA)",
      "Passive Sensing & Wearables",
      "Smartphone Sensing Analysis"
    ]
  },
  {
    category: "Disease Focus",
    items: ["Thymic Epithelial Tumors (TETs)", "Fractures"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Digital Health Data Collection Study",
    period: "2026 (Scheduled)",
    description: "EMA and smartphone sensing data collection study design using Metricwire platform.",
    role: "Research setup, vendor contract (Metricwire), budget management, IRB & Admin procedures.",
    scale: "Targeting 100 participants for longitudinal data tracking."
  },
  {
    title: "PhD Dissertation Defense",
    period: "202X.12.18",
    description: "Final defense scheduled. Preparing research presentation and findings.",
    status: "Final Defense Confirmed"
  },
  {
    title: "Epidemiology Lab Winter Picnic",
    period: "Seasonal",
    description: "Designing a team-building program for 40 researchers (10 teams of 4).",
    role: "Program Planner",
    scale: "Combining local food experiences (Gangwon, Busan, etc.) with clinical/epi/stats observational missions."
  },
  {
    title: "Pharmacy E-commerce Strategy",
    period: "Ongoing",
    description: "Expansion plan for health supplements and mask sales based on family-owned pharmacy in Changwon.",
    role: "Business strategist & Marketing copywriter."
  }
];

export const SKILLS = {
  dataAnalysis: ["R Programming", "Data Preprocessing", "Visualization", "Debugging & Optimization"],
  researchTools: ["Metricwire", "Research Design", "Platform Management"],
  aiPrompt: ["Generative AI (ChatGPT/Gemini)", "Meta-Prompting", "Persona Setting", "Task Automation"],
  languages: [
    { name: "Korean", level: "Native (Academic/Business Writing)" },
    { name: "English", level: "Business Fluency (Academic/Formal Tone)" }
  ]
};

export const SOFT_SKILLS = [
  "Formal & Logical Communication",
  "Root Cause Problem Solving",
  "Collaborative Team Leadership",
  "Constructive Feedback Orientation"
];
