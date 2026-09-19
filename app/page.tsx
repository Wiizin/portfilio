import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseEffect from "@/components/MouseEffect";

export default function Home() {
  return (
    <main>
      <MouseEffect />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
