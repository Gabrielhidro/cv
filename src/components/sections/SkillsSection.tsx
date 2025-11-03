import { SectionHeader } from "../common/SectionHeader";
import { SKILLS } from "../../constants/content";

interface SkillsSectionProps {
  isVisible: boolean;
}

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <div className="px-6 py-3 bg-dark border border-primary/30 rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105">
    <span className="text-white font-semibold">{skill}</span>
  </div>
);

export const SkillsSection = ({ isVisible }: SkillsSectionProps) => {
  return (
    <section id="habilidades" className="py-20 px-4 bg-dark-alt/30">
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeader title="Habilidades Técnicas" />

        <div className="flex flex-wrap gap-4 justify-center" role="list">
          {SKILLS.map((skill, index) => (
            <SkillBadge key={`${skill}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
