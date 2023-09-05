import Navbar from "@/components/body/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <header className="mb-4">
        <Navbar />
        <hr className="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700" />
        <Hero />
      </header>
      <main>
        <Features />
        <Projects />
      </main>
    </>
  );
}
