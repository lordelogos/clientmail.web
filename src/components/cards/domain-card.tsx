import { Globe } from "lucide-react";
import { BaseCard } from "./base-card";

export function DomainCard() {
  return (
    <BaseCard name="Trusted Domains" fluid icon={<Globe className="w-6 h-6" />}>
      <div>
        <p className="text-xl font-medium">7</p>
        <p className="text-xs text-slate-700 dark:text-slate-400">
          Number of trusted domains for your email requests.
        </p>
      </div>
    </BaseCard>
  );
}
