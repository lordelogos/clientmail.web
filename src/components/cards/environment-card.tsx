import { BaseCard } from "./base-card";
import { Switch } from "../ui/switch";
import { Radio } from "lucide-react";
import { UserContext } from "@/context/user";
import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateUserEnvironment } from "@/lib/endpoint";
import { toast } from "sonner";

export function EnvironmentCard() {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  const [activity, setActivity] = useState({ updating: false });
  const [production, setProduction] = useState(
    user?.environment === "production" ?? false
  );

  const { mutate } = useMutation(updateUserEnvironment, {
    onMutate: () => {
      setActivity({ updating: true });
    },
    onSuccess: (data, environment) => {
      if (!user) return;

      dispatch({ type: "SET_USER", payload: { ...user, environment } });
      toast.success("Environment updated successfully.");
      setProduction(environment === "production");
    },
    onError: () => {
      toast.error("Error updating environment, try again.");
    },
    onSettled: () => {
      setActivity({ updating: false });
    },
  });

  const handleChange = async (checked: boolean) => {
    mutate(checked ? "production" : "development");
  };

  return (
    <BaseCard fluid name="Environment" icon={<Radio className="w-6 h-6" />}>
      <div className="flex items-center gap-5 justify-between">
        <div>
          <p className="font-medium">Production</p>
          <p className="text-xs text-slate-700 dark:text-slate-400">
            Production environments have all security measures in place
          </p>
        </div>
        <Switch
          checked={production}
          onCheckedChange={handleChange}
          disabled={activity.updating}
        />
      </div>
    </BaseCard>
  );
}
