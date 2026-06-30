import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProjectsFromDb,
  getProjectBySlugFromDb,
} from "@/lib/db/queries/projects";
import Technologies from "@/components/Technologies";

export const revalidate = 432000; // 5 days

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const project = await getProjectBySlugFromDb(slug);

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
  const { slug } = await params;
  const project = await getProjectBySlugFromDb(slug);

  if (!project) notFound();

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
    <>
      <section className="mx-5 my-8 grid grid-cols-1 items-start gap-10 md:my-12 md:grid-cols-2 lg:mx-8">
        <Image
          src={images?.[0] ?? "/images/projects/placeholder.svg"}
          alt={title}
          width={600}
          height={450}
          className="h-auto w-full rounded-xl"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />

        <div className="space-y-6">
          <h1 className="text-2xl font-bold lg:text-4xl">{title}</h1>
          <div className="flex items-center gap-2">
            <h2 className="mb-1 text-base font-semibold">وضعیت :</h2>
            <span
              className={`badge px-2.5 pt-2.5 pb-2 badge-sm ${
                status === "active"
                  ? "badge-success"
                  : status === "on-hold"
                    ? "badge-warning"
                    : "badge-neutral"
              }`}
            >
              {status}
            </span>
          </div>

          <div>
            <h2 className="mb-4 text-base font-semibold">
              تکنولوژی و ابزارهایی که استفاده شده :
            </h2>
            <Technologies technologies={technologies} />
          </div>

          <div className="flex gap-4">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                className="btn btn-primary btn-sm"
              >
                دمو آنلاین
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                className="btn btn-secondary btn-sm"
              >
                گیت هاب
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="mx-5 mb-8 md:mb-12 lg:mx-8">
        <h2 className="mb-4 text-xl font-bold lg:text-2xl">درباره پروژه</h2>
        <p className="text-sm leading-relaxed text-base-content lg:text-base">
          {description ?? "توضیحات بیشتری برای این پروژه ثبت نشده است."}
        </p>
      </section>
    </>
  );
}
