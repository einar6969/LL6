import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProceduresPage from './pages/ProceduresPage';
import StaffPage from './pages/StaffPage';
import BookingPage from './pages/BookingPage';
import PreExamination from './pages/ProceduresPage/PreExamination';
import TaralindPage from './pages/TaralindPage';
import AugnlaekningarPage from './pages/AugnlaekningarPage';
import SjonskerdingarPage from './pages/AugnlaekningarPage/SubPages/SjonskerdingarPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/um-sjonlag" element={<AboutUsPage />} />
            <Route path="/adgerdir" element={<ProceduresPage />} />
            <Route path="/starfsfolk" element={<StaffPage />} />
            <Route path="/panta-tima" element={<BookingPage />} />
            <Route path="/forskodun" element={<PreExamination />} />
            <Route path="/taralind" element={<TaralindPage />} />
            <Route path="/augnlaekningar" element={<AugnlaekningarPage />} />
            <Route path="/augnlaekningar/sjonskerdingar" element={<SjonskerdingarPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;