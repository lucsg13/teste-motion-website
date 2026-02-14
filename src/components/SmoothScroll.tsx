"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.2,           // Smoothness (0-1, lower = smoother but slower)
                duration: 1.2,       // Animation duration
                smoothWheel: true,   // Enable smooth wheel scrolling
                touchMultiplier: 2,  // Touch scroll speed
            }}
        >
            {children}
        </ReactLenis>
    );
}
