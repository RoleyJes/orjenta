"use client";

import CustomInput from "@/components/CustomInput";
import { ArrowLeft, ArrowRight, PenLine, Search, Trash } from "lucide-react";
import { useGetClients } from "../hooks/useGetClients";
import ClientsTableSkeleton from "./ClientsTableSkeleton";
import StatusBadge from "./StatusBadge";
import { ButtonLink } from "@/components/ButtonLink";
import { useState } from "react";
import { useAuthUser } from "@/components/providers/authProvider";

function ClientsTable() {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { user } = useAuthUser();
  const { data, isPending, error, isPlaceholderData } = useGetClients({
    page,
    pageSize,
    userId: user?.id,
  });

  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, data?.totalCount ?? 0);

  function handlePrev() {
    setPage((prev) => prev - 1);
  }

  function handleNext() {
    setPage((prev) => prev + 1);
  }

  if (isPending) return <ClientsTableSkeleton />;
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
              <th className="pr-6 pb-3 text-xs font-medium tracking-wide uppercase">
                Client
              </th>
              <th className="pr-6 pb-3 text-xs font-medium tracking-wide uppercase">
                Primary Contact
              </th>
              <th className="pr-6 pb-3 text-xs font-medium tracking-wide uppercase">
                Status
              </th>
              <th className="pr-6 pb-3 text-xs font-medium tracking-wide uppercase">
                Projects
              </th>
              <th className="pb-3 text-xs font-medium tracking-wide uppercase">
                Added
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            {/* Dynamic rows */}
            {data?.clients.map((client) => (
              <tr
                key={client.id}
                className="hover:bg-background/80 group transition-colors duration-200"
              >
                <td className="py-4 pr-6">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-text-primary text-sm font-semibold capitalize">
                      {client.company}
                    </p>
                    <p className="text-xs capitalize">{client.industry}</p>
                  </div>
                </td>
                <td className="py-4 pr-6">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-text-primary text-sm capitalize">
                      {client.name}
                    </p>
                    <p className="text-xs">{client.email}</p>
                  </div>
                </td>
                <td className="py-4 pr-6">
                  <StatusBadge status={client.status} />
                </td>
                <td className="py-4 pr-6">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-text-primary text-sm">1 active</p>
                    <p className="text-xs">3 total</p>
                  </div>
                </td>
                <td className="py-4 pr-6 text-xs">
                  {new Date(client.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="py-4">
                  <ButtonLink variant="ghost">
                    <PenLine className="size-4" />
                  </ButtonLink>
                </td>
                <td className="py-4">
                  <ButtonLink variant="ghost">
                    <Trash className="size-4" />
                  </ButtonLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex w-full items-center justify-between gap-4 text-sm">
        <p>
          Showing: {data.totalCount === 0 ? 0 : from}–{to} of {data.totalCount}{" "}
          clients
        </p>

        <div className="flex items-center gap-8">
          <ButtonLink
            variant="secondary"
            onClick={handlePrev}
            disabled={page === 1 || isPlaceholderData}
            className="font-normal"
          >
            <ArrowLeft className="size-3" />
            Prev
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            onClick={handleNext}
            disabled={isPlaceholderData || page >= data.totalPages}
            className="font-normal"
          >
            Next
            <ArrowRight className="size-3" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default ClientsTable;
