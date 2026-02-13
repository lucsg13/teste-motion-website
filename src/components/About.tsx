"use client";

import { motion } from "framer-motion";

const companies = [
    {
        name: "Google",
        role: "Senior Frontend Engineer",
        period: "2023 - Presente",
        description: "Liderando o desenvolvimento da nova interface do Google Search com foco em performance e acessibilidade.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
        name: "Nubank",
        role: "Tech Lead",
        period: "2021 - 2023",
        description: "Arquitetei o sistema de design utilizado por mais de 500 desenvolvedores e melhorei o tempo de carregamento do app em 40%.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nu_Bank_logo.svg/2560px-Nu_Bank_logo.svg.png",
    },
    {
        name: "Globo",
        role: "Full Stack Developer",
        period: "2019 - 2021",
        description: "Desenvolvi soluções de streaming para o Globoplay, impactando milhões de usuários durante a Copa do Mundo.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png",
    },
];

export default function About() {
    return (
        <section id="about" className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Story Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400">
                        Minha Jornada
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                        <p>
                            Tudo começou com uma curiosidade insaciável sobre como as coisas funcionam.
                            Do primeiro "Hello World" à arquitetura de sistemas complexos, minha trajetória
                            foi guiada pela paixão em unir criatividade e lógica.
                        </p>
                        <p>
                            Acredito que o código é uma forma de arte funcional. Não se trata apenas de
                            escrever linhas que o computador entende, mas de criar experiências que
                            as pessoas sentem. Cada interação, cada animação, cada pixel é pensado
                            para contar uma história.
                        </p>
                        <p>
                            Hoje, ajudo grandes marcas e startups a transformarem visões em realidade digital,
                            sempre buscando o equilíbrio perfeito entre estética deslumbrante e performance impecável.
                        </p>
                    </div>
                </motion.div>

                {/* Experience Column */}
                <div className="space-y-8">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-semibold mb-6 flex items-center gap-3"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Experiência
                    </motion.h3>

                    <div className="space-y-6">
                        {companies.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold group-hover:text-blue-300 transition-colors">{job.name}</h4>
                                        <p className="text-sm text-gray-400">{job.role}</p>
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 border border-gray-700 rounded px-2 py-1">
                                        {job.period}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {job.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
