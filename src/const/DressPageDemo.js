
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import beef from 'images/photo-beef.avif';
import chicken from 'images/photo-chicken.jpg';
import salad from 'images/photo-salad.avif';
import logo from 'images/logo.svg';
import summer_1770_720 from 'images/dress/so-mi-he-1770x720-27.jpg';
import summer_698_900 from 'images/dress/so-mi-he-698x900-14.jpg';
import ao_dai_1770_720 from 'images/dress/1770x720-26.jpg';
import ao_dai_689_900 from 'images/dress/698x900-13.jpg';
import sea_1770_720 from 'images/dress/1770x720-22.jpg';
import sea_698_900 from 'images/dress/698x900-8.jpg';
import product1 from 'images/dress/product1.jpg';
import product2 from 'images/dress/product2.jpg';
import product3 from 'images/dress/product3.jpg';
import product4 from 'images/dress/product4.jpg';
import product5 from 'images/dress/product5.jpg';
import { faUserShield, faHeadset, faBars } from "@fortawesome/free-solid-svg-icons";

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
export const featuresPage = {
    title: "Tại sao chọn chúng tôi?",
    description: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
        {
            title: "Miễn phí vận chuyển",
            description: 'Miễn phí vận chuyển cho đơn hàng từ 200k',
            icon: <FontAwesomeIcon icon={faUserShield} />
        },
        {
            title: "60 ngày đổi trả",
            description: '60 ngày đổi trả vì bất kỳ lý do gì',
            icon: <FontAwesomeIcon icon={faHeadset} />
        },
        {
            title: "Sản phẩm Việt Nam",
            description: 'Tự hào sản xuất tại Việt Nam',
            icon: <FontAwesomeIcon icon={faBars} />
        }
    ]
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

export const slides = [
    {
        imageLg: summer_1770_720,
        imageXs: summer_698_900,
    },
    {
        imageLg: ao_dai_1770_720,
        imageXs: ao_dai_689_900,
    },
    {
        imageLg: sea_1770_720,
        imageXs: sea_698_900,
    },
]

export const collection1 = sea_1770_720;
export const collection2 = sea_698_900;
export const collection3 = ao_dai_1770_720;
export const collection4 = ao_dai_689_900;

export const dress = [
    {
        url: "/react-template/product",
        image: product1,
        title: "Áo dài tay lỡ",
        description: "6.99$"
    },
    {
        url: "/react-template/product",
        image: product2,
        title: "Áo dài truyền thống",
        description: "6.99$"
    },
    {
        url: "/react-template/product",
        image: product3,
        title: "Đầm cổ yếm vai trễ",
        description: "6.99$"
    },
    {
        url: "/react-template/product",
        image: product4,
        title: "Sơ mi phối chân váy",
        description: "6.99$"
    },
    {
        url: "/react-template/product",
        image: product5,
        title: "Áo dài truyền thống lụa",
        description: "6.99$"
    },
]