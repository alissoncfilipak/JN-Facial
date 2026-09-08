import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import { results, RESULTS_DISCLAIMER } from '../data/site'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import PhotoSlot from './PhotoSlot'
import Lightbox from './Lightbox'

export default function Results() {
  const [openIndex, setOpenIndex] = useState(null)

  const close = () => setOpenIndex(null)
  const prev = () => setOpenIndex((i) => (i === null ? i : (i - 1 + results.length) % results.length))
  const next = () => setOpenIndex((i) => (i === null ? i : (i + 1) % results.length))

  return (
    <section
      id="resultados"
      className="section-y relative border-t border-bronze/38 bg-canvas-deep"
    >
      <div className="mx-auto max-w-[1400px] 2xl:max-w-[1680px] px-6 md:px-10 lg:px-16 2xl:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="3">Resultados</SectionLabel>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              Antes e depois,
              <span className="block italic text-bronze-soft">sem exageros</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.95rem] leading-relaxed text-ink/72">
              {RESULTS_DISCLAIMER}
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5 lg:mt-11 lg:-mx-12 lg:grid-cols-4 lg:gap-5 2xl:-mx-16">
          {results.map((item, i) => (
            <Reveal key={item.id} delay={i * 90}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group block w-full text-left"
                aria-label={`Ampliar resultado: ${item.caption}`}
              >
                <div className="relative grid grid-cols-2 gap-px overflow-hidden bg-bronze/28">
                  {[
                    { key: 'before', tag: 'Antes', src: item.before },
                    { key: 'after', tag: 'Depois', src: item.after },
                  ].map((side) => (
                    <div
                      key={side.key}
                      className="relative aspect-[1/2] overflow-hidden bg-surface"
                    >
                      <PhotoSlot
                        src={side.src}
                        alt={`${side.tag} — ${item.caption}`}
                        label="Imagem demonstrativa"
                        monogram=""
                        width="450"
                        height="690"
                        className="transition-transform duration-[1.1s] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.05]"
                      />
                      <span className="absolute left-3 top-3 text-[0.55rem] tracking-[0.22em] text-bronze uppercase">
                        {side.tag}
                      </span>
                    </div>
                  ))}

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-canvas-deep/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <Maximize2 size={22} strokeWidth={1} className="text-bronze" />
                  </span>
                </div>

                <p className="mt-5 text-[0.72rem] tracking-[0.18em] text-ink/78 uppercase">
                  {item.caption}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        item={openIndex === null ? null : results[openIndex]}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  )
}
