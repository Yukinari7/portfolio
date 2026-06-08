import { Metadata } from "next"
import { projectPage } from "@/components/Data/data"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projectPage.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Emem Princeson`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Emem Princeson`,
      description: project.description,
      url: `https://ememprinceson.vercel.app/projects/${slug}`,
      type: "website",
    },
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
