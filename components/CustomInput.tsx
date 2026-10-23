"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

interface CustomInputProps {
  placeholder: string;
  type?: string;
  ariaLabel?: string;
  children?: ReactNode;
}

function CustomInput({
  placeholder,
  children,
  type = "text",
  ariaLabel,
}: CustomInputProps) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div
      className={cn(
        "relative h-10 w-full sm:w-80",
        children && "flex items-center gap-2.5",
      )}
    >
      {children}
      <input
        type={type}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className={cn(
          "focus:border-brand border-border text-text-primary focus:ring-brand-subtle ring-offset0 bg-card size-full rounded-lg border-[1.5px] px-3 transition placeholder:text-[13px] focus:ring-2 focus:outline-none",
          children && "ps-9.5",
        )}
      />
    </div>
  );
}

export default CustomInput;
