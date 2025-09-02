
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Employees from "./pages/Employees";
import LeaveManagement from "./pages/LeaveManagement";
import PerformanceManagement from "./pages/PerformanceManagement";
import DocumentManagement from "./pages/DocumentManagement";
import PayrollSystem from "./pages/PayrollSystem";
import TrainingPrograms from "./pages/TrainingPrograms";
import Announcements from "./pages/Announcements";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/leave" element={<LeaveManagement />} />
          <Route path="/performance" element={<PerformanceManagement />} />
          <Route path="/documents" element={<DocumentManagement />} />
          <Route path="/payroll" element={<PayrollSystem />} />
          <Route path="/training" element={<TrainingPrograms />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
