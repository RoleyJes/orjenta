"use client";

import { LogOut } from "lucide-react";
import { useAuthUser } from "./providers/authProvider";
import { getInitials } from "@/lib/utils";
import { supabase } from "@/lib/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";

function SidebarLogout() {
  const { user } = useAuthUser();
  const fullName = user?.fullName;
  const email = user?.email;

  const queryClient = useQueryClient();
  const router = useRouter();

  async function handlelogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }

    // queryClient.cancelQueries();
    queryClient.clear();

    router.replace(routes.login);
    router.refresh();
  }

  return (
    <div className="border-border mt-auto flex items-center justify-between gap-3 border-t pt-4">
      <div className="flex items-center gap-2">
        <div className="bg-brand-subtle text-brand flex size-8.5 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
          {getInitials(fullName)}
        </div>

        <div className="min-w-0">
          <p className="text-text-primary text-sm font-semibold capitalize">
            {fullName}
          </p>
          <p className="text-xs break-all">{email}</p>
        </div>
      </div>

      <button
        title="Log out"
        className="hover:text-text-primary cursor-pointer transition-colors duration-250"
        onClick={handlelogout}
      >
        <LogOut className="size-5" />
      </button>
    </div>
  );
}

export default SidebarLogout;
