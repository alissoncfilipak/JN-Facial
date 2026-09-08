import { Instagram } from 'lucide-react'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/site'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function InstagramSection() {
  return (
    <section className="section-y relative border-t border-bronze/38">
      <div className="mx-auto grid max-w-[1400px] 2xl:max-w-[1680px] grid-cols-1 items-center gap-8 px-6 md:px-10 lg:grid-cols-12 lg:px-16 2xl:px-20">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="07">Instagram</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-7 font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              Acompanhe
              <span className="block italic text-bronze-soft">meu trabalho</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-6 inline-block pb-1 text-[0.85rem] tracking-[0.18em] text-mute"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </Reveal>
        </div>

        <Reveal delay={220} className="lg:col-span-4 lg:col-start-9">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center justify-center gap-3 px-8 py-5 text-[0.72rem] tracking-[0.2em] uppercase"
            aria-label="Seguir Dra. Jordana Nogueira no Instagram"
          >
            <Instagram size={17} strokeWidth={1.4} />
            Seguir no Instagram
          </a>
        </Reveal>
      </div>
    </section>
  )
}
