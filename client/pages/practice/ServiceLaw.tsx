import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function ServiceLaw() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-[#0f2a55] font-semibold">← Back to Home</Link>
          <h1 className="text-xl font-bold text-[#0f2a55]">Service Law</h1>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-[#0f2a55] text-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">Service Law</h2>
            <p className="mt-4 text-white/90 max-w-3xl">
              Service law has its essence in the word “Service” itself, wherein the parties gives their services to government institutions and other non-governmental institutions.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">SERVICE LAW</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 list-disc pl-5 text-slate-700">
                <li>Death-cum-Retirement Benefits</li>
                <li>Reservation and Concessions</li>
                <li>Pensionary Benefits</li>
                <li>Appointment/Dismissal/Suspension/Removal</li>
                <li>Payment of Wages/Gratuity/Salary</li>
                <li>Absorption/Re-appointment</li>
                <li>Appointment on Casual Basis/Contract</li>
                <li>Back Wages</li>
                <li>Compassionate Appointments</li>
                <li>Compensation</li>
                <li>Armed Forces Tribunal</li>
                <li>Departmental Appeal</li>
                <li>Disciplinary Matters</li>
                <li>Employees Compensation</li>
                <li>Ex-gratia Grant</li>
                <li>Ex-serviceman</li>
                <li>Harassment of Staff</li>
                <li>Health and Medical Care</li>
                <li>Lok Ayukta</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2a55]">Know About Service Law</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Service law has its essence in the word “Service” itself, wherein the parties gives their services to government institutions (government aided, semi-aided and un-aided institutions) and other non-governmental institutions. Service laws are enacted by the Parliament of India to protect the rights of individuals against departmental termination/enquiry, pension, gratuity, provident funds, compensation and delays in payment of wages/back-wages, harassment of staff etc.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                In cases related to Service Laws, our team first looks into the grievance of the parties and narrows these down to the reliefs that the client is entitled to. Once the reliefs are identified, in-depth research is conducted on the appropriate laws to strategize every step and address the client’s needs in a timely manner.
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
