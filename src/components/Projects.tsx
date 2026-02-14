"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Weskley Goncalves",
        category: "Portfolio",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        link: "https://weskleygoncalves.vercel.app/",
    },
    {
        title: "Azehla",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
        link: "https://azehla.vercel.app/",
    },
    {
        title: "Advocacia",
        category: "Legal Services",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop",
        link: "https://advocacia-3.vercel.app/",
    },
    {
        title: "Roupa Exemplo",
        category: "Fashion Store",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
        link: "https://roupaexemplo.vercel.app/",
    },
    {
        title: "Cafeteria Exemplo",
        category: "Coffee Shop",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
        link: "https://cafeteriaexemplo.vercel.app/",
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
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10"
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
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
