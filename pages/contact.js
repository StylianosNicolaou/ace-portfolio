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

      <main
        className="pt-40 px-6 pb-20 min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/bg2.jpg")' }}
      >
        <Navbar />
        <Contact />
      </main>
    </>
  );
}
