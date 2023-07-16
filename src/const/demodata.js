
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLandingPageImage from "images/MainLandingPageHero.png";
import prototype from 'images/login-illustration.svg';
import chilli from 'images/chilli-crispy-nachos.jpg';
import cake from 'images/chille-cake.avif';
import beef from 'images/photo-beef.avif';
import pig from 'images/photo-pig.avif';
import fish from 'images/photo-fish.avif';
import chicken from 'images/photo-chicken.jpg';
import potato from 'images/photo-potato.avif';
import salad from 'images/photo-salad.avif';
import bread from 'images/photo-bread.avif';
import guacamole from 'images/guacamole-mex.avif';
import popper from 'images/popper.avif';
import logo from 'images/logo.svg';
import { faUserShield, faHeadset, faBars, faRocket, faBoltLightning, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

export const priceDurationPage = {
    title: "Flexible Plans.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    durations: ["Monthly", 'Yearly', 'Forever'],
    Monthly: [
        {
            plan: "PERSIONAL",
            price: "$18.99",
            duration: "MONTHLY",
            description: "Suited for Personal Blogs",
            items: ["30 Templates", '7 Landing Pages', '12 Internal Pages', 'Basic Assistance'],
            button: "BUY NOW",
            variant: "danger"
        },
        {
            plan: "BUSINESS",
            price: "$40.99",
            duration: "MONTHLY",
            description: "Suited for Production Websites",
            items: ["60 Templates", '8 Landing Pages', '22 Internal Pages', 'Priority Assistance'],
            button: "BUY NOW",
            variant: "primary"
        },
        {
            plan: "ENTERPRISE",
            price: "$50.99",
            duration: "MONTHLY",
            description: "Suited for Big Companies",
            items: ["90 Templates", '9 Landing Pages', '37 Internal Pages', "20 Inner Pages", 'Personal Assistance'],
            button: "BUY NOW",
            variant: "warning"
        }
    ],
    Yearly: [
        {
            plan: "PERSIONAL",
            price: "$10.99",
            duration: "MONTHLY",
            description: "Suited for Personal Blogs",
            items: ["30 Templates", '7 Landing Pages', '12 Internal Pages', 'Basic Assistance'],
            button: "BUY NOW",
            variant: "danger"
        },
        {
            plan: "BUSINESS",
            price: "$10.99",
            duration: "MONTHLY",
            description: "Suited for Production Websites",
            items: ["60 Templates", '8 Landing Pages', '22 Internal Pages', 'Priority Assistance'],
            button: "BUY NOW",
            variant: "primary"
        },
        {
            plan: "ENTERPRISE",
            price: "$37.99",
            duration: "MONTHLY",
            description: "Suited for Big Companies",
            items: ["90 Templates", '9 Landing Pages', '37 Internal Pages', "20 Inner Pages", 'Personal Assistance'],
            button: "BUY NOW",
            variant: "warning"
        }
    ],
    Forever: [
        {
            plan: "PERSIONAL",
            price: "$17.99",
            duration: "MONTHLY",
            description: "Suited for Personal Blogs",
            items: ["30 Templates", '7 Landing Pages', '12 Internal Pages', 'Basic Assistance'],
            button: "BUY NOW",
            variant: "danger"
        },
        {
            plan: "BUSINESS",
            price: "$37.99",
            duration: "MONTHLY",
            description: "Suited for Production Websites",
            items: ["60 Templates", '8 Landing Pages', '22 Internal Pages', 'Priority Assistance'],
            button: "BUY NOW",
            variant: "primary"
        },
        {
            plan: "ENTERPRISE",
            price: "$57.99",
            duration: "MONTHLY",
            description: "Suited for Big Companies",
            items: ["90 Templates", '9 Landing Pages', '37 Internal Pages', "20 Inner Pages", 'Personal Assistance'],
            button: "BUY NOW",
            variant: "warning"
        }
    ]
}
export const menu = {
    'Starters': [{
        url: "",
        image: chicken,
        title: "Chiken",
        description: "6.99$"
    },
    {
        url: "",
        image: fish,
        title: "Fish",
        description: "6.99$"
    },
    {
        url: "",
        image: popper,
        title: "Popper",
        description: "6.99$"
    },
    {
        url: "",
        image: potato,
        title: "Potato",
        description: "6.99$"
    }],
    'Main': [{
        url: "",
        image: salad,
        title: "Salad",
        description: "6.99$"
    },
    {
        url: "",
        image: bread,
        title: "Bread",
        description: "2.29$"
    },
    {
        url: "",
        image: guacamole,
        title: "Guacamole",
        description: "2.29$"
    },
    {
        url: "",
        image: pig,
        title: "Pig",
        description: "2.29$"
    }],
    'Soup': [{
        url: "",
        image: chilli,
        title: "Chilli",
        description: "2.29$"
    },
    {
        url: "",
        image: cake,
        title: "Cake",
        description: "2.29$"
    },
    {
        url: "",
        image: beef,
        title: "Beef",
        description: "2.29$"
    },
    {
        url: "",
        image: cake,
        title: "Cake",
        description: "2.29$"
    }],
    'Desserts': [{
        url: "",
        image: beef,
        title: "Beef",
        description: "2.29$"
    },
    {
        url: "",
        image: salad,
        title: "Salad",
        description: "2.29$"
    },
    {
        url: "",
        image: guacamole,
        title: "Guacamole",
        description: "2.29$"
    },
    {
        url: "",
        image: cake,
        title: "Cake",
        description: "2.29$"
    }],
}
export const listCard = [
    {
        url: "",
        image: prototype,
        title: "Title",
        description: "description"
    },
    {
        url: "",
        image: prototype,
        title: "Title 2",
        description: "description 2"
    },
    {
        url: "",
        image: prototype,
        title: "Title",
        description: "description"
    },
    {
        url: "",
        image: prototype,
        title: "Title 2",
        description: "description 2"
    },
    {
        url: "",
        image: prototype,
        title: "Title",
        description: "description"
    },
    {
        url: "",
        image: prototype,
        title: "Title 2",
        description: "description 2"
    },
    {
        url: "",
        image: prototype,
        title: "Title",
        description: "description"
    },
    {
        url: "",
        image: prototype,
        title: "Title 2",
        description: "description 2"
    }
]
export const advantage =
{
    title: "Free Modern React Templates for every need.",
    description: "Easily customizable modern React UI Templates and Components " +
        "built using TailwindCSS which are also lightweight and simple to setup. " +
        "All components are modular and fully responsive for great mobile experience as well as big desktop screens. " +
        "Brand Colors are also fully customizable. Free for personal as well as commercial use.",
    image: mainLandingPageImage
}
export const navLink = [
    {
        url: "#",
        title: "License & Usage"
    },
    {
        url: "#",
        title: "Who Am I ?"
    },
    {
        url: "#",
        title: "Twitter"
    },
    {
        url: "#",
        title: "Hire Me!"
    },
]
export const pricePage = {
    title: "Flexible Plans.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
        {
            plan: "PERSIONAL",
            price: "$17.99",
            duration: "MONTHLY",
            description: "Suited for Personal Blogs",
            items: ["30 Templates", '7 Landing Pages', '12 Internal Pages', 'Basic Assistance'],
            button: "BUY NOW",
            variant: "danger"
        },
        {
            plan: "BUSINESS",
            price: "$37.99",
            duration: "MONTHLY",
            description: "Suited for Production Websites",
            items: ["60 Templates", '8 Landing Pages', '22 Internal Pages', 'Priority Assistance'],
            button: "BUY NOW",
            variant: "primary"
        },
        {
            plan: "ENTERPRISE",
            price: "$57.99",
            duration: "MONTHLY",
            description: "Suited for Big Companies",
            items: ["90 Templates", '9 Landing Pages', '37 Internal Pages', "20 Inner Pages", 'Personal Assistance'],
            button: "BUY NOW",
            variant: "warning"
        }
    ]
}
export const featuresPage = {
    title: "Amazing Features",
    description: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
        {
            title: "Secure",
            description: 'We strictly only deal with vendors that provide top notch security infrastructure.',
            icon: <FontAwesomeIcon icon={faUserShield} />
        },
        {
            title: "24/7 Support",
            description: 'Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.',
            icon: <FontAwesomeIcon icon={faHeadset} />
        },
        {
            title: "Customizable",
            description: 'Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.',
            icon: <FontAwesomeIcon icon={faBars} />
        },
        {
            title: "Reliable",
            description: 'We strictly only deal with vendors that provide top notch security infrastructure.',
            icon: <FontAwesomeIcon icon={faRocket} />
        },
        {
            title: "Fast",
            description: 'We strictly only deal with vendors that provide top notch security infrastructure.',
            icon: <FontAwesomeIcon icon={faBoltLightning} />
        },
        {
            title: "Easy",
            description: 'We strictly only deal with vendors that provide top notch security infrastructure.',
            icon: <FontAwesomeIcon icon={faHandHoldingHeart} />
        }
    ]
}
export const statPage = {
    title: "Over 9000 Projects Completed",
    description: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stats: [
        {
            title: "2500+",
            description: 'Clients',
        },
        {
            title: "$100M+",
            description: 'Revenue',
        },
        {
            title: "150+",
            description: 'Employee',
        }
    ]
}
export const cardMenu = {
    title: 'NEW ARRIVAL',
    tabs: ['Starters', 'Main', 'Soup', 'Desserts'],
}
export const authors = [
    {
        url: "",
        image: chicken,
        name: "Adam Cuppy",
        job: "Developer",
        facebook: '',
        twitter: '',
        linkedin: ''
    },
    {
        url: "",
        image: salad,
        name: "Charlotte Hale",
        job: "Designer",
        facebook: '',
        twitter: '',
        linkedin: ''
    },
    {
        url: "",
        image: beef,
        name: "Silvester Wize",
        job: "Founder",
        facebook: '',
        twitter: '',
        linkedin: ''
    }
]
export const reviews = [
    {
        image: chicken,
        name: "Adam Cuppy",
        review: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
            'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."'
    },
    {
        image: salad,
        name: "Charlotte Hale",
        review: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
            'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."'
    },
    {
        image: beef,
        name: "Silvester Wize",
        review: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
            'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."'
    }
]

export const footer = {
    title: 'Treact',
    image: logo,
    description: 'Treact is an Internet Technology company providing design resources such as website templates and themes.',
    address: '123 Road, New Startup Building Carter Road, San Francisco California 40234',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    tiktok: 'https://tiktok',
    email: 'aaa@gmail.com',
    phone: '00000000',
    linkedin: 'https://linkedin',
    copyright: '© Copyright 2020, Treact Inc. All Rights Reserved.'
}
