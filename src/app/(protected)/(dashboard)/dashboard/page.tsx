import { DashboardDefaultLanding } from "@/components/dashboard/default-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLandingPage() {
  return <DashboardDefaultLanding />;
}
