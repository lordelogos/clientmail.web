import DomainsPage from "@/components/dashboard/domain-page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domains",
  description:
    "Manage your clientmail trusted domains with ease. Add new domains to ensure secure communication and delete outdated ones to maintain a clean and secure integration environment.",
};

export default function DashboardDomainsPage() {
  return <DomainsPage />;
}
