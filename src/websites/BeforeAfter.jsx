import styles from "./BeforeAfter.module.css";

/**
 * Reusable before/after pair with labelled placeholder slots.
 *
 * Pass `before` and `after` (usually images) to fill the slots.
 *
 * TODO: Replace the empty slots with real before-and-after screenshots
 * after a client has given permission to show their site. Do not invent
 * client names, testimonials, or results to fill this in.
 */
function Slot({ label, slotId, slotLabel, content }) {
  const filled = content != null;

  return (
    <div className={styles.slot}>
      <p className={styles.badge}>{label}</p>
      <div
        className={filled ? styles.media : styles.placeholder}
        data-slot={slotId}
      >
        {filled ? (
          content
        ) : (
          <p className={styles.placeholderText}>
            <span className={styles.slotName}>{slotLabel}</span>
            Photo placeholder
          </p>
        )}
      </div>
    </div>
  );
}

function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeSlotLabel = "Before slot",
  afterSlotLabel = "After slot",
  before,
  after,
  caption = "Before and after photos of a real local site will go here when a client says I can show them.",
}) {
  return (
    <figure className={styles.figure}>
      <div className={styles.pair}>
        <Slot
          label={beforeLabel}
          slotId="before"
          slotLabel={beforeSlotLabel}
          content={before}
        />
        <Slot
          label={afterLabel}
          slotId="after"
          slotLabel={afterSlotLabel}
          content={after}
        />
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}

export default BeforeAfter;
