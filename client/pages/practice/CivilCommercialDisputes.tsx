import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function CivilCommercialDisputes() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-[#0f2a55] font-semibold">← Back to Home</Link>
          <h1 className="text-xl font-bold text-[#0f2a55]">Civil and Commercial Disputes</h1>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-[#0f2a55] text-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">Civil and Commercial Disputes</h2>
            <p className="mt-4 text-white/90 max-w-3xl">
              Civil and Commercial suits are filed before various fora seeking a resolution of a civil dispute between the parties.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Matters We Handle</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 list-disc pl-5 text-slate-700">
                <li>Suit for Partition</li>
                <li>Suit for Injunction</li>
                <li>Execution Petition of property</li>
                <li>Suit for Eviction</li>
                <li>Suit for Declaration of rights</li>
                <li>Probate Suit</li>
                <li>Suit for Damages/Compensation and Mesne Profits</li>
                <li>Suit for Specific Performance of Contract</li>
                <li>Suit for Recovery of Money</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">What is a Civil and Commercial Suit?</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Civil and Commercial suits are filed before various fora seeking a resolution of a civil dispute between the parties. These suits vary based on the facts and circumstances of each case and are tailored to the relief and requirements of clients. They generally involve application of the Code of Civil Procedure, 1908; Indian Evidence Act, 1872 (now Bharatiya Sakshya Act, 2023); Contract Act, 1872; Specific Relief Act, 1963; the Commercial Courts Act, 2015; and related legislation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Experience Of Our Team</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Our team has extensive experience across distinct civil legislations to assist clients in Civil and Commercial litigation. We approach every situation—drafting and filing of suits/written statements—with great care and caution, as a well-drafted suit is a battle half won. With in-depth research, we conduct trials through examination of parties and evidence. We further assist in filing Review Petitions, Revision Petitions, and Appeals arising out of final Orders and Judgments in Civil and Commercial disputes.
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
