import React from "react";
const DashBoard = React.lazy(() => import('views/admin/DashBoard'));

const adminRoute = [
    {
        path: '/dashboard',
        exact: true,
        name: "Dashboard Page",
        element: <DashBoard />
    },
]

export default adminRoute