

import { Experience } from "@/components/pages/home/sections/experience.sections";
import { Hero } from "@/components/pages/home/sections/hero.sections";
import { Skills } from "@/components/pages/home/sections/skills.sections";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 mt-32">
      <Hero />
      <Experience />
      <Skills />
    </div>
  );
}
