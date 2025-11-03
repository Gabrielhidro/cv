import { useState, useCallback } from "react";
import type { NavigationSection } from "../types";

export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<NavigationSection>("home");

  const scrollToSection = useCallback((sectionId: NavigationSection) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return {
    isMenuOpen,
    activeSection,
    scrollToSection,
    toggleMenu,
    closeMenu,
  };
};
