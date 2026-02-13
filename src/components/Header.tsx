"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#work" },
    { name: "Contato", href: "#contact" },
];

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show header if scrolled past 100vh (hero section)
        if (latest > window.innerHeight) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -20, opacity: 0 },
            }}
            initial="hidden"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-fit"
        >
            <nav className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg">
                {navItems.map((item, index) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`
              relative px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap
              ${index === 0 ? "hidden md:block text-white bg-white/10" : "text-white/60 hover:text-white hover:bg-white/5"}
            `}
                    >
                        {item.name}
                    </a>
                ))}

                <div className="w-px h-4 bg-white/10 mx-1 md:mx-2" />

                <a
                    href="mailto:contato@soares.dev"
                    className="px-4 py-2 md:px-5 rounded-full bg-white text-black text-xs md:text-sm font-semibold hover:bg-gray-200 transition-colors mr-0 md:mr-1 whitespace-nowrap"
                >
                    <span className="hidden md:inline">Vamos conversar</span>
                    <span className="md:hidden">Falar</span>
                </a>
            </nav>
        </motion.header>
    );
}
