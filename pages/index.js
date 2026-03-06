import Head from "next/head";
import About from "./components/about";
import BottomSection from "./components/bottom-section";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skill";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ansar Fadillah — Backend Developer</title>
        <meta
          name="description"
          content="Backend Developer specializing in scalable systems and RESTful APIs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <BottomSection />
        <Footer />
      </main>
    </>
  );
}
