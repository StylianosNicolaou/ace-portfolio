// Sections
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import ProjectGrid from "../components/ProjectGrid";
import CodingStation from "@/components/CodingStation";

export default function Home() {
  return (
    <>
      {/* Layout Flow */}
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="coding">
          <CodingStation />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <ProjectGrid />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}