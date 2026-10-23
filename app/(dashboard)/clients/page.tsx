import { ButtonLink } from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import ClientsStats from "@/features/clients/components/ClientsStats";
import ClientsTable from "@/features/clients/components/ClientsTable";
import { PlusCircle } from "lucide-react";

function page() {
  return (
    <>
      <PageHeader
        title="Clients"
        description="Good relationships start with a little organization."
        actions={
          <ButtonLink>
            <PlusCircle />
            <span>Add client</span>
          </ButtonLink>
        }
      />

      <ClientsStats />

      <ClientsTable />
    </>
  );
}

export default page;
