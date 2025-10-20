import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function CriminalLaw() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-[#0f2a55] font-semibold">← Back to Home</Link>
          <h1 className="text-xl font-bold text-[#0f2a55]">Criminal Law</h1>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-[#0f2a55] text-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">Criminal Law</h2>
            <p className="mt-4 text-white/90 max-w-3xl">
              Extensive help for both prosecution and defense clients in all types of criminal proceedings at all stages of trial.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Matters We Handle</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 list-disc pl-5 text-slate-700">
                <li>Quashing of FIR</li>
                <li>Bail – Regular and Anticipatory (including under Special Statutes)</li>
                <li>Criminal Trial</li>
                <li>Criminal Appeal in High Courts and Supreme Court</li>
                <li>Criminal Revision</li>
                <li>POCSO</li>
                <li>Cheque Bounce</li>
                <li>NDPS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Indian Penal Code, 1860 and Bharatiya Nyaya Sanhita, 2023</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Indian Penal Code also known as “IPC” was enacted by the legislative council on October 6, 1860 on the recommendation of the First Law Commission under the Chairmanship of Thomas Babington Macaulay and commenced on January 1, 1862. It is applicable in India except Jammu & Kashmir, which based on IPC, enacted Ranbir Penal Code (RPC). The IPC comprises 23 chapters and 511 sections. However, the same has now been replaced by Bharatiya Nyaya Sanhita, 2023. Our team has already prepared the road map for the new laws to be used in Courts.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Code Of Criminal Procedure and Bhartiya Nagrik Suraksha Sanhita, 2023</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                CrPC stands for Code of Criminal Procedure. It consolidates and amends the law relating to criminal procedure in India. The assent was granted on January 25, 1974 and it came into operation on April 1, 1974. At present, the Act contains 528 Sections, 2 Schedules and 56 Forms across 37 Chapters. However, it has now been replaced by Bhartiya Nagrik Suraksha Sanhita, 2023. Our team is ready for implementation of the new law for all practical aspects.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Indian Evidence Act, 1872 and Bharatiya Sakshya Act, 2023</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                The Indian Evidence Act, 1872, largely based on English law of evidence, introduced a standard set of law applicable to all citizens. It has eleven chapters and 167 sections and came into force on 1st September 1872. It has now been replaced by Bharatiya Sakshya Act, 2023 with minor modifications. Our team is already equipped with the new provisions for conducting trials.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Experience Of Our Team</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We have a wealth of expertise defending clients in courts across India, including the Supreme Court of India, High Courts, and Sessions Courts, in a variety of criminal cases. Our team comprises competent advocates and professionals adept at handling cases involving murder, rape, POCSO, NDPS, kidnapping, and other crimes under general and special law. We manage critical facets and outcomes of criminal litigation, examining every aspect to suggest the best course of action. We assist at all phases—from FIR registration to final arguments—and handle criminal appeals and revisions in High Courts.
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
