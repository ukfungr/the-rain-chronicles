"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Press_Start_2P } from "next/font/google";
import styles from "./VerticalMenu.module.css";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });
const sections = [
  { id: "story", label: "STORY", href: "/story" },
  { id: "game", label: "GAME", href: "/game" },
  { id: "world", label: "WORLD", href: "/world" },
  { id: "about", label: "ABOUT", href: "/about" },
] as const;

export default function VerticalMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  return (
    <aside className={`${styles.verticalMenu} ${collapsed ? styles.collapsed : ""}`} aria-label="Universe sections">
      <div className={styles.sidebarWatermark} aria-hidden="true">
        <Image src="/landing/rain-face.png" alt="" width={512} height={512} className={styles.watermarkImage} />
      </div>
      <div className={styles.sidebarHeader}>
        <button type="button" className={`${styles.sidebarToggle} ${pixelFont.className}`}
          onClick={() => setCollapsed(value => !value)}
          aria-label={collapsed ? "Expand menu" : "Collapse menu"}
          aria-expanded={!collapsed} title={collapsed ? "Expand menu" : "Collapse menu"}>
          {collapsed ? "»" : "«"}
        </button>
      </div>
      <nav className={styles.sidebarNavigation} aria-label="Section navigation">
        {sections.map((section, index) => (
          <Link key={section.id} href={section.href}
            className={`${styles.sidebarItem} ${pathname === section.href ? styles.sidebarItemActive : ""} ${pixelFont.className}`}
            aria-current={pathname === section.href ? "page" : undefined} title={section.label}>
            <span className={styles.sidebarItemIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <span className={styles.sidebarItemText}>{section.label}</span>
          </Link>
        ))}
      </nav>
      <Link href="/universe" className={`${styles.sidebarBack} ${pixelFont.className}`} title="Back to universe" aria-label="Back to universe">
        <span aria-hidden="true">↩</span><span className={styles.sidebarItemText}>BACK</span>
      </Link>
    </aside>
  );
}
