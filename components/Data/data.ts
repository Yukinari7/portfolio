import { InfoIcon, Globe, Pencil, Smartphone } from "lucide-react";
import { CgCodeSlash } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { SiAppwrite, SiExpo, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";

export const cardData = [
    {
        id:1,
        title: "Performance & Responsiveness",
        desc: "Fast, mobile-first websites optimized for speed, accessibility and dependable performance.",
    },
    {
        id:2,
        icon: Pencil,
        title: "Pixel-Perfect Layout Execution",
        desc: "Turning design concepts into clean, precise and visually balanced user interfaces.",
    },
    {
        id:3,
        icon: FaGithub,
        title: "Version Control & Collaboration",
        desc: "Turning design concepts into clean, precise and visually balanced user interfaces.",
    },
    {
        id:4,
        icon: CgCodeSlash,
        title: "API integration",
        desc: "Turning design concepts into clean, precise and visually balanced user interfaces.",
    },
]

export const frontEndData = [
    {
        id:1,
        name: "HTML5",
        icon: "/icons/html-5.svg",
    },
    {
        id:2,
        name: "CSS",
        icon: "/icons/css-3.svg",
    },
    {
        id:3,
        name: "Typescript",
        icon: "/icons/typescript.svg",
    },
    {
        id:4,
        name: "Tailwind",
        icon: "/icons/tailwind.svg",
    },
    {
        id:5,
        name: "Javascript",
        icon: "/icons/javascript.svg",
    },
    {
        id:6,
        name: "Next.JS",
        icon: "/icons/nextjs.svg",
    },
    {
        id:7,
        name: "React",
        icon: "/icons/react.svg",
    },
]

export const backEndData = [
    {
        id:1,
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
    },
    {
        id:2,
        name: "Node.js",
        icon: "/icons/nodejs.svg",
    },
    {
        id:3,
        name: "Supabase",
        icon: "/icons/supabase.svg",
    },
    {
        id:4,
        name: "Firebase",
        icon: "/icons/firebase.svg",
    },
    {
        id:5,
        name: "Clerk Auth",
        icon: "/icons/clerkauth.svg",
    },
]

export const mobileAppData = [
    {
        id:1,
        name: "Expo",
        icon: "/icons/expo.svg",
    },
    {
        id:2,
        name: "React-Native",
        icon: "/icons/react.svg",
    },
    {
        id:3,
        name: "App-write",
        icon: "/icons/appwrite.svg",
    },
]

export const otherData = [
    {
        id:1,
        name: "Figma",
        icon: "/icons/figma.svg",
    },
    {
        id:2,
        name: "VS code",
        icon: "/icons/vs-code.svg",
    },
    {
        id:3,
        name: "Git",
        icon: "/icons/git.svg",
    },
    {
        id:4,
        name: "Postman",
        icon: "/icons/postman.svg",
    },
    {
        id:5,
        name: "Github",
        icon: "/icons/github.svg",
    },
]

export const project = [
    {
    id: 1,
    slug: "event-planner",
    status:"IN PROGRESS",
    category: "Web app • Event Planner Tool",
    icon: Globe,
    label: "EPT",
    description: "Event planner is a modern full-stack event management platform designed to simplify event organization, booking coordination and attendee management through a seamless digital...",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "event-planner",
            icon: InfoIcon
            
        },
    ],
    image: "/images/doughvy.png",
  },
  {
    id: 2,
    slug: "hollis",
    status:"IN PROGRESS",
    category: "Webapp • Booking management system",
    icon: Globe,
    label: "Hollis",
    description: "A booking platform designed to simplify reservations and elevate the guest experience. The system enables users to explore available rooms, make secure bookings, manage reservations...",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "hollis",
            icon: InfoIcon
            
        },
    ],
    image: "/images/dashboard.webp",
  },
  {
    id: 3,
    slug: "xenex",
    status:"",
    category: "Website",
    icon: Globe,
    label: "Xenex",
    description: "Designed & Built a modern solar energy website focused on clean UI, responsive performance and clear service representation using modern web technologies.",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "xenex",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  },
  {
    id: 4,
    slug: "411",
    status:"IN PROGRESS",
    category: "Webapp • e-commerce",
    icon: Globe,
    label: "411",
    description: "Designed & Built a modern solar energy website focused on clean UI, responsive performance and clear service representation using modern web technologies.",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "411",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  },
  {
    id: 5,
    slug: "stack-up",
    status:"IN PROGRESS",
    category: "Mobile App",
    icon: Smartphone,
    label: "Stack Up",
    description: "Designed & Built a modern solar energy website focused on clean UI, responsive performance and clear service repreentation using modern web technologies.",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "stack-up",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  },
]


