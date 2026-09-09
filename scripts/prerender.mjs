import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = join(root, 'dist', 'index.html')
const MARKER = '<div id="root"></div>'

const { render } = await import(join(root, '.ssr', 'entry-server.js'))
const html = await readFile(indexPath, 'utf8')

if (!html.includes(MARKER)) {
  throw new Error(
    `prerender: nao achei ${MARKER} em dist/index.html — o HTML ja foi ` +
      `pre-renderizado ou o marcador mudou em index.html.`,
  )
}

const appHtml = render()
await writeFile(indexPath, html.replace(MARKER, `<div id="root">${appHtml}</div>`))

const kb = (Buffer.byteLength(appHtml) / 1024).toFixed(1)
console.log(`prerender: ${kb} kB de HTML injetados em dist/index.html`)
