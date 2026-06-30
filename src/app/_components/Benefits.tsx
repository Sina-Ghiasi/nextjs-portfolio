import { getAllBenefitFromDb } from "@/lib/db/queries/benefits";
import { BenefitType } from "@/types/benefits";

export default async function Benefits() {
  const benefits = await getAllBenefitFromDb();
  return (
    <section className="mx-5 mb-8 flex flex-col md:mb-16 lg:mx-8">
      <h3 className="mb-2 text-center text-2xl font-extrabold">
        مزایای همکاری
      </h3>
      <p className="mb-8 text-center text-sm">
        با انتخاب خدمات طراحی و توسعه من شما از مزایای زیر بهره مند خواهید شد.
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 rounded-xl border border-base-200 bg-base-200 p-4 text-base-content hover:border-base-300 md:p-6 lg:col-span-6">
          <Benefit benefit={benefits[0]} />
        </div>
        <div className="col-span-12 rounded-xl border border-base-200 bg-base-200 p-4 text-base-content hover:border-base-300 md:p-6 lg:col-span-6">
          <Benefit benefit={benefits[1]} />
        </div>
        <div className="col-span-12 rounded-xl border border-base-200 bg-base-200 p-4 text-base-content hover:border-base-300 md:p-6 lg:col-span-4">
          <Benefit benefit={benefits[2]} />
        </div>
        <div className="col-span-12 rounded-xl border border-base-200 bg-base-200 p-4 text-base-content hover:border-base-300 md:p-6 lg:col-span-4">
          <Benefit benefit={benefits[3]} />
        </div>
        <div className="col-span-12 rounded-xl border border-base-200 bg-base-200 p-4 text-base-content hover:border-base-300 md:p-6 lg:col-span-4">
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
