import { CheckCheck, Copy, KeyRound } from "lucide-react";
import { BaseCard } from "./base-card";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export function PublicKeyCard() {
  return (
    <BaseCard fluid name="Public key" icon={<KeyRound className="w-6 h-6" />}>
      <pre className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-1">
        <p className="text-sm">rc_adfashdfaofh121</p>
        <Button size={"icon"} variant={"ghost"}>
          <Copy className="w-4 h-4" />
          {/* <CheckCheck className="w-4 h-4" /> */}
        </Button>
      </pre>
      <HoverCard>
        <HoverCardTrigger>
          <p className="w-max text-sm text-slate-700 dark:text-slate-400 border-b border-dashed">
            Public key usage
          </p>
        </HoverCardTrigger>
        <HoverCardContent align="start">
          This is the public key for use in your client-side applications
        </HoverCardContent>
      </HoverCard>
    </BaseCard>
  );
}
