import { supabase } from "@/lib/supabase/client";

export async function getClients() {
  let { data: clients, error } = await supabase.from("clients").select("*");

  return { clients, error };
}
