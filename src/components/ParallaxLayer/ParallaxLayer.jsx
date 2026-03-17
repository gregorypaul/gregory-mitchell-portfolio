import { useMotion } from "../../motion/MotionProvider.jsx";
import { useRef } from "react";

export default function ParallaxLayer({
    children,
    mouse = false,
    scroll = false,
    strength = 30,
    speed = 0.3,
    fill = false
}) {

    const { mouse: mousePos } = useMotion();
    const layerRef = useRef(null);

    const rotateX = mouse ? mousePos.y * -strength : 0;
    const rotateY = mouse ? mousePos.x * strength : 0;

    let translateY = 0;

    if (scroll && layerRef.current) {

        const rect = layerRef.current.getBoundingClientRect();

        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;

        const distance = elementCenter - viewportCenter;

        translateY = distance * speed;
    }

    const transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(${translateY}px)
    `;

    const baseStyle = fill
        ? { position: "absolute", inset: 0 }
        : {};

    return (
        <div
            ref={layerRef}
            style={{
                ...baseStyle,
                transform,
                transition: mouse ? "transform 0.15s ease-out" : undefined
            }}
        >
            {children}
        </div>
    );
}