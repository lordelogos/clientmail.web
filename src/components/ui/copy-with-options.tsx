"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, CheckCheck } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { toast } from "sonner";

export function PackageInstallCopy({ packageName }: { packageName: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = (packageManager: "npm" | "yarn" | "pnpm") => {
    const copyText =
      packageManager === "npm"
        ? `npm install ${packageName}`
        : packageManager === "yarn"
        ? `yarn add ${packageName}`
        : `pnpm add ${packageName}`;
    copyTextToClipboard(copyText)
      .then(() => {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          {isCopied ? (
            <CheckCheck className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24" align="end">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleCopyClick("pnpm")}
        >
          Pnpm
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleCopyClick("yarn")}
        >
          Yarn
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleCopyClick("npm")}
        >
          Npm
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
