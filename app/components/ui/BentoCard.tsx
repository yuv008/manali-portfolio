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
        "soft-card rounded-2xl relative overflow-hidden",
        featured ? "p-8 border-rose/30" : "p-6",
        "flex flex-col gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      whileHover={{
        scale: 1.02,
        boxShadow: featured
          ? "0 0 32px rgba(201, 139, 139, 0.18), 0 12px 48px rgba(61, 50, 56, 0.10)"
          : "0 0 20px rgba(201, 139, 139, 0.10), 0 8px 32px rgba(61, 50, 56, 0.08)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Featured accent bar */}
      {featured && (
        <span
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose/60 to-transparent"
          aria-hidden="true"
        />
      )}

      {/* Header row: title + optional external link */}
      <CardWrapper {...wrapperProps} className="group flex items-start gap-2">
        <h3
          className={[
            "font-cormorant font-semibold text-plum leading-tight flex-1",
            featured ? "text-2xl" : "text-xl",
          ].join(" ")}
        >
          {title}
        </h3>

        {link && (
          <ExternalLink
            size={16}
            className="mt-1 shrink-0 text-rose-deep/50 transition-colors duration-200 group-hover:text-rose-deep"
            aria-label={`Open ${title} in new tab`}
          />
        )}
      </CardWrapper>

      {/* Description */}
      <p className="text-plum-muted text-sm font-dm-sans leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-0.5 rounded-full font-dm-mono text-xs border border-rose/25 text-rose-deep bg-rose/5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
