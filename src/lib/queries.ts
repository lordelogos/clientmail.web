import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./state";
import { fetchUser } from "./endpoint";

export const useFetchUser = () => {
  const context = useQuery([queryKeys.user], fetchUser);

  return { ...context, data: context.data?.data.data };
};
