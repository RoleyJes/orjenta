import { ClientUpdate, NewClient } from "@/features/clients/types";
import { supabase } from "@/lib/supabase/client";

export async function getClients() {
  const { data: clients, error } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return clients;
}

export async function addNewClient(data: NewClient) {
  const { data: client, error } = await supabase
    .from("clients")
    .insert([data])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return client;
}

export async function updateClient({
  clientId,
  data,
}: {
  clientId: string;
  data: ClientUpdate;
}) {
  const { data: client, error } = await supabase
    .from("clients")
    .update(data)
    .eq("id", clientId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return client;
}
