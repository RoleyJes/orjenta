import { AuthProvider } from "@/components/providers/authProvider";
import Sidebar from "@/components/Sidebar";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import { createClient } from "@/lib/supabase/server";
import { AppUser } from "@/types/auth";
import { redirect } from "next/navigation";
import { connection } from "next/server";

export const instant = false;

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connection();

  const supabase = await createClient();

  //This verifies the user's access token and retrieves its claims — information encoded in the token, such as the user's ID (sub) and authentication details.
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  const user = await getCurrentUser();

  return (
    <AuthProvider initialUser={user}>
      <div className="flex h-dvh w-screen overflow-hidden">
        <aside className="border-r-border bg-card hidden h-full shrink-0 basis-64 scrollbar-none overflow-y-auto border-r px-4 py-5 lg:block">
          <Sidebar />
        </aside>
        <div className="basis-full">
          <header className="border-b-border bg-card h-16 border-b px-4">
            Header
          </header>
          <main className="h-full scrollbar-none overflow-y-auto p-4 md:p-9">
            {children}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
