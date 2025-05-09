import { PortfolioType } from "@/types/portfolio";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({
  portfolio,
}: {
  portfolio: PortfolioType;
}) {
  const { title, summary, slug, images, technologies } = portfolio;

  return (
    <Link href={`/portfolios/${slug}`} target="_blank" className="block">
      <div className="card lg:card-side bg-base-200 border border-base-200 hover:border-neutral shadow-lg rounded-xl transition">
        <figure className="w-full lg:w-1/3 h-64 lg:h-auto">
          <Image
            src={images?.[0] ?? "/images/portfolios/portfolio-placeholder.svg"}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body w-full lg:w-2/3">
          <h2 className="card-title group-hover:underline">{title}</h2>
          <p>{summary}</p>

          <div className="flex flex-wrap mt-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="badge badge-secondary badge-sm m-2 py-3 px-4"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="card-actions justify-end mt-4">
            <span
              className="btn btn-primary"
              role="presentation"
              aria-hidden="true"
            >
              <ExternalLink className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
