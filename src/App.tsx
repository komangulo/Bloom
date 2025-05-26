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
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

// Products pages
import TrackingCycle from "./pages/products/TrackingCycle";
import GettingPregnant from "./pages/products/GettingPregnant";
import Pregnancy from "./pages/products/Pregnancy";
import HelpCenter from "./pages/products/HelpCenter";
import FloForPartners from "./pages/products/FloForPartners";
import AnonymousMode from "./pages/products/AnonymousMode";
import FloPreview from "./pages/products/FloPreview";
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

// Admin pages
import AdminUsers from "./pages/AdminUsers";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Main Routes with Navbar and Footer */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <div className="min-h-screen">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/premium" element={<Premium />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/admin/users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
                  {/* Tracker protegido */}
                  <Route path="/tracker" element={<ProtectedRoute requirePremium={false}><Tracker /></ProtectedRoute>} />
                  {/* Products Pages protegidas */}
                  <Route path="/products/*" element={
                    <ProtectedRoute requirePremium={true}>
                      <Routes>
                        <Route path="tracking-cycle" element={<TrackingCycle />} />
                        <Route path="getting-pregnant" element={<GettingPregnant />} />
                        <Route path="pregnancy" element={<Pregnancy />} />
                        <Route path="help-center" element={<HelpCenter />} />
                        <Route path="flo-for-partners" element={<FloForPartners />} />
                        <Route path="anonymous-mode" element={<AnonymousMode />} />
                        <Route path="premium" element={<FloPreview />} />
                        <Route path="symptom-checker" element={<SymptomChecker />} />
                      </Routes>
                    </ProtectedRoute>
                  } />
                  {/* Calculator Pages protegidas */}
                  <Route path="/calculators/*" element={
                    <ProtectedRoute requirePremium={true}>
                      <Routes>
                        <Route path="ovulation" element={<OvulationCalculator />} />
                        <Route path="hcg" element={<HcgCalculator />} />
                        <Route path="pregnancy-test" element={<PregnancyTestCalculator />} />
                        <Route path="menstrual-cycle" element={<MenstrualCycleCalculator />} />
                        <Route path="period" element={<PeriodCalculator />} />
                        <Route path="implantation" element={<ImplantationCalculator />} />
                        <Route path="pregnancy-weeks-to-months" element={<PregnancyWeeksToMonthsCalculator />} />
                        <Route path="pregnancy-due-date" element={<PregnancyDueDateCalculator />} />
                        <Route path="ivf-fet-due-date" element={<IvfFetDueDateCalculator />} />
                        <Route path="due-date-by-ultrasound" element={<DueDateCalculatorByUltrasound />} />
                      </Routes>
                    </ProtectedRoute>
                  } />
                  {/* Catch-all Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
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
