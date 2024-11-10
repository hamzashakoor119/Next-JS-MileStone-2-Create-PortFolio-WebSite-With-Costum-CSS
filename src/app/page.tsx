// Import Components:
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    // Render Components:
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Contact Section */}
      <Contact />
      
      {/* About Section */}
      <About />
    </main>
  );
}
