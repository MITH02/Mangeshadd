import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import BrandMark from "@/components/BrandMark";

export default function Index() {
  const navigate = useNavigate();

  const handleAgree = () => {
    localStorage.setItem("mladhe_consent", "true");
    navigate("/home");
  };

  const handleDisagree = () => {
    localStorage.removeItem("mladhe_consent");
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="min-h-screen bg-[#edf2fb]">
      <div className="min-h-screen bg-gradient-to-b from-[#0b1f3a] via-[#13294d] to-[#e6ecfb]">
        <header className="w-full px-6 sm:px-10 py-6 flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-3 text-white">
            <BrandMark className="h-16 w-16" />
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-white/80">The Chambers of</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">Mangesh Ladhe</h1>
              <p className="text-sm text-white/70">Attorneys at Law</p>
            </div>
          </div>
          <Button asChild className="hidden sm:inline-flex bg-white/10 border border-white/30 text-white hover:bg-white/20">
            <a href="/home">Enter Website</a>
          </Button>
        </header>
        <main className="max-w-5xl mx-auto px-6 sm:px-8 pb-16">
          <section className="bg-white/80 shadow-2xl rounded-3xl p-6 sm:p-12 mt-0 border border-white/50 backdrop-blur">
            <div className="text-center">
              <BrandMark className="h-32 w-32 mx-auto text-[#0b1f3a]" />
              <h2 className="text-[#0b1f3a] text-3xl sm:text-4xl font-serif font-semibold mt-6 tracking-wide">Mangesh Ladhe</h2>
              <p className="text-[#8b94b2] uppercase tracking-[0.4em] text-xs sm:text-sm">Attorneys at Law</p>
            </div>
            <h3 className="text-[#0f2a55] text-2xl sm:text-3xl font-bold text-center mt-10">Disclaimer</h3>
            <div className="mt-6 sm:mt-8 space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base bg-white/90 p-6 sm:p-8 rounded-2xl border border-slate-100">
              <p>
                The current rules of the Bar Council of India impose restrictions on maintaining a web page and do not permit lawyers to provide information concerning their areas of practice. The Chambers of Mangesh Ladhe are, therefore, constrained from providing any further information on this web page.
              </p>
              <p>
                The rules of the Bar Council of India prohibit law offices from soliciting work or advertising in any manner. By clicking on ‘I AGREE’, the user acknowledges that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  The user wishes to gain more information about The Chambers of Mangesh Ladhe, its practice areas and its advocates, for their own information and use; the information is made available only upon a specific request.
                </li>
                <li>
                  Any information obtained from or material downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer–client relationship; and none of the information on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
                </li>
                <li>
                  The Chambers of Mangesh Ladhe shall not be liable for any consequence of any action taken by the user relying on material/information provided under this website and users must seek independent legal advice for any legal issues.
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button onClick={handleAgree} className="bg-[#0f2a55] hover:bg-[#0f2a55]/90 px-8">I Agree</Button>
              <Button onClick={handleDisagree} variant="secondary" className="bg-white/90 text-[#0f2a55] hover:bg-white">I Disagree</Button>
            </div>
          </section>

          <section className="mt-10 mb-16 bg-white/80 rounded-md p-4 sm:p-6 text-[#0f2a55]">
            <div className="text-center space-y-1 text-sm sm:text-base">
              <p><span className="font-semibold">Address:</span> Office Address: Plot.No.3, Saptak Nagar, Near SRPF gate no.3, Jaitala Road, Nagpur - 440016</p>
              <p><span className="font-semibold">Email:</span> adv.mangeshladhe@gmail.com</p>
              <p><span className="font-semibold">Phone:</span> +91 8308761040</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
