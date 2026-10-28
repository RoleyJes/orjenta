import { addNewClient } from "@/services/clients";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewClient } from "../types";
import toast from "react-hot-toast";

export function useAddNewClient() {
  const queryClient = useQueryClient();

  const { mutate: addClient, isPending } = useMutation({
    mutationFn: (data: NewClient) => addNewClient(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { addClient, isPending };
}
