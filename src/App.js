import './App.css';
import 'css/dark.css';
import 'css/all.css';
import 'css/light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "pages/MainLandingPage.js";
import DressShopLandingPage from 'pages/DressShopLandingPage';
import ThankYouPage from "pages/ThankYouPage.js";

import ProductPage from 'pages/ProductPage';
import { HashRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  document.body.setAttribute('data-theme', 'light')
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route path="/react-template/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/react-template/components/:type/:name" element={<ComponentRenderer />} /> */}
          <Route path="/react-template/thank-you" element={<ThankYouPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route exact path="/" element={<DressShopLandingPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}