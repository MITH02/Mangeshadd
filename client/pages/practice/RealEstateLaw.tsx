import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function RealEstateLaw() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-[#0f2a55] font-semibold">← Back to Home</Link>
          <h1 className="text-xl font-bold text-[#0f2a55]">Real Estate Law</h1>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-[#0f2a55] text-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">Real Estate Law</h2>
            <p className="mt-4 text-white/90 max-w-3xl">
              Real Estate cases are regulated under the ambit of Real Estate (Regulation and Development) Act, 2016 (RERA), with the motive to ensure sale of real estate property or project in accordance with the real estate law.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Matters We Handle</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 list-disc pl-5 text-slate-700">
                <li>Complaints against Builders</li>
                <li>For Delayed Possession</li>
                <li>False Advertisement</li>
                <li>Advance Payment</li>
                <li>Improper Registration</li>
                <li>Structural Deficiencies</li>
                <li>Claims for Compensations</li>
                <li>Complaint for Refund of Money with Interest</li>
                <li>Refund of Earnest Money</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Know More About Real Estate Law</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Real Estate cases are regulated under the ambit of Real Estate (Regulation and Development) Act, 2016 (RERA), with the motive to ensure sale of real estate property or project in accordance with the real estate law. These laws protect the interest of homebuyers against malpractices by builders. RERA helps homebuyers in dealing with their disputes with builders.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Experience Of Our Team</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Our team has vast experience in dealing with Real Estate disputes. We have represented clients before various jurisdictions including H-RERA, UP-RERA and Delhi RERA.
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
