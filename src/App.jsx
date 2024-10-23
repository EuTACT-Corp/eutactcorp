import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./assets/Components/Header";
import Home from "./assets/Components/Home";
import About from "./assets/Components/About";
import Services from "./assets/Components/Services";
import Promises from "./assets/Components/Promises";
import Purpose from "./assets/Components/Purpose";
import Contact from "./assets/Components/Contact";
import Footer from "./assets/Components/Footer";
import PrivacyPolicy from './assets/Components/PrivacyPolicy';

function MainPage() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Promises />
      <Purpose />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Main page with sections */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Separate Privacy Policy page */}
      </Routes>
    </Router>
  );
}

export default App;
