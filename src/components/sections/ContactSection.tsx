import { Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { CONTACT_INFO } from "../../constants/content";

interface ContactSectionProps {
  isVisible: boolean;
}

export const ContactSection = ({ isVisible }: ContactSectionProps) => {
  return (
    <section id="contato" className="py-20 px-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeader title="Entre em Contato" />

        <address className="grid md:grid-cols-3 gap-6 not-italic">
          {/* Phone */}
          <a
            href={`tel:${CONTACT_INFO.phone.number}`}
            className="bg-dark-alt rounded-xl p-8 border border-primary/20 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex flex-col items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-dark"
            aria-label={`Ligar para ${CONTACT_INFO.phone.display}`}
          >
            <Phone
              className="text-accent group-hover:scale-110 transition-transform"
              size={32}
              aria-hidden="true"
            />
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Telefone</p>
              <p className="text-white font-semibold">
                {CONTACT_INFO.phone.display}
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={CONTACT_INFO.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-alt rounded-xl p-8 border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-dark"
            aria-label={`Visitar GitHub: ${CONTACT_INFO.github.handle}`}
          >
            <Github
              className="text-primary group-hover:scale-110 transition-transform"
              size={32}
              aria-hidden="true"
            />
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">GitHub</p>
              <p className="text-white font-semibold flex items-center gap-1">
                {CONTACT_INFO.github.handle}
                <ExternalLink size={14} aria-hidden="true" />
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={CONTACT_INFO.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-alt rounded-xl p-8 border border-primary/20 hover:border-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 flex flex-col items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-dark"
            aria-label={`Visitar LinkedIn: ${CONTACT_INFO.linkedin.handle}`}
          >
            <Linkedin
              className="text-secondary group-hover:scale-110 transition-transform"
              size={32}
              aria-hidden="true"
            />
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
              <p className="text-white font-semibold flex items-center gap-1">
                {CONTACT_INFO.linkedin.handle}
                <ExternalLink size={14} aria-hidden="true" />
              </p>
            </div>
          </a>
        </address>
      </div>
    </section>
  );
};
