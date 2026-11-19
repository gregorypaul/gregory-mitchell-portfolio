import { useMotion } from "../../motion/useMotion";
import { useEffect, useRef, useState } from "react";

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
    const [translateY, setTranslateY] = useState(0);

    const rotateX = mouse ? mousePos.y * -strength : 0;
    const rotateY = mouse ? mousePos.x * strength : 0;

    useEffect(() => {
        if (!scroll) {
            return undefined;
        }

        let frame = 0;

        const update = () => {
            const node = layerRef.current;
            if (!node) {
                return;
            }

            const rect = node.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            const next = (elementCenter - viewportCenter) * speed;

            setTranslateY((current) => (Math.abs(current - next) < 0.5 ? current : next));
        };

        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [scroll, speed]);

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