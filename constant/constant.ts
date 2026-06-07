
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

export const navLinks = [
    {
        id: 1,
        url: '/about',
        label: 'About'
    },
    {
        id: 2,
        url: '/work',
        label: 'Work'
    },
    {
        id: 3,
        type: 'modal',
        label: 'Contact'
    },
];

export const footerLinks = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/emem-bassey-150323323/',
        icon: BsLinkedin
    },
    {
        id: 2,
        url: 'https://github.com/Yukinari7',
        icon: BsGithub
    },
    {
        id: 3,
        url: 'https://x.com/techlastborn',
        icon: FaXTwitter
    },
    {
        id: 4,
        url: 'https://t.me/defifuture7',
        icon: FaTelegram
    },
]