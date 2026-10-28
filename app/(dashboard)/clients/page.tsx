import PageHeader from "@/components/PageHeader";
import AddNewClientBtn from "@/features/clients/components/AddNewClientBtn";
import ClientsStats from "@/features/clients/components/ClientsStats";
import ClientsTable from "@/features/clients/components/ClientsTable";

function page() {
  return (
    <>
      <PageHeader
        title="Clients"
        description="Good relationships start with a little organization."
        actions={<AddNewClientBtn />}
      />

      <ClientsStats />

      <ClientsTable />
    </>
  );
}

export default page;
