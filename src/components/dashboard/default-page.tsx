"use client";

import { NoApiKeyState } from "@/components/empty-states/no-api-key";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserContext } from "@/context/user";
import { routes } from "@/lib/routes";
import { RedirectType } from "next/dist/client/components/redirect";
import { redirect, useRouter } from "next/navigation";
import { useContext } from "react";

export function DashboardDefaultLanding() {
  const router = useRouter();
  const {
    state: { user },
  } = useContext(UserContext);

  const handleTabChange = (value: string) => {
    return router.push(
      value === "domains" ? routes.dashboardDomains : routes.dashboardOverview
    );
  };

  if (user?.publicKey) {
    redirect(routes.dashboardOverview, RedirectType.replace);
  }

  return (
    <>
      <Tabs onValueChange={handleTabChange} className="mb-10">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="domains">Domains</TabsTrigger>
        </TabsList>
      </Tabs>
      <NoApiKeyState />
    </>
  );
}
