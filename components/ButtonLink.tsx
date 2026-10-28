import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "icon";

interface ButtonLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  isLoading?: boolean;
  href?: string;
  children: React.ReactNode;
}
export function ButtonLink({
  variant = "primary",
  className,
  isLoading = false,
  children,
  href,
  disabled,
  ...props
}: ButtonLinkProps) {
  const baseStyle =
    "focus:ring-brand-soft inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

  const styles = {
    primary: "bg-brand text-card hover:bg-brand-hover shadow-brand",
    secondary:
      "border border-border bg-card text-text-primary hover:bg-slate-50",
    ghost: "text-text-secondary hover:bg-slate-100 hover:text-text-primary",
    danger: "bg-danger-background text-danger hover:bg-red-100",
    icon: "border border-border bg-card text-text-secondary hover:bg-slate-50 hover:text-text-primary",
  };

  const finalClassName = cn(baseStyle, styles[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={finalClassName}
        aria-disabled={isLoading || disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={finalClassName}
      disabled={isLoading || disabled}
      {...props}
    >
      {children}
    </button>
  );
}
