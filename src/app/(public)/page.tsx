import Experience from "@/components/pages/sections/home/experience-section";
import Hero from "@/components/pages/sections/home/hero-section";
import { Skills } from "@/components/pages/sections/home/skills-section";

export default async function Home() {
  return (
    <div className="flex flex-col gap-32 my-32">
      <Hero />
      <Experience />
      <Skills />
    </div>
  );
}
