import Link from "next/link";
import { getAllProjects } from "@/lib/db/queries/projects";
import ProjectList from "./ProjectList";

export default async function Projects() {
  const projects = await getAllProjects();

  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="mx-5 mb-8 overflow-hidden md:mb-16 lg:mx-8">
      <h3 className="mb-2 text-center text-2xl font-extrabold">
        پروژه‌های انجام شده
      </h3>
      <p className="mb-8 text-center text-sm">
        در اینجا برخی از پروژه‌های برجسته‌ام را مشاهده خواهید کرد که نشان‌دهنده
        مهارت و تجربه من در توسعه وب است.
      </p>
      <ProjectList projects={featuredProjects} />

      <div className="mt-2 flex justify-center md:mt-6">
        <Link href={"/projects"} className="btn btn-primary">
          مشاهده همه
        </Link>
      </div>
    </section>
  );
}
