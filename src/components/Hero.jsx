import { Instagram } from 'lucide-react'
import { images, INSTAGRAM_URL } from '../data/site'
import WhatsAppLink from './WhatsAppLink'

const trustPoints = [
  'Avaliação individualizada',
  'Planejamento personalizado',
  'Atendimento humanizado',
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[min(100svh,46rem)] items-center overflow-hidden pt-28 pb-10 md:pt-32 lg:pt-28 lg:pb-10 [@media(max-height:820px)]:lg:pt-24 [@media(max-height:820px)]:lg:pb-8"
    >
      <div className="glow-warm absolute inset-0 -z-10" aria-hidden="true" />

      {/*
        Mobile: texto → imagem → CTAs (a foto aparece cedo, logo antes do botão).
        Desktop: coluna editorial à esquerda, retrato à direita ocupando as duas linhas.
      */}
      <div className="mx-auto flex w-full max-w-[1400px] 2xl:max-w-[1680px] flex-col gap-10 px-6 md:px-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:gap-y-0 lg:px-16 2xl:px-20">
        {/* Título */}
        <div className="lg:col-span-6 lg:row-start-1 lg:self-end lg:pr-10">
          <p className="reveal is-visible eyebrow" style={{ transitionDelay: '80ms' }}>
            Harmonização Facial
          </p>

          <h1
            className="reveal is-visible mt-6 font-display text-[clamp(2.6rem,29px+3.27vw,5.6rem)] leading-[1] tracking-[-0.02em] text-ink"
            style={{ transitionDelay: '160ms' }}
          >
            Realce sua beleza.
            <span className="mt-1 block italic text-bronze-soft">
              Preserve sua essência.
            </span>
          </h1>

          <div
            className="reveal is-visible mt-8 flex items-start gap-6"
            style={{ transitionDelay: '260ms' }}
          >
            <span aria-hidden="true" className="mt-3 h-px w-12 shrink-0 bg-bronze/60" />
            <p className="max-w-md text-[0.98rem] leading-relaxed text-ink/76 md:text-base">
              Harmonização facial com resultados sofisticados, naturais e
              personalizados para você.
            </p>
          </div>
        </div>

        {/* Retrato */}
        <div className="lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-2 2xl:col-start-9 2xl:col-span-4">
          <div className="reveal is-visible relative" style={{ transitionDelay: '300ms' }}>
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 bottom-8 left-8 border border-bronze/45 md:-top-7 md:-right-7 md:left-10"
            />
            <div className="relative h-[54svh] w-full overflow-hidden bg-surface lg:h-[clamp(26rem,66svh,42rem)]">
              <img
                src={images.hero}
                srcSet={`${images.heroLowRes} 640w, ${images.hero} 1130w`}
                sizes="(max-width: 1024px) 92vw, 40vw"
                alt="Dra. Jordana Nogueira"
                width="1130"
                height="1520"
                fetchPriority="high"
                decoding="async"
                className="duotone h-full w-full object-cover object-[50%_26%]"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-canvas/55 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="absolute -bottom-6 left-3 max-w-[15rem] border border-bronze/38 bg-canvas/92 px-5 py-4 backdrop-blur-sm md:px-6 md:py-5 lg:-left-8">
              <p className="eyebrow">Atendimento</p>
              <p className="mt-2 font-display text-lg leading-snug text-ink md:text-xl">
                Um plano para <span className="italic text-bronze">um rosto só</span>
              </p>
            </div>
          </div>
        </div>

        {/* Ações */}
        <div className="mt-4 lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:mt-10 lg:self-start lg:pr-10 [@media(max-height:820px)]:lg:mt-7">
          {/* Grade de colunas iguais: os dois botões têm sempre a mesma
              largura, empilhados no mobile ou lado a lado a partir de sm. */}
          <div
            className="reveal is-visible grid max-w-[38rem] grid-cols-1 gap-4 sm:grid-cols-2"
            style={{ transitionDelay: '360ms' }}
          >
            <WhatsAppLink className="btn-primary flex items-center justify-center px-6 py-4.5 text-center text-[0.72rem] font-medium tracking-[0.2em] uppercase">
              Agendar minha avaliação
            </WhatsAppLink>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center justify-center gap-2.5 px-6 py-4.5 text-center text-[0.72rem] tracking-[0.2em] uppercase"
            >
              <Instagram size={15} strokeWidth={1.4} className="shrink-0" />
              Conheça meu Instagram
            </a>
          </div>

          <ul
            className="reveal is-visible mt-10 flex flex-col gap-3 border-t border-bronze/28 pt-6 sm:flex-row sm:gap-0 [@media(max-height:820px)]:lg:mt-7 [@media(max-height:820px)]:lg:pt-5"
            style={{ transitionDelay: '460ms' }}
          >
            {trustPoints.map((point, i) => (
              <li
                key={point}
                className={`text-[0.68rem] tracking-[0.16em] text-mute uppercase sm:px-5 ${
                  i === 0 ? 'sm:pl-0' : 'sm:border-l sm:border-bronze/28'
                }`}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}
