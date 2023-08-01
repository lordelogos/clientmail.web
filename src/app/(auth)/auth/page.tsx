"use client";

import { Mails } from "lucide-react";
import { routes } from "@/lib/routes";
import { useContext, useEffect } from "react";
import { useFetchUser } from "@/lib/queries";
import { UserContext } from "@/context/user";
import { useRouter } from "next/navigation";

export default function Auth({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const token = searchParams.token as string;
  const { data } = useFetchUser();
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("accessToken", token);
    }
  }, [token]);

  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_USER", payload: data });
      router.push(routes.dashboard);
    }
  }, [data, dispatch, router]);

  return (
    <main className="h-screen w-screen flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="flex flex-col items-center justify-center gap-2 animate-pulse">
        <Mails className="w-10 h-10" />
        <span className="font-bold inline-block text-lg">Resend Client</span>
      </div>
    </main>
  );
}
