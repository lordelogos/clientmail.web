"use client";

import LoadingState from "@/components/empty-states/loading";
import { OverviewContent } from "@/components/layouts/overview-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserContext } from "@/context/user";
import { routes } from "@/lib/routes";
import { redirect, useRouter } from "next/navigation";
import { useContext } from "react";

export default function OverviewPage() {
  const router = useRouter();
  const {
    state: { user },
  } = useContext(UserContext);
  const handleTabChange = (value: string) => {
    if (value === "domains") {
      return router.push(routes.dashboardDomains);
    }
  };

  if (!user) {
    return <LoadingState />;
  }

  if (!user.publicKey) {
    redirect(routes.dashboard);
  }

  return (
    <Tabs value="overview" onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="domains">Domains</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="py-10" tabIndex={-1}>
        <OverviewContent />
      </TabsContent>
    </Tabs>
  );
}
