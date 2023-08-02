"use client";

import { CheckCheck, Copy, KeyRound } from "lucide-react";
import { BaseCard } from "./base-card";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user";
import { toast } from "sonner";

export function PublicKeyCard() {
  const {
    state: { user },
  } = useContext(UserContext);

  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(user?.publicKey ?? "")
      .then(() => {
        toast.success("Public key copied to clipboard");
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <BaseCard fluid name="Public key" icon={<KeyRound className="w-6 h-6" />}>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-1">
        <pre className="text-sm max-w-[80%] overflow-ellipsis overflow-hidden">
          {user?.publicKey ?? ""}
        </pre>
        <Button size={"icon"} variant={"ghost"} onClick={handleCopyClick}>
          {isCopied ? (
            <CheckCheck className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <HoverCard>
        <HoverCardTrigger>
          <p className="w-max text-sm text-slate-700 dark:text-slate-400 border-b border-dashed">
            Public key usage
          </p>
        </HoverCardTrigger>
        <HoverCardContent align="start" className="text-sm p-3">
          This is the public key for use in your client-side applications
        </HoverCardContent>
      </HoverCard>
    </BaseCard>
  );
}
