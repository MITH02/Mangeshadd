import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function WritPetitions() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-[#0f2a55] font-semibold">← Back to Home</Link>
          <h1 className="text-xl font-bold text-[#0f2a55]">Writ Petitions</h1>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-[#0f2a55] text-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">Writ Petitions</h2>
            <p className="mt-4 text-white/90 max-w-3xl">
              Writ Petitions are generally filed against the order of any government body issuing administrative or judicial order, resulting in restricting or violating fundamental rights of individual as enshrined under the Constitution of India.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Civil / Criminal Petitions</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Writ Petitions can be filed to challenge unlawful actions and orders across civil and criminal domains when fundamental rights are infringed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Know more about Writ Petitions</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Writ Petitions are generally filed against the order of any government body issuing administrative or judicial order, resulting in restricting or violating fundamental rights of individual as enshrined under the Constitution of India. These petitions can only be filed before the Constitutional Courts, with the object to seek relief in relation to the rights as ensured by the Constitution of India.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Experience Of Our Team</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Our team, thus, first understands the nature of order that has been issued/passed by the administrative/judicial/quasi-judicial authority and researches the same before filing petition under the appropriate WRIT as provided under Articles 32 and 226 of the Constitution of India.
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
