import { GraduationCap } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { EDUCATION } from "../../constants/content";
import type { Education } from "../../types";

interface EducationSectionProps {
  isVisible: boolean;
}

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => (
  <article className="bg-dark-alt rounded-xl p-6 border border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
    <div className="flex items-start gap-3">
      <GraduationCap
        className="text-accent shrink-0 mt-1"
        size={24}
        aria-hidden="true"
      />
      <div>
        <h3 className="text-lg font-bold text-white mb-1">
          {education.course}
        </h3>
        <p className="text-secondary font-semibold mb-2">
          {education.institution}
        </p>
        <p className="text-sm text-gray-400">{education.year}</p>
      </div>
    </div>
  </article>
);

export const EducationSection = ({ isVisible }: EducationSectionProps) => {
  return (
    <section id="educacao" className="py-20 px-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeader title="Formação Acadêmica" />

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, index) => (
            <EducationCard key={`${edu.institution}-${index}`} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};
