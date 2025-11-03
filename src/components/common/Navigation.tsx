import { Menu, X } from "lucide-react";
import type { NavigationSection } from "../../types";
import { NAVIGATION_SECTIONS } from "../../constants/navigation";
import { GradientText } from "./GradientText";

interface NavigationProps {
  isMenuOpen: boolean;
  activeSection: NavigationSection;
  onToggleMenu: () => void;
  onSectionClick: (section: NavigationSection) => void;
}

export const Navigation = ({
  isMenuOpen,
  activeSection,
  onToggleMenu,
  onSectionClick,
}: NavigationProps) => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-primary/20"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <GradientText>GF</GradientText>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => onSectionClick(section)}
                className={`capitalize transition-all duration-300 hover:text-accent px-3 py-2 rounded-md ${
                  activeSection === section
                    ? "text-accent bg-accent/10"
                    : "text-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-dark`}
                aria-current={activeSection === section ? "page" : undefined}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onToggleMenu}
              className="text-gray-300 hover:text-accent transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-dark"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-dark-alt border-t border-primary/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAVIGATION_SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => onSectionClick(section)}
                className={`capitalize block w-full text-left px-3 py-2 rounded-md transition-colors ${
                  activeSection === section
                    ? "bg-primary/20 text-accent"
                    : "hover:bg-primary/20 text-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary`}
                aria-current={activeSection === section ? "page" : undefined}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
