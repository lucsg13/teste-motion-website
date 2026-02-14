"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";

const FRAME_COUNT = 100; // 0 to 99

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        const loadImages = async () => {
            const promises = Array.from({ length: FRAME_COUNT }).map((_, i) => {
                return new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    const frameNumber = i.toString().padStart(3, "0");
                    img.src = `/sequence/frame_${frameNumber}_delay-0.05s.webp`;
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                });
            });

            try {
                const loaded = await Promise.all(promises);
                setImages(loaded);
                setIsLoaded(true);
            } catch (error) {
                console.error("Failed to load images", error);
            }
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[Math.round(index)];
        if (!img) return;

        // Responsive Canvas Logic
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const isMobile = window.innerWidth < 768;

        let scale;
        if (isMobile) {
            // For mobile, we prioritize width to prevent extreme zoom on portrait
            // forcing a "contain" style approach or a hybrid
            const scaleWidth = canvas.width / img.width;
            const scaleHeight = canvas.height / img.height;

            // Use the larger dimension but limit the zoom. 
            // If we use strictly MAX, it zooms in huge on portrait.
            // If we use MIN, it fits entirely but leaves bars.
            // Let's try a hybrid: enough to cover width plus a bit extra, but not necessarily full height cover if it cuts too much.
            // Actually, the user asked to "diminuir a imagem para caber". 
            // Simple "contain" logic (Math.min) ensures it fits.
            scale = Math.min(scaleWidth, scaleHeight) * 1.2; // 1.2x to fill a bit more but keep it smaller than full cover

            // Alternative: If portrait (H > W), standard cover (H/imgH) is too big.
            // Let's try to match height if it's acceptable, or width.
            // If I use Math.max, I get huge zoom. 
            // Let's rely on a slightly relaxed cover or contain.
            // Let's try forcing width fit * 1.5 in portrait?

            // Let's go with a cleaner approach: 
            // If mobile, we use a hybrid scale that doesn't zoom as much.
            scale = Math.max(canvas.width / img.width, canvas.height / img.height);

            // Adjust: if the calculated scale results in an image much larger than canvas, reduce it.
            if (scale * img.width > canvas.width * 2) {
                scale = (canvas.width / img.width) * 1.5; // Cap zoom
            }
        } else {
            // Desktop: standard cover
            scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        }

        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (isLoaded) {
            renderFrame(latest);
        }
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) {
                // Re-render current frame on resize to maintain cover
                // We might need to store the last index or get it again, 
                // but for now, just re-triggering via scroll or simple fallback is okay.
                // Actually better to re-render the current generic frame if accessible or just wait for scroll.
                // Let's force a render of the current scroll position frame if possible.
                const current = currentIndex.get();
                renderFrame(current);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, currentIndex]);

    return (
        <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
            <Overlay scrollYProgress={scrollYProgress} />
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-50">
                        Loading...
                    </div>
                )}
                <canvas ref={canvasRef} className="block w-full h-full" />
            </div>
        </div>
    );
}
