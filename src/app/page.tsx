import FAQs from "@/components/FAQs";
import Hero from "app/_components/Hero";
import Portfolios from "app/_components/Portfolios";
import Skills from "@/components/Skills";
import Benefits from "./_components/Benefits";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Benefits />
      <Portfolios />
      <FAQs />
    </>
  );
}
