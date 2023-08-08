"use client";

import { UserContext } from "@/context/user";
import { useResolveUser } from "@/lib/queries";
import { routes } from "@/lib/routes";
import { siteInfo } from "@/lib/site-config";
import { Mails, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function AuthCallback() {
  const router = useRouter();
  const { data } = useResolveUser();
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_USER", payload: data });
      router.push(routes.dashboard);
    }
  }, [data, dispatch, router]);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Mails className="w-10 h-10" />
      <span className="font-bold inline-flex flex-col items-center gap-1 text-lg">
        {siteInfo.name as string} <Loader2 className="w-4 h-4 animate-spin" />
      </span>
    </div>
  );
}
