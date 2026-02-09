import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import News from "./pages/News";
import Projects from "./pages/Projects";
import TeamBerg from "./pages/TeamBerg";
import DerBau from "./pages/DerBau";
import Works from "./pages/Works"; // neu hinzugefügt
import About from "./pages/About";
import Instalinks from "./pages/instalinks"; // neu hinzugefügt
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
          <Route path="/news" element={<News />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/works" element={<Works />} /> {/* neu */}
          <Route path="/projects/teamberg" element={<TeamBerg />} />
          <Route path="/projects/derbau" element={<DerBau />} />
          <Route path="/about" element={<About />} />
          <Route path="/instalinks" element={<Instalinks />} /> {/* neu */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

