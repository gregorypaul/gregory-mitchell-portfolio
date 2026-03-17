import styles from "./DecorShape.module.css"

function DecorShape({
  type = "circle",
  text,
  size = 40,
  color = "rgba(255,255,255,0.25)",
  top,
  left,
  right,
  bottom,
  depth = "near",
  offsetY = 0,
  speed = 0.1,
}) {
  const baseStyle = {
    top,
    left,
    right,
    bottom,
    color,
    transform: `translateY(${offsetY * speed}px)`,
  }

  if (type === "code") {
    return (
      <span
        className={`${styles.codeParticle} ${styles[depth] || ""}`}
        style={{
          ...baseStyle,
          fontSize: `${size}px`,
        }}
      >
        {text}
      </span>
    )
  }

  return (
    <div
      className={`${styles.decor} ${styles[type] || ""} ${styles[depth] || ""}`}
      style={{
        ...baseStyle,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
    />
  )
}

export default DecorShape