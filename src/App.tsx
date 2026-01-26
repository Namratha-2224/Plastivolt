import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ProcessSection from './components/ProcessSection';
import AIBenefitsSection from './components/AIBenefitsSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import RealTimeAnalysis from './components/RealTimeAnalysis';
import WasteMonitoring from './pages/WasteMonitoring';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

// New Process Pages
import WasteCollection from './pages/process/WasteCollection';
import PreTreatment from './pages/process/PreTreatment';
import ThermalConversion from './pages/process/ThermalConversion';
import EnergyGeneration from './pages/process/EnergyGeneration';
import EmissionsControl from './pages/process/EmissionsControl';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <InfoSection />
      <ProcessSection />
      <RealTimeAnalysis />
      <AIBenefitsSection />
      <StatsSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/waste-monitoring" element={<WasteMonitoring />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          
          {/* New Process Pages */}
          <Route path="/waste-collection" element={<WasteCollection />} />
          <Route path="/pre-treatment" element={<PreTreatment />} />
          <Route path="/thermal-conversion" element={<ThermalConversion />} />
          <Route path="/energy-generation" element={<EnergyGeneration />} />
          <Route path="/emissions-control" element={<EmissionsControl />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
