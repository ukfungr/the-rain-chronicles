import type { ReactNode } from "react";
import VerticalMenu from "../components/VerticalMenu/VerticalMenu";
import styles from "./layout.module.css";

export default function SectionsLayout({ children }: { children: ReactNode }) {
  return <div className={styles.shell}><VerticalMenu /><main className={styles.content}>{children}</main></div>;
}
