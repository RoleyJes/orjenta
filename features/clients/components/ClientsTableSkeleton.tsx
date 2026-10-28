import Skeleton from "@/components/Skeleton";

interface ClientsTableSkeletonProps {
  rowsCount?: number;
}

export function ClientsTableSkeleton({
  rowsCount = 5,
}: ClientsTableSkeletonProps) {
  // Predefined variations so each skeleton row looks distinct and realistic
  const rowVariations = [
    {
      companyWidth: "w-32",
      industryWidth: "w-20",
      nameWidth: "w-28",
      emailWidth: "w-36",
      statusWidth: "w-16",
      projectWidth: "w-16",
      projectSubWidth: "w-12",
      dateWidth: "w-20",
    },
    {
      companyWidth: "w-24",
      industryWidth: "w-24",
      nameWidth: "w-20",
      emailWidth: "w-32",
      statusWidth: "w-14",
      projectWidth: "w-14",
      projectSubWidth: "w-10",
      dateWidth: "w-20",
    },
    {
      companyWidth: "w-36",
      industryWidth: "w-16",
      nameWidth: "w-24",
      emailWidth: "w-40",
      statusWidth: "w-16",
      projectWidth: "w-16",
      projectSubWidth: "w-12",
      dateWidth: "w-20",
    },
    {
      companyWidth: "w-28",
      industryWidth: "w-28",
      nameWidth: "w-32",
      emailWidth: "w-28",
      statusWidth: "w-14",
      projectWidth: "w-14",
      projectSubWidth: "w-10",
      dateWidth: "w-20",
    },
    {
      companyWidth: "w-30",
      industryWidth: "w-20",
      nameWidth: "w-22",
      emailWidth: "w-36",
      statusWidth: "w-16",
      projectWidth: "w-16",
      projectSubWidth: "w-12",
      dateWidth: "w-20",
    },
  ];

  return (
    <section
      className="bg-card border-border mt-6 mb-16 rounded-xl border px-4 py-6"
      aria-busy="true"
      aria-label="Loading clients"
    >
      {/* Header row skeleton */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Skeleton className="h-7 w-28" />

        {/* Filters skeleton */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-52 rounded-lg sm:w-64" />
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>
      </div>

      {/* Table skeleton */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-border border-b">
              <th className="pr-6 pb-3">
                <Skeleton className={`w-32} h-4`} />
              </th>
              <th className="pr-6 pb-3">
                <Skeleton className={`w-32} h-4`} />
              </th>
              <th className="pr-6 pb-3">
                <Skeleton className={`w-32} h-4`} />
              </th>
              <th className="pr-6 pb-3">
                <Skeleton className={`w-32} h-4`} />
              </th>
              <th className="pr-6 pb-3">
                <Skeleton className={`w-32} h-4`} />
              </th>
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            {Array.from({ length: rowsCount }).map((_, index) => {
              const variation = rowVariations[index % rowVariations.length];
              return (
                <tr key={index}>
                  {/* Client */}
                  <td className="py-4 pr-6">
                    <div className="flex flex-col gap-1.5">
                      <Skeleton className={`h-4 ${variation.companyWidth}`} />
                      <Skeleton className={`h-3 ${variation.industryWidth}`} />
                    </div>
                  </td>

                  {/* Primary Contact */}
                  <td className="py-4 pr-6">
                    <div className="flex flex-col gap-1.5">
                      <Skeleton className={`h-4 ${variation.nameWidth}`} />
                      <Skeleton className={`h-3 ${variation.emailWidth}`} />
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 pr-6">
                    <Skeleton
                      className={`h-6 ${variation.statusWidth} rounded-full`}
                    />
                  </td>

                  {/* Projects */}
                  <td className="py-4 pr-6">
                    <div className="flex flex-col gap-1.5">
                      <Skeleton className={`h-4 ${variation.projectWidth}`} />
                      <Skeleton
                        className={`h-3 ${variation.projectSubWidth}`}
                      />
                    </div>
                  </td>

                  {/* Added */}
                  <td className="py-4">
                    <Skeleton className={`h-3.5 ${variation.dateWidth}`} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ClientsTableSkeleton;
