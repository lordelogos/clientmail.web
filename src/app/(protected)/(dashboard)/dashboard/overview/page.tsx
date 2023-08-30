import OverviewPage from "@/components/dashboard/overview-page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "Gain insights into your clientmail API usage, manage API keys, and configure your production environment. Monitor your service's performance and track key metrics effortlessly.",
};

export default function DashboardOverviewPage() {
  return <OverviewPage />;
}
