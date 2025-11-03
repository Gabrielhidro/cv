import { Github, Linkedin } from "lucide-react";
import { GradientText } from "../common/GradientText";
import { PERSONAL_INFO, CONTACT_INFO } from "../../constants/content";

interface HeroSectionProps {
  isVisible: boolean;
}

export const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
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
              aria-label={`Visitar perfil do GitHub: ${CONTACT_INFO.github.handle}`}
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href={CONTACT_INFO.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-accent rounded-lg hover:bg-accent hover:text-dark transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-dark"
              aria-label={`Visitar perfil do LinkedIn: ${CONTACT_INFO.linkedin.handle}`}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className={`flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-50 animate-pulse" aria-hidden="true"></div>
            <img
              src={PERSONAL_INFO.profileImage}
              alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl"
              loading="eager"
              width="320"
              height="320"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
