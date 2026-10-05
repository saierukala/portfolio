import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import Work from "@/components/Work";
import AISection from "@/components/AISection";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <Work />
      <AISection />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
