import { updateClient as updateClientApi } from "@/services/clients";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateClient() {
  const queryclient = useQueryClient();

  const {
    isPending,
    error,
    mutate: updateClient,
  } = useMutation({
    mutationFn: updateClientApi,
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["clients"] });
    },
  });

  return { isPending, error, updateClient };
}
