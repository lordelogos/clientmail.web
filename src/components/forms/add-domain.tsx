"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { FormEventHandler, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addTrustedDomains } from "@/lib/endpoint";
import { UserContext } from "@/context/user";
import { toast } from "sonner";
import { isValidDomain } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";

export function AddDomainForm() {
  const { getToken } = useAuth();
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);
  const [domains, setDomains] = useState("");
  const [activity, setActivity] = useState({ addDomain: false });

  const { mutate } = useMutation(addTrustedDomains, {
    onMutate: () => {
      setActivity({ addDomain: true });
    },
    onSuccess: (res) => {
      if (!user) return;
      toast.success("Trusted domains updated successfully.");
      dispatch({
        type: "SET_USER",
        payload: { ...user, trustedDomains: res.data.data },
      });
      setDomains("");
    },
    onError: () => {
      toast.success("Something went wrong, try again.");
    },
    onSettled: () => {
      setActivity({ addDomain: false });
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!domains.length) return;

    const domainsArr = domains.split(",").map((o) => o.trim());

    try {
      const token = (await getToken({ template: "client-mail" })) ?? "";
      domainsArr.map((o) => {
        if (!isValidDomain(o)) {
          throw new Error(`${o} is not a valid domain name`);
        }
      });
      mutate({ domains: domainsArr, token });
    } catch (err) {
      toast.error((err as { message: string }).message);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add a domain</CardTitle>
        <CardDescription>
          Please provide the domains from where your requests will be
          originating.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <Label htmlFor="domain-name" className="flex items-center gap-2">
            Domain name(s)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  Use a Comma (,) to separate multiple domain names
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <div className="flex flex-col gap-4">
            <Input
              id="domain-name"
              placeholder="e.g. example.com, abc.com"
              value={domains}
              onChange={(e) => setDomains(e.target.value)}
            />
            <Button
              variant={"default"}
              className="w-full"
              disabled={activity.addDomain}
            >
              Add Domain
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
