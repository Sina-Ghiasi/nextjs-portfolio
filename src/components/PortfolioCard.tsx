import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({
  portfolio,
}: {
  portfolio: {
    title: string;
    summary: string;
    description: string;
    slug: string;
    imageUrl: string;
    technologies: string[];
  };
}) {
  const { title, summary, slug, imageUrl, technologies } = portfolio;

  return (
    <div className="card lg:card-side bg-neutral text-neutral-content shadow-lg rounded-xl">
      <figure>
        <Image src={imageUrl} alt={title} width={500} height={500} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{summary}</p>
        <div>
          {technologies.map((technology) => (
            <span
              key={technology}
              className="badge badge-secondary badge-sm m-2 py-3 px-4"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link
            href={`/portfolios/${slug}`}
            target="_blank"
            className="btn btn-primary"
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
