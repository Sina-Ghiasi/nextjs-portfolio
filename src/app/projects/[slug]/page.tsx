import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectsFromDb } from "@/lib/db/queries/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const projects = await getAllProjectsFromDb();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
      return {
        title: "۴۰۴ - صفحه پیدا نشد",
        description: "صفحه موردنظر وجود ندارد یا شاید جابه‌جا شده است.",
      };
    }
    const { title, description, images } = project;

    return {
      title: title,
      description: description.slice(0, 160),
      openGraph: {
        images: [
          {
            url: images?.[0] ?? "/images/projects/placeholder.svg",
            width: 800,
            height: 400,
            alt: title,
          },
        ],
        title: title,
        description: description.slice(0, 160),
      },
    };
  } catch (error) {
    console.error("Metadata generation error:", error);
    return {
      title: "خطا در بارگذاری پروژه",
      description: "متأسفانه نتوانستیم اطلاعات پروژه را بارگذاری کنیم.",
    };
  }
}

export async function generateStaticParams() {
  try {
    const projects = await getAllProjectsFromDb();
    return projects.map((p) => ({
      slug: p.slug,
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const projects = await getAllProjectsFromDb();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
      notFound();
    }

    const {
      title,
      description,
      images,
      status,
      technologies,
      demoUrl,
      githubUrl,
    } = project;

    return (
      <article className="px-4 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="relative w-full h-80">
            <Image
              src={images?.[0] ?? "/images/projects/placeholder.svg"}
              alt={title}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex gap-2">
              <h2 className="text-lg font-semibold mb-1">وضعیت :</h2>
              <span
                className={`badge ${
                  status === "active"
                    ? "badge-success"
                    : status === "on-hold"
                    ? "badge-warning"
                    : "badge-neutral"
                } badge-lg text-sm`}
              >
                {status}
              </span>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">
                تکنولوژی و ابزارهایی که استفاده شده :
              </h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
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
              {demoUrl && (
                <Link
                  href={demoUrl}
                  target="_blank"
                  className="btn btn-primary"
                >
                  دمو آنلاین
                </Link>
              )}
              {githubUrl && (
                <Link
                  href={githubUrl}
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
            {description ?? "توضیحات بیشتری برای این پروژه ثبت نشده است."}
          </p>
        </section>
      </article>
    );
  } catch (error) {
    console.log(error);
    return (
      <article className="px-4 py-10">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">خطا در بارگذاری پروژه</h1>
          <p className="text-base">
            متأسفانه نتوانستیم اطلاعات پروژه را بارگذاری کنیم. لطفاً بعداً
            دوباره امتحان کنید.
          </p>
        </section>
      </article>
    );
  }
}
