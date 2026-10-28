import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { label, required, error, helperText, className, id, name, ...props },
    ref,
  ) => {
    const inputId =
      id ||
      name ||
      (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-text-primary text-sm font-medium"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <input
          id={inputId}
          name={name}
          ref={ref}
          className={cn(
            "bg-card border-border text-text-primary placeholder:text-text-secondary/50 focus:border-brand focus:ring-brand-subtle w-full rounded-lg border px-3.5 py-2.5 text-sm transition focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60",
            error &&
              "border-danger focus:border-danger focus:ring-danger-background",
            className,
          )}
          {...props}
        />
        {error ? (
          <span className="text-danger text-xs">{error}</span>
        ) : helperText ? (
          <span className="text-text-secondary text-xs">{helperText}</span>
        ) : null}
      </div>
    );
  },
);

InputField.displayName = "InputField";

export default InputField;
