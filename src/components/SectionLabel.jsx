/** Rótulo editorial de seção: 1 —— PROCEDIMENTOS (índice opcional) */
export default function SectionLabel({ index, children, className = '' }) {
  return (
    <p className={`eyebrow flex items-center gap-4 ${className}`}>
      {index && <span className="tabular-nums">{index}</span>}
      <span aria-hidden="true" className="h-px w-10 bg-bronze/52" />
      <span>{children}</span>
    </p>
  )
}
