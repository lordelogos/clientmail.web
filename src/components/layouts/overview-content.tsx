import { EmailUsage } from "../cards/email-usage";
import { EnvironmentCard } from "../cards/environment-card";
import { PublicKeyCard } from "../cards/public-key";
import { RevokeKeyDialog } from "../dialogs/revoke-key";
import { UsageCard } from "../cards/usage-card";

export const OverviewContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
        <EmailUsage />
        <EnvironmentCard />
      </div>
      <h2 className="text-xl font-medium">API Key</h2>
      <div className="grid grid-cols-1 gap-5">
        <PublicKeyCard />
        <RevokeKeyDialog />
      </div>
      <h2 className="text-xl font-medium">Usage</h2>
      <div className="grid grid-cols-1 gap-5">
        <UsageCard />
      </div>
    </div>
  );
};
