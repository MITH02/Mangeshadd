import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function ConsumerProtectionDisputes() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-[#0f2a55] font-semibold">← Back to Home</Link>
          <h1 className="text-xl font-bold text-[#0f2a55]">Consumer Protection Disputes</h1>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-[#0f2a55] text-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">Consumer Protection Disputes</h2>
            <p className="mt-4 text-white/90 max-w-3xl">
              Laws related to consumer protection have been enacted as a welfare legislation to enable a consumer to claim their rights against the malpractices of service providers.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Matters We Handle</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 list-disc pl-5 text-slate-700">
                <li>Complaint for refund of money in false/misleading advertising</li>
                <li>Complaint for compensation</li>
                <li>Complaint for defect in product/service</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Know More: Consumer Protection Disputes</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Laws related to consumer protection disputes have been enacted as a welfare legislation to enable a consumer to claim their rights against the malpractices of service providers. This field of law includes every person who has availed services or purchased goods for personal consumption where the good or service is defective or not up to the mark. These laws protect consumers from goods hazardous to life and property, and inform them about the quality, quantity, potency, purity, standard and price of goods.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Experience Of Our Team</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Our team has vast experience handling consumer complaints before District, State and National Commissions, as well as before the Hon’ble Supreme Court of India, in matters of defective goods and services. We are well-versed with evolving trends in disputes relating to insurance and compensation for medical negligence.
              </p>
            </div>

            <div className="pt-2">
              <Button asChild className="bg-[#0f2a55] hover:bg-[#0f2a55]/90">
                <a href="#contact">Request a Consultation</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
