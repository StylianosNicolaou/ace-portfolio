import Head from "next/head";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | ACE</title>
        <meta name="description" content="Get in touch with the ACE team." />
      </Head>

      <main style={{ backgroundImage: 'url("/backgrounds/bg2.jpg")' }}>
        <div className="bg-white/5 py-10 backdrop-blur-md rounded-none min-h-screen">
          <Navbar />
          <Contact />
        </div>
      </main>
    </>
  );
}
