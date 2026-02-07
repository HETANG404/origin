export const metadata = {
  title: "Origin-Home",
  description: "Page description",
};

import Hero from "@/components/sections/hero";
import VerticalCategories from "@/components/sections/vertical_categories";
import HorizontalCategories from "@/components/sections/horizontal_categories";
import MagneticBoard from "@/components/sections/magnetic_board";

export default function Home() {
  return (
    <>
      <Hero />
      <VerticalCategories />
      <HorizontalCategories />
      <MagneticBoard className="hidden sm:block" />
    </>
  );
}
