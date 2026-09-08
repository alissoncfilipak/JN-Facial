# Dra. Jordana Nogueira — Harmonização Facial

Landing page de página única, construída para conversão via **WhatsApp** e **Instagram**.

Stack: **React 19 + Vite 7 + Tailwind CSS 4 + lucide-react**.

---

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera a versão de produção em dist/
npm run preview  # testa localmente a versão de produção
```

Para publicar, envie o conteúdo da pasta `dist/` para qualquer hospedagem estática
(Vercel, Netlify, Hostinger, etc.).

---

## Onde editar o conteúdo

Praticamente **tudo** que a cliente pode querer alterar está em um único arquivo:

### `src/data/site.js`

| O que mudar | Onde |
|---|---|
| Número de WhatsApp | `WHATSAPP_NUMBER` (só dígitos, com o 55 na frente) e `WHATSAPP_DISPLAY` |
| Mensagem automática do WhatsApp | `WHATSAPP_MESSAGE` |
| Instagram | `INSTAGRAM_HANDLE` e `INSTAGRAM_URL` |
| Todas as imagens | objeto `images` |
| Itens do menu | `navLinks` |
| Procedimentos (nome, texto, imagem) | `procedures` |
| Palavras da seção Filosofia | `philosophyPillars` |
| Galeria antes/depois | `results` |
| Aviso legal dos resultados | `RESULTS_DISCLAIMER` |
| Diferenciais | `benefits` |

Os textos mais longos (Hero, Sobre, Filosofia, CTA) ficam dentro dos componentes
correspondentes em `src/components/`, um arquivo por seção.

---

## Substituindo as imagens

> **Importante:** as duas fotos da Dra. Jordana são reais e ficam em
> `public/imagens/`. As imagens dos **procedimentos** ainda são
> **placeholders do Unsplash**, usadas apenas para demonstrar o layout — nenhuma
> delas retrata a clínica ou pacientes reais.

1. Coloque os arquivos finais em `public/imagens/` (de preferência em **.webp**).
2. Em `src/data/site.js`, troque a URL pelo caminho local:

```js
export const images = {
  hero: '/imagens/hero.webp',
  // ...
}
```

### Fotos da Dra. Jordana

| Arquivo | Onde aparece | Tamanho |
|---|---|---|
| `dra-jordana-2.webp` + `-640.webp` | Hero (`images.hero`) | 1130x1520 · 140 kB |
| `dra-jordana.webp` | Seção "Sobre" (`images.doctor`) | 1200x1600 · 77 kB |

A foto do hero veio de um print de Instagram: os artefatos de interface (seta do
carrossel e indicadores de página) foram recortados. Se a foto original, sem
print, estiver disponível, vale substituí-la — a qualidade será melhor.

Se `images.doctor` ficar vazio, a seção "Sobre" volta a exibir uma moldura
indicando que a foto ainda será enviada, em vez de uma foto de banco de imagens
que daria a entender que outra pessoa é a Dra. Jordana.

### Antes e depois

A galeria já está pronta, mas **sem imagens**: nenhum resultado foi inventado.
Ao receber as fotos com autorização de uso das pacientes, preencha `before` e
`after` em `results` e a galeria (com ampliação em tela cheia) passa a exibi-las
automaticamente:

```js
export const results = [
  { id: 1, caption: 'Harmonização facial', before: '/imagens/antes-1.webp', after: '/imagens/depois-1.webp' },
  // ...
]
```

### Imagem de compartilhamento (Open Graph)

`public/og-image.jpg` (1200×630) é a arte que aparece quando o link é enviado no
WhatsApp ou redes sociais. Substitua o arquivo mantendo o mesmo nome e as mesmas
dimensões. Em `index.html`, ajuste também as URLs `og:url` e `canonical` para o
domínio final.

---

## Identidade visual

Todos os tokens de cor, fontes e curvas de animação estão no topo de
`src/index.css`, dentro do bloco `@theme`. Mudar uma variável ali repercute no
site inteiro.

| Token | Cor | Uso |
|---|---|---|
| `canvas` | `#faf6f0` | off-white quente, fundo principal |
| `canvas-deep` | `#f2eade` | bege claro, seções alternadas |
| `surface` / `surface-2` | `#ebe0d2` / `#e2d4c2` | nude, fundo de imagem e placeholders |
| `ink` | `#241e1a` | grafite, texto principal |
| `bronze` | `#7f5f38` | acento (contraste AA em texto pequeno) |
| `bronze-soft` | `#a9855a` | acento em títulos grandes em itálico |
| `mute` | `#7a6e62` | texto de apoio |

**Títulos:** Bodoni Moda · **Textos e botões:** Jost

Todas as cores de acento foram escolhidas para passar em contraste WCAG AA sobre
os dois fundos (`canvas` e `canvas-deep`).

---

## Observações sobre o conteúdo

Nenhuma formação, título, especialização, tempo de experiência ou certificação foi
incluído no site, porque nada disso foi informado. Se a Dra. Jordana quiser exibir
essas informações (registro no conselho, especializações, formação), envie os dados
e eles podem ser adicionados na seção "Sobre".

---

## Acessibilidade e performance

- Estrutura semântica com `h1` único, `h2` por seção e `h3` nos cards.
- Imagens com `loading="lazy"` (exceto o hero) e dimensões declaradas.
- Animações desligadas automaticamente para quem usa `prefers-reduced-motion`.
- Navegação por teclado no menu mobile e na galeria (Esc e setas).
