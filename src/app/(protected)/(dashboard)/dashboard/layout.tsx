import { DashboardLayoutSlot } from "@/components/dashboard/layout-slot";
import { DashboardNavigation } from "@/components/layouts/dashboard-nav";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col gap-5 bg-gray-50 dark:bg-slate-900">
      <DashboardNavigation />
      <DashboardLayoutSlot>{children}</DashboardLayoutSlot>
    </main>
  );
}
