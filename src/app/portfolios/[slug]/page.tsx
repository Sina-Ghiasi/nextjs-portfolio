import portfolios from "@/data/portfolios.json";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PortfolioType } from "@/types/portfolio";
import { notFound } from "next/navigation";

const typedPortfolios: PortfolioType[] = portfolios as PortfolioType[];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = typedPortfolios.find((p) => p.slug === slug);

  if (!portfolio) {
    return {
      title: "۴۰۴ - صفحه پیدا نشد",
      description: "صفحه موردنظر وجود ندارد یا شاید جابه‌جا شده است.",
    };
  }

  return {
    title: portfolio.title,
    description: portfolio.summary.slice(0, 160),
    openGraph: {
      images: [
        {
          url:
            portfolio.images?.[0] ??
            "/images/portfolios/portfolio-placeholder.svg",
          width: 800,
          height: 400,
          alt: portfolio.title,
        },
      ],
      title: portfolio.title,
      description: portfolio.summary.slice(0, 160),
    },
  };
}

export async function generateStaticParams() {
  return typedPortfolios.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const portfolio = typedPortfolios.find((p) => p.slug === slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <article className="px-4 py-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="relative w-full h-80">
          <Image
            src={
              portfolio.images?.[0] ??
              "/images/portfolios/portfolio-placeholder.svg"
            }
            alt={portfolio.title}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{portfolio.title}</h1>
          <div className="flex gap-2">
            <h2 className="text-lg font-semibold mb-1">وضعیت :</h2>
            <span
              className={`badge ${
                portfolio.status === "active"
                  ? "badge-success"
                  : portfolio.status === "on-hold"
                  ? "badge-warning"
                  : "badge-neutral"
              } badge-lg text-sm`}
            >
              {portfolio.status}
            </span>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">
              تکنولوژی و ابزارهایی که استفاده شده :
            </h2>
            <div className="flex flex-wrap gap-2">
              {portfolio.technologies.map((technology) => (
                <span
                  key={technology}
                  className="badge badge-secondary badge-sm py-3 px-4"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {portfolio.demoUrl && (
              <Link
                href={portfolio.demoUrl}
                target="_blank"
                className="btn btn-primary"
              >
                دمو آنلاین
              </Link>
            )}
            {portfolio.githubUrl && (
              <Link
                href={portfolio.githubUrl}
                target="_blank"
                className="btn btn-outline"
              >
                گیت هاب
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">درباره پروژه</h2>
        <p className="text-base leading-relaxed text-base-content">
          {portfolio.summary ?? "توضیحات بیشتری برای این پروژه ثبت نشده است."}
        </p>
      </section>
    </article>
  );
}
