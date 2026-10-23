export default function DashboardLoading() {
  return (
    <main className="min-h-screen p-6 sm:p-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-9 w-48 animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-64 animate-pulse rounded bg-gray-200" />

        <div className="rounded-lg border p-6">
          <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </main>
  );
}
