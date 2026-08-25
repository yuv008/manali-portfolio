interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared page container for every route. Clears the fixed Navbar (h-20) with
 * top padding, caps content width, and keeps consistent vertical rhythm so
 * individual route components don't each re-declare the same wrapper.
 */
export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div
      className={[
        "max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
