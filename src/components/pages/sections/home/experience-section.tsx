
import ExperienceTable from "./experience-table";

export default async function Experience() {
  return (
    <section id="experience">
      <h1 className="text-start mb-10 md:text-3xl text-2xl">
        Experiência <span className="font-bold">Profissional</span>
      </h1>

      <ExperienceTable />
    </section>
  );
};
