import { Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-neon font-mono text-sm">
          <Terminal size={16} />
          <span className="text-glow">{"<DevAnand />"}</span>
        </div>

        <p className="text-gray-500 text-xs font-mono text-center">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React
          & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-neon transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-neon transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-500 hover:text-neon transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
