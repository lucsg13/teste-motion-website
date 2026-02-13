"use client";

import { useTransform, motion, MotionValue } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    const y1 = useTransform(scrollYProgress, [0, 0.25], [50, -50]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 0]);

    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);

    const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 0]);

    return (
        <div
            className="absolute inset-0 pointer-events-none z-10"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
                {/* Section 1 */}
                <motion.div
                    style={{ y: y1, opacity: opacity1 }}
                    className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 text-right"
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
                        Soares
                    </h1>
                    <p className="text-lg md:text-2xl mt-2 md:mt-4 text-blue-500 text-center">
                        Desenvolvedor Web
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ y: y2, opacity: opacity2 }}
                    className="absolute left-6 md:left-20 max-w-[80vw] md:max-w-lg"
                >
                    <h2 className="text-4xl md:text-7xl font-bold leading-tight text-white/90">
                        Eu crio <br />
                        <span className="text-green-600">experiências digitais.</span>
                    </h2>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ y: y3, opacity: opacity3 }}
                    className="absolute right-6 md:right-20 text-right max-w-[80vw] md:max-w-lg"
                >
                    <h2 className="text-4xl md:text-7xl font-bold leading-tight text-white/90">
                        Unindo design <br />
                        & <span className="text-purple-500">engenharia.</span>
                    </h2>
                </motion.div>

                {/* Watermark Cover Bar */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-black/40 backdrop-blur-md z-50" />
            </div>
        </div>
    );
}
