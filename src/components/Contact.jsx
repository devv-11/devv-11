import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-neon/50 text-sm">$</span>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white">
              Get In <span className="text-neon text-glow">Touch</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent ml-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5">
              <p className="text-gray-400 leading-relaxed">
                Have a project in mind or want to discuss cybersecurity and web
                development? I&apos;m always open to new opportunities and
                collaborations.
              </p>

              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: personalInfo.location,
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-dark-border bg-dark-card/50 hover:border-neon/30 transition-all"
                >
                  <div className="p-2 rounded-lg bg-neon/10 text-neon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-300 text-sm hover:text-neon transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-border text-gray-400 hover:text-neon hover:border-neon/30 transition-all text-sm font-mono"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-border text-gray-400 hover:text-neon hover:border-neon/30 transition-all text-sm font-mono"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-xl border border-dark-border bg-dark-card/50 space-y-5"
            >
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-1.5">
                  <span className="text-neon/50 mr-1">&gt;</span> Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white text-sm font-mono focus:outline-none focus:border-neon/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-1.5">
                  <span className="text-neon/50 mr-1">&gt;</span> Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white text-sm font-mono focus:outline-none focus:border-neon/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-1.5">
                  <span className="text-neon/50 mr-1">&gt;</span> Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white text-sm font-mono focus:outline-none focus:border-neon/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-neon/10 border border-neon text-neon font-mono rounded-lg hover:bg-neon/20 transition-all duration-300 text-glow"
              >
                <Send size={16} />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>

              <p className="text-center text-xs text-gray-500 font-mono">
                <span className="text-neon/40">//</span> Opens your email client
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
