
import { Experience, Education, SkillCategory, Interest } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Chargé d’études Marketing",
    company: "NielsenIQ",
    location: "Bezons, Île-de-France",
    period: "Janv. 2025 – Juillet 2025",
    achievements: [
      "Analyse de 50+ rapports panels distributeur et consommateur, détection de 15 leviers d'optimisation du mix marketing.",
      "Pilotage de l'analyse de performance pour des grands comptes PGC (Ferrero, JDE, Mondelez...).",
      "Conception et présentation de 30+ supports PowerPoint à fort impact pour les directions.",
      "Automatisation de 5 processus de reporting via NIQ Discover."
    ],
    metrics: [
      { label: "Opportunités identifiées", value: "2M€" },
      { label: "NPS Clients", value: "95%" },
      { label: "Gain productivité", value: "40%" }
    ]
  },
  {
    role: "Assistant Chef de Produit",
    company: "Peugeot",
    location: "Casablanca, Maroc",
    period: "Juillet 2024 – Août 2024",
    achievements: [
      "Benchmark concurrentiel approfondi sur 4 constructeurs automobiles (prix, équipements, autonomie).",
      "Ajustement des grilles tarifaires web sur 4 périodes commerciales stratégiques.",
      "Synthèse d'insights marché et pricing contribuant à l'aide à la décision stratégique."
    ],
    metrics: [
      { label: "Compétitivité perçue", value: "+15%" },
      { label: "Cohérence prix-offre", value: "+20%" },
    ]
  },
  {
    role: "Assistant Trade Marketing",
    company: "AkzoNobel",
    location: "Casablanca, Maroc",
    period: "Juillet 2023 – Août 2023",
    achievements: [
      "Conception d'une stratégie promotionnelle segmentée avec 4 mécaniques de remises.",
      "Analyse des retours terrain pour optimiser les recommandations commerciales.",
      "Participation au processus d'homologation des emballages et conformité réglementaire."
    ],
    metrics: [
      { label: "Volumes sell-out", value: "+12%" },
      { label: "Efficacité Trade", value: "+15%" },
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master en Marketing",
    school: "South Champagne Business School (SCBS)",
    location: "Troyes, France",
    period: "2020 – 2025",
    specialization: "Marketing and Business Development"
  },
  {
    degree: "Diplôme Grande École",
    school: "ENCG Settat",
    location: "Settat, Maroc",
    period: "2020 – 2025",
    specialization: "Marketing et Actions Commerciales"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Études & Insights",
    skills: ["Analyse panels (Nielsen/IRI)", "Analyse de KPIs", "Études de marché", "Benchmark/Veille", "Synthèse d'insights"]
  },
  {
    title: "Marketing & Stratégie",
    skills: ["Marketing mix", "Activation marque", "Analyse pricing", "Trade Marketing"]
  },
  {
    title: "Outils & Tech",
    skills: ["SQL", "NIQ Discover", "Pack MS Office", "Canva", "Adobe Photoshop"]
  }
];

export const LANGUAGES = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Anglais", level: "Courant" }
];

export const INTERESTS: Interest[] = [
  { name: "Bénévolat", icon: "🤝" },
  { name: "Moto", icon: "🏍️" },
  { name: "Fitness", icon: "💪" },
  { name: "Football", icon: "⚽" },
  { name: "Billard", icon: "🎱" }
];
