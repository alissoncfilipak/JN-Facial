import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

/*
 * No build de producao o HTML ja chega renderizado (scripts/prerender.mjs),
 * entao hidratamos o que esta na pagina em vez de recriar tudo. No `vite dev`
 * o container vem vazio e o caminho normal de createRoot continua valendo —
 * hydrateRoot num container vazio so geraria erro de divergencia.
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
