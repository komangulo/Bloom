import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Tracker from "./pages/Tracker";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import BlogPage from "./pages/BlogPage";
import DrLaneInterview from "./pages/blog/dr-lane-interview";
import OptimizingOBGYNWorkflow from "./pages/blog/optimizing-obgyn-workflow";
import ESADFrameworkAI from "./pages/blog/esad-framework-ai-obgyn";
import TimeSavingTips from "./pages/blog/time-saving-tips-obgyn";
import TechDataCompassion from "./pages/blog/tech-data-compassion";
import PersonalizedCareOBGYN from "./pages/blog/personalized-care-obgyn";
import NavigatingPerimenopause from "./pages/blog/navigating-perimenopause";
import ManagingPMS from "./pages/blog/managing-pms";
import NutritionHormonalHealth from "./pages/blog/nutrition-hormonal-health";
import ExerciseMenstrualCycle from "./pages/blog/exercise-menstrual-cycle";
import MentalHealthMenstrualCycle from "./pages/blog/mental-health-menstrual-cycle";
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
        {/* Rutas de autenticación (sin layout) */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Layout principal con Navbar y Footer */}
        <Route element={
          <>
            <Navbar />
            <div className="min-h-screen">
              <Outlet />
            </div>
            <Footer />
          </>
        }>
          {/* Rutas públicas */}
          <Route path="/" element={<Index />} />
          <Route path="/premium" element={<Premium />} />
          
          {/* Ruta de dashboard protegida */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          {/* Rutas del blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/dr-lane-interview" element={<DrLaneInterview />} />
          <Route path="/blog/optimizing-obgyn-workflow" element={<OptimizingOBGYNWorkflow />} />
          <Route path="/blog/esad-framework-ai-obgyn" element={<ESADFrameworkAI />} />
          <Route path="/blog/time-saving-tips-obgyn" element={<TimeSavingTips />} />
          <Route path="/blog/tech-data-compassion" element={<TechDataCompassion />} />
          <Route path="/blog/personalized-care-obgyn" element={<PersonalizedCareOBGYN />} />
          <Route path="/blog/navigating-perimenopause" element={<NavigatingPerimenopause />} />
          <Route path="/blog/managing-pms" element={<ManagingPMS />} />
          <Route path="/blog/nutrition-hormonal-health" element={<NutritionHormonalHealth />} />
          <Route path="/blog/exercise-menstrual-cycle" element={<ExerciseMenstrualCycle />} />
          <Route path="/blog/mental-health-menstrual-cycle" element={<MentalHealthMenstrualCycle />} />
          
          {/* Ruta de administración */}
          <Route path="/admin/users" element={
            <ProtectedRoute>
              <AdminUsers />
            </ProtectedRoute>
          } />
          
          {/* Ruta del tracker */}
          <Route path="/tracker" element={
            <ProtectedRoute requirePremium={false}>
              <Tracker />
            </ProtectedRoute>
          } />
          
          {/* Rutas anidadas de productos */}
          <Route path="/products" element={
            <ProtectedRoute requirePremium={true}>
              <Outlet />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="tracking-cycle" replace />} />
            <Route path="tracking-cycle" element={<TrackingCycle />} />
            <Route path="getting-pregnant" element={<GettingPregnant />} />
            <Route path="pregnancy" element={<Pregnancy />} />
            <Route path="help-center" element={<HelpCenter />} />
            <Route path="flo-for-partners" element={<FloForPartners />} />
            <Route path="anonymous-mode" element={<AnonymousMode />} />
            <Route path="premium" element={<FloPreview />} />
            <Route path="symptom-checker" element={<SymptomChecker />} />
            <Route path="*" element={<Navigate to="tracking-cycle" replace />} />
          </Route>
          
          {/* Rutas anidadas de calculadoras */}
          <Route path="/calculators" element={
            <ProtectedRoute requirePremium={true}>
              <Outlet />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="ovulation-calculator" replace />} />
            <Route path="ovulation-calculator" element={<OvulationCalculator />} />
            <Route path="hcg-calculator" element={<HcgCalculator />} />
            <Route path="pregnancy-test-calculator" element={<PregnancyTestCalculator />} />
            <Route path="menstrual-cycle-calculator" element={<MenstrualCycleCalculator />} />
            <Route path="period-calculator" element={<PeriodCalculator />} />
            <Route path="implantation-calculator" element={<ImplantationCalculator />} />
            <Route path="pregnancy-weeks-to-months-calculator" element={<PregnancyWeeksToMonthsCalculator />} />
            <Route path="pregnancy-due-date-calculator" element={<PregnancyDueDateCalculator />} />
            <Route path="ivf-fet-due-date-calculator" element={<IvfFetDueDateCalculator />} />
            <Route path="due-date-calculator-by-ultrasound" element={<DueDateCalculatorByUltrasound />} />
            <Route path="*" element={<Navigate to="ovulation-calculator" replace />} />
          </Route>
          
          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
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
