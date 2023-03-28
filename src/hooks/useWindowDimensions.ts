import { useState, useEffect, useLayoutEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export default function useWindowDimensions() {
    const isSSR = import.meta.env.SSR;
    const [windowDimensions, setWindowDimensions] = useState(
        isSSR ? { width: undefined, height: undefined } : getWindowDimensions()
    );

    useLayoutEffect(() => {
        if (import.meta.env.SSR) return;

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
