import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-neon/50 text-sm">$</span>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white">
              Featured <span className="text-neon text-glow">Projects</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent ml-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-dark-border bg-dark-card/50 hover:border-neon/30 transition-all duration-300 h-full flex flex-col group">
                {project.featured && (
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={14} className="text-neon fill-neon" />
                    <span className="text-xs font-mono text-neon/70">Featured</span>
                  </div>
                )}

                <h3 className="text-white font-semibold mb-2 group-hover:text-neon transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <p className="text-cyan/80 text-xs font-mono mb-4">
                  Role: {project.role}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-mono text-neon/70 bg-neon/5 border border-neon/15 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-3 border-t border-dark-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-neon transition-colors font-mono"
                    >
                      <GithubIcon size={16} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan transition-colors font-mono"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
