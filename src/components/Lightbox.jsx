import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { RESULTS_DISCLAIMER } from '../data/site'
import PhotoSlot from './PhotoSlot'

/** Visualização ampliada de um par antes/depois. */
export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!item) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-canvas-deep/97 px-4 py-16 backdrop-blur-sm md:px-10"
      role="dialog"
      aria-modal="true"
      aria-label={`Resultado ampliado: ${item.caption}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar visualização"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-bronze/38 text-ink transition-colors duration-300 hover:border-bronze md:right-8 md:top-8"
      >
        <X size={20} strokeWidth={1.25} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Resultado anterior"
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ink/78 transition-colors duration-300 hover:text-bronze md:left-6"
      >
        <ChevronLeft size={26} strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Próximo resultado"
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ink/78 transition-colors duration-300 hover:text-bronze md:right-6"
      >
        <ChevronRight size={26} strokeWidth={1} />
      </button>

      <figure
        className="w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-2 gap-px bg-bronze/32">
          {[
            { key: 'before', tag: 'Antes', src: item.before },
            { key: 'after', tag: 'Depois', src: item.after },
          ].map((side) => (
            <div key={side.key} className="relative aspect-[3/4] overflow-hidden bg-surface">
              <PhotoSlot
                src={side.src}
                alt={`${side.tag} — ${item.caption}`}
                label="Imagem demonstrativa"
                monogram=""
              />
              <span className="absolute left-4 top-4 bg-canvas-deep/80 px-3 py-1.5 text-[0.58rem] tracking-[0.24em] text-bronze uppercase">
                {side.tag}
              </span>
            </div>
          ))}
        </div>

        <figcaption className="mt-6 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <span className="font-display text-xl text-ink">{item.caption}</span>
          <span className="max-w-md text-[0.68rem] leading-relaxed text-mute">
            {RESULTS_DISCLAIMER}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
