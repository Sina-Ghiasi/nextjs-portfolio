import { getAllBenefitFromDb } from "@/lib/db/queries/benefits";
import { BenefitType } from "@/types/benefits";

export default async function Benefits() {
  const benefits = await getAllBenefitFromDb();
  return (
    <section className="flex flex-col mx-5 lg:mx-8 mb-8 md:mb-16">
      <h3 className="font-extrabold text-2xl mb-2 text-center">
        مزایای همکاری
      </h3>
      <p className="text-sm mb-8 text-center">
        با انتخاب خدمات طراحی و توسعه من شما از مزایای زیر بهره مند خواهید شد.
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 p-4 md:p-6 rounded-xl bg-base-200 text-base-content border border-base-200 hover:border-base-300">
          <Benefit benefit={benefits[0]} />
        </div>
        <div className="col-span-12 lg:col-span-6 p-4 md:p-6 rounded-xl bg-base-200 text-base-content border border-base-200 hover:border-base-300">
          <Benefit benefit={benefits[1]} />
        </div>
        <div className="col-span-12 lg:col-span-4 p-4 md:p-6 rounded-xl bg-base-200 text-base-content border border-base-200 hover:border-base-300">
          <Benefit benefit={benefits[2]} />
        </div>
        <div className="col-span-12 lg:col-span-4 p-4 md:p-6 rounded-xl bg-base-200 text-base-content border border-base-200 hover:border-base-300">
          <Benefit benefit={benefits[3]} />
        </div>
        <div className="col-span-12 lg:col-span-4 p-4 md:p-6 rounded-xl bg-base-200 text-base-content border border-base-200 hover:border-base-300">
          <Benefit benefit={benefits[4]} />
        </div>
      </div>
    </section>
  );
}

function Benefit({ benefit }: { benefit: BenefitType }) {
  return (
    <>
      <h5 className="mb-2 font-bold">{benefit.title}</h5>
      <p className="text-sm">{benefit.description}</p>
    </>
  );
}
