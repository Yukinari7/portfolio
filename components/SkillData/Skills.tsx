import Image from "next/image";
import { backEndData, frontEndData, mobileAppData, otherData } from "../Data/data"
import FadeUp from "../motion/FadeUp";

const Skills = () => {
  return (
        <section className="pt-10">
            <div>
            <h2 className="text-2xl md:text-3xl text-center md:text-left pb-2 [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Frontend</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {frontEndData.map((skill, i) => {
                    return (
                    <div key={skill.id} className="shadow-sm hover:shadow-gray-800 rounded-[2rem] h-[150px] border border-zinc-800 bg-neutral-900 p-3 flex flex-col items-center 
                    justify-between gap-5">
                        <FadeUp delay={i * 0.3}>
                        <Image src={skill.icon} alt={skill.name} width={70} height={70} className="object-contain"/>
                        </FadeUp>
                        <p className="text-base font-semibold text-gray-300">{skill.name}</p>
                    </div>
                    );
                })}
            </div>
            </div>
            <div className="pt-10">
            <h2 className="text-2xl md:text-3xl text-center md:text-left pb-2 [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Backend</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {backEndData.map((skill, i) => {
                    return (
                    <div key={skill.id} className="shadow-sm hover:shadow-gray-800 rounded-[2rem] h-[150px] border border-zinc-800 bg-neutral-900 p-2 flex flex-col items-center 
                    justify-center gap-5">
                        <FadeUp delay={i * 0.3}>
                        <Image src={skill.icon} alt={skill.name} width={70} height={70} className="object-contain"/>
                        </FadeUp>
                        <p className="text-base font-semibold text-gray-300">{skill.name}</p>
                    </div>
                    );
                })}
            </div>
            </div>
            <div className="pt-10">
            <h2 className="text-2xl md:text-3xl text-center md:text-left pb-2 [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Mobile App</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {mobileAppData.map((skill, i) => {
                    return (
                    <div key={skill.id} className="shadow-sm hover:shadow-gray-800 rounded-[2rem] h-[150px] border border-zinc-800 bg-neutral-900 p-2 flex flex-col items-center 
                    justify-center gap-5">
                        <FadeUp delay={i * 0.3}>
                        <Image src={skill.icon} alt={skill.name} width={70} height={70} className="object-contain"/>
                        </FadeUp>
                        <p className="text-base font-semibold text-gray-300">{skill.name}</p>
                    </div>
                    );
                })}
            </div>
            </div>
            <div className="pt-10">
            <h2 className="text-2xl md:text-3xl text-center md:text-left pb-2 [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Other tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {otherData.map((skill, i) => {
                    return (
                    <div key={skill.id} className="shadow-sm hover:shadow-gray-800 rounded-[2rem] border border-zinc-800 bg-neutral-900 p-1 flex items-center 
                    justify-start md:px-2 gap-5">
                        <Image src={skill.icon} alt={skill.name} width={50} height={50} className="object-contain "/>
                        <p className="text-base font-semibold text-gray-300">{skill.name}</p>
                    </div>
                    );
                })}
            </div>
            </div>
        </section>
  )
}

export default Skills