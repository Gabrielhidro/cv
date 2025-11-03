import { GradientText } from "./GradientText";
import { PERSONAL_INFO } from "../../constants/content";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-primary/20 bg-dark">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          Desenvolvido por{" "}
          <GradientText className="font-semibold">
            {PERSONAL_INFO.name}
          </GradientText>{" "}
          © {currentYear}
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Feito com React.js, Tailwind CSS e ❤️
        </p>
      </div>
    </footer>
  );
};
