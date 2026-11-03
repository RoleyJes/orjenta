import { getClients } from "@/services/clients";
import { useQuery } from "@tanstack/react-query";
import { GetClientsParams } from "../types";

type UseGetClientsParams = GetClientsParams & {
  userId: string | undefined;
};

export function useGetClients({ page, pageSize, userId }: UseGetClientsParams) {
  return useQuery({
    queryKey: ["clients", userId, page, pageSize],
    queryFn: () => getClients({ page, pageSize }),
    // placeholderData: (prevData) => prevData,
    placeholderData: (prevData, prevQuery) =>
      prevQuery?.queryKey[1] === userId ? prevData : undefined,
  });
}
