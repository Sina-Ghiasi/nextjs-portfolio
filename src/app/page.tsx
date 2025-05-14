import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import Benefits from "./_components/Benefits";
import Projects from "./_components/Projects";
import FAQs from "./_components/FAQs";

export const revalidate = 432000; // 5 days

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Benefits />
      <Projects />
      <FAQs />
    </>
  );
}
