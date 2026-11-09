import Image from "next/image";
import styles from "./landing/landing.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.landing}>
      <div className={styles.beam} />

      <Link href="/universe" className={styles.enter}>
        ENTER
      </Link>
    </main>
  );
}
