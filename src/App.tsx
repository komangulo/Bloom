
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Tracker from "./pages/Tracker";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";
import { SignIn, SignUp, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

// Products pages
import TrackingCycle from "./pages/products/TrackingCycle";
import GettingPregnant from "./pages/products/GettingPregnant";
import Pregnancy from "./pages/products/Pregnancy";
import HelpCenter from "./pages/products/HelpCenter";
import FloForPartners from "./pages/products/FloForPartners";
import AnonymousMode from "./pages/products/AnonymousMode";
import FloAppReviews from "./pages/products/FloAppReviews";
import FloPreview from "./pages/products/FloPreview";
import SecretChats from "./pages/products/SecretChats";
import SymptomChecker from "./pages/products/SymptomChecker";

// Calculator pages
import OvulationCalculator from "./pages/calculators/OvulationCalculator";
import HcgCalculator from "./pages/calculators/HcgCalculator";
import PregnancyTestCalculator from "./pages/calculators/PregnancyTestCalculator";
import MenstrualCycleCalculator from "./pages/calculators/MenstrualCycleCalculator";
import PeriodCalculator from "./pages/calculators/PeriodCalculator";
import ImplantationCalculator from "./pages/calculators/ImplantationCalculator";
import PregnancyWeeksToMonthsCalculator from "./pages/calculators/PregnancyWeeksToMonthsCalculator";
import PregnancyDueDateCalculator from "./pages/calculators/PregnancyDueDateCalculator";
import IvfFetDueDateCalculator from "./pages/calculators/IvfFetDueDateCalculator";
import DueDateCalculatorByUltrasound from "./pages/calculators/DueDateCalculatorByUltrasound";

const queryClient = new QueryClient();

// Create a component that will wrap the app content
function AppContent() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/premium" element={<Premium />} />
          
          {/* Authentication Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

          {/* Products Pages */}
          <Route path="/products/tracking-cycle" element={<TrackingCycle />} />
          <Route path="/products/getting-pregnant" element={<GettingPregnant />} />
          <Route path="/products/pregnancy" element={<Pregnancy />} />
          <Route path="/products/help-center" element={<HelpCenter />} />
          <Route path="/products/flo-for-partners" element={<FloForPartners />} />
          <Route path="/products/anonymous-mode" element={<AnonymousMode />} />
          <Route path="/products/app-reviews" element={<FloAppReviews />} />
          <Route path="/products/premium" element={<FloPreview />} />
          <Route path="/products/secret-chats" element={<SecretChats />} />
          <Route path="/products/symptom-checker" element={<SymptomChecker />} />

          {/* Calculator Pages */}
          <Route path="/calculators/ovulation" element={<OvulationCalculator />} />
          <Route path="/calculators/hcg" element={<HcgCalculator />} />
          <Route path="/calculators/pregnancy-test" element={<PregnancyTestCalculator />} />
          <Route path="/calculators/menstrual-cycle" element={<MenstrualCycleCalculator />} />
          <Route path="/calculators/period" element={<PeriodCalculator />} />
          <Route path="/calculators/implantation" element={<ImplantationCalculator />} />
          <Route path="/calculators/pregnancy-weeks-to-months" element={<PregnancyWeeksToMonthsCalculator />} />
          <Route path="/calculators/pregnancy-due-date" element={<PregnancyDueDateCalculator />} />
          <Route path="/calculators/ivf-fet-due-date" element={<IvfFetDueDateCalculator />} />
          <Route path="/calculators/due-date-by-ultrasound" element={<DueDateCalculatorByUltrasound />} />

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

