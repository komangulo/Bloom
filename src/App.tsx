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

// Componente de layout principal que incluye Navbar y Footer
const MainLayout = () => (
  <>
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </>
);

const AppContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas de autenticación (sin layout) */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Layout principal con Navbar y Footer */}
        <Route element={<MainLayout />}>
          {/* Rutas públicas */}
          <Route path="/" element={<Index />} />
          <Route path="/premium" element={<Premium />} />
          
          {/* Rutas del blog (públicas) */}
          <Route path="/blog">
            <Route index element={<BlogPage />} />
            <Route path="dr-lane-interview" element={<DrLaneInterview />} />
            <Route path="optimizing-obgyn-workflow" element={<OptimizingOBGYNWorkflow />} />
            <Route path="esad-framework-ai-obgyn" element={<ESADFrameworkAI />} />
            <Route path="time-saving-tips-obgyn" element={<TimeSavingTips />} />
            <Route path="tech-data-compassion" element={<TechDataCompassion />} />
            <Route path="personalized-care-obgyn" element={<PersonalizedCareOBGYN />} />
            <Route path="navigating-perimenopause" element={<NavigatingPerimenopause />} />
            <Route path="managing-pms" element={<ManagingPMS />} />
            <Route path="nutrition-hormonal-health" element={<NutritionHormonalHealth />} />
            <Route path="exercise-menstrual-cycle" element={<ExerciseMenstrualCycle />} />
            <Route path="mental-health-menstrual-cycle" element={<MentalHealthMenstrualCycle />} />
          </Route>
          
          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute requirePremium={false}>
            <Outlet />
          </ProtectedRoute>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tracker" element={<Tracker />} />
            
            {/* Ruta de administración */}
            <Route path="/admin/users" element={
              <ProtectedRoute requirePremium={true}>
                <AdminUsers />
              </ProtectedRoute>
            } />
            
            {/* Rutas de productos protegidas */}
            <Route path="/products/tracking-cycle" element={<TrackingCycle />} />
            <Route path="/products/getting-pregnant" element={<GettingPregnant />} />
            <Route path="/products/pregnancy" element={<Pregnancy />} />
            <Route path="/products/help-center" element={<HelpCenter />} />
            <Route path="/products/flo-for-partners" element={<FloForPartners />} />
            <Route path="/products/anonymous-mode" element={<AnonymousMode />} />
            <Route path="/products/flo-preview" element={<FloPreview />} />
            <Route path="/products/symptom-checker" element={<SymptomChecker />} />
            
            {/* Rutas de calculadoras protegidas */}
            <Route path="/calculators">
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
            </Route>
          
          </Route>
          
          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

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
