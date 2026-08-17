// Cloudflare Pages Function — SSR da página de livro (/livro?slug=...)
// Busca os dados reais do livro no servidor (sem depender de JavaScript no
// navegador) e injeta título, meta description, canonical, conteúdo visível
// e window.__SSR_LIVRO__ (pra hidratação, evitando um segundo fetch no
// cliente) dentro do template estático livro.html.

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
  return html;
}

function injetarLivro(html, l, url) {
  const titulo = l.titulo || '';
  const autor = l.autor || '';
  const sinopse = l.sinopse || `Leia ${titulo} gratuitamente no BiblioClube`;
  const slugLivro = l.slug || l.id;
  const canonicalUrl = `https://biblioclube.com.br/livro?slug=${encodeURIComponent(slugLivro)}`;

  html = html.replace(
    '<title id="pg-title">BiblioClube</title>',
    `<title id="pg-title">${esc(titulo)} — ${esc(autor)} | BiblioClube</title>`
  );
  html = html.replace(
    '<meta name="description" id="pg-desc" content="Leia gratuitamente no BiblioClube">',
    `<meta name="description" id="pg-desc" content="${esc(sinopse)}">`
  );
  html = html.replace(
    '<!--SSR_META-->',
    `<meta name="robots" content="index, follow">\n<link rel="canonical" href="${canonicalUrl}">`
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
        <p style="color:rgba(255,248,230,.75);margin-top:1rem;max-width:60ch">${esc(sinopse)}</p>
        <div class="livro-acoes">${acaoHtml}</div>
      </div>
    </div>
  </div>`;
  html = html.replace(/<!--SSR_HERO_START-->[\s\S]*?<!--SSR_HERO_END-->/, heroHtml);

  html = html.replace(
    '<!--SSR_DATA-->',
    `<script>window.__SSR_LIVRO__=${JSON.stringify(l)};</script>`
  );

  return html;
}
