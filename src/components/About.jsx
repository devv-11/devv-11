import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-neon/50 text-sm">$</span>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white">
              About <span className="text-neon text-glow">Me</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent ml-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-xl border border-dark-border bg-dark-card/50 hover:border-neon/30 transition-all duration-300">
                <div className="p-2 rounded-lg bg-neon/10 text-neon shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Who I Am</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {personalInfo.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-dark-border bg-dark-card/50 hover:border-neon/30 transition-all duration-300">
                <div className="p-2 rounded-lg bg-neon/10 text-neon shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Education</h3>
                  <p className="text-neon/80 text-sm font-mono">
                    {personalInfo.education.degree}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {personalInfo.education.college} — {personalInfo.education.status}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-dark-border bg-dark-card/50 hover:border-neon/30 transition-all duration-300">
                <div className="p-2 rounded-lg bg-neon/10 text-neon shrink-0">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {personalInfo.experience[0].role}
                  </h3>
                  <p className="text-cyan text-sm font-mono">
                    {personalInfo.experience[0].type}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {personalInfo.experience[0].description}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-dark-border bg-dark-card/50 text-center hover:border-neon/30 transition-all duration-300 group"
                >
                  <p className="text-3xl font-mono font-bold text-neon text-glow group-hover:text-glow transition-all">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm mt-1 font-mono">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-xl border border-dark-border bg-dark-card/50">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-neon" />
                <span className="text-white font-semibold text-sm">Location</span>
              </div>
              <p className="text-gray-400 text-sm font-mono">
                {personalInfo.location}
              </p>
            </div>

            <div className="mt-6 p-5 rounded-xl border border-dark-border bg-dark-card/50">
              <h4 className="text-white font-semibold text-sm mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.education.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono text-neon/80 bg-neon/5 border border-neon/20 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
