import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function FamilyLaw() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-[#0f2a55] font-semibold">← Back to Home</Link>
          <h1 className="text-xl font-bold text-[#0f2a55]">Family Law Disputes</h1>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-[#0f2a55] text-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">Family Law Disputes</h2>
            <p className="mt-4 text-white/90 max-w-3xl">
              Family Laws comprises of number of legislations which deals in family matters and domestic relations including civil union and domestic partnership.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Matters We Handle</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 list-disc pl-5 text-slate-700">
                <li>Petition for dissolution of marriage</li>
                <li>Maintenance petitions</li>
                <li>Complaint for domestic violence</li>
                <li>Custody and guardianship petition</li>
                <li>Petition for restitution</li>
                <li>Adoption</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Know More About Family Law</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Family Laws comprises of number of legislations which deals in family matters and domestic relations including civil union and domestic partnership. These laws are essential in order to protect and avail the rights arising out of domestic relationships as no other laws directly assigns any rights to the spouse in a matrimonial/domestic relationship.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Experience Of Our Team</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Our team has vast experience in dealing with cases related to Family laws before various fora including the Hon’ble High Court as well as Supreme Court of India. Our team has successfully represented clients in matters concerning Maintenance of wife, Dissolution of Marriage, and custody and guardianship on numerous occasions.
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
