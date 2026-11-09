import { Press_Start_2P } from "next/font/google";
import styles from "./world.module.css";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });
export default function WorldPage() {
  return <section className={styles.section}>
    <p className={`${styles.eyebrow} ${pixelFont.className}`}>WORLD</p>
    <h1 className={`${styles.title} ${pixelFont.className}`}>World</h1>
    <p className={styles.description}>Explore the places, characters, and details of this world.</p>
  </section>;
}
