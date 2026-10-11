import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ProjectType } from "@/types/project";
import Technologies from "./Technologies";
import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

interface ProjectCardProps extends HTMLAttributes<HTMLElement> {
  project: ProjectType;
}

export default function ProjectCard({
  project,
  className,
  ...rest
}: ProjectCardProps) {
  const { title, description, slug, images, technologies } = project;

  return (
    <article
      className={cn(
        "card relative overflow-hidden rounded-xl bg-base-200 md:card-side",
        className,
      )}
      {...rest}
    >
      <figure className="relative h-30 w-full shrink-0 overflow-hidden bg-gray-200 md:h-auto md:shrink">
        <Image
          src={images?.[0] ?? "/images/projects/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="aspect-video object-cover"
        />
      </figure>

      <div className="card-body h-full w-full">
        <h2 className="card-title">
          <Link
            href={`/projects/${slug}`}
            className="after:absolute after:inset-0"
          >
            {title}
          </Link>
        </h2>
        <p>
          <span className="line-clamp-2 text-sm md:line-clamp-4 lg:text-base">
            {description}
          </span>
        </p>

        <Technologies technologies={technologies} />

        <div className="card-actions place-self-end self-end">
          <span
            className="btn btn-primary btn-sm lg:btn-md"
            role="presentation"
            aria-hidden="true"
          >
            <ExternalLink className="h-4 w-4 lg:h-5 lg:w-5" />
          </span>
        </div>
      </div>
    </article>
  );
}
