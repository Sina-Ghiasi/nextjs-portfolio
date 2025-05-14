import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjectsFromDb } from "@/lib/db/queries/projects";

export default async function Projects() {
  const projects = await getAllProjectsFromDb();
  return (
    <section className="flex flex-col mx-5 lg:mx-8 mb-8 md:mb-16">
      <h3 className="font-extrabold text-2xl mb-2 text-center">
        پروژه‌های انجام شده
      </h3>
      <p className="text-sm mb-8 text-center">
        در اینجا برخی از پروژه‌های برجسته‌ام را مشاهده خواهید کرد که نشان‌دهنده
        مهارت و تجربه من در توسعه وب است.
      </p>
      <div className="flex flex-col gap-8 mb-8">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <Link href={"/projects"} className="self-center btn btn-primary">
        مشاهده همه
      </Link>
    </section>
  );
}
