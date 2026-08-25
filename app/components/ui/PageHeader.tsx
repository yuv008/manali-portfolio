import ScrollReveal from "./ScrollReveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lede?: string;
}

/**
 * Shared eyebrow-label / display-heading / lede trio used at the top of
 * every route. Consolidates markup that used to be copy-pasted into each
 * section component.
 */
export default function PageHeader({
  eyebrow,
  title,
  titleAccent,
  lede,
}: PageHeaderProps) {
  return (
    <div className={lede ? "mb-16" : "mb-12"}>
      <ScrollReveal delay={0}>
        <p className="font-dm-mono text-rose-deep text-sm tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-plum mb-6">
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="italic text-rose-deep">{titleAccent}</span>
            </>
          )}
        </h1>
      </ScrollReveal>

      {lede && (
        <ScrollReveal delay={0.08}>
          <p className="font-dm-sans text-plum-muted text-lg max-w-2xl">
            {lede}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
