import { getAllFaqsFromDb } from "@/lib/db/queries/faqs";
import { CircleHelp, Rocket } from "lucide-react";

export default async function FAQs() {
  const faqs = await getAllFaqsFromDb();
  return (
    <section className="flex flex-col mx-4 lg:mx-8 mb-8 md:mb-16">
      <h3 className="font-extrabold text-2xl mb-2 text-center">
        سوالات متداول
      </h3>
      <p className="text-sm mb-8 text-center">پاسخ برخی از سوالات رایج شما</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 p-4 lg:p-6 bg-base-200 rounded-xl">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="collapse collapse-plus bg-base-100 mb-2"
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />
              <div className="collapse-title font-medium">{faq.question}</div>
              <div className="collapse-content text-sm">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-4 self-start p-6 bg-base-200 rounded-xl ">
          <CircleHelp className="w-12 h-12 text-primary mb-4" />
          <h4 className="font-bold">نیاز به راهنمایی یا مشاوره دارید؟</h4>
          <p className="text-sm mb-4">
            بیایید با هم همکاری کنیم تا یک وب‌ سایت بی‌نظیر بسازیم که شما را از
            رقبا متمایز کند. همین امروز با من تماس بگیرید تا درباره نیازهای
            طراحی وب شما گفتگو کنیم و رؤیای دیجیتال شما را به واقعیت تبدیل کنیم!
            <Rocket className="inline-block mx-2 w-5 h-5 text-primary hover:text-accent" />
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
