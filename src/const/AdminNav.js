import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faHandPointer,
    faNoteSticky,
    faStar
} from '@fortawesome/free-regular-svg-icons';
import { faCalculator, faChartPie, faAudioDescription, faDroplet, faPencil, faPuzzlePiece, faGauge } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap';

const _nav = [
    {
        component: Nav.Item,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <FontAwesomeIcon icon={faGauge} customClassName="nav-icon" />,
        badge: {
            color: 'info',
            text: 'NEW',
        },
    },
    {
        component: Navbar.Text,
        name: 'Theme',
    },
    {
        component: Nav.Item,
        name: 'Colors',
        to: '/theme/colors',
        icon: <FontAwesomeIcon icon={faDroplet} customClassName="nav-icon" />,
    },
    {
        component: Nav.Item,
        name: 'Typography',
        to: '/theme/typography',
        icon: <FontAwesomeIcon icon={faPencil} customClassName="nav-icon" />,
    },
    {
        component: Navbar.Text,
        name: 'Components',
    },
    {
        component: Nav,
        name: 'Base',
        to: '/base',
        icon: <FontAwesomeIcon icon={faPuzzlePiece} customClassName="nav-icon" />,
        items: [
            {
                component: Nav.Item,
                name: 'Accordion',
                to: '/base/accordion',
            },
            {
                component: Nav.Item,
                name: 'Breadcrumb',
                to: '/base/breadcrumbs',
            },
            {
                component: Nav.Item,
                name: 'Cards',
                to: '/base/cards',
            },
            {
                component: Nav.Item,
                name: 'Carousel',
                to: '/base/carousels',
            },
            {
                component: Nav.Item,
                name: 'Collapse',
                to: '/base/collapses',
            },
            {
                component: Nav.Item,
                name: 'List group',
                to: '/base/list-groups',
            },
            {
                component: Nav.Item,
                name: 'Navs & Tabs',
                to: '/base/navs',
            },
            {
                component: Nav.Item,
                name: 'Pagination',
                to: '/base/paginations',
            },
            {
                component: Nav.Item,
                name: 'Placeholders',
                to: '/base/placeholders',
            },
            {
                component: Nav.Item,
                name: 'Popovers',
                to: '/base/popovers',
            },
            {
                component: Nav.Item,
                name: 'Progress',
                to: '/base/progress',
            },
            {
                component: Nav.Item,
                name: 'Spinners',
                to: '/base/spinners',
            },
            {
                component: Nav.Item,
                name: 'Tables',
                to: '/base/tables',
            },
            {
                component: Nav.Item,
                name: 'Tooltips',
                to: '/base/tooltips',
            },
        ],
    },
    {
        component: Nav,
        name: 'Buttons',
        to: '/buttons',
        icon: <FontAwesomeIcon icon={faHandPointer} customClassName="nav-icon" />,
        items: [
            {
                component: Nav.Item,
                name: 'Buttons',
                to: '/buttons/buttons',
            },
            {
                component: Nav.Item,
                name: 'Buttons groups',
                to: '/buttons/button-groups',
            },
            {
                component: Nav.Item,
                name: 'Dropdowns',
                to: '/buttons/dropdowns',
            },
        ],
    },
    {
        component: Nav,
        name: 'Forms',
        icon: <FontAwesomeIcon icon={faNoteSticky} customClassName="nav-icon" />,
        items: [
            {
                component: Nav.Item,
                name: 'Form Control',
                to: '/forms/form-control',
            },
            {
                component: Nav.Item,
                name: 'Select',
                to: '/forms/select',
            },
            {
                component: Nav.Item,
                name: 'Checks & Radios',
                to: '/forms/checks-radios',
            },
            {
                component: Nav.Item,
                name: 'Range',
                to: '/forms/range',
            },
            {
                component: Nav.Item,
                name: 'Input Group',
                to: '/forms/input-group',
            },
            {
                component: Nav.Item,
                name: 'Floating Labels',
                to: '/forms/floating-labels',
            },
            {
                component: Nav.Item,
                name: 'Layout',
                to: '/forms/layout',
            },
            {
                component: Nav.Item,
                name: 'Validation',
                to: '/forms/validation',
            },
        ],
    },
    {
        component: Nav.Item,
        name: 'Charts',
        to: '/charts',
        icon: <FontAwesomeIcon icon={faChartPie} customClassName="nav-icon" />,
    },
    {
        component: Nav,
        name: 'Icons',
        icon: <FontAwesomeIcon icon={faStar} customClassName="nav-icon" />,
        items: [
            {
                component: Nav.Item,
                name: 'CoreUI Free',
                to: '/icons/coreui-icons',
                badge: {
                    color: 'success',
                    text: 'NEW',
                },
            },
            {
                component: Nav.Item,
                name: 'CoreUI Flags',
                to: '/icons/flags',
            },
            {
                component: Nav.Item,
                name: 'CoreUI Brands',
                to: '/icons/brands',
            },
        ],
    },
    {
        component: Nav,
        name: 'Notifications',
        icon: <FontAwesomeIcon icon={faBell} customClassName="nav-icon" />,
        items: [
            {
                component: Nav.Item,
                name: 'Alerts',
                to: '/notifications/alerts',
            },
            {
                component: Nav.Item,
                name: 'Badges',
                to: '/notifications/badges',
            },
            {
                component: Nav.Item,
                name: 'Modal',
                to: '/notifications/modals',
            },
            {
                component: Nav.Item,
                name: 'Toasts',
                to: '/notifications/toasts',
            },
        ],
    },
    {
        component: Nav.Item,
        name: 'Widgets',
        to: '/widgets',
        icon: <FontAwesomeIcon icon={faCalculator} customClassName="nav-icon" />,
        badge: {
            color: 'info',
            text: 'NEW',
        },
    },
    {
        component: Navbar.Text,
        name: 'Extras',
    },
    {
        component: Nav,
        name: 'Pages',
        icon: <FontAwesomeIcon icon={faStar} customClassName="nav-icon" />,
        items: [
            {
                component: Nav.Item,
                name: 'Login',
                to: '/login',
            },
            {
                component: Nav.Item,
                name: 'Register',
                to: '/register',
            },
            {
                component: Nav.Item,
                name: 'Error 404',
                to: '/404',
            },
            {
                component: Nav.Item,
                name: 'Error 500',
                to: '/500',
            },
        ],
    },
    {
        component: Nav.Item,
        name: 'Docs',
        href: 'https://coreui.io/react/docs/templates/installation/',
        icon: <FontAwesomeIcon icon={faAudioDescription} customClassName="nav-icon" />,
    },
]

export default _nav
