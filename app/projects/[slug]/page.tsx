import Image from "next/image";
import { notFound } from "next/navigation";
import { projectPage } from "@/components/Data/data";
import { ArrowRight, Code, Layers, Lightbulb, Puzzle } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import FadeUp from "@/components/motion/FadeUp";
import BackButton from "@/components/BackButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {

  const { slug } = await params;

  const project = projectPage.find(
    (item) => item.slug === slug
  );

  if (!project) {

    notFound();

  }

  const currentIndex = projectPage.findIndex(
  (item) => item.slug === slug
);

const nextProject =
projectPage[(currentIndex + 1) % projectPage.length];

  return (
    <div className="pt-20 pb-10 w-[90%] mx-auto">
        <BackButton/>
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div className="flex flex-col space-y-2"> 
        <FadeUp>
          <h1 className="text-4xl lg:text-6xl font-bold [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">{project.title}</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-base text-gray-800 dark:text-gray-400 md:max-w-md lg:max-w-none">{project.description}</p>
        </FadeUp>
        </div>
        <div className="flex gap-4 items-center">
          { !project.hideLiveButton && (
            <>
          {project.liveLink ? (<a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="dark:bg-white text-white
             dark:text-black bg-black hover:bg-gray-700 py-2 px-4 dark:hover:bg-gray-300 duration-200 
             transition-all">View live</a>
              ):(<button aria-label="Live link unavailable" disabled className="bg-gray-400 text-white px-4 py-2 cursor-not-allowed opacity-90">In development</button>)}
          {project.githubLink ? (<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <BsGithub aria-label="GitHub repository unavailable" className="w-10 h-10 dark:text-white text-black hover:text-gray-700 dark:hover:text-gray-300 
            duration-200 transition-all"/></a>
            ):(<button aria-label="GitHub repository unavailable" disabled className="opacity-50 cursor-not-allowed"><BsGithub className="w-10 h-10"/></button>)}
            </>
          )}
        </div>
      </div>

      <div className="relative h-[300px] overflow-hidden my-10">
        <Image src={project.banner}  alt={project.title} fill priority className="object-cover"/>
      </div>

      <div className="w-full border border-b border-gray-600 dark:border-gray-600"></div>

    <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-8 pt-10">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="dark:text-gray-400 text-black text-sm font-semibold">STATUS</h3>
          <p className="text-base text-gray-700 dark:text-white font-semibold">{project.status}</p>
        </div>
        <div className="space-y-3">
          <h3 className="dark:text-gray-400 text-black text-sm font-semibold">TECH STACK</h3>
          <div className="flex flex-wrap gap-2">
          {project.stack.map((item, index)=>(
            <div key={index} className="bg-neutral-900 text-gray-300 text-sm text-base px-4 py-1 rounded-full">{item}</div>
          ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-5 bg-neutral-900">
        <div className="space-y-2">
          <h3 className="text-white text-xl md:text-2xl font-semibold flex items-center gap-2"><Layers className="text-gray-400"/>Overview</h3>
          <p className="text-gray-400">{project.overview}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-white text-xl md:text-2xl font-semibold flex items-center gap-2"><Puzzle className="text-gray-400"/>Challenges</h3>
          <p className="text-gray-400">{project.challenge}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-white text-xl md:text-2xl font-semibold flex items-center gap-2"><Lightbulb className="text-gray-400"/>Solutions</h3>
          <p className="text-gray-400">{project.solution}</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-white text-xl md:text-2xl font-semibold flex items-center gap-2"><Code className="text-gray-400"/>Key Features</h3>
          <div className="flex flex-wrap gap-4">
            {project.features.map((item, index)=>(
              <div key={index} className="text-gray-300 text-base flex gap-"><span className="w-5 h-5 text-xl text-white">•</span>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="pt-10 flex flex-col md:flex-row justify-between gap-2">
      <Link href={"/work"} className="dark:bg-white py-2 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 
      text-white dark:text-black bg-black duration-200 transition-all flex items-center gap-2 
      w-fit">View all projects</Link>
      <Link href={`/projects/${nextProject.slug}`} className="dark:bg-white py-2 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 
      text-white dark:text-black bg-black duration-200 transition-all flex items-center gap-2 
      w-fit active:scale-105">Next project: {nextProject.title}<ArrowRight className="w-4 h-4"/></Link>
    </div>
    </div>
  );
}