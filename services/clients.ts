import {
  ClientUpdate,
  GetClientsParams,
  NewClient,
} from "@/features/clients/types";
import { supabase } from "@/lib/supabase/client";

export async function getClients({ page, pageSize }: GetClientsParams) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const {
    data: clients,
    count,
    error,
  } = await supabase
    .from("clients")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return {
    clients,
    totalCount: count ?? 0,
    totalPages: Math.ceil((count ?? 0) / pageSize),
  };
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
