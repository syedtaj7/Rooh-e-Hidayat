import { Hero } from "@/components/features/Hero";
import { Quotes } from "@/components/features/Quotes";
import { NavigationGrid } from "@/components/features/NavigationGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Quotes />
      <NavigationGrid />

      {/* Spacer for aesthetics */}
      <div className="h-24 bg-gradient-to-t from-secondary/20 to-transparent" />
    </div>
  );
}
