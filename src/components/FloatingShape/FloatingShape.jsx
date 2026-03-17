import styles from "./FloatingShape.module.css"

function FloatingShape({
  shape,
  size = 100,
  color = "#7c6cff",
  top,
  left,
  right,
  bottom,
  depth = "mid",
  offsetY = 0,
  speed = 0.1
}) {

  const shapeStyle = {
    width: size,
    height: size,
    background: color,
    top,
    left,
    right,
    bottom,
    transform: `translateY(${offsetY * speed}px)`
  }

  return (
    <div
      className={`styles${styles.shape} ${styles[shape]} ${styles[depth]}`}
      style={shapeStyle}
    />
  )
}

export default FloatingShape