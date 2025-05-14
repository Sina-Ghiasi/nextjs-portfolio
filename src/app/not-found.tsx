import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "۴۰۴ - صفحه پیدا نشد",
  description: "متأسفیم، صفحه‌ای که به دنبالش بودید یافت نشد.",
};

export default function NotFound() {
  return (
    <section className="flex flex-col mx-5 lg:mx-8 mb-8 md:mb-16 justify-center items-center min-h-[calc(100vh-70px)]">
      <h1 className="text-4xl font-bold text-error mb-4">۴۰۴</h1>
      <h2 className="text-2xl font-semibold text-base-content mb-4">
        اوه! صفحه پیدا نشد 😕
      </h2>
      <p className="text-center text-base-content mb-8 mx-auto">
        متأسفیم! صفحه‌ای که دنبالش بودید پیدا نشد یا شاید جابه‌جا شده است.
      </p>
      <Link
        href="/"
        className="btn btn-primary btn-wide"
        aria-label="بازگشت به صفحه خانه"
      >
        بازگشت به خانه
      </Link>
    </section>
  );
}
