import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Phone,
  MapPin,
  Code,
  GraduationCap,
  Rocket,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const experiences = [
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

  const education = [
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

  const skills = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-alt to-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GF
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "sobre",
                "experiencia",
                "educacao",
                "habilidades",
                "contato",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-accent ${
                    activeSection === section ? "text-accent" : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-accent transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-alt border-t border-primary/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "home",
                "sobre",
                "experiencia",
                "educacao",
                "habilidades",
                "contato",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize block w-full text-left px-3 py-2 rounded-md hover:bg-primary/20 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-4"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible.home
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/20 border border-primary rounded-full text-accent text-sm font-semibold">
                Front-End Developer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Olá, eu sou
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Gabriel Freitas
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Desenvolvedor Front-End especializado em React.js, TypeScript e
              Next.js. Apaixonado por criar experiências digitais incríveis e
              ajudar pessoas através da tecnologia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Gabrielhidro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg hover:scale-105 transition-transform duration-300 font-semibold"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gabridev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-accent rounded-lg hover:bg-accent hover:text-dark transition-all duration-300 font-semibold"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible.home
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <img
                src="/me.jpg"
                alt="Gabriel Freitas"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible.sobre
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <div className="bg-dark-alt rounded-2xl p-8 md:p-12 border border-primary/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Rocket className="text-accent mt-1 shrink-0" size={24} />
                  <p className="text-gray-300 text-lg">
                    Atualmente trabalho como{" "}
                    <strong className="text-accent">
                      Desenvolvedor Front-End Middle
                    </strong>{" "}
                    na Woli Labs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap
                    className="text-secondary mt-1 shrink-0"
                    size={24}
                  />
                  <p className="text-gray-300 text-lg">
                    Estudando Análise e Desenvolvimento de Sistemas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="text-primary mt-1 shrink-0" size={24} />
                  <p className="text-gray-300 text-lg">
                    Eterno estudante de programação, sempre buscando evoluir
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sou apaixonado por ajudar pessoas através da performance
                  digital. Com mais de 3 anos de experiência, trabalho em
                  colaboração com equipes multidisciplinares para entregar
                  soluções robustas, escaláveis e alinhadas com as necessidades
                  do usuário e os objetivos do negócio.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Todos os dias me desafio para me tornar um desenvolvedor
                  melhor, buscando sempre as melhores práticas e tecnologias
                  mais modernas do mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-4 bg-[#1E1E26]/30">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible.experiencia
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experiência Profissional
            </span>
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-dark rounded-xl p-6 md:p-8 border border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-secondary font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-400">
                    <p className="text-sm">{exp.period}</p>
                    <p className="text-sm flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </p>
                  </div>
                </div>
                {exp.description.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-primary mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacao" className="py-20 px-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible.educacao
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Formação Acadêmica
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-dark-alt rounded-xl p-6 border border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
              >
                <div className="flex items-start gap-3">
                  <GraduationCap
                    className="text-accent shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {edu.course}
                    </h3>
                    <p className="text-secondary font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-400">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 bg-[#1E1E26]/30">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible.habilidades
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-dark border border-primary/30 rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible.contato
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:34999568783"
              className="bg-dark-alt rounded-xl p-8 border border-primary/20 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex flex-col items-center gap-4 group"
            >
              <Phone
                className="text-accent group-hover:scale-110 transition-transform"
                size={32}
              />
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">Telefone</p>
                <p className="text-white font-semibold">(34) 99956-8783</p>
              </div>
            </a>

            <a
              href="https://github.com/Gabrielhidro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-alt rounded-xl p-8 border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col items-center gap-4 group"
            >
              <Github
                className="text-primary group-hover:scale-110 transition-transform"
                size={32}
              />
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">GitHub</p>
                <p className="text-white font-semibold flex items-center gap-1">
                  @Gabrielhidro
                  <ExternalLink size={14} />
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/gabridev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-alt rounded-xl p-8 border border-primary/20 hover:border-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 flex flex-col items-center gap-4 group"
            >
              <Linkedin
                className="text-secondary group-hover:scale-110 transition-transform"
                size={32}
              />
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
                <p className="text-white font-semibold flex items-center gap-1">
                  @gabridev
                  <ExternalLink size={14} />
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20 bg-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Desenvolvido por{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              Gabriel Freitas
            </span>{" "}
            © 2025
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Feito com React.js, Tailwind CSS e ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
