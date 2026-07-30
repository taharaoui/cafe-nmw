import BrandStory from "@/components/home/BrandStory";
import FeaturedDrinks from "@/components/home/FeaturedDrinks";
import HomeFooter from "@/components/home/HomeFooter";
import HeroSection from "@/components/home/HeroSection";
import SpacePreview from "@/components/home/SpacePreview";
import ThreePillarsSection from "@/components/home/ThreePillarsSection";
import VisitSection from "@/components/home/VisitSection";

export default function Home() {
  return (
    <main className="bg-[#FAFAF8] text-[#111111]">
      <HeroSection />
      <BrandStory />
      <ThreePillarsSection />
      <FeaturedDrinks />
      <SpacePreview />
      <VisitSection />
      <HomeFooter />
    </main>
  );
}
