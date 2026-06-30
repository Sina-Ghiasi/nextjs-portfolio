import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjectsFromDb } from "@/lib/db/queries/projects";

export default async function Projects() {
  const projects = await getAllProjectsFromDb();
  return (
    <section className="mx-5 mb-8 flex flex-col md:mb-16 lg:mx-8">
      <h3 className="mb-2 text-center text-2xl font-extrabold">
        پروژه‌های انجام شده
      </h3>
      <p className="mb-8 text-center text-sm">
        در اینجا برخی از پروژه‌های برجسته‌ام را مشاهده خواهید کرد که نشان‌دهنده
        مهارت و تجربه من در توسعه وب است.
      </p>
      <div className="mb-8 flex flex-col gap-8">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <Link href={"/projects"} className="btn self-center btn-primary">
        مشاهده همه
      </Link>
    </section>
  );
}
