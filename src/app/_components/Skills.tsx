import { getAllDevToolsFromDb } from "@/lib/db/queries/devTools";
import Image from "next/image";

export default async function Skills() {
  const devTools = await getAllDevToolsFromDb();
  return (
    <section className="mx-5 mb-8 flex flex-col md:mb-16 lg:mx-8">
      <h3 className="mb-2 text-center text-2xl font-extrabold">مهارت ها</h3>
      <p className="mb-8 text-center text-sm">
        مهارت ها، ابزار ها و تکنولوژی هایی که استفاده می کنم.
      </p>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 md:gap-x-16">
        {devTools.map((tool) => (
          <div
            className="flex min-w-16 flex-col items-center gap-2 md:min-w-24"
            key={tool.name}
          >
            <div className="relative h-12 w-12">
              <Image
                src={tool.imageUrl}
                alt={tool.name}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>

            <h4 className="text-sm">{tool.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
