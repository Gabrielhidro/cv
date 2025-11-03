import { Code, GraduationCap, Rocket } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { PERSONAL_INFO } from "../../constants/content";

interface AboutSectionProps {
  isVisible: boolean;
}

export const AboutSection = ({ isVisible }: AboutSectionProps) => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeader title="Sobre Mim" />

        <div className="bg-dark-alt rounded-2xl p-8 md:p-12 border border-primary/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Rocket className="text-accent mt-1 shrink-0" size={24} aria-hidden="true" />
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
                  aria-hidden="true"
                />
                <p className="text-gray-300 text-lg">
                  Estudando {PERSONAL_INFO.education}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Code className="text-primary mt-1 shrink-0" size={24} aria-hidden="true" />
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
  );
};
