import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useNavigation } from "./hooks/useNavigation";
import { Navigation } from "./components/common/Navigation";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { Footer } from "./components/common/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { EducationSection } from "./components/sections/EducationSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ContactSection } from "./components/sections/ContactSection";

function AppContent() {
  const { isMenuOpen, activeSection, scrollToSection, toggleMenu } = useNavigation();
  const visibleSections = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-alt to-dark text-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        onToggleMenu={toggleMenu}
        onSectionClick={scrollToSection}
      />

      {/* Skip to main content link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:rounded-md focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>

      <main id="main">
        <HeroSection isVisible={visibleSections.home} />
        <AboutSection isVisible={visibleSections.sobre} />
        <ExperienceSection isVisible={visibleSections.experiencia} />
        <EducationSection isVisible={visibleSections.educacao} />
        <SkillsSection isVisible={visibleSections.habilidades} />
        <ContactSection isVisible={visibleSections.contato} />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}
