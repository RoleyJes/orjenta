import { cn } from "@/lib/utils";
import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("bg-border/60 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export default Skeleton;
