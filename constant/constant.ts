
import { FolderOpen, House, Send, UserRound } from "lucide-react";
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

export const sideNavLinks = [
    {
        id: 1,
        url: '/',
        label: 'Home',
        icon: House
    },
    {
        id: 2,
        url: '/about',
        label: 'About',
        icon: UserRound
    },
    {
        id: 3,
        url: '/work',
        label: 'Work',
        icon: FolderOpen
    },
    {
        id: 4,
        type: 'modal',
        label: 'Contact',
        icon: Send
    },
]

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