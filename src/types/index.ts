export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  institution: string;
  course: string;
  year: string;
}

export type NavigationSection =
  | "home"
  | "sobre"
  | "experiencia"
  | "educacao"
  | "habilidades"
  | "contato";

export interface ContactInfo {
  phone: {
    number: string;
    display: string;
  };
  github: {
    url: string;
    handle: string;
  };
  linkedin: {
    url: string;
    handle: string;
  };
}
