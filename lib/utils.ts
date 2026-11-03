import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName: string | undefined) {
  return fullName
    ?.trim()
    .split(/\s+/)
    .map((name) => name[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
