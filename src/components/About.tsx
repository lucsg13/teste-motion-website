"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="relative z-20 bg-[#121212] py-16 md:py-24 px-4 md:px-12 text-white overflow-hidden">
            <div className="max-w-4xl mx-auto">
                {/* Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400">
                        {t("about.title")}
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                        <p>
                            {t("about.p1")}
                        </p>
                        <p>
                            {t("about.p2")}
                        </p>
                        <p>
                            {t("about.p3")}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
