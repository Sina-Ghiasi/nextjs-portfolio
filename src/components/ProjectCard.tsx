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
      <div className="card rounded-xl border border-base-200 bg-base-200 shadow-lg transition hover:border-neutral lg:card-side">
        <figure className="relative h-36 w-full overflow-hidden bg-gray-200 md:h-52 lg:h-auto">
          <Image
            src={images?.[0] ?? "/images/projects/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="aspect-video object-cover"
          />
        </figure>

        <div className="card-body w-full">
          <h2 className="card-title group-hover:underline">{title}</h2>
          <p className="text-sm lg:text-base">
            {truncateString(description, 250)}
          </p>

          <Technologies technologies={technologies} />

          <div className="mt-3 card-actions justify-end">
            <span
              className="btn btn-primary btn-sm lg:btn-md"
              role="presentation"
              aria-hidden="true"
            >
              <ExternalLink className="h-4 w-4 lg:h-5 lg:w-5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
