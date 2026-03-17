import styles from "./Hero.module.css"
import Button from "../Button/Button"
import Container from "../layouts/Container"
import { useEffect, useState, useMemo } from "react"
import DecorShape from "../DecorShape/DecorShape"

function handleClick() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
}

function Hero({ data }) {

  const [offsetY, setOffsetY] = useState(0)
    const particles = useMemo(() => {

  const largeCode = [
    "{ }",
    "< />",
    "useState",
    "const",
    "git"
  ]

  const smallCode = [
    "() =>",
    "[]",
    "&&",
    "npm",
    "let"
  ]

  const largeParticles = Array.from({ length: 6 }).map(() => ({
    text: largeCode[Math.floor(Math.random() * largeCode.length)],
    top: `${10 + Math.random() * 70}%`,
    left: `${10 + Math.random() * 70}%`,
    size: 180 + Math.random() * 120,
    speed: 0.08 + Math.random() * 0.04,
    layer: "large"
  }))

  const smallParticles = Array.from({ length: 12 }).map(() => ({
    text: smallCode[Math.floor(Math.random() * smallCode.length)],
    top: `${10 + Math.random() * 80}%`,
    left: `${10 + Math.random() * 80}%`,
    size: 60 + Math.random() * 40,
    speed: 0.18 + Math.random() * 0.08,
    layer: "small"
  }))

  return [...largeParticles, ...smallParticles]

}, [])

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className={styles.hero}>

      <Container size="xl">
        <div className={styles.content}>
          <h1 className={styles.heroTitle}>{data.name}</h1>
          <p className={styles.heroSubtitle}>{data.title}</p>
          <p style={{marginBottom: '25px'}}>I'm a Senior Front-End Developer and UX/UI Designer with over 10 years of experience delivering scalable, user-focused digital solutions. I’ve led and contributed to projects at an enterprise level, helping teams adopt modern frameworks like React, Next.js, and TypeScript to build high-performing applications.
            With a results-driven mindset, I focus on creating seamless user experiences that bridge design and development. I’m passionate about writing clean, efficient code, mentoring others, and continuously improving workflows through collaboration and innovation.</p>
          <Button
            text="View My Work"
            onClick={handleClick}
          />
        </div>
        
      </Container>
      {/* Parallax Image */}
        <div className={styles.headshotWrapper}>
            <img
                src="/projects/g3.webp"
                alt="Gregory Mitchell"
                className={styles.heroHeadshot}
                style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            />
        </div>
      {particles.map((p, i) => (
        <DecorShape
            key={i}
            type="code"
            text={p.text}
            top={p.top}
            left={p.left}
            size={p.size}
            offsetY={offsetY}
            speed={p.speed}
            layer={p.layer}
        />
        ))}
    </section>
  )
}

export default Hero