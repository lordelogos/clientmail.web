import { cn } from "@/lib/utils";
import { AlertDialog, AlertDialogContent } from "./alert-dialog";
import { FC, MouseEventHandler, ReactNode } from "react";
import { Button } from "./button";
import { useMediaQuery } from "@/lib/hooks";
import { Drawer } from "vaul";

type DialogAction = {
  name: string;
  isDestructive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
};

interface BaseDialogProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  children: ReactNode;
  title?: string;
  description?: ReactNode;
  classNames?: string;
}

const DialogHeading: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col space-y-2 text-center sm:text-left">
      {children}
    </div>
  );
};

const DialogTitle: FC<{ title: string }> = ({ title }) => {
  return <h3 className="text-lg font-semibold">{title}</h3>;
};

const DialogDescription: FC<{ description: ReactNode }> = ({ description }) => {
  return (
    <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
  );
};

export const DialogActions: FC<{ actions: DialogAction[] }> = ({ actions }) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row sm:justify-end sm:space-x-2"
      )}
    >
      {actions.map((o, i) => (
        <Button
          key={i}
          onClick={o.onClick}
          variant={o.isDestructive ? "destructive" : "outline"}
          disabled={o.disabled}
        >
          {o.name}
        </Button>
      ))}
    </div>
  );
};

export const BaseDialog: FC<BaseDialogProps> = ({
  isVisible,
  toggleVisibility,
  children,
  title,
  description,
  classNames,
}) => {
  const { isMobile } = { isMobile: false }; // useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root open={isVisible} onOpenChange={toggleVisibility}>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur" />
        <Drawer.Portal>
          <Drawer.Content
            className={cn(
              "fixed bottom-0 left-0 right-0 z-50 mt-24 pb-5 rounded-t-[10px] border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950",
              classNames
            )}
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
            </div>
            <div className="p-4 flex flex-col gap-4">
              {(title || description) && (
                <DialogHeading>
                  {title && <DialogTitle title={title} />}
                  {description && (
                    <DialogDescription description={description} />
                  )}
                </DialogHeading>
              )}
              {children}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  } else {
    return (
      <AlertDialog open={isVisible} onOpenChange={toggleVisibility}>
        <AlertDialogContent>
          {(title || description) && (
            <DialogHeading>
              {title && <DialogTitle title={title} />}
              {description && <DialogDescription description={description} />}
            </DialogHeading>
          )}
          {children}
        </AlertDialogContent>
      </AlertDialog>
    );
  }
};
