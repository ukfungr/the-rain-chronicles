import { Press_Start_2P } from "next/font/google";
import styles from "./story.module.css";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });
export default function StoryPage() {
  return <section className={styles.section}>
    <p className={`${styles.eyebrow} ${pixelFont.className}`}>STORY</p>
    <h1 className={`${styles.title} ${pixelFont.className}`}>Story</h1>
    <p className={styles.description}>Discover Rain's story and the journey behind this universe.</p>
  </section>;
}
