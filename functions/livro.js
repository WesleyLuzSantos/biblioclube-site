// Cloudflare Pages Function — SSR da página de livro (/livro?slug=...)
// Busca os dados reais do livro no servidor (sem depender de JavaScript no
// navegador) e injeta título, meta description, canonical, conteúdo visível
// e window.__SSR_LIVRO__ (pra hidratação, evitando um segundo fetch no
// cliente) dentro do template estático livro.html.

import { CONTEUDO } from './_lib/conteudo.js';

const API = 'https://api.biblioclube.com.br';

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug') || url.searchParams.get('id') || '';

  const templateUrl = new URL(request.url);
  templateUrl.pathname = '/livro.html';
  templateUrl.search = '';
  const templateRes = await env.ASSETS.fetch(templateUrl.toString());
  let html = await templateRes.text();

  if (!slug) {
    html = injetarNaoEncontrado(html, 'Livro não especificado');
    return new Response(html, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=UTF-8' },
    });
  }

  let livro = null;
  try {
    const apiRes = await fetch(`${API}/api/livros/${encodeURIComponent(slug)}`);
    const data = await apiRes.json();
    if (data.ok) livro = data.livro;
  } catch (e) {
    // segue com livro=null; trata como não encontrado abaixo
  }

  if (!livro) {
    html = injetarNaoEncontrado(html, 'Livro não encontrado');
    return new Response(html, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=UTF-8' },
    });
  }

  html = injetarLivro(html, livro, url);
  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=UTF-8' },
  });
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CAT_LABELS = {
  classico: 'Clássico', romance: 'Romance', aventura: 'Aventura',
  suspense: 'Suspense', drama: 'Drama', filosofia: 'Filosofia',
  serie: 'Série', gibi: 'HQ/Gibi',
};
function catLabel(c) { return CAT_LABELS[c] || c || ''; }

function injetarNaoEncontrado(html, msg) {
  html = html.replace('<!--SSR_META-->', '<meta name="robots" content="noindex">');
  const heroHtml = `<div class="loading-page">
    <p style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:var(--muted)">${esc(msg)}</p>
    <a href="/" style="color:var(--rust);font-size:.85rem">← Voltar ao acervo</a>
  </div>`;
  html = html.replace(/<!--SSR_HERO_START-->[\s\S]*?<!--SSR_HERO_END-->/, heroHtml);
  html = html.replace('<!--SSR_GUIA-->', '');
  return html;
}

function metaDescricao(titulo, sinopse) {
  const prefixo = `Leia ${titulo} online, grátis e sem cadastro. `;
  let corpo = (sinopse || '').trim();
  const maxCorpo = 155 - prefixo.length;
  if (corpo.length > maxCorpo) {
    corpo = corpo.slice(0, Math.max(0, maxCorpo - 1)).replace(/\s+\S*$/, '') + '…';
  }
  return prefixo + corpo;
}

function guiaLeitura(slug, titulo, autor) {
  const c = CONTEUDO[slug];
  if (!c) return '';
  const pers = (c.personagens || []).map(([n, d]) => `<li><strong>${esc(n)}:</strong> ${esc(d)}</li>`).join('');
  return `<section class="guia-leitura" style="max-width:860px;margin:2.5rem auto;padding:0 1.25rem;font-family:'Figtree',system-ui,sans-serif;line-height:1.8;color:inherit">
    <h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.7rem;margin:0 0 .6rem">Guia de leitura: ${esc(titulo)} online</h2>
    <p>${esc(c.sobre)}</p>
    <h3 style="font-size:1.1rem;margin:1.6rem 0 .4rem">Personagens e elementos principais</h3>
    <ul style="margin:0 0 .6rem 1.2rem">${pers}</ul>
    <h3 style="font-size:1.1rem;margin:1.6rem 0 .4rem">Contexto da obra</h3>
    <p>${esc(c.contexto)}</p>
    <h3 style="font-size:1.1rem;margin:1.6rem 0 .4rem">Sobre o autor: ${esc(autor)}</h3>
    <p>${esc(c.autor)}</p>
    <h3 style="font-size:1.1rem;margin:1.6rem 0 .4rem">Curiosidades</h3>
    <p>${esc(c.curiosidade)}</p>
    <p style="margin-top:1.6rem"><strong>Ler ${esc(titulo)} online grátis:</strong> o texto completo está disponível no leitor do BiblioClube, sem cadastro, direto no navegador.</p>
  </section>`;
}

