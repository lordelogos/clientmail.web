"use client";

import { Loader2, Mails } from "lucide-react";
import { routes } from "@/lib/routes";
import { useContext, useEffect } from "react";
import { useResolveUser } from "@/lib/queries";
import { UserContext } from "@/context/user";
import { useRouter } from "next/navigation";
import { siteInfo } from "@/lib/site-config";
import { Background } from "@/components/ui/background";

export default function AuthLogin() {
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
    <main className="h-screen w-screen flex items-center justify-center  dark:bg-slate-900/50">
      <Background>
        <div className="flex flex-col items-center justify-center gap-2">
          <Mails className="w-10 h-10" />
          <span className="font-bold inline-flex flex-col items-center gap-1 text-lg">
            {siteInfo.name as string}{" "}
            <Loader2 className="w-4 h-4 animate-spin" />
          </span>
        </div>
      </Background>
    </main>
  );
}
