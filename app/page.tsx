import AboutSection from "@/components/AboutSection/AboutSection";
import ContentSections from "@/components/ContentSections/ContentSections";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ContentSections />
    </main>
  );
}
