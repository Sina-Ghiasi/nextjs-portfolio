import { getAllDevTools } from "@/lib/db/queries/devTools";
import SkillList from "./SkillList";

export default async function Skills() {
  const devTools = await getAllDevTools();
  return (
    <section className="mx-5 mb-8 flex flex-col md:mb-16 lg:mx-8">
      <h3 className="mb-2 text-center text-2xl font-extrabold">مهارت ها</h3>
      <p className="mb-8 text-center text-sm">
        ابزار ها و تکنولوژی هایی که استفاده می کنم و در آن ها مهارت دارم.
      </p>
      <SkillList devTools={devTools} />
    </section>
  );
}