export const projectPage = [

  {
    slug: "event-planner",
    title: "EPT",
    description: "An Event Planner Tool built to enable users create, manage and schedule events.",
    overview: "Event planner is a modern full-stack event management platform designed to simplify event organization, booking coordination and attendee management through a seamless digital experience allowing users to create, manage and schedule events efficiently.",
    status: "In development",
    banner: "/images/",
    gallery: [
      "/images/solar-1.webp",
      "/images/solar-2.webp",
      "/images/solar-3.webp",
    ],

    stack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
    ],

    features: [
      "Responsive design",
      "SEO optimization",
      "Contact integration",
      "Animated sections",
    ],

    challenge: "Creating smooth animations while keeping Lighthouse score high. Used optimized images, dynamic imports and Framer Motion.",
    liveLink: "",
    githubLink: "",
  },
  {
    slug: "hollis",
    title: "Hollis",
    description: "A premium snack ordering platform focused on clean UI and performance.",
    overview: "A premium restaurant ordering platform.",
    status: "In progress",
    banner: "/images/dashboard.webp",
    gallery: [
      "/images/food-1.webp",
      "/images/food-2.webp",
    ],
    stack: [
      "React",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Cart system",
      "Order tracking",
      "Authentication",
    ],
    challenge: "Building responsive layouts for restaurant cards.",
    liveLink: "",
    githubLink: "",
  },

  {
    slug: "xenex",
    title: "Xenex",
    description: "A premium snack ordering platform focused on clean UI and performance.",
    overview: "A premium restaurant ordering platform.",
    status: "Completed",
    banner: "/images/food-banner.webp",
    gallery: [
      "/images/food-1.webp",
      "/images/food-2.webp",
    ],
    stack: [
      "React",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Cart system",
      "Order tracking",
      "Authentication",
    ],
    challenge: "Building responsive layouts for restaurant cards.",
    liveLink: "",
    githubLink: "",
  },

  {
    slug: "411",
    title: "411",
    description: "A premium snack ordering platform focused on clean UI and performance.",
    overview: "A premium restaurant ordering platform.",
    status: "In progress",
    banner: "/images/xenex.png",
    gallery: [
      "/images/food-1.webp",
      "/images/food-2.webp",
    ],
    stack: [
      "React",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Cart system",
      "Order tracking",
      "Authentication",
    ],
    challenge: "Building responsive layouts for restaurant cards.",
    liveLink: "",
    githubLink: "",
  },

  {
    slug: "stack-up",
    title: "Stack Up",
    description: "A premium snack ordering platform focused on clean UI and performance.",
    overview: "A premium restaurant ordering platform.",
    status: "In progress",
    banner: "/images/xenex.png",
    gallery: [
      "/images/food-1.webp",
      "/images/food-2.webp",
    ],
    stack: [
      "Expo",
      "MongoDB",
      "React Native",
      "App Write"
    ],
    features: [
      "Cart system",
      "Order tracking",
      "Authentication",
    ],
    challenge: "Building responsive layouts for restaurant cards.",
    liveLink: "",
    githubLink: "",
  },
];


