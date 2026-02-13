"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Neon Horizon",
        category: "Web Experience",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Quantum UI",
        category: "Design System",
        image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Ether Finance",
        category: "Fintech App",
        image: "https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=1000&auto=format&fit=crop",
    },
];

export default function Projects() {
    return (
        <section id="work" className="relative z-20 bg-[#121212] py-16 md:py-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-white"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm font-medium text-blue-400 mb-2">
                                    {project.category}
                                </p>
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
