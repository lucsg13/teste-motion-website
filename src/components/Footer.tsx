"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="bg-[#0a0a0a] py-12 px-6 border-t border-white/5 text-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                    {t("footer.title")}
                </h2>

                <p className="text-gray-400 max-w-md">
                    {t("footer.desc")}
                </p>

                <a
                    href="mailto:soareswebdev@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors text-lg font-medium"
                >
                    soareswebdev@gmail.com
                </a>

                <div className="flex gap-6 mt-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
                </div>

                <p className="text-xs text-gray-600 mt-8">
                    &copy; {new Date().getFullYear()} Soares. {t("footer.rights")}
                </p>
            </div>
        </footer>
    );
}
