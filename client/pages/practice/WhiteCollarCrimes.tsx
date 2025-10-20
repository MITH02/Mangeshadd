import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function WhiteCollarCrimes() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-[#0f2a55] font-semibold">← Back to Home</Link>
          <h1 className="text-xl font-bold text-[#0f2a55]">White Collar Crimes</h1>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-[#0f2a55] text-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">White Collar Crimes</h2>
            <p className="mt-4 text-white/90 max-w-3xl">
              When a person or group of persons violate the law in the course of a legitimate business enterprise or occupation is termed as a White-collar crime.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Matters We Handle</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 list-disc pl-5 text-slate-700">
                <li>Fraud</li>
                <li>Bribery</li>
                <li>Money Laundering</li>
                <li>Tax Evasion</li>
                <li>Embezzlement</li>
                <li>Cybercrime</li>
                <li>Insider Trading</li>
                <li>Counterfeiting</li>
                <li>Blackmailing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">About White Collar Crimes</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                The term "white-collar crime" comes from an outdated assumption that business executives wear white shirts and ties. When a person or group of persons violate the law in the course of a legitimate business enterprise or occupation, it is termed as a white-collar crime. Secondly, the execution of a white-collar crime often involves the co-operation and participation of many people. These crimes are non-violent offenses that usually involve deceit, breach of trust, or manipulation for financial gain. They are often complex and heavily scrutinized by federal agencies, making them daunting to defend against.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Experience Of Our Team</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Our team first understands the specific charges faced by the accused persons. Since these crimes are governed by various statutes, our team studies the nuances of these statutes to mount an effective defence strategy.
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
