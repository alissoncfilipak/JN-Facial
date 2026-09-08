import { MapPin } from 'lucide-react'
import WhatsAppLink from './WhatsAppLink'
import Reveal from './Reveal'
import { WHATSAPP_DISPLAY, ADDRESS, mapsUrl } from '../data/site'

export default function CTA() {
  return (
    <section
      id="contato"
      className="section-y-wide relative overflow-hidden border-t border-bronze/38 bg-canvas-deep text-center"
    >
      <div className="glow-warm absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Agendamento</p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-8 font-display text-[2.3rem] leading-[1.06] text-ink sm:text-5xl lg:text-[3.8rem]">
            Pronta para valorizar
            <span className="block italic text-bronze-soft">ainda mais a sua beleza?</span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-8 max-w-lg text-[1rem] leading-relaxed text-ink/74">
            Agende sua avaliação e descubra um planejamento pensado especialmente
            para você.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <WhatsAppLink className="btn-primary mt-12 inline-block px-10 py-5 text-[0.72rem] font-medium tracking-[0.2em] uppercase">
            Quero agendar minha avaliação
          </WhatsAppLink>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-8 text-[0.7rem] tracking-[0.2em] text-mute uppercase">
            WhatsApp {WHATSAPP_DISPLAY}
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="mx-auto mt-10 max-w-sm border-t border-bronze/38 pt-8">
            <p className="eyebrow">Onde atendo</p>
            <a
              href={mapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-4 inline-flex items-start gap-3 pb-1 text-left text-[0.92rem] leading-relaxed text-ink/78 transition-colors duration-300 hover:text-bronze"
            >
              <MapPin size={16} strokeWidth={1.4} aria-hidden="true" className="mt-1 shrink-0" />
              <address className="not-italic">
                {ADDRESS.street} — {ADDRESS.unit}
                <span className="block">
                  {ADDRESS.neighborhood}, {ADDRESS.city} – {ADDRESS.state}
                </span>
                <span className="block">CEP {ADDRESS.postalCode}</span>
              </address>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
