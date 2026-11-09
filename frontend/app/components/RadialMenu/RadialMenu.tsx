"use client";

import { type KeyboardEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Press_Start_2P } from "next/font/google";
import styles from "./RadialMenu.module.css";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });
type SectionId = "story" | "game" | "world" | "about";

export default function RadialMenu() {
  const router = useRouter();
  const navigate = (section: SectionId) => router.push(`/${section}`);
  const handleSectionKeyDown = (event: KeyboardEvent<SVGGElement>, section: SectionId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigate(section);
    }
  };
  return (
        <section className={styles.branchArea} aria-label="Universe menu">
          <div className={styles.branchComposition}>
            <div className={styles.rain}>
              <Image
                src="/landing/rain-face.png"
                alt="Rain"
                width={256}
                height={256}
                priority
                className={styles.rainImage}
              />
            </div>

            <svg
              className={styles.branches}
              viewBox="0 0 900 700"
              preserveAspectRatio="xMidYMid meet"
              role="group"
              aria-label="Universe navigation"
            >
              <g className={styles.circleBoot}>
              <g className={styles.circleSegments}>
                <circle
                    cx="450"
                    cy="350"
                    r="165"
                    className={styles.circleSegment}
                    pathLength="100"
                    strokeDasharray="12 88"
                    strokeDashoffset="0"
                />

                <circle
                    cx="450"
                    cy="350"
                    r="165"
                    className={styles.circleSegment}
                    pathLength="100"
                    strokeDasharray="18 82"
                    strokeDashoffset="-30"
                />

                <circle
                    cx="450"
                    cy="350"
                    r="165"
                    className={styles.circleSegment}
                    pathLength="100"
                    strokeDasharray="10 90"
                    strokeDashoffset="-70"
                />
              </g>
              {/* Outer lens segments counter-rotate during each focus adjustment. */}
              <g className={styles.circleSegmentsReverse}>
                <circle cx="450" cy="350" r="185" className={styles.circleSegmentOuter}
                  pathLength="100" strokeDasharray="20 80" strokeDashoffset="-16" />
                <circle cx="450" cy="350" r="185" className={styles.circleSegmentOuter}
                  pathLength="100" strokeDasharray="20 80" strokeDashoffset="-53" />
                <circle cx="450" cy="350" r="185" className={styles.circleSegmentOuter}
                  pathLength="100" strokeDasharray="20 80" strokeDashoffset="-86" />
              </g>
              </g>
              {/* STORY: starts high on Rain's left side and reaches up-left. */}
              <g
                className={`${styles.branchGroup} ${
                  ""
                }`}
                role="button"
                tabIndex={0}
                aria-label="Story"
                
                onClick={() => navigate("story")}
                onKeyDown={(event) => handleSectionKeyDown(event, "story")}
              >
                <path className={styles.connector} pathLength={100} d="M 305 235 L 265 155 L 220 105" />
                <rect className={styles.labelHitArea} x="77" y="81" width="130" height="54" />
                <path
                  className={styles.labelFrame}
                  transform="translate(137 108)"
                  d="M -60 -3 V -17 L -50 -27 H 60 M 70 12 V 19 L 62 27 H 25"
                />
                <text
                  className={`${styles.branchLabel} ${pixelFont.className}`}
                  x="137"
                  y="108"
                >
                  STORY
                </text>
              </g>

              {/* GAME: placed farther clockwise, with an offset connector origin. */}
              <g
                className={`${styles.branchGroup} ${
                  ""
                }`}
                role="button"
                tabIndex={0}
                aria-label="Game"
                transform="translate(0 65)"
                
                onClick={() => navigate("game")}
                onKeyDown={(event) => handleSectionKeyDown(event, "game")}
              >
                <path className={styles.connector} pathLength={100} d="M 615 210 L 650 175 L 690 130" />
                <rect className={styles.labelHitArea} x="689" y="105" width="130" height="54" />
                <path
                  className={styles.labelFrame}
                  transform="translate(749 132)"
                  d="M -60 -3 V -17 L -50 -27 H 60 M 70 12 V 19 L 62 27 H 25"
                />
                <text
                  className={`${styles.branchLabel} ${pixelFont.className}`}
                  x="749"
                  y="132"
                >
                  GAME
                </text>
              </g>

              {/* WORLD: starts lower-right and reaches farther down-right. */}
              <g
                className={`${styles.branchGroup} ${
                  ""
                }`}
                role="button"
                tabIndex={0}
                aria-label="World"
                
                onClick={() => navigate("world")}
                onKeyDown={(event) => handleSectionKeyDown(event, "world")}
              >
                <path className={styles.connector} pathLength={100} d="M 605 490 L 655 525 L 710 555" />
                <rect className={styles.labelHitArea} x="716" y="530" width="130" height="54" />
                <path
                  className={styles.labelFrame}
                  transform="translate(776 557)"
                  d="M -60 -3 V -17 L -50 -27 H 60 M 70 12 V 19 L 62 27 H 25"
                />
                <text
                  className={`${styles.branchLabel} ${pixelFont.className}`}
                  x="776"
                  y="557"
                >
                  WORLD
                </text>
              </g>

              {/* ABOUT: raised on the left to avoid four evenly spaced corners. */}
              <g
                className={`${styles.branchGroup} ${
                  ""
                }`}
                role="button"
                tabIndex={0}
                aria-label="About"
                transform="translate(0 -55)"
                
                onClick={() => navigate("about")}
                onKeyDown={(event) => handleSectionKeyDown(event, "about")}
              >
                <path className={styles.connector} pathLength={100} d="M 305 550 L 260 590 L 225 610" />
                <rect className={styles.labelHitArea} x="62" y="585" width="130" height="54" />
                <path
                  className={styles.labelFrame}
                  transform="translate(122 612)"
                  d="M -60 -3 V -17 L -50 -27 H 60 M 70 12 V 19 L 62 27 H 25"
                />
                <text
                  className={`${styles.branchLabel} ${pixelFont.className}`}
                  x="122"
                  y="612"
                >
                  ABOUT
                </text>
              </g>
            </svg>
          </div>
        </section>
  );
}
