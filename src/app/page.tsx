import Navbar from "@/components/body/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <header className="mb-4">
        <Navbar />
        <Hero />
      </header>
      <main>
        <Features />
        <Projects />
      </main>
    </>
  );
}
