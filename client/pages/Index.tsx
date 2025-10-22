import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1593113410511-1b7073d343f5?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
      <div className="min-h-screen bg-black/55">
        <header className="w-full px-6 sm:px-10 py-6 flex items-center justify-center">
          <div className="flex items-center gap-3 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-[#f0c75e]"><path d="M12 2c-1.1 0-2 .9-2 2v1H7a1 1 0 100 2h10a1 1 0 100-2h-3V4a2 2 0 00-2-2z"/><path d="M6 9a1 1 0 011-1h10a1 1 0 011 1v1.5a5.5 5.5 0 01-11 0V9z"/><path d="M4 20a1 1 0 001 1h14a1 1 0 001-1v-2H4v2z"/></svg>
            <div className="text-center">
              <p className="text-xs tracking-widest uppercase text-white/80">The Chambers of</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">Mangesh Ladhe</h1>
            </div>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mt-6">Disclaimer</h2>
          <div className="mt-6 sm:mt-10 space-y-4 text-white/90 leading-relaxed text-sm sm:text-base bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-lg border border-white/10">
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
