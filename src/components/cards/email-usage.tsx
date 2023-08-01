"use client";

import { AtSign } from "lucide-react";
import { BaseCard } from "./base-card";
import { useContext } from "react";
import { UserContext } from "@/context/user";

export function EmailUsage() {
  const {
    state: { user },
  } = useContext(UserContext);

  return (
    <BaseCard name="API usage" fluid icon={<AtSign className="w-6 h-6" />}>
      <div>
        <p className="text-2xl font-medium">
          {user?.emailsSentThisMonth}{" "}
          <sub className="text-xs font-normal text-slate-700 dark:text-slate-400">
            / {process.env.NEXT_PUBLIC_EMAIL_API_LIMIT}
          </sub>
        </p>
        <p className="text-xs text-slate-700 dark:text-slate-400">
          Number of api request to send email from your client apps
        </p>
      </div>
    </BaseCard>
  );
}
