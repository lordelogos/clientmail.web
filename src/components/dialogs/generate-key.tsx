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

export function GenerateKeyDialog() {
  const modal = useModalUtils();
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
        <form>
          <div className="grid w-full items-center gap-5 mb-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email-service">Email service</Label>
              <Select>
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
              />
            </div>
          </div>
          <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 justify-between">
            <Button>Generate key</Button>
          </div>
        </form>
      </BaseDialog>
    </>
  );
}
