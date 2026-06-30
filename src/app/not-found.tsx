import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "۴۰۴ - صفحه پیدا نشد",
  description: "متأسفیم، صفحه‌ای که به دنبالش بودید یافت نشد.",
};

export default function NotFound() {
  return (
    <section className="mx-5 mb-8 flex min-h-[calc(100vh-70px)] flex-col items-center justify-center md:mb-16 lg:mx-8">
      <h1 className="mb-4 text-4xl font-bold text-error">۴۰۴</h1>
      <h2 className="mb-4 text-2xl font-semibold text-base-content">
        اوه! صفحه پیدا نشد 😕
      </h2>
      <p className="mx-auto mb-8 text-center text-base-content">
        متأسفیم! صفحه‌ای که دنبالش بودید پیدا نشد یا شاید جابه‌جا شده است.
      </p>
      <Link
        href="/"
        className="btn btn-wide btn-primary"
        aria-label="بازگشت به صفحه خانه"
      >
        بازگشت به خانه
      </Link>
    </section>
  );
}
