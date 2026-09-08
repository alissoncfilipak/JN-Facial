import { useEffect, useState } from 'react'
import WhatsAppLink from './WhatsAppLink'

/** Ícone oficial do WhatsApp (traçado simples, em SVG). */
function WhatsAppIcon({ size = 26 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.74.46 3.44 1.32 4.94L2 22.5l5.85-1.53a9.83 9.83 0 0 0 4.19.94h.01c5.43 0 9.86-4.43 9.86-9.87A9.8 9.8 0 0 0 19 4.86 9.8 9.8 0 0 0 12.04 2Zm5.76 15.63a8.2 8.2 0 0 1-5.76 2.39h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.16 8.16 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2a8.15 8.15 0 0 1 5.8 2.41 8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.2 8.2Z" />
    </svg>
  )
}

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  // O botão flutuante aparece depois da primeira dobra
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Desktop / tablet: bolha no canto inferior direito */}
      <WhatsAppLink
        label="Falar pelo WhatsApp"
        className={`fixed bottom-8 right-8 z-[80] hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_28px_rgba(58,42,24,.22)] transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)] hover:scale-105 md:flex ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ping rounded-full bg-whatsapp/30 [animation-duration:2.8s]"
        />
        <WhatsAppIcon />
      </WhatsAppLink>

      {/* Mobile: barra fixa inferior */}
      <div className="mobile-cta-bar fixed inset-x-0 bottom-0 z-[80] border-t border-bronze/32 bg-canvas/95 px-4 pt-3 backdrop-blur-md md:hidden pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <WhatsAppLink
          label="Agendar pelo WhatsApp"
          className="btn-primary flex items-center justify-center gap-2.5 py-3.5 text-[0.72rem] font-medium tracking-[0.18em] uppercase"
        >
          <WhatsAppIcon size={17} />
          Agendar pelo WhatsApp
        </WhatsAppLink>
      </div>
    </>
  )
}
