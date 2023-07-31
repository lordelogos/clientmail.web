import { Radio } from "lucide-react";
import { BaseCard } from "./base-card";
import { Switch } from "../ui/switch";

export function EnvironmentCard() {
  return (
    <BaseCard fluid name="Environment" icon={<Radio className="w-6 h-6" />}>
      <div className="flex items-center gap-5 justify-between">
        <div>
          <p className="font-medium">Production</p>
          <p className="text-xs text-slate-700 dark:text-slate-400">
            Production environments have all security measures in place
          </p>
        </div>
        <Switch />
      </div>
    </BaseCard>
  );
}
