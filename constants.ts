
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
  biography: "가정의학 전문의로서 지역사회 주치의의 가치를 중시하며, 현대인의 외로움(Loneliness)과 커뮤니티 헬스(Community Health) 문제에 깊은 관심을 가지고 있습니다. 디지털 헬스 기술과 웨어러블 디바이스 데이터를 활용하여 임상 역학적 관점에서 환자들의 일상 속 건강 행동을 정밀하게 분석하고, 더 나은 공동체의 안녕을 위해 연구하는 학자입니다."
};

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    category: "Main Fields",
    items: ["Family Medicine (가정의학)", "Clinical Epidemiology", "Digital Health"]
  },
  {
    category: "Core Themes",
    items: ["Loneliness (외로움)", "Community Health", "Primary Care (주치의)", "Mental Health"]
  },
  {
    category: "Methodology",
    items: [
      "Ecological Momentary Assessment (EMA)",
      "Passive Sensing & Wearable Devices",
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
