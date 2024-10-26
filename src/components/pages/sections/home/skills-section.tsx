import { Image } from "@nextui-org/react";

import { TStacks } from "@/components/ui/stack-chip";

interface SkillType {
  name: TStacks;
  size?: number;
}

export const Skill = ({ name, size = 80 }: SkillType) => {
  return (
    <div className="hover:bg-slate-100 dark:hover:bg-slate-900 dark:bg-gray-950  rounded-md border-2 border-black px-2 py-8 flex flex-col gap-4 items-center justify-end cursor-pointer">
      <Image
        alt={name}
        src={`/assets/icons/${name.toLowerCase()}.svg`}
        width={size}
      />
      <p className="text-2xl font-bold dark:text-white">{name}</p>
    </div>
  );
};

export const Skills = () => {
  const skills: TStacks[] = [
    "React",
    "Nextjs",
    "Typescript",
    "Javascript",
    "Tailwindcss",
    "Sass",
    "Mysql",
    "Redux",
  ];

  return (
    <section id="skills">
      <h1 className="text-start mb-10 md:text-3xl text-2xl">
        Principais <span className="font-bold">Competências</span>
      </h1>
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:gap-6">
        {skills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
};
