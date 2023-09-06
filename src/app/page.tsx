import Navbar from "@/components/body/Navbar";
import Contact from "@/components/sections/Contact";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Features />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
