import { useInView } from '../hooks/useInView'

/**
 * Envolve qualquer conteúdo com um fade-in suave ao entrar na tela.
 * `delay` (ms) permite escalonar elementos de uma mesma seção.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
