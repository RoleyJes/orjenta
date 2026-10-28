"use client";

import React, { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
  showCloseButton?: boolean;
}

const maxWidthMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
};

export default function Modal({
  isOpen = true,
  onClose,
  title,
  description,
  children,
  className,
  maxWidth = "lg",
  showCloseButton = true,
}: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs transition-opacity duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "bg-card border-border text-text-primary relative max-h-[90vh] w-full overflow-y-auto rounded-2xl border p-6 shadow-2xl transition-all duration-200",
          maxWidthMap[maxWidth],
          className,
        )}
      >
        {(title || showCloseButton) && (
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              {typeof title === "string" ? (
                <h2 className="text-text-primary text-xl font-semibold tracking-tight">
                  {title}
                </h2>
              ) : (
                title
              )}
              {description && (
                <p className="text-text-secondary mt-1 text-sm">
                  {description}
                </p>
              )}
            </div>

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary rounded-lg p-1.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
