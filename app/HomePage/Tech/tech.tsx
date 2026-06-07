import Cards from "@/components/CardData/Cards"
import FadeUp from "@/components/motion/FadeUp"
import Skills from "@/components/SkillData/Skills"

const tech = () => {
  return (
    <div>
    <div className="w-[90%] mx-auto py-10">
      <div>
        <div className="items-center text-center md:text-left gap-2">
        <FadeUp>
        <h3 className="text-4xl md:text-6xl font-bold [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Tech Stack.</h3>
        </FadeUp>
        <FadeUp delay={0.3}>
        <p>Technologies I use in crafting reliable & seamless modern products</p>
        </FadeUp>
        </div>
        <Skills/>
      </div>
      <div className="pt-20">
        <div className="flex items-center justify-between gap-2">
        <FadeUp>
        <h2 className="text-4xl md:text-6xl font-bold [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">What I focus on.</h2>
        </FadeUp>
        </div>
        <FadeUp delay={0.3}>
        <p>Attention to details bridging the gap between complex design and technical execution.</p>
        </FadeUp>
      </div>
      <Cards/>
    </div>
    </div>
  )
}

export default tech