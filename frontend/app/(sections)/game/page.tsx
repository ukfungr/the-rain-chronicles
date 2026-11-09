import { Press_Start_2P } from "next/font/google";
import styles from "./game.module.css";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });
export default function GamePage() {
  return <section className={styles.section}>
    <p className={`${styles.eyebrow} ${pixelFont.className}`}>GAME</p>
    <h1 className={`${styles.title} ${pixelFont.className}`}>Game</h1>
    <p className={styles.description}>Explore the game, its mechanics, and its experiences.</p>
  </section>;
}
