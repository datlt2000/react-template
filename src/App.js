import './App.css';
import 'css/dark.css';
import 'css/all.css';
import 'css/light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "pages/MainLandingPage.js";
import DressShopLandingPage from 'pages/DressShopLandingPage';
import ThankYouPage from "pages/ThankYouPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  document.body.setAttribute('data-theme', 'light')
  return (
    <>
      <Router>
        <Routes>
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/react-template/" element={<DressShopLandingPage />} />
          <Route path="/main" element={<MainLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}