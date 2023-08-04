"use client";

import LoadingState from "@/components/empty-states/loading";
import { DashboardNavigation } from "@/components/layouts/dashboard-nav";
import { UserContext } from "@/context/user";
import { useResolveUser } from "@/lib/queries";
import { routes } from "@/lib/routes";
import { SignedIn } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";
import { Toaster } from "sonner";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);
  const { data, isLoading } = useResolveUser();
  const { theme } = useTheme();

  useEffect(() => {
    if (!user) {
      if (data) {
        dispatch({ type: "SET_USER", payload: data });
      } else if (!isLoading && !data) {
        redirect(routes.auth);
      }
    }
  }, [data, dispatch, isLoading, user]);

  return (
    <main className="flex min-h-screen flex-col gap-5 bg-gray-50 dark:bg-slate-900">
      <DashboardNavigation />
      <div className="flex-1 container flex flex-col gap-5 py-5">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <SignedIn>
          {!user ? <LoadingState /> : <div className="flex-1">{children}</div>}
        </SignedIn>
      </div>
      <Toaster
        position="bottom-right"
        duration={3000}
        visibleToasts={3}
        closeButton
        theme={theme as "light" | "dark" | "system" | undefined}
      />
    </main>
  );
}
