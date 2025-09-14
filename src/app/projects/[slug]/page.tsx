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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mx-5 lg:mx-8 my-8 md:my-12">
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
          <h1 className="text-2xl lg:text-4xl font-bold">{title}</h1>
          <div className="flex gap-2 items-center">
            <h2 className="text-base font-semibold mb-1">وضعیت :</h2>
            <span
              className={`badge badge-sm pt-2.5 pb-2 px-2.5 ${
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
            <h2 className="text-base font-semibold mb-4">
              تکنولوژی و ابزارهایی که استفاده شده :
            </h2>
            <Technologies technologies={technologies} />
          </div>

          <div className="flex gap-4">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                className="btn btn-sm btn-primary"
              >
                دمو آنلاین
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                className="btn btn-sm btn-secondary"
              >
                گیت هاب
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="mx-5 lg:mx-8 mb-8 md:mb-12">
        <h2 className="text-xl lg:text-2xl font-bold mb-4">درباره پروژه</h2>
        <p className="text-sm lg:text-base leading-relaxed text-base-content">
          {description ?? "توضیحات بیشتری برای این پروژه ثبت نشده است."}
        </p>
      </section>
    </>
  );
}
