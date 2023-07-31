import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import { BaseDialog, DialogActions } from "../ui/base-dialogs";
import { useModalUtils } from "@/lib/hooks";

export function RevokeKeyDialog() {
  const modal = useModalUtils();
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
            { name: "Cancel", onClick: modal.close },
            { name: "Continue", isDestructive: true },
          ]}
        />
      </BaseDialog>
    </>
  );
}
