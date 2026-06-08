import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Emem | FullStack Developer",
  description: "Learn more about Emem Princeson, a fullstack developer passionate about building performant web applications with modern design.",
  openGraph: {
    title: "About Emem | FullStack Developer",
    description: "Learn more about Emem Princeson and his journey in web development.",
    url: "https://ememprinceson.vercel.app/about",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
