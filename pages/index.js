import Head from "next/head";

// Sections
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>ACE – Web Development Studio</title>
        <meta
          name="description"
          content="We build stunning, animated websites for modern businesses. Powered by Stylianos & Viktorya."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Layout Flow */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
