import { useEffect, useRef, useState } from 'react'
import { Menu, X, Instagram } from 'lucide-react'
import { navLinks, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/site'
import WhatsAppLink from './WhatsAppLink'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  // Fundo sólido assim que o usuário sai do topo
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll da página enquanto o menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    document.body.dataset.menuOpen = open ? 'true' : 'false'
    return () => {
      document.body.style.overflow = ''
      delete document.body.dataset.menuOpen
    }
  }, [open])

  /* Enquanto o menu está aberto o foco fica preso dentro dele; ao fechar,
     volta para o botão que o abriu. Fechado, o painel recebe `inert` — sem
     isso os links continuam alcançáveis pelo Tab mesmo invisíveis. */
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    if (!panel) return

    const focusables = () =>
      panel.querySelectorAll('a[href], button:not([disabled])')

    focusables()[0]?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return

      const items = focusables()
      if (!items.length) return

      const first = items[0]
      const last = items[items.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      toggleRef.current?.focus()
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)] ${
          scrolled
            ? 'border-b border-bronze/28 bg-canvas/85 backdrop-blur-md py-5'
            : 'border-b border-transparent py-8 md:py-10'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] 2xl:max-w-[1680px] items-center justify-between px-6 md:px-10 lg:px-16 2xl:px-20">
          <a
            href="#inicio"
            className="group flex items-baseline gap-2.5"
            aria-label="Dra. Jordana Nogueira — início"
          >
            <span className="text-[0.65rem] tracking-[0.3em] text-bronze">DRA.</span>
            <span className="font-display text-xl tracking-wide text-ink md:text-2xl">
              Jordana Nogueira
            </span>
          </a>

          {/* Navegação desktop */}
          <nav aria-label="Navegação principal" className="hidden items-center gap-9 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-[0.85rem] tracking-[0.14em] text-ink/82 uppercase transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            <WhatsAppLink className="btn-primary hidden shrink-0 px-7 py-3.5 text-[0.75rem] font-medium tracking-[0.18em] whitespace-nowrap uppercase lg:inline-block">
              Agendar avaliação
            </WhatsAppLink>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center text-ink xl:hidden"
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="menu-mobile"
            >
              <Menu size={24} strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        ref={panelRef}
        inert={!open}
        className={`fixed inset-0 z-[70] bg-canvas-deep transition-opacity duration-400 xl:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="glow-warm absolute inset-0" aria-hidden="true" />

        <div className="relative flex h-full flex-col px-8 pt-7 pb-10">
          <div className="flex items-center justify-between">
            <span className="eyebrow">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Fechar menu"
            >
              <X size={22} strokeWidth={1.25} />
            </button>
          </div>

          <nav className="mt-14 flex flex-col gap-1" aria-label="Navegação mobile">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-bronze/22 py-5 font-display text-3xl text-ink transition-colors duration-300 active:text-bronze"
                style={{
                  transitionDelay: `${i * 40}ms`,
                  opacity: open ? 1 : 0,
                  transform: open ? 'none' : 'translateY(12px)',
                  transition: 'opacity .5s ease, transform .5s ease, color .3s ease',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <WhatsAppLink
              onClick={() => setOpen(false)}
              className="btn-primary block w-full py-4 text-center text-[0.72rem] font-medium tracking-[0.2em] uppercase"
            >
              Agendar avaliação
            </WhatsAppLink>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 text-[0.75rem] tracking-[0.16em] text-mute uppercase"
            >
              <Instagram size={15} strokeWidth={1.4} />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
