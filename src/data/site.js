/* ==================================================================
   ARQUIVO CENTRAL DE CONTEÚDO
   Tudo que a cliente pode querer trocar (telefone, textos, imagens)
   está aqui. Nenhum outro arquivo precisa ser editado para isso.
   ================================================================== */

/* ------------------------------------------------------------------
   1. CONTATO
------------------------------------------------------------------ */
export const WHATSAPP_NUMBER = '5541999691216' // apenas dígitos, com DDI 55
export const WHATSAPP_DISPLAY = '(41) 99969-1216'
export const WHATSAPP_MESSAGE =
  'Olá, Dra. Jordana! Gostaria de agendar uma avaliação de harmonização facial.'

/** Link do WhatsApp já com a mensagem automática codificada. */
export const whatsappUrl = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const INSTAGRAM_HANDLE = '@dra.jordananogueira'
export const INSTAGRAM_URL = 'https://www.instagram.com/dra.jordananogueira/'

/* ------------------------------------------------------------------
   1.1 IDENTIFICAÇÃO PROFISSIONAL
   A publicidade odontológica exige nome e número de inscrição no
   conselho visíveis. Estes dados aparecem no "Sobre" e no rodapé.
------------------------------------------------------------------ */
export const PROFESSIONAL = {
  name: 'Dra. Jordana Nogueira',
  title: 'Cirurgiã-Dentista',
  council: 'CRO-PR 29915',
}

/* ------------------------------------------------------------------
   1.2 ENDEREÇO DO CONSULTÓRIO
   Usado no rodapé, na seção de contato e no JSON-LD do index.html.
------------------------------------------------------------------ */
export const ADDRESS = {
  street: 'R. Augusto Stresser, 1691',
  unit: 'Sala 08',
  neighborhood: 'Hugo Lange',
  city: 'Curitiba',
  state: 'PR',
  postalCode: '80040-345',
}

/** Endereço em uma linha só: "R. ..., 1691 — Sala 08, Hugo Lange, Curitiba – PR" */
export const addressLine = () =>
  `${ADDRESS.street} — ${ADDRESS.unit}, ${ADDRESS.neighborhood}, ${ADDRESS.city} – ${ADDRESS.state}`

/** Link do Google Maps a partir do endereço acima. */
export const mapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${ADDRESS.street}, ${ADDRESS.neighborhood}, ${ADDRESS.city} - ${ADDRESS.state}, ${ADDRESS.postalCode}`,
  )}`

/* ------------------------------------------------------------------
   2. IMAGENS
   ATENÇÃO: todas as URLs abaixo são PLACEHOLDERS do Unsplash, usadas
   apenas para demonstração de layout. Nenhuma delas retrata a Dra.
   Jordana, sua clínica ou pacientes reais.
   Para substituir: coloque os arquivos em /public/imagens/ e troque
   a URL por, por exemplo, '/imagens/hero.webp'.
------------------------------------------------------------------ */
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  // Foto da Dra. Jordana na primeira dobra (1130x1520, já sem os
  // artefatos de interface do print de Instagram original)
  hero: '/imagens/dra-jordana-2.webp',
  heroLowRes: '/imagens/dra-jordana-2-640.webp',

  // PLACEHOLDER — imagens ilustrativas dos procedimentos
  procedureHarmonizacao: unsplash('1531746020798-e6953c6e8e04', 800),
  procedureLabial: unsplash('1616683693504-3ea7e9ad6fec', 800),
  procedureBotox: unsplash('1746708810803-722593e53772', 800),
  procedureOlheiras: unsplash('1512290923902-8a9f81dc236c', 800),

  /* Retrato editorial da Dra. Jordana na seção "Sobre" (1200x1600). */
  doctor: '/imagens/dra-jordana.webp',
}

/* ------------------------------------------------------------------
   3. NAVEGAÇÃO
------------------------------------------------------------------ */
export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Contato', href: '#contato' },
]

/* ------------------------------------------------------------------
   4. PROCEDIMENTOS
------------------------------------------------------------------ */
export const procedures = [
  {
    index: '01',
    name: 'Harmonização Facial',
    description:
      'Realce das proporções e equilíbrio facial de forma personalizada, respeitando os traços que já são seus.',
    image: images.procedureHarmonizacao,
    alt: 'Imagem ilustrativa de rosto feminino em tons nude',
  },
  {
    index: '02',
    name: 'Preenchimento Labial',
    description:
      'Definição e volume com resultado delicado e natural, no desenho que combina com o seu rosto.',
    image: images.procedureLabial,
    alt: 'Imagem ilustrativa de close no terço inferior do rosto',
  },
  {
    index: '03',
    name: 'Botox',
    description:
      'Suavização das linhas de expressão e uma aparência mais descansada, preservando a naturalidade.',
    image: images.procedureBotox,
    alt: 'Imagem ilustrativa de aplicação de toxina botulínica na região da glabela',
  },
  {
    index: '04',
    name: 'Preenchimento de Olheiras',
    description:
      'Tratamento personalizado para melhorar a aparência da região abaixo dos olhos e o aspecto de cansaço.',
    image: images.procedureOlheiras,
    alt: 'Imagem ilustrativa de cuidado com a região dos olhos',
  },
]

