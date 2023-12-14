import {
    createBrowserRouter,
} from "react-router-dom";
import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "pages/MainLandingPage.js";
import DressShopLandingPage from 'pages/DressShopLandingPage';
import ThankYouPage from "pages/ThankYouPage";

import ProductPage from 'pages/ProductPage';
const router = createBrowserRouter([
    {
        path: '/thank-you',
        element: <ThankYouPage />
    },
    {
        path: "/product",
        element: <ProductPage />
    },
    {
        path: "/",
        element: <DressShopLandingPage />
    }
], { basename: process.env.REACT_APP_BASE_URL });
export default router;