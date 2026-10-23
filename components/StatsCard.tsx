import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  headerIconClassname: string;
  icon: LucideIcon;
}

function StatsCard({
  title,
  value,
  headerIconClassname,
  icon: Icon,
}: StatsCardProps) {
  return (
    <article className="bg-card border-border flex flex-col gap-2.5 rounded-xl border p-2.5">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex size-6 items-center justify-center rounded-lg shadow-xs",

            headerIconClassname,
          )}
        >
          <Icon className="size-4" />
        </div>
        <h4 className="text-xs font-semibold">{title}</h4>
      </div>

      <p className="text-text-primary text-2xl font-semibold wrap-anywhere">
        {value}
      </p>
    </article>
  );
}

export default StatsCard;
