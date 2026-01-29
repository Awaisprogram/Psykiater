import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingFallback from "./components/provider/LoadingFallback";
import RouteProgress from "./components/provider/RouteProgress";

const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const TherapyPage = lazy(() => import("./pages/TherapyPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <>
      {/* Top progress bar */}
      <RouteProgress />

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/therapy" element={<TherapyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
