import { Press_Start_2P } from "next/font/google";
import styles from "./about.module.css";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });
export default function AboutPage() {
  return <section className={styles.section}>
    <p className={`${styles.eyebrow} ${pixelFont.className}`}>ABOUT</p>
    <h1 className={`${styles.title} ${pixelFont.className}`}>About</h1>
    <p className={styles.description}>Learn more about this project and its creator.</p>
  </section>;
}
