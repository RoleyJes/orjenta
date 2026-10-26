"use client";

import CustomInput from "@/components/CustomInput";
import { Search } from "lucide-react";
import { useGetClients } from "../hooks/useGetClients";

function StatusBadge({ status }: { status: string }) {
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

function ClientsTable() {
  const { clients, isPending, error } = useGetClients();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="bg-card border-border mt-6 mb-16 rounded-xl border px-4 py-6">
      {/* Header row */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="text-text-primary text-lg font-semibold">All Clients</h2>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <CustomInput
            placeholder="Search clients or contacts..."
            type="search"
            aria-label="Search clients"
          >
            {<Search className="absolute left-3 size-4" />}
          </CustomInput>

          <select
            aria-label="Filter clients by status"
            className="border-border bg-background focus:border-brand h-10 rounded-lg border px-3 text-sm transition-colors outline-none"
          >
            <option value="all">All statuses</option>
            <option value="lead">Lead</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-border border-b">
              <th className="text-text-secondary pr-6 pb-3 text-xs font-medium tracking-wide uppercase">
                Client
              </th>
              <th className="text-text-secondary pr-6 pb-3 text-xs font-medium tracking-wide uppercase">
                Primary Contact
              </th>
              <th className="text-text-secondary pr-6 pb-3 text-xs font-medium tracking-wide uppercase">
                Status
              </th>
              <th className="text-text-secondary pr-6 pb-3 text-xs font-medium tracking-wide uppercase">
                Projects
              </th>
              <th className="text-text-secondary pb-3 text-xs font-medium tracking-wide uppercase">
                Added
              </th>
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            {/* Static placeholder row */}
            <tr className="hover:bg-brand-subtle/40 group transition-colors duration-200">
              <td className="py-4 pr-6">
                <div className="flex flex-col gap-0.5">
                  <p className="text-text-primary text-sm font-semibold">
                    Blooms &amp; Co.
                  </p>
                  <p className="text-text-secondary text-xs">
                    Food &amp; beverage
                  </p>
                </div>
              </td>
              <td className="py-4 pr-6">
                <div className="flex flex-col gap-0.5">
                  <p className="text-text-primary text-sm">Sophie Chen</p>
                  <p className="text-text-secondary text-xs">
                    sophie@bloom.example
                  </p>
                </div>
              </td>
              <td className="py-4 pr-6">
                <StatusBadge status="active" />
              </td>
              <td className="py-4 pr-6">
                <div className="flex flex-col gap-0.5">
                  <p className="text-text-primary text-sm">1 active</p>
                  <p className="text-text-secondary text-xs">3 total</p>
                </div>
              </td>
              <td className="text-text-secondary py-4 text-xs">Oct 9, 2026</td>
            </tr>

            {/* Dynamic rows */}
            {clients?.clients?.map((client) => (
              <tr
                key={client.id}
                className="hover:bg-brand-subtle/40 group transition-colors duration-200"
              >
                <td className="py-4 pr-6">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-text-primary text-sm font-semibold">
                      {client.company}
                    </p>
                    <p className="text-text-secondary text-xs">
                      {client.industry}
                    </p>
                  </div>
                </td>
                <td className="py-4 pr-6">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-text-primary text-sm">{client.name}</p>
                    <p className="text-text-secondary text-xs">
                      {client.email}
                    </p>
                  </div>
                </td>
                <td className="py-4 pr-6">
                  <StatusBadge status={client.status} />
                </td>
                <td className="py-4 pr-6">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-text-primary text-sm">1 active</p>
                    <p className="text-text-secondary text-xs">3 total</p>
                  </div>
                </td>
                <td className="text-text-secondary py-4 text-xs">
                  {new Date(client.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ClientsTable;
