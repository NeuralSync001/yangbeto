import { Hero } from "@/components/home/Hero";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Institutional } from "@/components/home/Institutional";
import { ChoiceGuide } from "@/components/home/ChoiceGuide";
import { EditorialGallery } from "@/components/home/EditorialGallery";
import { VisitStore } from "@/components/home/VisitStore";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <Institutional />
      <ChoiceGuide />
      <EditorialGallery />
      <VisitStore />
    </>
  );
}