export const projectData = [
    {
    id: 1,
    slug: "event-planner",
    status:"IN PROGRESS",
    group: "Web App • Event Planner Tool",
    category: "All",
    icon: Globe,
    label: "EPT",
    description: "Event planner is a modern full-stack event management platform designed to simplify event organization, booking coordination and attendee management through a seamless...",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "event-planner",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex-project.webp",
  },
    {
    id: 2,
    slug: "hollis",
    status:"IN PROGRESS",
    group: "Web App • Booking Management System",
    category: "All",
    icon: Globe,
    label: "Hollis",
    description: "A booking platform designed to simplify reservations and elevate the guest experience. The system enables users to explore available rooms, make secure...",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "hollis",
            icon: InfoIcon
            
        },
    ],
    image: "/images/dashboard.webp",
  },
    {
    id: 3,
    slug: "xenex",
    status:"",
    group: "Website",
    category: "All",
    icon: Globe,
    label: "Xenex",
    description: "Designed & Built a modern solar energy website focused on clean UI, responsive performance and clear service representation using modern web technologies.",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "xenex",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  },
  
  {
    id: 4,
    slug: "411",
    status:"IN PROGRESS",
    group: "Website • e-commerce",
    category: "All",
    icon: Globe,
    label: "411",
    description: "411 is a modern full-stack e-commerce platform built to deliver a fast, scalable and seamless online shopping experience. The application combines a high-performance...",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "411",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  },

  {
    id: 5,
    slug: "stack-up",
    status:"IN PROGRESS",
    group: "Mobile App",
    category: "All",
    icon: Smartphone,
    label: "Stack Up",
    description: "Designed & Built a modern solar energy website focused on clean UI, responsive performance and clear service repreentation using modern web technologies.",
    tools: [
      {icon: SiExpo, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "stack-up",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  },
  {
    id: 6,
    slug: "event-planner",
    status:"IN PROGRESS",
    group: "Web App • Event Planner Tool",
    category: "Web",
    icon: Globe,
    label: "EPT",
    description: "Event planner is a modern full-stack event management platform designed to simplify event organization, booking coordination and attendee management through a seamless...",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "event-planner",
            icon: InfoIcon
            
        },
    ],
    image: "/images/doughvy.png",
    },
    {
    id: 7,
    slug: "hollis",
    status:"IN PROGRESS",
    group: "Web App • Booking Management System",
    category: "Web",
    icon: Globe,
    label: "Hollis",
    description: "Designed & Built a modern solar energy website focused on clean UI, responsive performance and clear service repreentation using modern web technologies.",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "hollis",
            icon: InfoIcon
            
        },
    ],
    image: "/images/doughvy.png",
    },
    {
    id: 8,
    slug: "xenex",
    status:"",
    group: "Website",
    category: "Web",
    icon: Globe,
    label: "Xenex",
    description: "Designed & Built a modern solar energy website focused on clean UI, responsive performance and clear service repreentation using modern web technologies.",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "xenex",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  },
  {
    id: 9,
    slug: "411",
    status:"",
    group: "Website • e-commerce",
    category: "Web",
    icon: Globe,
    label: "411",
    description: "Designed & Built a modern solar energy website focused on clean UI, responsive performance and clear service repreentation using modern web technologies.",
    tools: [
      {icon: SiNextdotjs, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiTailwindcss, label: "Tailwind css"},
      {icon: SiNodedotjs, label: "Node.js"}
    ],
    links: [
        {
            slug: "411",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  },
    {
    id: 10,
    slug: "stack-up",
    status:"IN PROGRESS",
    group: "Mobile App",
    category: "Mobile App",
    icon: Smartphone,
    label: "Stack Up",
    description: "Designed & Built a modern solar energy website focused on clean UI, responsive performance and clear service repreentation using modern web technologies.",
    tools: [
      {icon: SiExpo, label:"Expo"},
      {icon: SiReact, label: "React"},
      {icon: SiNodedotjs, label: "Node.js"},
      {icon: SiAppwrite, label: "App-write"}
    ],
    links: [
        {
            slug: "shopsave",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  },
]