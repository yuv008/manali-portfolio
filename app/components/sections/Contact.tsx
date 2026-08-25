"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, Send } from "lucide-react";
import PageShell from "../ui/PageShell";
import PageHeader from "../ui/PageHeader";
import ScrollReveal from "../ui/ScrollReveal";
import { profile } from "../../data/profile";

const CONTACT_CARDS = [
  {
    icon: <Mail size={20} className="text-rose-deep" />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <Phone size={20} className="text-rose-deep" />,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    icon: <ExternalLink size={20} className="text-rose-deep" />,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    external: true,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend is wired up, so submitting composes a mailto: with the
  // filled-in fields rather than silently discarding them.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageShell>
      <PageHeader eyebrow="Get in Touch" title="Let's" titleAccent="Connect" />

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
                className="soft-card rounded-xl p-6 flex items-center gap-4 hover:border-rose/30 transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <span className="rounded-lg bg-rose/10 p-3 flex-shrink-0 group-hover:bg-rose/15 transition-colors duration-300">
                  {card.icon}
                </span>

                <div className="min-w-0">
                  <p className="font-dm-mono text-plum-muted text-xs uppercase tracking-wider mb-1">
                    {card.label}
                  </p>
                  <p className="text-plum text-lg truncate">{card.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-card rounded-xl p-6 flex items-center justify-center gap-2 text-rose-deep font-dm-mono text-sm uppercase tracking-wider hover:border-rose/30 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Download Resume
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Right column — contact form */}
        <ScrollReveal delay={0.15} direction="right">
          <div className="soft-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="font-dm-mono text-plum-muted text-xs uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border border-plum/10 rounded-lg px-4 py-3 text-plum placeholder-plum-muted/50 font-dm-sans focus:border-rose/50 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="font-dm-mono text-plum-muted text-xs uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-plum/10 rounded-lg px-4 py-3 text-plum placeholder-plum-muted/50 font-dm-sans focus:border-rose/50 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="font-dm-mono text-plum-muted text-xs uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="What's on your mind?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white border border-plum/10 rounded-lg px-4 py-3 text-plum placeholder-plum-muted/50 font-dm-sans focus:border-rose/50 focus:outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rose-deep text-ivory font-dm-mono uppercase tracking-wider py-3 rounded-lg hover:bg-rose-deep/90 transition-colors duration-200 flex items-center justify-center gap-2 mt-1"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </PageShell>
  );
}
