import { MapPin } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { EXPERIENCES } from "../../constants/content";
import type { Experience } from "../../types";

interface ExperienceSectionProps {
  isVisible: boolean;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <article className="bg-dark rounded-xl p-6 md:p-8 border border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-accent mb-1">
          {experience.role}
        </h3>
        <p className="text-xl text-secondary font-semibold">
          {experience.company}
        </p>
      </div>
      <div className="mt-2 md:mt-0 text-gray-400">
        <p className="text-sm">{experience.period}</p>
        <p className="text-sm flex items-center gap-1">
          <MapPin size={14} aria-hidden="true" />
          {experience.location}
        </p>
      </div>
    </div>

    {experience.description.length > 0 && (
      <ul className="space-y-2 mt-4" role="list">
        {experience.description.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300">
            <span className="text-primary mt-1" aria-hidden="true">▹</span>
            {item}
          </li>
        ))}
      </ul>
    )}
  </article>
);

export const ExperienceSection = ({ isVisible }: ExperienceSectionProps) => {
  return (
    <section id="experiencia" className="py-20 px-4 bg-dark-alt/30">
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeader title="Experiência Profissional" />

        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={`${exp.company}-${index}`} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
