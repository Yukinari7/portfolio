"use client";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { project } from "@/components/Data/data";
import FadeUp from "@/components/motion/FadeUp";

export default function Projects() {
  return (
    <div>
      <div className="w-[90%] mx-auto py-15">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <FadeUp>
              <h3 className="text-4xl md:text-6xl font-bold [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Projects.</h3>
              </FadeUp>
              </div>
              <FadeUp delay={0.3}>
              <p>Highlighting recent projects that I've worked on</p>
              </FadeUp>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between mt-10">
            {project.map((project, i)=>{
              const Icon = project.icon;
              return (
                <div key={project.id} className="relative group hover:-translate-y-1 transition-transform duration-300">
                <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-20"/>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.3 }} className={`dark:bg-neutral-900 border dark:border-zinc-800 border-gray-300 shadow-lg transition-all duration-300 ease-in-out`}>
                <div className="relative mb-3">
                  <div className="relative w-full overflow-hidden h-[150px] lg:h-[200px]">
                    <Image src={project.image} alt={project.label} priority width={600} height={200} className="object-cover"/>
                  </div>
                <p className="text-xs absolute top-8 left-8 border font-bold border-white/50 bg-white text-black px-2 w-fit">{project.status}</p>
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center 
                  justify-center z-10">
                  <p className="text-white md:text-lg flex items-center gap-2">
                    <Eye/>View Case Study
                  </p>
                </div>
                </div>
                <div className="px-5 pb-5 space-y-2">
                  <p className="text-sm font-semibol text-gray-700 dark:text-gray-400 rounded-full flex items-center gap-1"><Icon size={12}/>{project.category}</p>
                  <div className="flex justify-between items-center">
                  <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">{project.label}</h3>
                    <div className="flex gap-2">
                    {project.links.map((link, index)=>{
                      const Icon = link.icon;

                      return (
                      <Link key={index} href={`/projects/${project.slug}`} className="z-20 active:scale-105"><Icon size={20} className="w-6 h-6 font-bold dark:text-gray-300"/></Link>
                      );
                    })}
                  </div>
                  </div>
                  <p className="text-base text-gray-700 dark:text-gray-400 font-semibol">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {project.tools.map((tool, index)=>{
                      const Icon = tool.icon;
                      return (
                      <div key={index} className="dark:bg-neutral-800 dark:text-gray-300 text-xs border dark:border-gray-700 p-1 rounded-full"><Icon size={25}/></div>
                      );
                      })}
                  </div>
                </div>                
            </motion.div>
            </div>
              )
            })}
          </div>
          <Link href="/work" className="flex border-b border-black dark:border-[#e5e4e2] w-fit gap-1 pt-10 text-base transition-all 
            group duration-200">View more projects<ArrowRight className="w-4 group-hover:translate-x-1 duration-300 transition-transform" />
          </Link>
    </div>
    </div>
  );
}
