"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BaseDialog } from "../ui/base-dialogs";
import { useModalUtils } from "@/lib/hooks";
import { FormEventHandler, useContext, useState } from "react";
import { UserContext } from "@/context/user";
import { useMutation } from "@tanstack/react-query";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { HelpCircle } from "lucide-react";
import { KeyGenerationFormOptions } from "@/lib/dtos";
import { generateApiKeys } from "@/lib/endpoint";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";

export function GenerateKeyDialog() {
  const { getToken } = useAuth();
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);
  const modal = useModalUtils();
  const [activity, setActivity] = useState({ generate: false });
  const [formData, setFormData] = useState<
    Omit<KeyGenerationFormOptions, "trustedDomains"> & {
      trustedDomains: string;
    }
  >({
    apiKey: "",
    trustedDomains: "",
  });

  const { mutateAsync } = useMutation(generateApiKeys, {
    onMutate: () => {
      setActivity({ generate: true });
    },
    onSuccess: (res) => {
      if (!user) {
        return;
      }
      const { publicKey, trustedDomains } = res.data.data;
      dispatch({
        type: "SET_USER",
        payload: { ...user, publicKey, trustedDomains },
      });
    },
    onSettled: () => {
      setActivity({ generate: false });
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const splitDomains =
      formData.trustedDomains === ""
        ? []
        : formData.trustedDomains.split(",").map((o) => o.trim());

    const data: KeyGenerationFormOptions = {
      apiKey: formData.apiKey,
      trustedDomains: splitDomains,
    };

    const token = await getToken({ template: "client-mail" });

    toast.promise(() => mutateAsync({ ...data, token: token ?? "" }), {
      loading: "Processing Request",
      success: (res) => {
        return `Your api key is ${res.data.data.publicKey}`;
      },
      error: "Error processing your request. Try again.",
    });
  };
  return (
    <>
      <Button variant={"default"} onClick={modal.toggle}>
        Connect API Key
      </Button>
      <BaseDialog
        isVisible={modal.visible}
        toggleVisibility={modal.toggle}
        title="Generate keys"
        description="Generate a public key for use in one-click"
        classNames="sm:w-[450px]"
      >
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-5 mb-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email-service">Email service</Label>
              <Select value="resend" disabled>
                <SelectTrigger id="email-service">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" defaultValue={"resend"}>
                  <SelectItem value="resend">Resend</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="api-key">API Key</Label>
              <Input
                id="api-key"
                placeholder="Enter your resend private key."
                required
                value={formData.apiKey}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    apiKey: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="trusted-domains"
                className="flex items-center gap-2"
              >
                Trusted domains
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
              <Input
                id="trusted-domains"
                placeholder="e.g. example.com, abc.com"
                value={formData.trustedDomains}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    trustedDomains: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className=" flex flex-col-reverse gap-3 sm:gap-0 sm:flex-row sm:justify-end sm:space-x-2 justify-between">
            <Button
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                modal.close();
              }}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={activity.generate}>
              Generate key
            </Button>
          </div>
        </form>
      </BaseDialog>
    </>
  );
}