function injetarLivro(html, l, url) {
  const titulo = l.titulo || '';
  const autor = l.autor || '';
  const sinopse = l.sinopse || `Leia ${titulo} gratuitamente no BiblioClube`;
  const slugLivro = l.slug || l.id;
  const canonicalUrl = `https://biblioclube.com.br/livro?slug=${encodeURIComponent(slugLivro)}`;
  const tituloPagina = `${titulo} — Ler Online Grátis | BiblioClube`;
  const descricaoPagina = metaDescricao(titulo, sinopse);

  html = html.replace(
    '<title id="pg-title">BiblioClube</title>',
    `<title id="pg-title">${esc(tituloPagina)}</title>`
  );
  html = html.replace(
    '<meta name="description" id="pg-desc" content="Leia gratuitamente no BiblioClube">',
    `<meta name="description" id="pg-desc" content="${esc(descricaoPagina)}">`
  );

  const catNome = catLabel(l.categoria);
  const catUrl = l.categoria ? `https://biblioclube.com.br/categorias?cat=${encodeURIComponent(l.categoria)}` : null;
  const breadcrumbItens = [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://biblioclube.com.br/' },
  ];
  if (catUrl) breadcrumbItens.push({ '@type': 'ListItem', position: 2, name: catNome, item: catUrl });
  breadcrumbItens.push({ '@type': 'ListItem', position: breadcrumbItens.length + 1, name: titulo, item: canonicalUrl });

  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: titulo,
    author: { '@type': 'Person', name: autor },
    url: canonicalUrl,
    inLanguage: 'pt-BR',
    bookFormat: 'https://schema.org/EBook',
    isAccessibleForFree: true,
    description: sinopse,
    publisher: { '@type': 'Organization', name: 'BiblioClube', url: 'https://biblioclube.com.br' },
    potentialAction: {
      '@type': 'ReadAction',
      target: `https://biblioclube.com.br/leitor.html?slug=${encodeURIComponent(slugLivro)}`,
    },
  };
  if (catNome) bookSchema.genre = catNome;
  if (l.ano) bookSchema.datePublished = String(l.ano);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItens,
  };

  html = html.replace(
    '<!--SSR_META-->',
    `<meta name="robots" content="index, follow">\n<link rel="canonical" href="${canonicalUrl}">\n` +
    `<script type="application/ld+json">${JSON.stringify(bookSchema)}</script>\n` +
    `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`
  );

  // Conteúdo simples e semântico — o cliente ainda substitui isso pela versão
  // rica (capa/gradiente/grid de estatísticas) assim que o JS roda, usando
  // os mesmos dados via window.__SSR_LIVRO__ (sem precisar buscar de novo).
  const temPdf = l.tem_pdf || (l.paginas > 0);
  const leitorUrl = `/leitor.html?slug=${encodeURIComponent(slugLivro)}`;
  const acaoHtml = (l.pago && l.link_afiliado)
    ? `<a href="${esc(l.link_afiliado)}">Comprar Ebook</a>`
    : temPdf
      ? `<a href="${leitorUrl}">Ler agora</a>`
      : `<span>Em breve</span>`;

  const heroHtml = `<div class="livro-hero">
    <div class="livro-hero-inner">
      <div class="livro-info">
        <span class="livro-categoria">${esc(catLabel(l.categoria))}</span>
        <h1 class="livro-titulo">${esc(titulo)}</h1>
        <div class="livro-autor">${esc(autor)}</div>
        <div style="color:var(--rust,#c45c2a);font-size:.8rem;font-weight:700;letter-spacing:.5px;margin-top:.4rem">Leia online agora, grátis e sem cadastro</div>
        <p style="color:rgba(255,248,230,.75);margin-top:1rem;max-width:60ch">${esc(sinopse)}</p>
        <div class="livro-acoes">${acaoHtml}</div>
      </div>
    </div>
  </div>`;
  html = html.replace(/<!--SSR_HERO_START-->[\s\S]*?<!--SSR_HERO_END-->/, heroHtml);

  html = html.replace('<!--SSR_GUIA-->', guiaLeitura(slugLivro, titulo, autor));
  html = html.replace(
    '<!--SSR_DATA-->',
    `<script>window.__SSR_LIVRO__=${JSON.stringify(l)};</script>`
  );

  return html;
}
