import { InfoIcon, Globe, Pencil, Smartphone } from "lucide-react";
import { CgCodeSlash } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { SiExpo, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from "react-icons/si";

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
      {icon: SiNodedotjs, label: "Node.js"},
      {icon: SiPostgresql, label: "PostgreSQL"},
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
    description: "411 is a modern full-stack e-commerce platform built to deliver a fast, scalable and seamless online shopping experience. The application combines a...",
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
    slug: "fintech-mobile-app",
    status:"IN PROGRESS",
    category: "Mobile App",
    icon: Smartphone,
    label: "FMA",
    description: "FMA is a secure friction-free personal finance application prioritizing responsive interactions and transaction integrity. With secure localized biometric device authentication...",
    tools: [
      {icon: SiExpo, label:"Expo"},
      {icon: SiReact, label: "React Native"},
      {icon: SiTailwindcss, label: "Native Wind"},
      {icon: SiPostgresql, label: "PostgreSQL"},
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
    description: "Streamlining chaotic event workflows into single-pane-of-glass collaborative dashboards.",
    overview: "EPT is a modern full-stack event management platform designed to simplify event organization, booking coordination and attendee management through a seamless digital experience allowing users to create, manage and schedule events efficiently.",
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
      "Prisma ORM",
      "PostgreSQL" 
    ],

    features: [
      "Real time multi-user timeline scheduler",
      "SEO optimization",
      "Data integration",
      "Animated sections",
    ],

    challenge: "High-volume, concurrent client modifications on a shared event timeline generated race conditions. Simultaneous element updates and deletions caused data collisions, forcing browser state mismatches and critical UI crashes.",
    solution: "Re-architected the state layer to utilize an optimistic UI strategy paired with custom conflict-resolution hooks. Client action registers instantly on the viewport while running a n0n-blocking execution payload server-side; conflicting states gracefully trigger a silent, automated data rollback to ensure system stability and 100% data.",
    liveLink: "",
    githubLink: "",
  },

    {   
    slug: "hollis",
    title: "Hollis",
    description: "Automated scheduling and service resource optimization engine built for modern client handling.",
    overview: "Hollis is a booking platform designed to simplify reservations and elevate the guest experience. The system enables users to explore available rooms, make secure bookings, manage reservations and experience a seamless hospitality journey through an intuitive and responsive interface.",
    status: "In progress",
    banner: "/images/dashboard.webp",
    gallery: [
      "/images/food-1.webp",
      "/images/food-2.webp",
    ],
    stack: [
      "Next.js",
      "TailwindCss",
      "Shadcn UI",
      "React",
      "PostgreSQL",
      "PrismaORM",
      "NeonAuth",
      "Upstash Redis"
    ],
    features: [
      "Dynamic, interactive time-slot engine",
      "Integrated paystack payment workflow",
      "Authentication, Analytics & Automated text/email notification loop",
      "Responsive dashbaord",
      "Role-based auth"
    ],
    challenge: "Concurrent heavy scheduling attempts on identical slots triggered database race conditions, resulting in overlapping double-bookings.",
    solution: "Integrated a distributed locking layer using Upstash Redis. The system safely checks and holds temporarily slot claims on the server-side, forcing conflicting users into a clean front-end state refresh before database entry.",
    liveLink: "",
    githubLink: "",
  },

  {
    slug: "xenex",
    title: "Xenex",
    description: "A premium engineering platform providing architectures for renewable energy adoption.",
    overview: ".",
    status: "Completed",
    banner: "/images/food-banner.webp",
    gallery: [
      "/images/food-1.webp",
      "/images/food-2.webp",
    ],
    stack: [
      "Resend",
      "React",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
        "Engineered premium visual interface",
        "Interactive, touch-optimized swiper grids",
        "Dedicated lead generation layout"
    ],
    challenge: "Utilizng classic client-side script integrations directly on the primary viewport caused substantial Total Blocking Time (TBT), tanking early mobile optimization efforts down to 43.",
    solution: "Re-architected core scripts into custom server-side API routes utilizing Next.js App routes. Extracted complex packages entirely away from the main client thread, allowing the initial bundle sizes to plummet.",
    liveLink: "",
    githubLink:"",
  },

  {
    slug: "411",
    title: "411",
    description: "Ultra-fast storefront utilizing a headless architecture to power sub-second page loads and seamless scaling.",
    overview: "411 is a modern full-stack e-commerce platform built to deliver a fast, scalable and seamless online shopping experience. The application combines a high-performance storefront with a headless content management architecture powered by Sanity, enabling dynamic product management, flexible content delivery and efficient store administration.",
    status: "In progress",
    banner: "/images/xenex.png",
    gallery: [
      "/images/food-1.webp",
      "/images/food-2.webp",
    ],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Headless CMS (Sanity)",
      "Paystack API",
      "Clerk js",
      "MongoDB",
    ],
    features: [
      "Fully decouple commerce layer driven dynamically",
      "Instant global search and multi-layer structural filtering",
      "Fully optimized checkout flows integrated natively",
    ],
    challenge: "Loading high-resolution product imagery and asset-heavy gallery grids on product indexes spiked the Largest Contentful Paint (LCP) past 13 seconds on stimulated mobile connections.",
    solution: "Stripped standard asset blocks out for explicit Next.js <Image /> elements flagged with strict layout priority properties. Replaced dynamic lower components with next/dynamic lazy loading, successfully driving the core LCP metrics into the green.",
    liveLink: "",
    githubLink:"",
  },

  {
    slug: "fintech-mobile-app",
    title: "FMA",
    description: "A premium finance platform focused on clean UI and absolute transaction integrity.",
    overview: "FMA is a secure friction-free personal finance application prioritizing responsive interactions and transaction integrity.",
    status: "In progress",
    banner: "/images/xenex.png",
    gallery: [
      "/images/food-1.webp",
      "/images/food-2.webp",
    ],
    stack: [
      "Expo",
      "React Native",
      "postgreSQL",
      "Tailwind CSS (Native wind)",
      "Biometrics API",
    ],
    features: [
      "Ledger balance with custom category spending controls",
      "Digital wallet generation & balance transfers via custom QR code scanning",
      "Authentication",
    ],
    challenge: "Pulling active financial balances and dynamic charts over fluctuating mobile network grids created noticeable data rendering stutters",
    solution: "Designed an internal background syncing algorithm paired with local persistent storage caching. Giving optimistic updates and immediate feedbacks regardless of connection speeds",
    hideLiveButton: true,
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
    description: "Event planner is a modern full-stack event management platform designed to simplify event organization, booking coordination and attendee management...",
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
      {icon: SiNodedotjs, label: "Node.js"},
      {icon: SiPostgresql, label: "PostgreSQL"},
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
    slug: "fintech-mobile-app",
    status:"IN PROGRESS",
    group: "Mobile App",
    category: "All",
    icon: Smartphone,
    label: "FMA",
    description: "FMA is a secure friction-free personal finance application prioritizing responsive interactions and transaction integrity. With secure localized biometric device authentication...",
    tools: [
      {icon: SiExpo, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiNodedotjs, label: "Node.js"},
      {icon: SiPostgresql, label: "PostgreSQL"}
    ],
    links: [
        {
            slug: "fintech-mobile-app",
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
    slug: "fintech-mobile-app",
    status:"IN PROGRESS",
    group: "Mobile App",
    category: "Mobile App",
    icon: Smartphone,
    label: "FMA",
    description: "FMA is a secure friction-free personal finance application prioritizing responsive interactions and transaction integrity.",
    tools: [
      {icon: SiExpo, label:"Next.js"},
      {icon: SiReact, label: "React"},
      {icon: SiNodedotjs, label: "Node.js"},
      {icon: SiPostgresql, label: "PostgreSQL"}
    ],
    links: [
        {
            slug: "fintech-mobile-app",
            icon: InfoIcon
            
        },
    ],
    image: "/images/xenex.png",
  }
]