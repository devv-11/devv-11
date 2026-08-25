import { Shield, Code, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { skills } from "../data/portfolio";

const icons = { Shield, Code, Wrench };

function SkillBar({ name, level }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-300 font-mono">{name}</span>
        <span className="text-neon/60 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-border rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon to-cyan rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-neon/50 text-sm">$</span>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white">
              Skills <span className="text-neon text-glow">& Tools</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent ml-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, category], catIndex) => {
            const Icon = icons[category.icon];
            return (
              <ScrollReveal key={key} delay={catIndex * 0.15}>
                <div className="p-6 rounded-xl border border-dark-border bg-dark-card/50 hover:border-neon/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-neon/10 text-neon">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-white font-semibold font-mono text-sm">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.items.map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 p-5 rounded-xl border border-dark-border bg-dark-card/50">
            <h4 className="text-white font-semibold text-sm mb-4 font-mono">
              <span className="text-neon/50 mr-2">//</span>Why Work With Me
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[
                "Clean Code",
                "Secure Design",
                "Responsive",
                "Fast Performance",
                "Linux Expert",
                "API Security",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neon/5 border border-neon/10 text-sm text-gray-300 font-mono"
                >
                  <span className="text-neon">&#10003;</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
