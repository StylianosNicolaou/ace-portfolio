// Sections
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <>
      {/* Layout Flow */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
