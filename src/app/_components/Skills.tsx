import { getAllDevToolsFromDb } from "@/lib/db/queries/devTools";
import SkillsList from "./SkillsList";

export default async function Skills() {
  const devTools = await getAllDevToolsFromDb();
  return (
    <section className="mx-5 mb-8 flex flex-col md:mb-16 lg:mx-8">
      <h3 className="mb-2 text-center text-2xl font-extrabold">مهارت ها</h3>
      <p className="mb-8 text-center text-sm">
        مهارت ها، ابزار ها و تکنولوژی هایی که استفاده می کنم.
      </p>
      <SkillsList devTools={devTools} />
    </section>
  );
}
