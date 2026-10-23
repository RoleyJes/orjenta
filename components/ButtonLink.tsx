// import { type LucideIcon } from "lucide-react";

// type ButtonLinkProps = {
//   children?: ReactNode;
//   icon?: LucideIcon;
//   variant?: "primary" | "secondary" | "ghost" | "danger" | "icon";
//   onClick?: () => void;
//   type?: "button" | "submit";
//   className?: string;
//   disabled?: boolean;
//   href?: string;
// };

// export function ButtonLinks({
//   children,
//   icon: Icon,
//   variant = "primary",
//   onClick,
//   type = "button",
//   className = "",
//   disabled = false,
//   href,
// }: ButtonLinkProps) {
//   const styles = {
//     primary: "bg-primary text-white hover:bg-primary-hover shadow-primary",
//     secondary: "border border-line bg-white text-ink hover:bg-slate-50",
//     ghost: "text-muted hover:bg-slate-100 hover:text-ink",
//     danger: "bg-danger-soft text-danger hover:bg-red-100",
//     icon: "border border-line bg-white text-muted hover:bg-slate-50 hover:text-ink",
//   };

//   const button = (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`focus:ring-primary-soft inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${
//         variant === "icon" ? "w-10 px-0" : ""
//       } ${className}`}
//     >
//       {Icon && <Icon size="sm" />}
//       {children}
//     </button>
//   );

//   if (href) return <Link href={href}>{button}</Link>;

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`focus:ring-primary-soft inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${
//         variant === "icon" ? "w-10 px-0" : ""
//       } ${className}`}
//     >
//       {icon && <Icon name={icon} size="sm" />}
//       {children}
//     </button>
//   );
// }

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