/* ------------------------------------------------------------------
   5. FILOSOFIA
------------------------------------------------------------------ */
export const philosophyPillars = [
  'Naturalidade',
  'Equilíbrio',
  'Proporção',
  'Personalização',
]

/* ------------------------------------------------------------------
   6. RESULTADOS (antes e depois)
   Fotos de pacientes reais, recortadas em 3:4 com a mesma escala de
   rosto nos dois lados de cada par. Um card com `before`/`after`
   vazios volta a exibir a moldura de espaço reservado.
------------------------------------------------------------------ */
export const results = [
  {
    id: 1,
    caption: 'Harmonização facial',
    before: '/imagens/resultado-harmonizacao-antes.webp',
    after: '/imagens/resultado-harmonizacao-depois.webp',
  },
  {
    id: 2,
    caption: 'Harmonização facial',
    before: '/imagens/resultado-labial-antes.webp',
    after: '/imagens/resultado-labial-depois.webp',
  },
  {
    id: 3,
    caption: 'Harmonização facial',
    before: '/imagens/resultado-botox-antes.webp',
    after: '/imagens/resultado-botox-depois.webp',
  },
  {
    id: 4,
    caption: 'Harmonização facial',
    before: '/imagens/resultado-olheiras-antes.webp',
    after: '/imagens/resultado-olheiras-depois.webp',
  },
]

export const RESULTS_DISCLAIMER =
  'Resultados podem variar de acordo com as características e necessidades individuais de cada paciente.'

/* ------------------------------------------------------------------
   7. DEPOIMENTOS — FULL FACE
   ==================================================================
   ATENÇÃO: OS TEXTOS ABAIXO SÃO DE EXEMPLO, PARA DIAGRAMAÇÃO.
   Não são falas de pacientes reais e NÃO PODEM ir ao ar assim.
   Depoimento inventado em publicidade odontológica é infração ética
   e propaganda enganosa.

   Para publicar:
   1. Troque cada `quote` por uma fala real da paciente.
   2. Troque `author` pelo nome (ou primeiro nome + inicial) que ela
      autorizou por escrito.
   3. Guarde a autorização assinada de cada depoimento.
   4. Mude TESTIMONIALS_ARE_PLACEHOLDER para false — isso remove o
      aviso amarelo que aparece na seção.
   ================================================================== */
export const TESTIMONIALS_ARE_PLACEHOLDER = true

export const testimonials = [
  {
    // Nome real confirmado pelo cliente. A FALA AINDA É DE EXEMPLO —
    // trocar pelo que a Bárbara escreveu antes de publicar.
    id: 1,
    quote:
      'Cheguei com medo de sair com o rosto de outra pessoa. A avaliação foi o contrário disso: passamos mais tempo falando do que eu queria manter do que do que eu queria mudar.',
    author: 'Bárbara',
    detail: 'Full Face',
  },
  {
    // Nome real confirmado pelo cliente. A FALA AINDA É DE EXEMPLO —
    // trocar pelo que a Thuane escreveu antes de publicar.
    id: 2,
    quote:
      'O resultado apareceu devagar, e foi exatamente o que eu queria. Ninguém me perguntou o que eu fiz — perguntaram se eu tinha voltado de férias.',
    author: 'Thuane',
    detail: 'Full Face',
  },
  {
    // Nome real confirmado pelo cliente. A FALA AINDA É DE EXEMPLO —
    // trocar pelo que a Tali escreveu antes de publicar.
    id: 3,
    quote:
      'Ela me explicou cada aplicação antes de fazer, e o que decidiu não fazer também. Sair de lá entendendo o próprio rosto foi o que mais me marcou.',
    author: 'Tali',
    detail: 'Full Face',
  },
]

/* ------------------------------------------------------------------
   8. DIFERENCIAIS
------------------------------------------------------------------ */
export const benefits = [
  {
    title: 'Avaliação individualizada',
    text: 'Cada atendimento começa por entender o seu rosto, os seus traços e o que você deseja.',
    icon: 'search',
  },
  {
    title: 'Planejamento personalizado',
    text: 'Nada de protocolo pronto: o plano é desenhado para as suas proporções.',
    icon: 'pencil',
  },
  {
    title: 'Foco em resultados naturais',
    text: 'O objetivo é que percebam você bem — e não o procedimento.',
    icon: 'sparkles',
  },
  {
    title: 'Atendimento humanizado',
    text: 'Tempo, escuta e conversa clara sobre expectativas em cada etapa.',
    icon: 'heart',
  },
  {
    title: 'Segurança e cuidado',
    text: 'Cuidado e critério do primeiro contato ao acompanhamento.',
    icon: 'shield',
  },
]
