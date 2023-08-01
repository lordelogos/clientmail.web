import { EmailUsage } from "../cards/email-usage";
import { EnvironmentCard } from "../cards/environment-card";
import { PublicKeyCard } from "../cards/public-key";
import { RevokeKeyDialog } from "../dialogs/revoke-key";

export const DashboardOverview = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <EmailUsage />
        <EnvironmentCard />
      </div>
      <h2 className="text-xl font-medium">API Key</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <PublicKeyCard />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <RevokeKeyDialog />
      </div>
      {/* <h2 className="text-xl font-medium">Analytics</h2> */}
    </div>
  );
};
