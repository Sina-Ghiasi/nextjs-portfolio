import PortfolioCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/db/queries/projects";

export const revalidate = 432000; // 5 days

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <section className="mx-5 my-8 flex flex-col md:my-12 lg:mx-8">
      <h3 className="mb-2 text-center text-2xl font-extrabold">
        پروژه‌های انجام شده
      </h3>
      <p className="mb-8 text-center text-sm">
        مجموعه‌ای از پروژه‌هایی که با دقت، خلاقیت و تمرکز بر تجربه کاربری توسعه
        داده‌ام.
      </p>
      <div className="mb-8 flex flex-col gap-8">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
