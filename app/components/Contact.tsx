"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { Mail, Phone, ExternalLink, Send } from "lucide-react";
import { motion } from "framer-motion";

interface ContactCard {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const CONTACT_CARDS: ContactCard[] = [
  {
    icon: <Mail size={20} className="text-gold" />,
    label: "Email",
    value: "manalis@bu.edu",
    href: "mailto:manalis@bu.edu",
  },
  {
    icon: <Phone size={20} className="text-gold" />,
    label: "Phone",
    value: "+1 (857) 404-1256",
    href: "tel:+18574041256",
  },
  {
    icon: <ExternalLink size={20} className="text-gold" />,
    label: "LinkedIn",
    value: "linkedin.com/in/manalisanghai/",
    href: "https://www.linkedin.com/in/manalisanghai/",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-navy py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal delay={0}>
          <p className="font-dm-mono text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            GET IN TOUCH
          </p>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light text-cream mb-16">
            Let&apos;s Connect
          </h2>
        </ScrollReveal>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left column — contact info cards */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="flex flex-col gap-6">
              {CONTACT_CARDS.map((card, index) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="glass-card rounded-xl p-6 flex items-center gap-4 hover:border-gold/20 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  {/* Icon container */}
                  <span className="rounded-lg bg-gold/10 p-3 flex-shrink-0 group-hover:bg-gold/15 transition-colors duration-300">
                    {card.icon}
                  </span>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="font-dm-mono text-cream/40 text-xs uppercase tracking-wider mb-1">
                      {card.label}
                    </p>
                    <p className="text-cream/90 text-lg truncate">
                      {card.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Right column — contact form */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="glass-card rounded-2xl p-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="font-dm-mono text-cream/40 text-xs uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-dm-sans focus:border-gold/40 focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="font-dm-mono text-cream/40 text-xs uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-dm-sans focus:border-gold/40 focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    className="font-dm-mono text-cream/40 text-xs uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="What's on your mind?"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-dm-sans focus:border-gold/40 focus:outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-dm-mono uppercase tracking-wider py-3 rounded-lg hover:bg-gold/90 transition-colors duration-200 flex items-center justify-center gap-2 mt-1"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
