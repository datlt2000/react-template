import React from 'react';
const DressShopLandingPage = React.lazy(() => import('views/landing-page/DressShopLandingPage'));
const ThankYouPage = React.lazy(() => import("views/landing-page/ThankYouPage"));
const ProductPage = React.lazy(() => import('views/landing-page/ProductPage'));

const landingPageRoute = [
    {
        path: '/thank-you',
        exact: true,
        name: "Thank You Page",
        element: <ThankYouPage />
    },
    {
        path: "/product",
        name: "Product Page",
        element: <ProductPage />,
    },
    {
        path: "/",
        name: "Dess Shop Page",
        element: <DressShopLandingPage />,
    }
]

export default landingPageRoute