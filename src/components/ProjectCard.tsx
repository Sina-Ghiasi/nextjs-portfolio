import { ProjectType } from "@/types/project";
import { truncateString } from "@/utils/string";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Technologies from "./Technologies";

export default function ProjectCard({ project }: { project: ProjectType }) {
  const { title, description, slug, images, technologies } = project;

  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="card lg:card-side bg-base-200 border border-base-200 hover:border-neutral shadow-lg rounded-xl transition">
        <figure className="w-full h-36 md:h-52 lg:h-auto bg-gray-200 relative overflow-hidden">
          <Image
            src={images?.[0] ?? "/images/projects/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover aspect-video"
          />
        </figure>

        <div className="card-body w-full">
          <h2 className="card-title group-hover:underline">{title}</h2>
          <p className="text-sm lg:text-base">
            {truncateString(description, 250)}
          </p>

          <Technologies technologies={technologies} />

          <div className="card-actions justify-end mt-3">
            <span
              className="btn btn-sm lg:btn-md btn-primary"
              role="presentation"
              aria-hidden="true"
            >
              <ExternalLink className="w-4 h-4  lg:w-5 lg:h-5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
