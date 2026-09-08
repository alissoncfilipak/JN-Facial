import { whatsappUrl } from '../data/site'

/**
 * Todo botão/link de WhatsApp do site passa por aqui, garantindo o
 * mesmo número, a mesma mensagem automática e os atributos de segurança.
 */
export default function WhatsAppLink({
  children,
  message,
  className = '',
  label = 'Agendar avaliação pelo WhatsApp',
  ...rest
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
      {...rest}
    >
      {children}
    </a>
  )
}
