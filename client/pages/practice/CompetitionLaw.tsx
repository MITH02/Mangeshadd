import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function CompetitionLaw() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-[#0f2a55] font-semibold">← Back to Home</Link>
          <h1 className="text-xl font-bold text-[#0f2a55]">Competition Law</h1>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-[#0f2a55] text-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">Competition Law</h2>
            <p className="mt-4 text-white/90 max-w-3xl">
              Competition Law is a niche area of practice, however, its roots can be traced to ancient times, wherein businesses were regulated under orders of consortiums of guilds.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">COMPETITION LAWS</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We advise and represent on anti-competitive agreements, abuse of dominant position, combinations (mergers and acquisitions) and CCI proceedings, from investigation to appeals.
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
