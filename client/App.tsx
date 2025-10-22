import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CriminalLaw from "./pages/practice/CriminalLaw";
import WhiteCollarCrimes from "./pages/practice/WhiteCollarCrimes";
import WritPetitions from "./pages/practice/WritPetitions";
import CivilCommercialDisputes from "./pages/practice/CivilCommercialDisputes";
import RealEstateLaw from "./pages/practice/RealEstateLaw";
import FamilyLaw from "./pages/practice/FamilyLaw";
import ConsumerProtectionDisputes from "./pages/practice/ConsumerProtectionDisputes";
import CompetitionLaw from "./pages/practice/CompetitionLaw";
import ServiceLaw from "./pages/practice/ServiceLaw";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const consent =
    typeof window !== "undefined" &&
    localStorage.getItem("mladhe_consent") === "true";
  return consent ? children : <Navigate to="/" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/criminal-law"
            element={
              <ProtectedRoute>
                <CriminalLaw />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/white-collar-crimes"
            element={
              <ProtectedRoute>
                <WhiteCollarCrimes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/writ-petitions"
            element={
              <ProtectedRoute>
                <WritPetitions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/civil-and-commercial-disputes"
            element={
              <ProtectedRoute>
                <CivilCommercialDisputes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/real-estate-law"
            element={
              <ProtectedRoute>
                <RealEstateLaw />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/family-law-disputes"
            element={
              <ProtectedRoute>
                <FamilyLaw />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/consumer-protection-disputes"
            element={
              <ProtectedRoute>
                <ConsumerProtectionDisputes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/competition-law"
            element={
              <ProtectedRoute>
                <CompetitionLaw />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/service-law"
            element={
              <ProtectedRoute>
                <ServiceLaw />
              </ProtectedRoute>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/placeholder/:slug" element={<Placeholder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* ✅ Floating WhatsApp Icon */}
        <a
          href="https://wa.me/918308761040?text=Good%20day%2C%20I%20would%20like%20to%20consult%20you%20regarding%20a%20legal%20case.%20Please%20let%20me%20know%20a%20suitable%20time%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all animate-bounce"
        >
          <img
            src="/images/whatsapp-icon.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
