import { Hero } from "@/components/home/Hero";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Institutional } from "@/components/home/Institutional";
import { ChoiceGuide } from "@/components/home/ChoiceGuide";
import { InstagramSection } from "@/components/home/InstagramSection";
import { VisitStore } from "@/components/home/VisitStore";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <Institutional />
      <ChoiceGuide />
      <InstagramSection />
      <VisitStore />
    </>
  );
}
