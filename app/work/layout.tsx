import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Emem Princeson",
  description: "Explore all the projects I've built showcasing technical depth in web development, from responsive designs to full-stack applications.",
  openGraph: {
    title: "Projects | Emem Princeson",
    description: "Explore my portfolio of web development projects.",
    url: "https://ememprinceson.vercel.app/work",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
