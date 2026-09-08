import { ScanFace, PenLine, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react'
import { benefits } from '../data/site'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import WhatsAppLink from './WhatsAppLink'

const iconMap = {
  search: ScanFace,
  pencil: PenLine,
  sparkles: Sparkles,
  heart: HeartHandshake,
  shield: ShieldCheck,
}

export default function Benefits() {
  return (
    <section className="section-y relative border-t border-bronze/38">
      <div className="mx-auto grid max-w-[1400px] 2xl:max-w-[1680px] grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-16 2xl:px-20">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel index="5">Diferenciais</SectionLabel>
            <h2 className="mt-7 font-display text-[2.3rem] leading-[1.05] text-ink md:text-[2.9rem]">
              Por que escolher a
              <span className="block italic text-bronze-soft">Dra. Jordana?</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 max-w-sm text-[0.92rem] leading-relaxed text-ink/72">
              A conversa inicial é o que define tudo o que vem depois.
            </p>
            <WhatsAppLink className="link-underline mt-7 inline-block pb-1 text-[0.7rem] tracking-[0.2em] text-bronze uppercase">
              Agendar avaliação →
            </WhatsAppLink>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] ?? Sparkles
            return (
              <Reveal key={benefit.title} as="li" delay={i * 90} className="border-t border-bronze/32 pt-6">
                <Icon size={20} strokeWidth={1.1} className="text-bronze" aria-hidden="true" />
                <h3 className="mt-5 font-display text-[1.45rem] leading-snug text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/72">{benefit.text}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
