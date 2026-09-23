import { getAllBenefits } from "@/lib/db/queries/benefits";
import BenefitList from "./BenefitList";

export default async function Benefits() {
  const benefits = await getAllBenefits();

  return (
    <section className="mx-5 mb-8 flex flex-col md:mb-16 lg:mx-8">
      <h3 className="mb-2 text-center text-2xl font-extrabold">
        مزایای همکاری
      </h3>
      <p className="mb-8 text-center text-sm">
        با انتخاب خدمات طراحی و توسعه من شما از مزایای زیر بهره مند خواهید شد.
      </p>

      <BenefitList benefits={benefits} />
    </section>
  );
}
