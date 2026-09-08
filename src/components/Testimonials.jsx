import { testimonials, TESTIMONIALS_ARE_PLACEHOLDER } from '../data/site'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section-y relative border-t border-bronze/38 bg-surface"
    >
      <div className="mx-auto max-w-[1400px] 2xl:max-w-[1680px] px-6 md:px-10 lg:px-16 2xl:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="05">Depoimentos</SectionLabel>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              O Full Face
              <span className="block italic text-bronze-soft">na voz de quem fez</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.95rem] leading-relaxed text-ink/72">
              O Full Face trata o rosto inteiro como um conjunto, e não como
              pontos isolados. Abaixo, o que as pacientes contam sobre a
              experiência.
            </p>
          </Reveal>
        </div>

        {/* Lembrete de produção — some quando os depoimentos reais entrarem */}
        {TESTIMONIALS_ARE_PLACEHOLDER && (
          <p className="mt-9 border border-dashed border-bronze/55 px-5 py-4 text-[0.7rem] leading-relaxed tracking-[0.08em] text-bronze uppercase">
            Conteúdo de exemplo — substituir pelos depoimentos reais, com
            autorização escrita da paciente, antes de publicar.
          </p>
        )}

        <ul className="mt-9 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3 lg:mt-11">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.id}
              as="li"
              delay={i * 110}
              className={i === 1 ? 'md:mt-12' : ''}
            >
              <figure className="flex h-full flex-col border-t border-bronze/38 pt-7">
                <span
                  aria-hidden="true"
                  className="block font-display text-5xl leading-[0.6] text-bronze/45"
                >
                  &ldquo;
                </span>

                <blockquote className="mt-5 grow">
                  <p className="font-display text-[1.3rem] leading-[1.55] text-ink lg:text-[1.4rem]">
                    {item.quote}
                  </p>
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-8 shrink-0 bg-bronze/55" />
                  <span className="text-[0.68rem] tracking-[0.18em] text-ink/78 uppercase">
                    {item.author}
                    <span className="mt-1 block text-bronze">{item.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
