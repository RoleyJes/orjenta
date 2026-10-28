import "server-only";
import { createClient } from "../supabase/server";
import { AppUser } from "@/types/auth";

export async function getCurrentUser(): Promise<AppUser | null> {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  const fullName = user.user_metadata.full_name;

  return {
    id: user.id,
    email: user.email ?? null,
    fullName:
      typeof fullName === "string" && fullName.trim()
        ? fullName.trim()
        : "User",
    avatarUrl:
      typeof user.user_metadata?.avatar_url === "string"
        ? user.user_metadata.avatar_url
        : null,
  };
}
