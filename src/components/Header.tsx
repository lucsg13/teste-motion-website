"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(true);
    const lenis = useLenis();
    const { t, language, setLanguage } = useLanguage();

    const navItems = [
        { name: t("nav.home"), href: "#", key: "nav.home" },
        { name: t("nav.about"), href: "#about", key: "nav.about" },
        { name: t("nav.projects"), href: "#work", key: "nav.projects" },
        { name: t("nav.contact"), href: "#contact", key: "nav.contact" },
    ];

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > window.innerHeight) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    });

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        if (href === "#") {
            lenis?.scrollTo(0, { duration: 1.0 });
            return;
        }

        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);

        if (elem) {
            lenis?.scrollTo(elem, { offset: -80, duration: 1.0 });
        }
    };

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
            <nav aria-label="Navegação principal" className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg">
                {navItems.map((item, index) => (
                    <a
                        key={item.key}
                        href={item.href}
                        aria-label={`Ir para ${item.name}`}
                        onClick={(e) => handleScroll(e, item.href)}
                        className={`
              relative px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap
              ${index === 0 ? "hidden md:block text-white bg-white/10" : "text-white/60 hover:text-white hover:bg-white/5"}
            `}
                    >
                        {item.name}
                    </a>
                ))}

                <div className="w-px h-4 bg-white/10 mx-1 md:mx-2" aria-hidden="true" />

                <a
                    href="mailto:contato@soares.dev"
                    aria-label="Entre em contato por e-mail"
                    className="px-4 py-2 md:px-5 rounded-full bg-white text-black text-xs md:text-sm font-semibold hover:bg-gray-200 transition-colors mr-0 md:mr-1 whitespace-nowrap"
                >
                    <span className="hidden md:inline">{t("nav.talk")}</span>
                    <span className="md:hidden">{t("nav.talk.mobile")}</span>
                </a>

                <div className="w-px h-4 bg-white/10 mx-0 md:mx-1" aria-hidden="true" />

                <button
                    onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                    aria-label="Alternar idioma"
                    className="px-2 py-2 rounded-full text-xs md:text-sm font-semibold text-white/60 hover:text-white transition-colors uppercase"
                >
                    {language === "pt" ? "EN" : "PT"}
                </button>
            </nav>
        </motion.header>
    );
}
