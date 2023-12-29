import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faHandPointer,
    faNoteSticky,
    faStar
} from '@fortawesome/free-regular-svg-icons';
import { faCalculator, faChartPie, faAudioDescription, faDroplet, faPencil, faPuzzlePiece, faGauge } from '@fortawesome/free-solid-svg-icons';

const _nav = [
    {
        name: 'Dashboard',
        to: '/dashboard',
        icon: <FontAwesomeIcon icon={faGauge} size="lg" />,
        badge: {
            color: 'info',
            text: 'NEW',
        },
    },
    {
        name: 'Theme',
    },
    {
        name: 'Colors',
        to: '/theme/colors',
        icon: <FontAwesomeIcon icon={faDroplet} size="lg" />,
    },
    {
        name: 'Typography',
        to: '/theme/typography',
        icon: <FontAwesomeIcon icon={faPencil} size="lg" />,
    },
    {
        name: 'Base',
        icon: <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />,
        items: [
            {
                name: 'Accordion',
                to: '/base/accordion',
                icon: <FontAwesomeIcon icon={faCalculator} size="lg" />,
            },
            {
                name: 'Breadcrumb',
                to: '/base/breadcrumbs',
                icon: <FontAwesomeIcon icon={faChartPie} size="lg" />,
            },
            {
                name: 'Cards',
                to: '/base/cards',
                icon: <FontAwesomeIcon icon={faAudioDescription} size="lg" />,
            },
            {
                name: 'Carousel',
                to: '/base/carousels',
                icon: <FontAwesomeIcon icon={faBell} size="lg" />,
            },
            {
                name: 'Collapse',
                to: '/base/collapses',
                icon: <FontAwesomeIcon icon={faHandPointer} size="lg" />,
            },
            {
                name: 'List group',
                to: '/base/list-groups',
                icon: <FontAwesomeIcon icon={faNoteSticky} size="lg" />,
            },
            {
                name: 'Navs & Tabs',
                to: '/base/navs',
                icon: <FontAwesomeIcon icon={faStar} size="lg" />,
            },
            {
                name: 'Pagination',
                to: '/base/paginations',
                icon: <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />,
            },
            {
                name: 'Placeholders',
                to: '/base/placeholders',
                icon: <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />,
            },
            {
                name: 'Popovers',
                to: '/base/popovers',
                icon: <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />,
            },
            {
                name: 'Progress',
                to: '/base/progress',
                icon: <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />,
            },
            {
                name: 'Spinners',
                to: '/base/spinners',
                icon: <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />,
            },
            {
                name: 'Tables',
                to: '/base/tables',
                icon: <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />,
            },
            {
                name: 'Tooltips',
                to: '/base/tooltips',
                icon: <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />,
            },
        ],
    },
    // {
    //     component: Nav,
    //     name: 'Buttons',
    //     to: '/buttons',
    //     icon: <FontAwesomeIcon icon={faHandPointer} size="lg" />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Buttons',
    //             to: '/buttons/buttons',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Buttons groups',
    //             to: '/buttons/button-groups',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Dropdowns',
    //             to: '/buttons/dropdowns',
    //         },
    //     ],
    // },
    // {
    //     component: Nav,
    //     name: 'Forms',
    //     icon: <FontAwesomeIcon icon={faNoteSticky} size="lg" />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Form Control',
    //             to: '/forms/form-control',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Select',
    //             to: '/forms/select',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Checks & Radios',
    //             to: '/forms/checks-radios',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Range',
    //             to: '/forms/range',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Input Group',
    //             to: '/forms/input-group',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Floating Labels',
    //             to: '/forms/floating-labels',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Layout',
    //             to: '/forms/layout',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Validation',
    //             to: '/forms/validation',
    //         },
    //     ],
    // },
    // {
    //  
    //     component: Nav.Link,
    //     name: 'Charts',
    //     to: '/charts',
    //     icon: <FontAwesomeIcon icon={faChartPie} size="lg" />,
    // },
    // {
    //     component: Nav,
    //     name: 'Icons',
    //     icon: <FontAwesomeIcon icon={faStar} size="lg" />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'CoreUI Free',
    //             to: '/icons/coreui-icons',
    //             badge: {
    //                 color: 'success',
    //                 text: 'NEW',
    //             },
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'CoreUI Flags',
    //             to: '/icons/flags',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'CoreUI Brands',
    //             to: '/icons/brands',
    //         },
    //     ],
    // },
    // {
    //     component: Nav,
    //     name: 'Notifications',
    //     icon: <FontAwesomeIcon icon={faBell} size="lg" />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Alerts',
    //             to: '/notifications/alerts',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Badges',
    //             to: '/notifications/badges',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Modal',
    //             to: '/notifications/modals',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Toasts',
    //             to: '/notifications/toasts',
    //         },
    //     ],
    // },
    // {
    //  
    //     component: Nav.Link,
    //     name: 'Widgets',
    //     to: '/widgets',
    //     icon: <FontAwesomeIcon icon={faCalculator} size="lg" />,
    //     badge: {
    //         color: 'info',
    //         text: 'NEW',
    //     },
    // },
    // {
    //     component: Navbar.Text,
    //     name: 'Extras',
    // },
    // {
    //     component: Nav,
    //     name: 'Pages',
    //     icon: <FontAwesomeIcon icon={faStar} size="lg" />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Login',
    //             to: '/login',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Register',
    //             to: '/register',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Error 404',
    //             to: '/404',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Error 500',
    //             to: '/500',
    //         },
    //     ],
    // },
    // {
    //  
    //     component: Nav.Link,
    //     name: 'Docs',
    //     href: 'https://coreui.io/react/docs/templates/installation/',
    //     icon: <FontAwesomeIcon icon={faAudioDescription} size="lg" />,
    // },
]

export default _nav
