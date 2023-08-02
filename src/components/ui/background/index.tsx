import { ReactNode } from "react";
import styles from "./background.module.css";

export function Background({ children }: { children: ReactNode }) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
