import { images, PROFESSIONAL } from '../data/site'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import PhotoSlot from './PhotoSlot'
import WhatsAppLink from './WhatsAppLink'

export default function About() {
  return (
    <section id="sobre" className="section-y relative border-t border-bronze/38">
      <div className="mx-auto grid max-w-[1400px] 2xl:max-w-[1680px] grid-cols-1 gap-10 px-6 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16 2xl:px-20">
        {/* Retrato da profissional */}
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 left-3 top-8 right-8 border border-bronze/38 lg:-left-5"
            />
            <div className="relative aspect-[4/5] overflow-hidden">
              <PhotoSlot
                src={images.doctor}
                alt="Dra. Jordana Nogueira"
                label="Espaço reservado para a foto oficial da Dra. Jordana"
              />
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-2">
          <Reveal>
            <SectionLabel index="01">Sobre</SectionLabel>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-7 font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              Dra. Jordana
              <span className="block italic text-bronze-soft">Nogueira</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] tracking-[0.22em] text-bronze uppercase">
              <span>{PROFESSIONAL.title}</span>
              <span aria-hidden="true" className="h-px w-6 bg-bronze/55" />
              <span>{PROFESSIONAL.council}</span>
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 space-y-6 text-[0.98rem] leading-[1.85] text-ink/76">
              <p>
                Cada rosto conta uma história própria — e é a partir dela que
                todo atendimento começa. Antes de qualquer procedimento vem a
                conversa: entender o que você enxerga no espelho, o que gostaria
                de valorizar e o que faz questão de preservar.
              </p>
              <p>
                O trabalho da Dra. Jordana é conduzido com avaliação
                individual e planejamento feito sob medida, buscando harmonia
                entre as proporções do rosto sem apagar aquilo que torna a sua
                expressão reconhecível.
              </p>
              <p className="text-ink/86">
                A referência de beleza é você mesma. O resultado deve parecer
                seu — apenas em equilíbrio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <blockquote className="mt-11 border-l border-bronze/52 pl-7">
              <p className="font-display text-2xl leading-snug text-ink md:text-[1.75rem]">
                “Beleza natural é a que ninguém precisa explicar.”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={300}>
            <WhatsAppLink className="link-underline mt-10 inline-block pb-1 text-[0.72rem] tracking-[0.2em] text-bronze uppercase">
              Agendar avaliação →
            </WhatsAppLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
