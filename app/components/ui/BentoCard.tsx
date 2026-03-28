"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  tags?: string[];
  featured?: boolean;
  link?: string;
  className?: string;
}

export default function BentoCard({
  title,
  description,
  tags = [],
  featured = false,
  link,
  className = "",
}: BentoCardProps) {
  const CardWrapper = link ? "a" : "div";
  const wrapperProps = link
    ? {
        href: link,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <motion.div
      className={[
        "glass-card rounded-2xl relative overflow-hidden",
        featured ? "p-8 border border-gold/30" : "p-6",
        "flex flex-col gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      whileHover={{
        scale: 1.02,
        boxShadow: featured
          ? "0 0 32px rgba(201, 168, 76, 0.22), 0 12px 48px rgba(0, 0, 0, 0.4)"
          : "0 0 20px rgba(201, 168, 76, 0.12), 0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Featured accent bar */}
      {featured && (
        <span
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          aria-hidden="true"
        />
      )}

      {/* Header row: title + optional external link */}
      <CardWrapper {...wrapperProps} className="group flex items-start gap-2">
        <h3
          className={[
            "font-cormorant font-semibold text-cream leading-tight flex-1",
            featured ? "text-2xl" : "text-xl",
          ].join(" ")}
        >
          {title}
        </h3>

        {link && (
          <ExternalLink
            size={16}
            className="mt-1 shrink-0 text-gold/50 transition-colors duration-200 group-hover:text-gold"
            aria-label={`Open ${title} in new tab`}
          />
        )}
      </CardWrapper>

      {/* Description */}
      <p className="text-cream/70 text-sm font-dm-sans leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-0.5 rounded-full font-dm-mono text-xs border border-gold/20 text-gold/70 bg-gold/5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
