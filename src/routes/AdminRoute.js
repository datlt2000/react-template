import React from "react";
const Containers = React.lazy(() => import('views/admin/Containers'));
const Images = React.lazy(() => import('views/admin/Images'));
const Volumes = React.lazy(() => import('views/admin/Volumes'));

const adminRoute = [
    {
        path: '/containers',
        exact: true,
        name: "Containers Page",
        element: <Containers />
    },
    {
        path: '/images',
        exact: true,
        name: "Images Page",
        element: <Images />
    },
    {
        path: '/volumes',
        exact: true,
        name: "Volumes Page",
        element: <Volumes />
    },
]

export default adminRoute