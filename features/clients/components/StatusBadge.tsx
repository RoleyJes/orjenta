export default function StatusBadge({ status }: { status: string }) {
  const s = status?.toLowerCase();

  const styles: Record<string, string> = {
    active: "bg-success-background text-success",
    lead: "bg-info-background text-info",
    inactive: "bg-danger-background text-danger",
  };

  const label: Record<string, string> = {
    active: "Active",
    lead: "Lead",
    inactive: "Inactive",
  };

  const cls = styles[s] ?? "bg-brand-subtle text-brand";
  const text = label[s] ?? status;

  return (
    <span
      className={`${cls} inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium capitalize`}
    >
      {text}
    </span>
  );
}
