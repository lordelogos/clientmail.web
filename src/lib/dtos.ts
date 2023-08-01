export type Fn<T = unknown> = (...args: unknown[]) => T;

export type ModalActions = {
  visible: boolean;
  open: Fn;
  close: () => Promise<void>;
  toggle: Fn;
};

export type Environment = "production" | "development";

export type ApiResponse<T = Record<string, unknown>> = {
  message: string;
  data: T;
};

export type KeyGenerationFormOptions = {
  apiKey: string;
  trustedDomains: string[];
};
