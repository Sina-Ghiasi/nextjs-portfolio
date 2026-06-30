import { getAllFaqsFromDb } from "@/lib/db/queries/faqs";
import { CircleHelp, Rocket } from "lucide-react";

export default async function FAQs() {
  const faqs = await getAllFaqsFromDb();
  return (
    <section className="mx-5 mb-8 flex flex-col md:mb-16 lg:mx-8">
      <h3 className="mb-2 text-center text-2xl font-extrabold">
        سوالات متداول
      </h3>
      <p className="mb-8 text-center text-sm">پاسخ برخی از سوالات رایج شما</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-base-200 p-4 md:col-span-2 lg:p-6">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="collapse-plus collapse mb-2 bg-base-100 text-sm md:text-base"
              name={faq.question}
              open={index === 0}
            >
              <summary className="collapse-title font-medium">
                {faq.question}
              </summary>
              <p className="collapse-content">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-4 self-start rounded-xl bg-base-200 p-6">
          <CircleHelp className="mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold">نیاز به راهنمایی یا مشاوره دارید؟</h4>
          <p className="mb-4 text-sm">
            بیایید با هم همکاری کنیم تا یک وب‌ سایت بی‌نظیر بسازیم که شما را از
            رقبا متمایز کند. همین امروز با من تماس بگیرید تا درباره نیازهای
            طراحی وب شما گفتگو کنیم و رؤیای دیجیتال شما را به واقعیت تبدیل کنیم!
            <Rocket className="mx-2 inline-block h-5 w-5 text-primary hover:text-accent" />
          </p>
          <a
            href="https://t.me/SinaGhiasi_BA"
            className="btn btn-block btn-primary"
            target="_blank"
            rel="noopener"
          >
            ارتباط با من
          </a>
        </div>
      </div>
    </section>
  );
}
