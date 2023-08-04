"use client";

import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import { BaseDialog, DialogActions } from "../ui/base-dialogs";
import { useModalUtils } from "@/lib/hooks";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user";
import { useMutation } from "@tanstack/react-query";
import { revokeUserKeys } from "@/lib/endpoint";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";

export function RevokeKeyDialog() {
  const { getToken } = useAuth();
  const modal = useModalUtils();
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);
  const [activity, setActivity] = useState({ revoke: false });

  const { mutateAsync } = useMutation(revokeUserKeys, {
    onMutate: () => {
      setActivity({ revoke: true });
    },
    onSuccess: () => {
      if (!user) return;
      dispatch({ type: "SET_USER", payload: { ...user, publicKey: null } });
    },
    onError: () => {},
    onSettled: () => {
      setActivity({ revoke: false });
    },
  });

  const handleRevoke = async () => {
    const token = (await getToken({ template: "client-mail" })) ?? "";
    toast.promise(mutateAsync({ token }), {
      loading: "Processing request",
      success: "Request successful, all api keys have been revoked",
      error: "Something went wrong, try again.",
    });
  };

  return (
    <>
      <Button
        variant={"destructive"}
        size={"lg"}
        className="text-lg"
        onClick={modal.toggle}
      >
        <span>Revoke key access</span>
        <KeyRound className="w-[18px] h-[18px] ml-2" />
      </Button>
      <BaseDialog
        isVisible={modal.visible}
        toggleVisibility={modal.toggle}
        title="Are you absolutely sure?"
        description="This will permanently delete your keys from our servers and revoke
    all api access. This action cannot be undone."
      >
        <DialogActions
          actions={[
            {
              name: "Cancel",
              onClick: (e) => {
                e.preventDefault();
                modal.close();
              },
            },
            {
              name: "Continue",
              isDestructive: true,
              onClick: handleRevoke,
              disabled: activity.revoke,
            },
          ]}
        />
      </BaseDialog>
    </>
  );
}
