import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  showIcon?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-coffee text-cream hover:bg-coffee-dark shadow-soft hover:shadow-soft-lg",
  secondary:
    "bg-gold text-coffee-dark hover:bg-gold-dark shadow-soft hover:shadow-soft-lg",
  ghost:
    "bg-transparent text-cream border border-cream/50 hover:bg-cream/10 backdrop-blur-sm",
};

export default function Button({
  href,
  children,
  variant = "primary",
  showIcon = true,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {showIcon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
