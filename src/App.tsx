import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InstallationSteps from "./components/InstallationSteps";
import Navigation from "./components/Navigation";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <InstallationSteps />
      <StatsSection />
      <Footer />
    </div>
  );
}

export default App;
