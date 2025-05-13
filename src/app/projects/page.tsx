import PortfolioCard from "@/components/ProjectCard";
import { getAllProjectsFromDb } from "@/lib/db/queries/projects";

export default async function ProjectsPage() {
  const projects = await getAllProjectsFromDb();
  return (
    <section className="flex flex-col mx-4 lg:mx-8 my-8 md:my-16">
      <h3 className="font-extrabold text-2xl mb-2 text-center">
        پروژه‌های انجام شده
      </h3>
      <p className="text-sm mb-8 text-center">
        مجموعه‌ای از پروژه‌هایی که با دقت، خلاقیت و تمرکز بر تجربه کاربری توسعه
        داده‌ام.
      </p>
      <div className="flex flex-col gap-8 mb-8">
        {projects.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
