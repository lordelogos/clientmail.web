"use client";

import { Globe, Link, Trash } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useContext } from "react";
import { UserContext } from "@/context/user";
import { updateTrustedDomains } from "@/lib/endpoint";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function DomainList() {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  const { mutate } = useMutation(updateTrustedDomains, {
    onMutate: () => {},
    onSuccess: (res) => {
      if (!user) return;
      toast.success("Domain deleted successfully.");
      dispatch({
        type: "SET_USER",
        payload: { ...user, trustedDomains: res.data.data },
      });
    },
    onError: () => {
      toast.success("Something went wrong, try again.");
    },
    onSettled: () => {},
  });

  const handleDelete = (name: string) => {
    if (!user) return;
    const updatedDomains = user.trustedDomains.filter((o) => o !== name);
    mutate(updatedDomains);
  };

  if (!user) return null;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Trusted domains</CardTitle>
        <CardDescription>
          These domains are allowed to use this service in production
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!user.trustedDomains.length ? (
          <div className="flex-1 w-full flex flex-col gap-3 items-center justify-center py-5">
            <Globe className="w-10 h-10" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Your trusted domains list is empty
            </p>
          </div>
        ) : (
          user.trustedDomains.map((o, i) => (
            <DomainListItem name={o} key={i} deleteFn={() => handleDelete(o)} />
          ))
        )}
      </CardContent>
    </Card>
  );
}

function DomainListItem({
  name,
  deleteFn,
}: {
  name: string;
  deleteFn: () => void;
}) {
  return (
    <div className="flex items-center justify-between py-2 rounded-m group">
      <div className="flex items-center gap-2">
        <Link className="w-[14px] h-[14px]" />
        <p className="text-sm font-medium">{name}</p>
      </div>
      <Button
        size={"icon"}
        variant={"ghost"}
        className="sm:text-transparent group-hover:text-slate-950 dark:group-hover:text-slate-50"
        onClick={deleteFn}
      >
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
}
