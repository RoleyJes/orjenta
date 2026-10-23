import CustomInput from "@/components/CustomInput";
import { createClient } from "@/lib/supabase/server";
import { Search } from "lucide-react";

async function ClientsTable() {
  const supabase = await createClient();

  const { data: clients, error } = await supabase.from("clients").select("*");

  return (
    <section className="bg-card border-border mt-6 mb-16 rounded-xl border px-3 py-6">
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <h2 className="text-text-primary text-lg font-semibold">All Clients</h2>

        {/* Filters */}
        <div className="flex items-center gap-3 sm:flex-row sm:items-center">
          <CustomInput
            placeholder="Search clients or contacts..."
            type="search"
            aria-label="Search clients"
          >
            {<Search className="absolute left-3 size-4" />}
          </CustomInput>

          <select
            // value={status}
            // onChange={(event) => setStatus(event.target.value)}
            aria-label="Filter clients by status"
            className="border-border bg-background focus:border-primary h-10 rounded-lg border px-3 text-sm outline-none"
          >
            <option value="all">All statuses</option>
            <option value="lead">Lead</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>Client</th>
                <th>Primary Contact</th>
                <th>Status</th>
                <th>Projects</th>
                <th>Added</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-brand-subtle transition-colors duration-300 ease-in">
                <td>
                  <div className="flex flex-col gap-0.75">
                    <p className="text-text-primary text-xs font-semibold">
                      Blooms & Co.
                    </p>
                    <p className="text-[10px]">Food & beverage</p>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col gap-0.75">
                    <p className="text-text-primary text-xs">Sophie Chen</p>
                    <p className="text-[10px]">sophie@bloom.example</p>
                  </div>
                </td>
                <td className="bg-success-background text-success text-[10px]">
                  Active
                </td>
                <td>
                  <div className="flex flex-col gap-0.75">
                    <p className="text-text-primary text-xs">1 active</p>
                    <p className="text-[10px]">3 total</p>
                  </div>
                </td>
                <td className="text-[10px]">Oct 9, 2026</td>
              </tr>
              {clients?.map((client) => (
                <tr
                  key={client.id}
                  className="hover:bg-brand-subtle transition-colors duration-300 ease-in"
                >
                  <td>
                    <div className="flex flex-col gap-0.75">
                      <p className="text-text-primary text-xs font-semibold">
                        {client.company}
                      </p>
                      <p className="text-[10px]">{client.industry}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col gap-0.75">
                      <p className="text-text-primary text-xs">{client.name}</p>
                      <p className="text-[10px]">{client.email}</p>
                    </div>
                  </td>
                  <td className="bg-success-background text-success text-[10px]">
                    {client.status}
                  </td>
                  <td>
                    <div className="flex flex-col gap-0.75">
                      <p className="text-text-primary text-xs">1 active</p>
                      <p className="text-[10px]">3 total</p>
                    </div>
                  </td>
                  <td className="text-[10px]">{client.created_at}</td>
                </tr>
              ))}
              {clients?.map((client) => (
                <tr
                  key={client.id}
                  className="hover:bg-brand-subtle transition-colors duration-300 ease-in"
                >
                  <td>
                    <div className="flex flex-col gap-0.75">
                      <p className="text-text-primary text-xs font-semibold">
                        {client.company}
                      </p>
                      <p className="text-[10px]">{client.industry}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col gap-0.75">
                      <p className="text-text-primary text-xs">{client.name}</p>
                      <p className="text-[10px]">{client.email}</p>
                    </div>
                  </td>
                  <td className="bg-success-background text-success text-[10px]">
                    {client.status}
                  </td>
                  <td>
                    <div className="flex flex-col gap-0.75">
                      <p className="text-text-primary text-xs">1 active</p>
                      <p className="text-[10px]">3 total</p>
                    </div>
                  </td>
                  <td className="text-[10px]">{client.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ClientsTable;
