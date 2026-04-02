import Link from "next/link";

export function BrutalButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "cyan";
  className?: string;
}) {
  const cls = `btn btn-${variant} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cls}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}
