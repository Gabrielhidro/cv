import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-primary/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
      title={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
    >
      {isDark ? (
        <Sun
          size={20}
          className="text-accent transition-transform duration-300 hover:rotate-180"
          aria-hidden="true"
        />
      ) : (
        <Moon
          size={20}
          className="text-primary transition-transform duration-300 hover:-rotate-12"
          aria-hidden="true"
        />
      )}
    </button>
  );
};
