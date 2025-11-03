import { GradientText } from "./GradientText";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${className}`}>
      <GradientText>{title}</GradientText>
    </h2>
  );
};
