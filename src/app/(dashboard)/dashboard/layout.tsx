"use client";

import LoadingState from "@/components/empty-states/loading";
import { DashboardNavigation } from "@/components/layouts/dashboard-nav";
import { UserContext } from "@/context/user";
import { useFetchUser } from "@/lib/queries";
import { routes } from "@/lib/routes";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";
import { Toaster } from "sonner";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { data, isFetching, isError } = useFetchUser();
  const { dispatch } = useContext(UserContext);
  const { theme } = useTheme();

  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_USER", payload: data });
    }
  }, [data, dispatch, isError]);

  if (isError) {
    redirect(routes.home);
  }

  return (
    <main className="flex min-h-screen flex-col gap-5 bg-gray-50 dark:bg-slate-900">
      <DashboardNavigation />
      <div className="flex-1 container flex flex-col gap-5 py-5">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        {isFetching ? (
          <LoadingState />
        ) : (
          <div className="flex-1">{children}</div>
        )}
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
