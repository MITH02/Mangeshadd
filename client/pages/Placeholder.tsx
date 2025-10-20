import Footer from "@/components/Footer";

export default function Placeholder() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 grid place-items-center px-6 py-24 text-center">
        <div>
          <h1 className="text-3xl font-bold text-[#0f2a55]">Coming Soon</h1>
          <p className="mt-2 text-slate-600 max-w-xl">This section will be added soon. Meanwhile, explore our Areas Of Practice or contact us for assistance.</p>
          <div className="mt-6">
            <a href="/home#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0f2a55] text-white">Contact Us</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
