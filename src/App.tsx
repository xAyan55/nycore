import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import VPSHosting from './pages/VPSHosting';
import MinecraftHosting from './pages/MinecraftHosting';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import WhyUsPage from './pages/WhyUsPage';
import FAQPage from './pages/FAQPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-dark-bg text-brand-cream overflow-x-hidden selection:bg-brand-vibrant selection:text-brand-cream">
        {/* Absolute Ambient Background Layers */}
        <div className="absolute top-0 inset-x-0 h-[1000px] bg-gradient-to-b from-brand-deep/30 via-transparent to-transparent pointer-events-none z-0" />
        <div className="absolute top-[1200px] right-0 w-[500px] h-[800px] bg-brand-vibrant/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute bottom-[800px] left-0 w-[500px] h-[800px] bg-brand-pink/3 rounded-full blur-[160px] pointer-events-none z-0" />

        {/* Main Layout */}
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <div>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vps-hosting" element={<VPSHosting />} />
                <Route path="/minecraft-hosting" element={<MinecraftHosting />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/why-us" element={<WhyUsPage />} />
                <Route path="/faq" element={<FAQPage />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
