import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function LoadingState() {
  return (
    <div className="flex flex-col">
      <Skeleton className="h-10 p-1 w-44" />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 py-10">
        <Card className={"flex flex-col w-full py-4 px-6 max-w-full"}>
          <div className="flex items-center justify-between w-full mb-5">
            <Skeleton className="h-6 w-20" />
            <div className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded">
              <Skeleton className="w-6 h-6" />
            </div>
          </div>
          <div className="flex items-center gap-5 justify-between">
            <div className="flex flex-col gap-4">
              <Skeleton className="h-6 w-20" />
              <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
            <Skeleton className="w-11 h-6" />
          </div>
        </Card>
        <Card className={"flex flex-col w-full py-4 px-6 max-w-full"}>
          <div className="flex items-center justify-between w-full mb-5">
            <Skeleton className="h-6 w-20" />
            <div className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded">
              <Skeleton className="w-6 h-6" />
            </div>
          </div>
          <div className="flex items-center gap-5 justify-between">
            <div className="flex flex-col gap-4">
              <Skeleton className="h-6 w-20" />
              <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
            <Skeleton className="w-11 h-6" />
          </div>
        </Card>
      </div>
    </div>
  );
}

/**
 *  <BaseCard fluid name="Environment" icon={<Radio className="w-6 h-6" />}>
      <div className="flex items-center gap-5 justify-between">
        <div>
          <p className="font-medium">Production</p>
          <p className="text-xs text-slate-700 dark:text-slate-400">
            Production environments have all security measures in place
          </p>
        </div>
        <Switch />
      </div>
    </BaseCard>
 */
