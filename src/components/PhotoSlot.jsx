/**
 * Espaço reservado para foto.
 * Se `src` estiver preenchido em src/data/site.js, exibe a imagem.
 * Caso contrário, mostra uma moldura elegante deixando claro que
 * aquela foto ainda será fornecida — nunca uma foto de banco no lugar
 * de uma pessoa ou de um resultado real.
 */
export default function PhotoSlot({ src, alt, label, monogram = 'JN', className = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`duotone h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-4 bg-linear-to-br from-surface-2 via-surface to-canvas px-6 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        aria-hidden="true"
        className="absolute inset-3 border border-dashed border-bronze/32"
      />
      {monogram ? (
        <span className="font-display text-4xl italic text-bronze/75">{monogram}</span>
      ) : null}
      <span className="max-w-[16rem] text-[0.6rem] leading-relaxed tracking-[0.22em] text-mute uppercase">
        {label}
      </span>
    </div>
  )
}
