import {
  Github,
  Linkedin,
  Phone,
  MapPin,
  Code,
  GraduationCap,
  Rocket,
  ExternalLink,
} from "lucide-react";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useNavigation } from "./hooks/useNavigation";
import { Navigation } from "./components/common/Navigation";
import { SectionHeader } from "./components/common/SectionHeader";
import { GradientText } from "./components/common/GradientText";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import {
  EXPERIENCES,
  EDUCATION,
  SKILLS,
  CONTACT_INFO,
  PERSONAL_INFO,
} from "./constants/content";

function AppContent() {
  const { isMenuOpen, activeSection, scrollToSection, toggleMenu } = useNavigation();
  const visibleSections = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-alt to-dark text-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        onToggleMenu={toggleMenu}
        onSectionClick={scrollToSection}
      />

      {/* Skip to main content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:rounded-md"
      >
        Pular para o conteúdo principal
      </a>

      <main id="main">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-16 px-4"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                visibleSections.home
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/20 border border-primary rounded-full text-accent text-sm font-semibold">
                  {PERSONAL_INFO.role}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Olá, eu sou
                <br />
                <GradientText className="bg-gradient-to-r from-primary via-secondary to-accent">
                  {PERSONAL_INFO.name}
                </GradientText>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={CONTACT_INFO.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg hover:scale-105 transition-transform duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-dark"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href={CONTACT_INFO.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-accent rounded-lg hover:bg-accent hover:text-dark transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-dark"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div
              className={`flex justify-center transition-all duration-1000 delay-300 ${
                visibleSections.home
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 px-4">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              visibleSections.sobre
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <SectionHeader title="Sobre Mim" />
            <div className="bg-dark-alt rounded-2xl p-8 md:p-12 border border-primary/20 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Rocket className="text-accent mt-1 shrink-0" size={24} />
                    <p className="text-gray-300 text-lg">
                      Atualmente trabalho como{" "}
                      <strong className="text-accent">
                        {PERSONAL_INFO.currentJob}
                      </strong>{" "}
                      na {PERSONAL_INFO.company}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap
                      className="text-secondary mt-1 shrink-0"
                      size={24}
                    />
                    <p className="text-gray-300 text-lg">
                      Estudando {PERSONAL_INFO.education}
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
                  {PERSONAL_INFO.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="py-20 px-4 bg-dark-alt/30">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              visibleSections.experiencia
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <SectionHeader title="Experiência Profissional" />
            <div className="space-y-6">
              {EXPERIENCES.map((exp, index) => (
                <article
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="educacao" className="py-20 px-4">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              visibleSections.educacao
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <SectionHeader title="Formação Acadêmica" />
            <div className="grid md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, index) => (
                <article
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-20 px-4 bg-dark-alt/30">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              visibleSections.habilidades
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <SectionHeader title="Habilidades Técnicas" />
            <div className="flex flex-wrap gap-4 justify-center">
              {SKILLS.map((skill, index) => (
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
              visibleSections.contato
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <SectionHeader title="Entre em Contato" />
            <address className="grid md:grid-cols-3 gap-6 not-italic">
              <a
                href={`tel:${CONTACT_INFO.phone.number}`}
                className="bg-dark-alt rounded-xl p-8 border border-primary/20 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex flex-col items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-dark"
              >
                <Phone
                  className="text-accent group-hover:scale-110 transition-transform"
                  size={32}
                />
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Telefone</p>
                  <p className="text-white font-semibold">
                    {CONTACT_INFO.phone.display}
                  </p>
                </div>
              </a>

              <a
                href={CONTACT_INFO.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-alt rounded-xl p-8 border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-dark"
              >
                <Github
                  className="text-primary group-hover:scale-110 transition-transform"
                  size={32}
                />
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">GitHub</p>
                  <p className="text-white font-semibold flex items-center gap-1">
                    {CONTACT_INFO.github.handle}
                    <ExternalLink size={14} />
                  </p>
                </div>
              </a>

              <a
                href={CONTACT_INFO.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-alt rounded-xl p-8 border border-primary/20 hover:border-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 flex flex-col items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-dark"
              >
                <Linkedin
                  className="text-secondary group-hover:scale-110 transition-transform"
                  size={32}
                />
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
                  <p className="text-white font-semibold flex items-center gap-1">
                    {CONTACT_INFO.linkedin.handle}
                    <ExternalLink size={14} />
                  </p>
                </div>
              </a>
            </address>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20 bg-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Desenvolvido por{" "}
            <GradientText className="font-semibold">
              {PERSONAL_INFO.name}
            </GradientText>{" "}
            © {new Date().getFullYear()}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Feito com React.js, Tailwind CSS e ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}
