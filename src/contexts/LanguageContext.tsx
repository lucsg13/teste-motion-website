"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.talk": "Vamos conversar",
    "nav.talk.mobile": "Falar",
    // Overlay
    "overlay.role": "Desenvolvedor Web",
    "overlay.create": "Eu crio",
    "overlay.experiences": "experiências digitais.",
    "overlay.uniting": "Unindo design",
    "overlay.engineering": "& engenharia.",
    // Projects
    "projects.title": "Trabalhos Selecionados",
    "projects.category.portfolio": "Portfólio",
    "projects.category.ecommerce": "E-commerce",
    "projects.category.legal": "Serviços Jurídicos",
    "projects.category.fashion": "Moda",
    "projects.category.coffee": "Cafeteria",
    // About
    "about.title": "Minha Jornada",
    "about.p1": "Tudo começou com uma curiosidade insaciável sobre como as coisas funcionam. Do primeiro \"Hello World\" à arquitetura de sistemas complexos, minha trajetória foi guiada pela paixão em unir criatividade e lógica.",
    "about.p2": "Acredito que o código é uma forma de arte funcional. Não se trata apenas de escrever linhas que o computador entende, mas de criar experiências que as pessoas sentem. Cada interação, cada animação, cada pixel é pensado para contar uma história.",
    "about.p3": "Hoje, ajudo grandes marcas e startups a transformarem visões em realidade digital, sempre buscando o equilíbrio perfeito entre estética deslumbrante e performance impecável.",
    // Footer
    "footer.title": "Vamos construir algo incrível juntos.",
    "footer.desc": "Estou sempre aberto a novos desafios e parcerias. Entre em contato para discutirmos seu próximo projeto.",
    "footer.rights": "Todos os direitos reservados.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.talk": "Let's talk",
    "nav.talk.mobile": "Talk",
    // Overlay
    "overlay.role": "Web Developer",
    "overlay.create": "I create",
    "overlay.experiences": "digital experiences.",
    "overlay.uniting": "Uniting design",
    "overlay.engineering": "& engineering.",
    // Projects
    "projects.title": "Selected Works",
    "projects.category.portfolio": "Portfolio",
    "projects.category.ecommerce": "E-commerce",
    "projects.category.legal": "Legal Services",
    "projects.category.fashion": "Fashion Store",
    "projects.category.coffee": "Coffee Shop",
    // About
    "about.title": "My Journey",
    "about.p1": "It all started with an insatiable curiosity about how things work. From the first \"Hello World\" to complex systems architecture, my path has been guided by a passion for uniting creativity and logic.",
    "about.p2": "I believe code is a form of functional art. It's not just about writing lines a computer understands, but creating experiences people feel. Every interaction, every animation, every pixel is crafted to tell a story.",
    "about.p3": "Today, I help great brands and startups turn visions into digital reality, always seeking the perfect balance between stunning aesthetics and flawless performance.",
    // Footer
    "footer.title": "Let's build something amazing together.",
    "footer.desc": "I'm always open to new challenges and partnerships. Get in touch to discuss your next project.",
    "footer.rights": "All rights reserved.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const browserLang = navigator.language.toLowerCase();
    const savedLang = localStorage.getItem("language") as Language;
    
    if (savedLang && (savedLang === "pt" || savedLang === "en")) {
      setLanguage(savedLang);
    } else if (browserLang.startsWith("en")) {
      setLanguage("en");
    } else {
      setLanguage("pt");
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    // Default to PT on server/first render to avoid hydration mismatch
    const langToUse = mounted ? language : "pt"; 
    // @ts-ignore
    return translations[langToUse]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
