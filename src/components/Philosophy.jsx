import { philosophyPillars } from '../data/site'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function Philosophy() {
  return (
    <section className="section-y-wide relative overflow-hidden border-t border-bronze/38">
      <div className="mx-auto max-w-[1400px] 2xl:max-w-[1680px] px-6 md:px-10 lg:px-16 2xl:px-20">
        <Reveal>
          <SectionLabel index="03">Filosofia de tratamento</SectionLabel>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={100} className="lg:col-span-7">
            <h2 className="font-display text-[2.4rem] leading-[1.06] text-ink sm:text-5xl lg:text-[4rem]">
              Harmonizar não é
              <span className="block italic text-bronze-soft">mudar quem você é.</span>
            </h2>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <p className="text-[1.02rem] leading-[1.9] text-ink/76">
              A verdadeira harmonização facial busca equilíbrio, proporção e
              naturalidade. Cada rosto possui características únicas e merece um
              planejamento individualizado.
            </p>
          </Reveal>
        </div>

        {/* Quatro pilares */}
        <ul className="mt-11 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {philosophyPillars.map((pillar, i) => (
            <Reveal
              key={pillar}
              as="li"
              delay={i * 110}
              className="border-t border-bronze/38 pt-6"
            >
              <span className="text-[0.6rem] tabular-nums tracking-[0.3em] text-bronze">
                0{i + 1}
              </span>
              <p className="mt-4 font-display text-2xl text-ink lg:text-[1.9rem]">{pillar}</p>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  )
}
