import { particles } from "../../data/particles";

export default function FloatingParticles({ styles }) {

    return (
        <div className={styles.particles}>
            {particles.map((particle, index) => (
                <span
                    key={index}
                    className={styles.particle}
                    style={{
                        top: `${particle.y}%`,
                        left: `${particle.x}%`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                        opacity: particle.opacity
                    }}
                >
                    {particle.text}
                </span>
            ))}
        </div>
    );
}