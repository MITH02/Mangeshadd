import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-4 border-[#0f2a55] bg-white text-[#0f2a55]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#0f2a55] text-white grid place-items-center font-extrabold">ML</div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-widest opacity-70">The Chambers of</p>
              <p className="text-lg font-extrabold">Mangesh Ladhe</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            The Chambers of Mangesh Ladhe caters to varied clients comprising of corporations, financial institutions, individuals, and NGOs in an array of matters.
          </p>
          <div className="flex items-center gap-3 text-[#0f2a55]">
            {[
              { label: "Facebook", href: "#", svg: (<path d="M13 22v-8h3l1-4h-4V7a1 1 0 011-1h3V2h-3a5 5 0 00-5 5v3H6v4h3v8h4z"/>) },
              { label: "Twitter", href: "#", svg: (<path d="M22 5.8a8.4 8.4 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.6 1 4.2 4.2 0 00-7.1 3.8A12 12 0 013 4.7a4.2 4.2 0 001.3 5.6 4.2 4.2 0 01-1.9-.5v.1a4.2 4.2 0 003.4 4.1 4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9A8.5 8.5 0 012 19.6 12 12 0 008.3 21c7.6 0 11.8-6.3 11.8-11.8v-.5A8.3 8.3 0 0022 5.8z"/>) },
              { label: "YouTube", href: "#", svg: (<path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.8zM9.6 15.5V8.5l6.3 3.5-6.3 3.5z"/>) },
              { label: "Instagram", href: "#", svg: (<path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.8a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z"/>) },
              { label: "LinkedIn", href: "#", svg: (<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v13H0zM9 8h4.7v1.8h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.2 3.4 6.2 7.8V21H20v-6.5c0-1.6 0-3.7-2.2-3.7s-2.6 1.7-2.6 3.6V21H9V8z"/>) },
            ].map(({label, href, svg}) => (
              <a key={label} aria-label={label} href={href} className="rounded-full p-2 ring-1 ring-[#0f2a55]/20 bg-white text-[#0f2a55] hover:bg-[#0f2a55] hover:text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">{svg}</svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-700">
            <li><Link to="/home" className="hover:text-[#f0c75e]">Home</Link></li>
            <li><a href="/home#about" className="hover:text-[#f0c75e]">About Us</a></li>
            <li><a href="/home#areas-of-practice" className="hover:text-[#f0c75e]">Areas Of Practice</a></li>
            <li><a href="/home#contact" className="hover:text-[#f0c75e]">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Information</h4>
          <ul className="space-y-2 text-slate-700">
            <li><Link to="/placeholder/career" className="hover:text-[#f0c75e]">Career</Link></li>
            <li><Link to="/" className="hover:text-[#f0c75e]">Disclaimer</Link></li>
            <li><a href="/home#areas-of-practice" className="hover:text-[#f0c75e]">Areas Of Practice</a></li>
            <li><Link to="/placeholder/videos" className="hover:text-[#f0c75e]">Videos</Link></li>
            <li><Link to="/placeholder/articles" className="hover:text-[#f0c75e]">Articles</Link></li>
            <li><Link to="/placeholder/awards" className="hover:text-[#f0c75e]">Awards & Achievements</Link></li>
          </ul>
        </div>

        <div className="text-slate-700">
          <h4 className="font-semibold mb-4 text-[#0f2a55]">Contact Info</h4>
          <p><span className="font-semibold">Address:</span> Plot.No.3, Saptak Nagar, Near SRPF gate no.3, Jaitala Road, Nagpur - 440016</p>
          <p className="mt-2"><span className="font-semibold">Hours:</span> Closes at 9 PM</p>
          <p className="mt-2"><span className="font-semibold">Phone:</span> +91 8308761040</p>
          <p className="mt-2"><span className="font-semibold">Email:</span> adv.mangeshladhe@gmail.com</p>
        </div>
      </div>
      <div className="bg-[#0f2a55] text-white text-center text-sm py-3">The Chambers of Mangesh Ladhe. 2022 – 2025. All Rights Reserved.</div>
    </footer>
  );
}
