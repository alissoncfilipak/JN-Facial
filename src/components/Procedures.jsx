import { procedures } from '../data/site'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import WhatsAppLink from './WhatsAppLink'

export default function Procedures() {
  return (
    <section
      id="procedimentos"
      className="section-y relative border-t border-bronze/38 bg-canvas-deep"
    >
      <div className="mx-auto max-w-[1400px] 2xl:max-w-[1680px] px-6 md:px-10 lg:px-16 2xl:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="1">Procedimentos</SectionLabel>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              Cuidados pensados
              <span className="block italic text-bronze-soft">para o seu rosto</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.95rem] leading-relaxed text-ink/72">
              A indicação e a combinação dos procedimentos são definidas
              somente após a avaliação presencial, de acordo com as suas
              características.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-11 lg:grid-cols-4">
          {procedures.map((procedure, i) => (
            <Reveal
              key={procedure.name}
              delay={i * 90}
              className={i % 2 === 1 ? 'lg:mt-11' : ''}
            >
              <article className="group h-full">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                  {/* PLACEHOLDER — imagens definidas em src/data/site.js */}
                  <img
                    src={procedure.image.src}
                    srcSet={procedure.image.srcSet}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, calc(100vw - 3rem)"
                    alt={procedure.alt}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="1067"
                    className="duotone h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.06]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 bg-canvas/90 px-2.5 py-1 font-display text-xs tracking-[0.2em] text-bronze"
                  >
                    {procedure.index}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-[1.6rem] leading-tight text-ink">
                    {procedure.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-px w-8 bg-bronze/55 transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:w-16"
                  />
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-ink/72">
                    {procedure.description}
                  </p>
                  <WhatsAppLink
                    message={`Olá, Dra. Jordana! Gostaria de agendar uma avaliação de harmonização facial. Tenho interesse em ${procedure.name}.`}
                    label={`Agendar avaliação de ${procedure.name} pelo WhatsApp`}
                    className="link-underline mt-6 inline-block pb-1 text-[0.66rem] tracking-[0.2em] text-bronze uppercase"
                  >
                    Agendar avaliação
                  </WhatsAppLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
