import { DashboardNavigation } from "@/components/layouts/dashboard-nav";
import { DashboardTabViewer } from "@/components/layouts/dashboard-tab-viewer";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <main className="flex min-h-screen flex-col gap-5 bg-gray-50 dark:bg-slate-900">
      <DashboardNavigation />
      <div className="flex-1 container flex flex-col gap-5 py-5">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex-1">
          <DashboardTabViewer />
        </div>
      </div>
    </main>
  );
}
