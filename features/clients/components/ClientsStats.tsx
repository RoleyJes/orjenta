import StatsCard from "@/components/StatsCard";
import {
  Archive,
  UserRound,
  UserRoundCheck,
  UserRoundPlus,
} from "lucide-react";

function ClientsStats() {
  return (
    <section className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
      <StatsCard
        title="Total Clients"
        value="128"
        icon={UserRound}
        headerIconClassname="bg-brand-subtle text-brand"
      />
      <StatsCard
        title="Active Clients"
        value="32"
        icon={UserRoundCheck}
        headerIconClassname="bg-success-background text-success"
      />
      <StatsCard
        title="New This Month"
        value="90"
        icon={UserRoundPlus}
        headerIconClassname="bg-info-background text-info"
      />
      <StatsCard
        title="Archived Clients"
        value="8"
        icon={Archive}
        headerIconClassname="bg-warning-background text-warning"
      />
    </section>
  );
}

export default ClientsStats;
