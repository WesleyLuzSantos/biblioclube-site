// Cloudflare Pages Function — SSR da página de categoria (/categorias?cat=...)
// Busca a lista real de livros no servidor e injeta título, meta description,
// canonical, a grade de livros já preenchida e window.__SSR_CAT__ (pra
// hidratação, evitando um segundo fetch no cliente) dentro do template
// estático categorias.html. Sem ?cat=, devolve um redirect HTTP de verdade
// (era feito só no JS do cliente antes, o que confundia o Google).

const API = 'https://api.biblioclube.com.br';

const CATS = {
  classico: { nome: 'Clássicos', desc: 'As obras que definiram a literatura mundial. Leituras que resistiram ao tempo e continuam essenciais.', cor: '#2d1a08' },
  romance: { nome: 'Romance', desc: 'Histórias de amor, paixão e sentimentos que atravessam séculos e culturas.', cor: '#2d0a1a' },
  aventura: { nome: 'Aventura', desc: 'Jornadas épicas, tesouros escondidos e heróis improvável. Para quem não consegue parar de virar páginas.', cor: '#0a1a2d' },
  suspense: { nome: 'Suspense', desc: 'Mistérios, crimes e revelações perturbadoras. Leitura para quem gosta de coração acelerado.', cor: '#0a0a1a' },
  drama: { nome: 'Drama', desc: 'Histórias sobre a condição humana — amor, perda, redenção e tudo que nos torna humanos.', cor: '#1a0a0a' },
  filosofia: { nome: 'Filosofia', desc: 'Textos que mudaram o modo como o mundo pensa. De Sun Tzu a Nietzsche.', cor: '#1a1a00' },
  serie: { nome: 'Séries', desc: 'Sagas completas com personagens inesquecíveis. De Sherlock Holmes a Arsène Lupin.', cor: '#1a0e00' },
  gibi: { nome: 'HQ / Gibi', desc: 'Quadrinhos clássicos de domínio público.', cor: '#0a1a00' },
};

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const cat = url.searchParams.get('cat') || '';

  if (!cat) {
    return Response.redirect(new URL('/', url).toString(), 301);
  }

  const templateUrl = new URL(request.url);
  templateUrl.pathname = '/categorias.html';
  templateUrl.search = '';
  const templateRes = await env.ASSETS.fetch(templateUrl.toString());
  let html = await templateRes.text();

  const info = CATS[cat];
  if (!info) {
    html = injetarNaoEncontrado(html);
    return new Response(html, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=UTF-8' },
    });
  }

  let livros = [];
  try {
    const apiRes = await fetch(`${API}/api/livros?cat=${encodeURIComponent(cat)}`);
    const data = await apiRes.json();
    livros = data.livros || [];
  } catch (e) {
    // segue com lista vazia
  }

  html = injetarCategoria(html, cat, info, livros, url);
  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=UTF-8' },
  });
}

function injetarNaoEncontrado(html) {
  html = html.replace(
    '<title id="pg-title">Categorias — BiblioClube</title>',
    '<title id="pg-title">Categoria não encontrada — BiblioClube</title>'
  );
  html = html.replace('<!--SSR_META-->', '<meta name="robots" content="noindex">');
  const heroHtml = `<div class="loading">Categoria não encontrada. <a href="/" style="color:var(--rust)">Voltar</a></div>`;
  html = html.replace(/<!--SSR_HERO_START-->[\s\S]*?<!--SSR_HERO_END-->/, heroHtml);
  html = html.replace(/<!--SSR_GRID_START-->[\s\S]*?<!--SSR_GRID_END-->/, '');
  return html;
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function injetarCategoria(html, cat, info, livros, url) {
  const canonicalUrl = `https://biblioclube.com.br/categorias?cat=${encodeURIComponent(cat)}`;

  html = html.replace(
    '<title id="pg-title">Categorias — BiblioClube</title>',
    `<title id="pg-title">${esc(info.nome)} — BiblioClube</title>`
  );
  html = html.replace(
    '<meta name="description" id="pg-desc" content="Explore o acervo do BiblioClube por categoria">',
    `<meta name="description" id="pg-desc" content="${esc(info.desc)}">`
  );
  html = html.replace(
    '<!--SSR_META-->',
    `<meta name="robots" content="index, follow">\n<link rel="canonical" href="${canonicalUrl}">`
  );

  const heroHtml = `<div class="cat-hero">
    <div class="cat-hero-inner">
      <div class="cat-eyebrow">Categoria</div>
      <h1 class="cat-nome">${esc(info.nome)}</h1>
      <p class="cat-desc">${esc(info.desc)}</p>
      <span class="cat-count">${livros.length} ${livros.length === 1 ? 'livro' : 'livros'} disponíveis</span>
    </div>
  </div>`;
  html = html.replace(/<!--SSR_HERO_START-->[\s\S]*?<!--SSR_HERO_END-->/, heroHtml);

  let gridHtml;
  if (!livros.length) {
    gridHtml = '<div class="loading">Nenhum livro nesta categoria ainda. Em breve!</div>';
  } else {
    gridHtml = livros.map((l) => {
      const cor = (CATS[l.categoria] && CATS[l.categoria].cor) || '#1a1a1a';
      const capaHtml = l.capa_url
        ? `<img src="${esc(l.capa_url)}" alt="${esc(l.titulo)}">`
        : `<div class="livro-capa-fallback" style="background:linear-gradient(160deg,${cor},${cor}cc)">
            <div style="font-family:Georgia,serif;font-size:.75rem;font-weight:700;color:rgba(255,255,255,.9);text-align:center;line-height:1.3">${esc(l.titulo)}</div>
           </div>`;
      const slug = l.slug || l.id;
      return `<a href="/livro?slug=${encodeURIComponent(slug)}" class="livro-card" style="text-decoration:none;display:block">
        <div class="livro-capa">${capaHtml}</div>
        <div class="livro-titulo">${esc(l.titulo)}</div>
        <div class="livro-autor">${esc(l.autor)}</div>
      </a>`;
    }).join('');
  }
  html = html.replace(/<!--SSR_GRID_START-->[\s\S]*?<!--SSR_GRID_END-->/, gridHtml);

  html = html.replace(
    '<!--SSR_DATA-->',
    `<script>window.__SSR_CAT__=${JSON.stringify(livros)};</script>`
  );

  return html;
}
