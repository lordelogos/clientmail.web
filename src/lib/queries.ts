import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./state";
import { resolveUser } from "./endpoint";
import { useAuth } from "@clerk/nextjs";

export const useResolveUser = () => {
  const { getToken } = useAuth();

  const context = useQuery([queryKeys.user], async () => {
    const token = await getToken({ template: "client-mail" });
    return token ? resolveUser({ token: token ?? "" }) : null;
  });

  return { ...context, data: context.data?.data.data };
};
