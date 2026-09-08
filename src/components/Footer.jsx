import { Instagram, MessageCircle, MapPin } from 'lucide-react'
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  WHATSAPP_DISPLAY,
  PROFESSIONAL,
  ADDRESS,
  mapsUrl,
  navLinks,
} from '../data/site'
import WhatsAppLink from './WhatsAppLink'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-bronze/28 bg-canvas-deep pt-8 pb-8 md:pt-9">
      <div className="mx-auto max-w-[1400px] 2xl:max-w-[1680px] px-6 md:px-10 lg:px-16 2xl:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Identidade */}
          <div>
            <p className="font-display text-2xl text-ink">{PROFESSIONAL.name}</p>
            <p className="mt-3 text-[0.7rem] tracking-[0.24em] text-bronze uppercase">
              Harmonização Facial
            </p>
            <p className="mt-4 text-[0.72rem] leading-relaxed tracking-[0.12em] text-mute uppercase">
              {PROFESSIONAL.title}
              <span className="block">{PROFESSIONAL.council}</span>
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline w-fit pb-0.5 text-[0.78rem] tracking-[0.12em] text-ink/74 uppercase transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contato */}
          <div className="flex flex-col gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[0.85rem] text-ink/78 transition-colors duration-300 hover:text-bronze"
            >
              <Instagram size={16} strokeWidth={1.4} aria-hidden="true" />
              {INSTAGRAM_HANDLE}
            </a>

            <WhatsAppLink className="flex items-center gap-3 text-[0.85rem] text-ink/78 transition-colors duration-300 hover:text-bronze">
              <MessageCircle size={16} strokeWidth={1.4} aria-hidden="true" />
              {WHATSAPP_DISPLAY}
            </WhatsAppLink>

            <a
              href={mapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-[0.85rem] leading-relaxed text-ink/78 transition-colors duration-300 hover:text-bronze"
            >
              <MapPin size={16} strokeWidth={1.4} aria-hidden="true" className="mt-0.5 shrink-0" />
              <address className="not-italic">
                {ADDRESS.street} — {ADDRESS.unit}
                <span className="block">
                  {ADDRESS.neighborhood}, {ADDRESS.city} – {ADDRESS.state}
                </span>
                <span className="block">CEP {ADDRESS.postalCode}</span>
              </address>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-bronze/38 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.68rem] tracking-[0.14em] text-mute uppercase">
            © {year} Dra. Jordana Nogueira. Todos os direitos reservados.
          </p>
          <p className="max-w-md text-[0.62rem] leading-relaxed text-mute">
            As fotos de antes e depois são de pacientes reais, publicadas com
            autorização. As demais imagens são ilustrativas. Resultados variam
            conforme as características individuais de cada paciente.
          </p>
        </div>
      </div>
    </footer>
  )
}
