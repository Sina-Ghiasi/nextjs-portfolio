import developToolsData from "@/data/developTools.json";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="flex flex-col mx-4 lg:mx-8 mb-8 md:mb-16">
      <h3 className="font-extrabold text-2xl text-center mb-2">مهارت ها</h3>
      <p className="text-sm text-center mb-8">
        مهارت ها، ابزار ها و تکنولوژی هایی که استفاده می کنم.
      </p>
      <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-8">
        {developToolsData.map((tool) => (
          <div
            className="flex flex-col gap-2 items-center min-w-16 md:min-w-24 "
            key={tool.name}
          >
            <div className="relative w-12 h-12 ">
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
