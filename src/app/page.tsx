import Projects from "@/components/Projects";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] min-h-screen text-white">
      <Header />
      <ScrollyCanvas />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
