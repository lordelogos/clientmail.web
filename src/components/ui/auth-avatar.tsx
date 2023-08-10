"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "./avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useContext } from "react";
import { UserContext } from "@/context/user";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/routes";

export function AuthAvatar() {
  const router = useRouter();
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  const handleLogout = () => {
    dispatch({ type: "DELETE_USER", payload: null });
    router.push(routes.home);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="rounded-full">
          <Avatar className="w-7 h-7 flex items-center justify-center">
            <AvatarImage
              src={`https://avatar.vercel.sh/${user?.name}`}
              alt={user?.name}
            />
            <AvatarFallback>👀</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24" align="end">
        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
