import { createContext, useContext, useEffect, useRef, useState } from "react";

const MotionContext = createContext(null);

export function MotionProvider({ children }) {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const scrollRef = useRef(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {

        const handleMouseMove = (e) => {

            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;

            setMouse({ x, y });

        };

        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };

        const updateScroll = () => {
            setScrollY(scrollRef.current);
            requestAnimationFrame(updateScroll);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        requestAnimationFrame(updateScroll);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <MotionContext.Provider value={{ mouse, scrollY }}>
            {children}
        </MotionContext.Provider>
    );
}

export function useMotion() {
    return useContext(MotionContext);
}