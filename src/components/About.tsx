"use client";

import { motion } from "framer-motion";

export default function About() {
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
            </div>
        </section>
    );
}
