"use client";

import { NoApiKeyState } from "../empty-states/no-api-key";
import { AddDomainForm } from "../forms/add-domain";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { DomainList } from "./domain-list";
import { DashboardOverview } from "./dashboard-overview";
import { Toaster } from "sonner";

export function DashboardTabViewer() {
  return (
    <>
      <Toaster
        position="bottom-right"
        duration={3000}
        visibleToasts={3}
        richColors
        closeButton
      />
      <Tabs defaultValue="overview" className="">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="domains">Domains</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="py-10">
          {true ? <DashboardOverview /> : <NoApiKeyState />}
        </TabsContent>
        <TabsContent value="domains" className="flex flex-col gap-5 py-10">
          <AddDomainForm />
          <DomainList />
        </TabsContent>
      </Tabs>
    </>
  );
}
