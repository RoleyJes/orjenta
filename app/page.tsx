import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { connection } from "next/server";

export const instant = false;
export default async function Home() {
  await connection();

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  redirect("/dashboard");
}
