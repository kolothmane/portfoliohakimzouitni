
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  metrics?: { label: string; value: string }[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  specialization: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Interest {
  name: string;
  icon: string;
}
