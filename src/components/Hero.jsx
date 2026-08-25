import { motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import TypingEffect from "./TypingEffect";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const roles = [
    "Web Developer",
    "Cybersecurity Enthusiast",
    "React Developer",
    "Technical Consultant",
    "Linux Administrator",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-neon/70 text-sm mb-4 tracking-widest">
            $ whoami
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-mono text-white mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-neon text-glow">{personalInfo.name.split(" ")[0]}</span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl font-mono text-gray-300 mb-6 h-12">
            <TypingEffect words={roles} speed={80} pause={2000} />
          </div>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-neon/10 border border-neon text-neon font-mono rounded-lg hover:bg-neon/20 transition-all duration-300 text-glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-dark-border text-gray-300 font-mono rounded-lg hover:border-cyan hover:text-cyan transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-neon transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-neon/40" size={28} />
        </motion.div>
      </div>
    </section>
  );
}
