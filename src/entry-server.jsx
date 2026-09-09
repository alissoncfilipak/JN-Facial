import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

/**
 * Entrada usada só no build, por scripts/prerender.mjs.
 *
 * O site é inteiramente estático — sem rotas, sem fetch, sem estado de
 * servidor — então dá para renderizar a árvore uma vez em build time e
 * mandar o HTML já pronto. Sem isso, o navegador recebe um <div> vazio
 * e nada pinta até o bundle baixar, parsear e o React montar: era por
 * isso que FCP, LCP e Speed Index caíam todos no mesmo instante.
 *
 * A árvore aqui precisa ser idêntica à de src/main.jsx, senão a
 * hidratação acusa divergência.
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
