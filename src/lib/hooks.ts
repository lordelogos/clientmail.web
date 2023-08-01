import { useEffect, useState, useCallback, useMemo } from "react";
import { Fn, ModalActions } from "./dtos";

export function useMediaQuery() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop" | null>(
    null
  );
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setDevice("mobile");
      } else if (
        window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches
      ) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    // Initial detection
    checkDevice();

    // Listener for windows resize
    window.addEventListener("resize", checkDevice);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
}

export function sleep(timeInMs = 0) {
  return new Promise((resolve) => setTimeout(resolve, timeInMs));
}

const MODAL_DURATION = 280;

export function useModalUtils(
  initialOpen = false,
  onOpen?: Fn,
  animationDuration = MODAL_DURATION
): ModalActions {
  const [visible, setVisible] = useState(initialOpen);

  const handleOpen = useCallback(() => {
    setVisible(true);
    onOpen?.();
  }, [onOpen]);

  const handleClose = useCallback(async () => {
    setVisible(false);
    await sleep(animationDuration);
    return Promise.resolve();
  }, [animationDuration]);

  const handleToggle = useCallback(() => {
    setVisible((o) => !o);
  }, []);

  const actions: ModalActions = useMemo(
    () => ({
      visible,
      open: handleOpen,
      close: handleClose,
      toggle: handleToggle,
    }),
    [handleClose, handleOpen, handleToggle, visible]
  );

  return actions;
}
