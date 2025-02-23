import faqs from "@/data/faqs.json";
import { CircleHelp, Rocket } from "lucide-react";
import Link from "next/link";

export default function FAQs() {
  return (
    <section className="flex flex-col mx-4 lg:mx-8 mb-8 md:mb-16">
      <h3 className="font-extrabold text-2xl mb-2 text-center">
        سوالات متداول
      </h3>
      <p className="text-sm mb-8 text-center">پاسخ برخی از سوالات رایج شما</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 p-4 lg:p-6 bg-neutral rounded-xl">
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
        <div className="flex flex-col items-center gap-y-4 self-start p-6 bg-neutral rounded-xl ">
          <CircleHelp className="w-12 h-12 text-primary mb-4" />
          <h4 className="font-bold">نیاز به راهنمایی یا مشاوره دارید؟</h4>
          <p className="text-sm mb-4">
            بیایید با هم همکاری کنیم تا یک وب‌ سایت بی‌نظیر بسازیم که شما را از
            رقبا متمایز کند. همین امروز با من تماس بگیرید تا درباره نیازهای
            طراحی وب شما گفتگو کنیم و رؤیای دیجیتال شما را به واقعیت تبدیل کنیم!
            <Rocket className="inline-block mx-2 w-5 h-5 text-primary hover:text-accent" />
          </p>
          <Link href="/contact" className="btn btn-block btn-primary">
            ارتباط با من
          </Link>
        </div>
      </div>
    </section>
  );
}
