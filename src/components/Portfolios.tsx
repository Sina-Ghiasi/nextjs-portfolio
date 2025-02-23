import portfolios from "@/data/portfolios.json";
import PortfolioCard from "./PortfolioCard";
import Link from "next/link";

export default function Portfolios() {
  return (
    <section className="flex flex-col mx-4 lg:mx-8 mb-8 md:mb-16">
      <h3 className="font-extrabold text-2xl mb-2 text-center">
        پروژه‌های انجام شده
      </h3>
      <p className="text-sm mb-8 text-center">
        در اینجا برخی از پروژه‌های برجسته‌ام را مشاهده خواهید کرد که نشان‌دهنده
        مهارت و تجربه من در توسعه وب است.
      </p>
      <div className="flex flex-col gap-8 mb-8">
        {portfolios.slice(0, 4).map((portfolio) => (
          <PortfolioCard key={portfolio.slug} portfolio={portfolio} />
        ))}
      </div>
      <Link href={"/portfolios"} className="self-center btn btn-primary">
        مشاهده همه
      </Link>
    </section>
  );
}
