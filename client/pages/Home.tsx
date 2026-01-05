import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Footer from "@/components/Footer";
import BrandMark from "@/components/BrandMark";
import nagpurCourt from "@/logos/Nagpur_Court_Image.png";

export default function Home() {
  const [infoStatus, setInfoStatus] = useState<"idle" | "submitted">("idle");
  const [contactStatus, setContactStatus] = useState<"idle" | "submitted">("idle");

  const areas = [
    { id: "criminal-law", title: "Criminal Law", desc: "Bail, trials, appeals, and defense in criminal matters." },
    { id: "white-collar-crimes", title: "White Collar Crimes", desc: "Economic offenses, fraud, corruption, and regulatory prosecutions." },
    { id: "writ-petitions", title: "Writ Petitions", desc: "High Court and Supreme Court writs for constitutional remedies." },
    { id: "civil-and-commercial-disputes", title: "Civil and Commercial Disputes", desc: "Contract, property, recovery, and commercial litigation." },
    { id: "real-estate-law", title: "Real Estate Law", desc: "RERA, transactions, development, and property disputes." },
    { id: "family-law-disputes", title: "Family Law Disputes", desc: "Divorce, custody, maintenance, domestic violence matters." },
    { id: "consumer-protection-disputes", title: "Consumer Protection Disputes", desc: "Consumer complaints, appeals, and enforcement." },
    { id: "competition-law", title: "Competition Law", desc: "Anti-competitive agreements, abuse of dominance, combinations." },
    { id: "service-law", title: "Service Law", desc: "Employment with govt and institutions; service benefits and disputes." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-4 text-[#0f2a55]">
            <BrandMark className="h-12 w-12" />
            <div className="leading-tight">
              <p className="text-xs tracking-[0.4em] uppercase text-[#0f2a55]/70">The Chambers of</p>
              <h1 className="text-xl font-bold tracking-wide">Mangesh Ladhe</h1>
              <p className="text-xs text-[#0f2a55]/70">Attorneys at Law</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[#0f2a55]">
            <a href="/home" className="hover:text-[#f0c75e]">Home</a>
            <a href="#about" className="hover:text-[#f0c75e]">About</a>
            <a href="/placeholder/publications-media" className="hover:text-[#f0c75e]">Publications & Media</a>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <span className="inline-flex items-center gap-1 hover:text-[#f0c75e]">Areas Of Practice
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                {areas.map((a) => (
                  <DropdownMenuItem key={a.id} asChild>
                    <a href={`#${a.id}`}>{a.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#contact" className="hover:text-[#f0c75e]">Contact</a>
          </nav>
          <Button asChild className="bg-[#0f2a55] hover:bg-[#0f2a55]/90">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative isolate overflow-hidden text-white">
          <img
            src={nagpurCourt}
            alt="Nagpur Court"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/95 via-[#0b1f3a]/70 to-transparent" />
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 text-center flex flex-col items-center gap-8">
            <div className="space-y-6 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">The Chambers of</p>
              {/*<h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight">*/}
              {/*  Advocate Mangesh Ladhe – India’s Most Trusted High Court & Supreme Court Lawyer*/}
              {/*</h1>*/}
              <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                Welcome to the Chambers of Adv. Mangesh Ladhe, established by Adv. Mangesh Ladhe, an advocate practicing at the Bombay High Court, Nagpur Bench. Renowned for their sharp wit and exceptional interpretational skills, Adv. Mangesh and his team are adept at resolving complex legal challenges with precision and clarity.
              </p>
              <p className="text-white/80 leading-relaxed">
                Advocate Mangesh Ladhe represents clients across civil and criminal matters, constitutional litigation, writs, and corporate advisory with utmost diligence and integrity.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#f0c75e] text-[#0b1f3a] hover:bg-[#f0c75e]/90">Request Consultation</Button>
              <Button asChild className="bg-white/10 border border-white/30 text-white hover:bg-white/20">
                <a href="#areas-of-practice">View Practice Areas</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="areas-of-practice" className="py-16 bg-gradient-to-b from-[#f7f9ff] to-white">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0f2a55]">Areas Of Practice</h3>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Special flip card for Criminal Law */}
              <div id="criminal-law" className="group flip-card">
                <div className="flip-inner relative rounded-lg border shadow-sm bg-[#1f1f1f] text-white min-h-[220px]">
                  <div className="flip-face absolute inset-0 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#f0c75e]">
                      <path d="M2 12h14" />
                      <path d="M9 3v18" />
                      <path d="M19 8l-4 4 4 4" />
                    </svg>
                    <h4 className="text-base font-semibold tracking-wide">CRIMINAL LAW</h4>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-lg p-6 bg-[#111] text-white/90 flex flex-col justify-between">
                    <p>Extensive help for both prosecution and defense clients in all types of criminal proceedings at all stages of trial.</p>
                    <div className="pt-4">
                      <a href="/practice/criminal-law" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f0c75e] text-[#0f2a55] font-medium">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* White Collar Crimes flip card */}
              <div id="white-collar-crimes" className="group flip-card">
                <div className="flip-inner relative rounded-lg border shadow-sm bg-[#1f1f1f] text-white min-h-[220px]">
                  <div className="flip-face absolute inset-0 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#f0c75e]">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9 12h6M12 9v6" />
                    </svg>
                    <h4 className="text-center text-base font-semibold tracking-wide">WHITE COLLAR CRIMES</h4>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-lg p-6 bg-[#111] text-white/90 flex flex-col justify-between">
                    <p>When a person or group of persons violate the law in the course of a legitimate business enterprise or occupation is termed as a White-collar crime.</p>
                    <div className="pt-4">
                      <a href="/practice/white-collar-crimes" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f0c75e] text-[#0f2a55] font-medium">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Writ Petitions flip card */}
              <div id="writ-petitions" className="group flip-card">
                <div className="flip-inner relative rounded-lg border shadow-sm bg-[#1f1f1f] text-white min-h-[220px]">
                  <div className="flip-face absolute inset-0 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#f0c75e]">
                      <path d="M4 6h16M4 12h16M4 18h10" />
                    </svg>
                    <h4 className="text-center text-base font-semibold tracking-wide">WRIT PETITIONS</h4>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-lg p-6 bg-[#111] text-white/90 flex flex-col justify-between">
                    <p>Writ Petitions are generally filed against the order of any government body issuing administrative or judicial order, resulting in restricting or violating fundamental rights of individual as enshrined under the Constitution of India.</p>
                    <div className="pt-4">
                      <a href="/practice/writ-petitions" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f0c75e] text-[#0f2a55] font-medium">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Civil & Commercial Disputes flip card */}
              <div id="civil-and-commercial-disputes" className="group flip-card">
                <div className="flip-inner relative rounded-lg border shadow-sm bg-[#1f1f1f] text-white min-h-[220px]">
                  <div className="flip-face absolute inset-0 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#f0c75e]">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h6" />
                    </svg>
                    <h4 className="text-center text-base font-semibold tracking-wide">CIVIL & COMMERCIAL DISPUTES</h4>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-lg p-6 bg-[#111] text-white/90 flex flex-col justify-between">
                    <p>Civil and Commercial suits are filed before various fora seeking a resolution of a civil dispute between the parties.</p>
                    <div className="pt-4">
                      <a href="/practice/civil-and-commercial-disputes" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f0c75e] text-[#0f2a55] font-medium">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Estate Law flip card */}
              <div id="real-estate-law" className="group flip-card">
                <div className="flip-inner relative rounded-lg border shadow-sm bg-[#1f1f1f] text-white min-h-[220px]">
                  <div className="flip-face absolute inset-0 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#f0c75e]">
                      <path d="M3 10l9-7 9 7v8a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H3z" />
                    </svg>
                    <h4 className="text-center text-base font-semibold tracking-wide">REAL ESTATE LAW</h4>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-lg p-6 bg-[#111] text-white/90 flex flex-col justify-between">
                    <p>Real Estate cases are regulated under the ambit of Real Estate Act, 2016 (RERA), ensuring sale of real estate property or project in accordance with law.</p>
                    <div className="pt-4">
                      <a href="/practice/real-estate-law" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f0c75e] text-[#0f2a55] font-medium">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Family Law Disputes flip card */}
              <div id="family-law-disputes" className="group flip-card">
                <div className="flip-inner relative rounded-lg border shadow-sm bg-[#1f1f1f] text-white min-h-[220px]">
                  <div className="flip-face absolute inset-0 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#f0c75e]">
                      <path d="M7 11a3 3 0 116 0M3 20a4 4 0 018 0M16 13a3 3 0 116 0M13 20a4 4 0 118 0" />
                    </svg>
                    <h4 className="text-center text-base font-semibold tracking-wide">FAMILY LAW DISPUTES</h4>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-lg p-6 bg-[#111] text-white/90 flex flex-col justify-between">
                    <p>Family Laws comprises of number of legislations which deals in family matters and domestic relations including civil union and domestic partnership.</p>
                    <div className="pt-4">
                      <a href="/practice/family-law-disputes" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f0c75e] text-[#0f2a55] font-medium">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consumer Protection Disputes flip card */}
              <div id="consumer-protection-disputes" className="group flip-card">
                <div className="flip-inner relative rounded-lg border shadow-sm bg-[#1f1f1f] text-white min-h-[220px]">
                  <div className="flip-face absolute inset-0 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#f0c75e]">
                      <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4-6.5 4 2-7L2 9h7z" />
                    </svg>
                    <h4 className="text-center text-base font-semibold tracking-wide">CONSUMER PROTECTION DISPUTES</h4>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-lg p-6 bg-[#111] text-white/90 flex flex-col justify-between">
                    <p>Laws related to consumer protection enable consumers to claim their rights against malpractices of service providers.</p>
                    <div className="pt-4">
                      <a href="/practice/consumer-protection-disputes" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f0c75e] text-[#0f2a55] font-medium">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competition Law flip card */}
              <div id="competition-law" className="group flip-card">
                <div className="flip-inner relative rounded-lg border shadow-sm bg-[#1f1f1f] text-white min-h-[220px]">
                  <div className="flip-face absolute inset-0 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#f0c75e]">
                      <path d="M4 16h16M6 12h12M8 8h8M10 4h4" />
                    </svg>
                    <h4 className="text-center text-base font-semibold tracking-wide">COMPETITION LAW</h4>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-lg p-6 bg-[#111] text-white/90 flex flex-col justify-between">
                    <p>Competition Law is a niche area of practice, however, its roots can be traced to ancient times, wherein the businesses were regulated under the orders of consortium’s of guilds.</p>
                    <div className="pt-4">
                      <a href="/practice/competition-law" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f0c75e] text-[#0f2a55] font-medium">COMPETITION LAWS
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Law flip card */}
              <div id="service-law" className="group flip-card">
                <div className="flip-inner relative rounded-lg border shadow-sm bg-[#1f1f1f] text-white min-h-[220px]">
                  <div className="flip-face absolute inset-0 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#f0c75e]">
                      <path d="M6 7h12M6 12h12M6 17h8" />
                    </svg>
                    <h4 className="text-center text-base font-semibold tracking-wide">SERVICE LAW</h4>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-lg p-6 bg-[#111] text-white/90 flex flex-col justify-between">
                    <p>Service law has its essence in the word “Service” itself, wherein the parties give their services to government and other institutions.</p>
                    <div className="pt-4">
                      <a href="/practice/service-law" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f0c75e] text-[#0f2a55] font-medium">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other areas */}
              {areas.filter(a => a.id !== "criminal-law" && a.id !== "white-collar-crimes" && a.id !== "writ-petitions" && a.id !== "civil-and-commercial-disputes" && a.id !== "real-estate-law" && a.id !== "family-law-disputes" && a.id !== "consumer-protection-disputes" && a.id !== "competition-law" && a.id !== "service-law").map((item) => (
                <div id={item.id} key={item.id} className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow scroll-mt-28">
                  <h4 className="text-lg font-semibold text-[#0f2a55]">{item.title}</h4>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="inquiry" className="bg-white">
          <div className="bg-gradient-to-r from-[#2c2c2c] to-[#cfcfcf] text-white text-center py-5">
            <p className="uppercase tracking-widest text-sm md:text-base">We believe in access to justice for all</p>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-start bg-slate-50">
            <div className="w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F428ecd5431db415eb36315ca1678cf02%2F87b3ad5f6bd84f8599208ea5b8d4ebb5?format=webp&width=1200"
                alt="We will defend your legal rights"
                className="rounded-md shadow-md w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0f2a55]">See information</h3>
              <form
                className="mt-4 bg-white rounded-lg border p-6 grid gap-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setInfoStatus("submitted");
                }}
              >
                <label className="text-sm font-medium text-slate-700" htmlFor="info-name">Full Name <span className="text-red-500">*</span></label>
                <input id="info-name" className="border rounded-md px-3 py-2" placeholder="Full Name" required />
                <label className="text-sm font-medium text-slate-700" htmlFor="info-email">Email <span className="text-red-500">*</span></label>
                <input id="info-email" type="email" className="border rounded-md px-3 py-2" placeholder="Email" required />
                <label className="text-sm font-medium text-slate-700" htmlFor="info-case">Choose Your Case <span className="text-red-500">*</span></label>
                <select id="info-case" className="border rounded-md px-3 py-2" defaultValue="" required>
                  <option value="" disabled>Choose Your Case *</option>
                  <option>Criminal Law</option>
                  <option>White Collar Crimes</option>
                  <option>Writ Petitions</option>
                  <option>Civil and Commercial Disputes</option>
                  <option>Real Estate Law</option>
                  <option>Family Law Disputes</option>
                  <option>Consumer Protection Disputes</option>
                  <option>Competition Law</option>
                  <option>Service Law</option>
                  <option>Other</option>
                </select>
                <button type="submit" className="justify-self-start inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0f2a55] text-white hover:bg-[#0f2a55]/90">Submit</button>
                {infoStatus === "submitted" && (
                  <p className="text-green-600 text-sm font-semibold" aria-live="polite">Submitted</p>
                )}
              </form>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/images/AdvocateImage.jpg"
              alt="Law books"
              className="rounded-lg shadow-md object-cover object-[50%_20%] h-72 w-full"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f2a55]">
                About Advocate Mangesh Ladhe
              </h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                With extensive experience across multiple jurisdictions, Advocate
                Mangesh Ladhe combines strategic litigation with precise legal
                drafting to deliver effective solutions. The Chambers uphold the
                highest standards of confidentiality, professionalism, and client
                service.
              </p>
            </div>
          </div>
        </section>


        <section id="contact" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0f2a55]">Contact</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-8">
              <div className="space-y-3 text-slate-700">
                <p><span className="font-semibold text-[#0f2a55]">Address:</span> Office Address: Plot.No.3, Saptak Nagar, Near SRPF gate no.3, Jaitala Road, Nagpur - 440016</p>
                <p><span className="font-semibold text-[#0f2a55]">Email:</span> adv.mangeshladhe@gmail.com</p>
                <p><span className="font-semibold text-[#0f2a55]">Phone:</span> +91 8308761040</p>
                <p className="text-sm text-slate-500">Office hours: Mon–Sun, 10:00 AM – 09:00 PM</p>
              </div>
              <form
                className="bg-white rounded-lg border p-6 grid gap-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setContactStatus("submitted");
                }}
              >
                <input className="border rounded-md px-3 py-2" placeholder="Full Name *" required />
                <input type="email" className="border rounded-md px-3 py-2" placeholder="Email *" required />
                <select className="border rounded-md px-3 py-2" defaultValue="" required>
                  <option value="" disabled>Choose Your Case *</option>
                  <option>Criminal Law</option>
                  <option>White Collar Crimes</option>
                  <option>Writ Petitions</option>
                  <option>Civil and Commercial Disputes</option>
                  <option>Real Estate Law</option>
                  <option>Family Law Disputes</option>
                  <option>Consumer Protection Disputes</option>
                  <option>Competition Law</option>
                  <option>Service Law</option>
                  <option>Other</option>
                </select>
                <input className="border rounded-md px-3 py-2" placeholder="Phone" />
                <textarea className="border rounded-md px-3 py-2 h-28" placeholder="Message" />
                <Button type="submit" className="bg-[#0f2a55] hover:bg-[#0f2a55]/90">Submit</Button>
                {contactStatus === "submitted" && (
                  <p className="text-green-600 text-sm font-semibold" aria-live="polite">Submitted</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
