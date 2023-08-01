"use client";

import { AddDomainForm } from "@/components/forms/add-domain";
import { DomainList } from "@/components/layouts/domain-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserContext } from "@/context/user";
import { routes } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function DashboardDomainsPage() {
  const router = useRouter();
  const {
    state: { user },
  } = useContext(UserContext);

  const handleTabChange = (value: string) => {
    if (value === "overview") {
      return router.push(routes.dashboardOverview);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Tabs value="domains" onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="domains">Domains</TabsTrigger>
      </TabsList>
      <TabsContent
        value="domains"
        className="grid grid-cols-1 xl:grid-cols-2 gap-5 py-10"
        tabIndex={-1}
      >
        <AddDomainForm />
        <DomainList />
      </TabsContent>
    </Tabs>
  );
}
