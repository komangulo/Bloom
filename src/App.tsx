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
import PremiumRoute from "./components/PremiumRoute";

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

const AppContent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/premium" element={<Premium />} />
          
          {/* Authentication Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Protected Premium Routes */}
          <Route path="/dashboard" element={
            <PremiumRoute>
              <Dashboard />
            </PremiumRoute>
          } />

          {/* Products Pages - All Protected */}
          <Route path="/products/tracking-cycle" element={
            <PremiumRoute>
              <TrackingCycle />
            </PremiumRoute>
          } />
          <Route path="/products/getting-pregnant" element={
            <PremiumRoute>
              <GettingPregnant />
            </PremiumRoute>
          } />
          <Route path="/products/pregnancy" element={
            <PremiumRoute>
              <Pregnancy />
            </PremiumRoute>
          } />
          <Route path="/products/help-center" element={
            <PremiumRoute>
              <HelpCenter />
            </PremiumRoute>
          } />
          <Route path="/products/flo-for-partners" element={
            <PremiumRoute>
              <FloForPartners />
            </PremiumRoute>
          } />
          <Route path="/products/anonymous-mode" element={
            <PremiumRoute>
              <AnonymousMode />
            </PremiumRoute>
          } />
          <Route path="/products/app-reviews" element={
            <PremiumRoute>
              <FloAppReviews />
            </PremiumRoute>
          } />
          <Route path="/products/premium" element={
            <PremiumRoute>
              <FloPreview />
            </PremiumRoute>
          } />
          <Route path="/products/secret-chats" element={
            <PremiumRoute>
              <SecretChats />
            </PremiumRoute>
          } />
          <Route path="/products/symptom-checker" element={
            <PremiumRoute>
              <SymptomChecker />
            </PremiumRoute>
          } />

          {/* Calculator Pages - All Protected */}
          <Route path="/calculators/ovulation" element={
            <PremiumRoute>
              <OvulationCalculator />
            </PremiumRoute>
          } />
          <Route path="/calculators/hcg" element={
            <PremiumRoute>
              <HcgCalculator />
            </PremiumRoute>
          } />
          <Route path="/calculators/pregnancy-test" element={
            <PremiumRoute>
              <PregnancyTestCalculator />
            </PremiumRoute>
          } />
          <Route path="/calculators/menstrual-cycle" element={
            <PremiumRoute>
              <MenstrualCycleCalculator />
            </PremiumRoute>
          } />
          <Route path="/calculators/period" element={
            <PremiumRoute>
              <PeriodCalculator />
            </PremiumRoute>
          } />
          <Route path="/calculators/implantation" element={
            <PremiumRoute>
              <ImplantationCalculator />
            </PremiumRoute>
          } />
          <Route path="/calculators/pregnancy-weeks-to-months" element={
            <PremiumRoute>
              <PregnancyWeeksToMonthsCalculator />
            </PremiumRoute>
          } />
          <Route path="/calculators/pregnancy-due-date" element={
            <PremiumRoute>
              <PregnancyDueDateCalculator />
            </PremiumRoute>
          } />
          <Route path="/calculators/ivf-fet-due-date" element={
            <PremiumRoute>
              <IvfFetDueDateCalculator />
            </PremiumRoute>
          } />
          <Route path="/calculators/due-date-by-ultrasound" element={
            <PremiumRoute>
              <DueDateCalculatorByUltrasound />
            </PremiumRoute>
          } />

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
