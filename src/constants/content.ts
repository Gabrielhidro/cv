import type { Experience, Education, ContactInfo } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Woli",
    role: "Desenvolvedor de Software",
    period: "Janeiro 2022 - Presente (3 anos 11 meses)",
    location: "Remoto",
    description: [
      "Responsável pelo desenvolvimento e manutenção de aplicações front-end",
      "Implementação de novas funcionalidades",
      "Correção de bugs e otimização de performance",
      "Atualização de versões de bibliotecas e da própria linguagem",
      "Refatoração e migração do projeto principal para TypeScript",
      "Revisão de código e code reviews",
      "Sugestão de melhorias e novas bibliotecas",
      "Construção e configuração de novos projetos do zero",
      "Colaboração com equipes multidisciplinares para entregar soluções robustas e escaláveis",
    ],
  },
  {
    company: "Kinvo",
    role: "Desenvolvedor Front-end",
    period: "Agosto 2021 - Janeiro 2022 (6 meses)",
    location: "Remoto",
    description: [],
  },
  {
    company: "Agência R8",
    role: "Desenvolvedor Front-end",
    period: "Abril 2021 - Agosto 2021 (5 meses)",
    location: "Uberlândia, Minas Gerais, Brasil",
    description: [],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Centro Universitário Presidente Antônio Carlos - UNIPAC",
    course: "Análise e Desenvolvimento de Sistemas",
    year: "2022",
  },
  {
    institution: "Rocketseat",
    course: "Gostack - Tecnologia da Informação",
    year: "2024 - 2025",
  },
  {
    institution: "Rocketseat",
    course: "Bootcamp Ignite - ReactJs, TypeScript, NextJs",
    year: "2021",
  },
  {
    institution: "Gama Academy",
    course: "Desenvolvimento Fullstack VTEX IO",
    year: "2021",
  },
  {
    institution: "Origamid",
    course: "Design e Comunicação Visual",
    year: "2020",
  },
];

export const SKILLS: readonly string[] = [
  "TypeScript",
  "JavaScript",
  "React.js",
  "React Native",
  "Next.js",
  "Styled Components",
  "Emotion CSS",
  "Tailwind CSS",
  "Material UI",
  "Redux",
  "Git",
  "Yup",
  "Formik",
  "Storybook",
  "Figma",
] as const;

export const CONTACT_INFO: ContactInfo = {
  phone: {
    number: "34999568783",
    display: "(34) 99956-8783",
  },
  github: {
    url: "https://github.com/Gabrielhidro",
    handle: "@Gabrielhidro",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/gabridev/",
    handle: "@gabridev",
  },
};

export const PERSONAL_INFO = {
  name: "Gabriel Freitas",
  role: "Front-End Developer",
  currentJob: "Desenvolvedor Front-End Middle",
  company: "Woli Labs",
  bio: "Desenvolvedor Front-End especializado em React.js, TypeScript e Next.js. Apaixonado por criar experiências digitais incríveis e ajudar pessoas através da tecnologia.",
  description: [
    "Sou apaixonado por ajudar pessoas através da performance digital. Com mais de 3 anos de experiência, trabalho em colaboração com equipes multidisciplinares para entregar soluções robustas, escaláveis e alinhadas com as necessidades do usuário e os objetivos do negócio.",
    "Todos os dias me desafio para me tornar um desenvolvedor melhor, buscando sempre as melhores práticas e tecnologias mais modernas do mercado.",
  ],
  education: "Análise e Desenvolvimento de Sistemas",
  profileImage: "/me.jpg",
} as const;
