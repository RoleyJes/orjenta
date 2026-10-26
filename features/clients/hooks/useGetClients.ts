import { getClients } from "@/services/clients";
import { useQuery } from "@tanstack/react-query";

export function useGetClients() {
  const { isPending, data: clients, error } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(),
  });
  return { isPending, clients, error };
}