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
        <figure className="w-full lg:w-1/3 h-64 lg:h-auto">
          <Image
            src={images?.[0] ?? "/images/projects/placeholder.svg"}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body w-full lg:w-2/3">
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
