import Footer from "@/components/Footer";
import BrandMark from "@/components/BrandMark";

const articles = [
  {
    title: "When Should You Consult an Advocate?",
    intro:
      "Many people avoid consulting an advocate until the problem becomes serious. However, seeking legal advice at the right time can save money, time, and stress.",
    bulletsTitle: "You should consult an advocate when facing:",
    bullets: [
      "Property disputes",
      "Family matters like divorce or maintenance",
      "Criminal complaints or police notices",
      "Business or contract disputes",
    ],
    closing:
      "An experienced advocate helps you understand your legal rights, prepares proper documentation, and represents you effectively before courts and authorities. Early legal consultation ensures better protection of your interests.",
  },
  {
    title: "Importance of Legal Documentation in Property Matters",
    intro:
      "Property disputes are common due to improper or incomplete documentation. Legal documents such as sale deeds, agreements, wills, and power of attorney must be drafted carefully.",
    bulletsTitle: "Proper legal documentation:",
    bullets: [
      "Prevents future disputes",
      "Protects ownership rights",
      "Ensures legal compliance",
      "Helps during registration and verification",
    ],
    closing:
      "Consulting an advocate before signing or executing any property document is always advisable. A legal expert ensures clarity, legality, and security of your property transactions.",
  },
  {
    title: "Know Your Legal Rights as a Citizen",
    intro:
      "Every citizen has legal rights guaranteed by law. Unfortunately, many people are unaware of their rights, which leads to exploitation and injustice.",
    bulletsTitle: "Some fundamental rights include:",
    bullets: [
      "Right to legal representation",
      "Right to property",
      "Right to fair trial",
      "Right to protection against illegal detention",
    ],
    closing:
      "An advocate plays a vital role in protecting these rights and guiding citizens through legal procedures. Awareness of legal rights empowers individuals to make informed decisions.",
  },
];

export default function Articles() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-4">
          <div className="flex justify-center">
            <BrandMark className="h-16 w-16" />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#0f2a55]/70">Legal Articles</p>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#0f2a55]">
            Insights from Advocate Mangesh Ladhe
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Curated writing on timely legal issues for clients across India. Stay informed, stay protected, and consult
            the Chambers for bespoke guidance.
          </p>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8">
          {articles.map((article) => (
            <article key={article.title} className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
              <p className="text-xs uppercase tracking-[0.3em] text-[#0f2a55]/70">Article</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#0f2a55]">{article.title}</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">{article.intro}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#0f2a55]">{article.bulletsTitle}</p>
              <ul className="mt-3 space-y-2 text-slate-700 list-disc list-inside">
                {article.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="mt-6 text-slate-700 leading-relaxed">{article.closing}</p>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
