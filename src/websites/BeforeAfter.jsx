import styles from "./BeforeAfter.module.css";

function Frame({ label, children }) {
  return (
    <div className={styles.slot}>
      <p className={styles.badge}>{label}</p>
      <div className={styles.media}>{children}</div>
    </div>
  );
}

function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  before,
  after,
  caption,
}) {
  return (
    <figure className={styles.figure}>
      <div className={styles.pair}>
        <Frame label={beforeLabel}>{before}</Frame>
        <Frame label={afterLabel}>{after}</Frame>
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}

export default BeforeAfter;
