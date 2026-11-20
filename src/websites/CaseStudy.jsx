import { useId, useState } from "react";
import styles from "./CaseStudy.module.css";
import { caseStudies } from "./content.js";
import pexBefore from "../assets/websites/pex-before.webp";
import pexBeforeSm from "../assets/websites/pex-before-800.webp";
import pexAfter from "../assets/websites/pex-after.webp";
import pexAfterSm from "../assets/websites/pex-after-800.webp";
import speakerBefore from "../assets/websites/speaker-before.webp";
import speakerBeforeSm from "../assets/websites/speaker-before-800.webp";
import speakerAfter from "../assets/websites/speaker-after.webp";
import speakerAfterSm from "../assets/websites/speaker-after-800.webp";

const IMAGES = {
  pex: {
    before: pexBefore,
    beforeSm: pexBeforeSm,
    beforeW: 1400,
    beforeSmW: 800,
    after: pexAfter,
    afterSm: pexAfterSm,
    afterW: 1400,
    height: 700,
  },
  speaker: {
    before: speakerBefore,
    beforeSm: speakerBeforeSm,
    beforeW: 827,
    beforeSmW: 500,
    after: speakerAfter,
    afterSm: speakerAfterSm,
    afterW: 1600,
    height: 1018,
  },
};

function Compare({ study }) {
  const images = IMAGES[study.id];
  const [pos, setPos] = useState(58);
  const labelId = useId();

  return (
    <figure className={styles.frame}>
      <div className={styles.chrome} aria-hidden="true">
        <span />
        <span />
        <span />
        <p className={styles.chromeUrl}>{study.caption}</p>
      </div>
      <div className={styles.stage}>
        <img
          className={styles.shot}
          src={images.after}
          srcSet={`${images.afterSm} 800w, ${images.after} ${images.afterW}w`}
          sizes="(min-width: 900px) 960px, 92vw"
          alt={study.afterAlt}
          width={images.afterW}
          height={images.height}
          decoding="async"
        />
        <div className={styles.clip} style={{ width: `${pos}%` }}>
          <img
            className={styles.shot}
            src={images.before}
            srcSet={`${images.beforeSm} ${images.beforeSmW}w, ${images.before} ${images.beforeW}w`}
            sizes="(min-width: 900px) 960px, 92vw"
            alt=""
            width={images.beforeW}
            height={images.height}
            decoding="async"
          />
        </div>
        <input
          className={styles.range}
          id={labelId}
          type="range"
          min="2"
          max="98"
          value={pos}
          aria-label={`Compare before and after for ${study.caption}`}
          aria-valuetext={`${pos}% before, ${100 - pos}% after`}
          onChange={(event) => setPos(Number(event.target.value))}
        />
        <div className={styles.handle} style={{ left: `${pos}%` }} aria-hidden="true">
          <span>Before</span>
          <span>After</span>
        </div>
      </div>
      <figcaption className={styles.caption}>{study.caption}</figcaption>
    </figure>
  );
}

function CaseStudy() {
  const [index, setIndex] = useState(0);
  const study = caseStudies[index];

  function onTabsKey(event) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % caseStudies.length
        : (index - 1 + caseStudies.length) % caseStudies.length;
    setIndex(next);
    const tabs = event.currentTarget.querySelectorAll('[role="tab"]');
    tabs[next]?.focus();
  }

  return (
    <section className="section" id="sample" aria-labelledby="sample-title">
      <div className="wrap">
        <div className="sectionHead">
          <h2 id="sample-title">Work from live products</h2>
          <p className="sectionIntro">
            Drag the handle to see what changed. These are screens I redesigned at IQPC.
          </p>
        </div>
        <div className={styles.tabs} role="tablist" aria-label="Case studies" onKeyDown={onTabsKey}>
          {caseStudies.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`case-tab-${item.id}`}
              aria-selected={itemIndex === index}
              aria-controls="case-panel"
              tabIndex={itemIndex === index ? 0 : -1}
              className={itemIndex === index ? styles.tabOn : styles.tab}
              onClick={() => setIndex(itemIndex)}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div role="tabpanel" id="case-panel" aria-labelledby={`case-tab-${study.id}`}>
          <Compare key={study.id} study={study} />
          <ul className={styles.outcomes}>
            {study.outcomes.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
