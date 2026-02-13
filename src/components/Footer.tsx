"use client";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0a0a0a] py-12 px-6 border-t border-white/5 text-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                    Vamos construir algo incrível juntos.
                </h2>

                <p className="text-gray-400 max-w-md">
                    Estou sempre aberto a novos desafios e parcerias.
                    Entre em contato para discutirmos seu próximo projeto.
                </p>

                <a
                    href="mailto:contato@soares.dev"
                    className="text-white hover:text-blue-400 transition-colors text-lg font-medium"
                >
                    contato@soares.dev
                </a>

                <div className="flex gap-6 mt-4">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
                </div>

                <p className="text-xs text-gray-600 mt-8">
                    &copy; {new Date().getFullYear()} Soares. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
