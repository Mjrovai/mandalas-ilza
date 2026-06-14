(function () {
  'use strict';

  // Nomes por número de divisões
  var GRUPOS = {
    6:  'Seis',
    7:  'Sete',
    8:  'Oito',
    9:  'Nove',
    10: 'Dez',
    11: 'Onze',
    12: 'Doze'
  };
  var ORDEM = [6, 7, 8, 9, 10, 11, 12];

  // Refs DOM
  var viewGallery = document.getElementById('view-gallery');
  var viewDetail  = document.getElementById('view-detail');
  var viewAbout   = document.getElementById('view-about');
  var galleryEl   = document.getElementById('gallery');
  var detailEl    = document.getElementById('detail');
  var aboutEl     = document.getElementById('about');
  var navGallery  = document.getElementById('nav-gallery');
  var navAbout    = document.getElementById('nav-about');

  // ── Roteamento ──────────────────────────────
  function showView(which) {
    [viewGallery, viewDetail, viewAbout].forEach(function (v) { v.classList.remove('active'); });
    navGallery.classList.remove('active');
    navAbout.classList.remove('active');
    window.scrollTo(0, 0);
    if (which === 'gallery') { viewGallery.classList.add('active'); navGallery.classList.add('active'); }
    if (which === 'detail')  { viewDetail.classList.add('active'); }
    if (which === 'about')   { viewAbout.classList.add('active');  navAbout.classList.add('active'); }
  }

  function route() {
    var hash = window.location.hash;
    if (!hash || hash === '#' || hash === '#gallery') {
      showView('gallery');
    } else if (hash === '#about') {
      showView('about');
    } else if (hash.indexOf('#mandala=') === 0) {
      showView('detail');
      renderDetail(hash.slice(9));
    } else {
      showView('gallery');
    }
  }

  // ── Galeria ─────────────────────────────────
  function renderGallery() {
    galleryEl.innerHTML = '';

    ORDEM.forEach(function (div) {
      var group = MANDALAS.filter(function (m) { return m.divisoes === div; });
      if (!group.length) return;

      group.sort(function (a, b) { return a.data < b.data ? -1 : 1; });
      var nome = GRUPOS[div] || String(div);

      var sec  = mk('div', 'group-section');
      var hdr  = mk('div', 'group-header');
      hdr.innerHTML =
        '<h2 class="group-name">' + nome + '</h2>' +
        '<p class="group-subtitle">' + group.length + ' mandala' + (group.length > 1 ? 's' : '') + '</p>';
      sec.appendChild(hdr);

      var grid = mk('div', 'gallery-grid');
      group.forEach(function (m, i) {
        var thumb = m.mao || m.illustrator || m.pb;
        var card  = mk('div', 'mandala-card');
        card.style.animationDelay = (i * 0.06) + 's';
        card.innerHTML =
          '<div class="mandala-card-image">' +
            (thumb
              ? '<img src="' + esc(thumb) + '" alt="' + esc(nome + ' ' + m.data) + '" loading="lazy">'
              : '<div class="no-image">—</div>') +
            (m.pb ? '<span class="badge-pb" title="Disponível para download">↓</span>' : '') +
          '</div>' +
          '<div class="mandala-card-info">' +
            '<h3 class="mandala-card-title">' + nome + ' · ' + m.data + '</h3>' +
          '</div>';
        card.addEventListener('click', function () { window.location.hash = 'mandala=' + m.id; });
        grid.appendChild(card);
      });

      sec.appendChild(grid);
      galleryEl.appendChild(sec);
    });
  }

  // ── Detalhe ─────────────────────────────────
  function renderDetail(id) {
    var m = null;
    for (var i = 0; i < MANDALAS.length; i++) {
      if (MANDALAS[i].id === id) { m = MANDALAS[i]; break; }
    }
    if (!m) {
      detailEl.innerHTML = '<p class="not-found">Mandala não encontrada.</p>';
      return;
    }

    var nome  = GRUPOS[m.divisoes] || String(m.divisoes);
    var group = MANDALAS
      .filter(function (x) { return x.divisoes === m.divisoes; })
      .sort(function (a, b) { return a.data < b.data ? -1 : 1; });

    var idx  = group.findIndex(function (x) { return x.id === id; });
    var prev = idx > 0                  ? group[idx - 1] : null;
    var next = idx < group.length - 1  ? group[idx + 1] : null;

    // Versões disponíveis
    var versions = [];
    if (m.mao)         versions.push({ src: m.mao,         label: 'À mão' });
    if (m.illustrator) versions.push({ src: m.illustrator, label: 'Illustrator' });
    if (m.pb)          versions.push({ src: m.pb,          label: 'Preto e branco' });

    var vClass = versions.length === 1
      ? 'detail-versions detail-versions--single'
      : 'detail-versions detail-versions--multi detail-cols-' + versions.length;

    var vHtml = '<div class="' + vClass + '">';
    versions.forEach(function (v) {
      vHtml +=
        '<div class="detail-image-wrapper">' +
          '<img src="' + esc(v.src) + '" alt="' + esc(v.label) + '" loading="lazy">' +
          '<span class="detail-image-label">' + v.label + '</span>' +
        '</div>';
    });
    vHtml += '</div>';

    var dlHtml = m.pb
      ? '<div class="detail-actions">' +
          '<a href="' + esc(m.pb) + '" download class="btn-download">' +
            svgDownload() +
            'Baixar preto e branco para impressão' +
          '</a>' +
        '</div>'
      : '';

    var prevLabel = prev ? '← ' + (GRUPOS[prev.divisoes] || '') + ' ' + prev.data : '';
    var nextLabel = next ? (GRUPOS[next.divisoes] || '') + ' ' + next.data + ' →' : '';

    detailEl.innerHTML =
      '<a href="#gallery" class="back-btn">← Voltar para galeria</a>' +
      '<div class="detail-header">' +
        '<h1 class="detail-title">' + nome + ' · ' + m.data + '</h1>' +
      '</div>' +
      '<div class="detail-nav">' +
        (prev
          ? '<a class="detail-nav-btn" href="#mandala=' + prev.id + '">' + prevLabel + '</a>'
          : '<span class="detail-nav-btn detail-nav-btn--disabled"></span>') +
        (next
          ? '<a class="detail-nav-btn" href="#mandala=' + next.id + '">' + nextLabel + '</a>'
          : '<span class="detail-nav-btn detail-nav-btn--disabled"></span>') +
      '</div>' +
      '<div class="detail-grid">' + vHtml + dlHtml + '</div>';
  }

  // ── Sobre ────────────────────────────────────
  function renderAbout() {
    aboutEl.innerHTML =
      '<a href="#gallery" class="back-btn">← Voltar para galeria</a>' +
      '<h1 class="about-title">Sobre a Ilza</h1>' +
      '<div class="about-content">' +
        '<p><strong>Ilza Abad Barbosa Rovai</strong> é artista e arte terapeuta, apaixonada pela criação de mandalas — aqueles círculos geométricos sagrados usados há séculos como ferramentas de meditação, cura e autoconhecimento.</p>' +
        '<p>Cada mandala é o resultado de um processo artesanal que une a precisão do design digital (criada no Adobe Illustrator) à sensibilidade das cores aplicadas à mão. O resultado são obras que carregam tanto a perfeição da geometria quanto a afetividade da intervenção humana.</p>' +
        '<p>Além da arte, a Ilza pratica <strong>terapia ocupacional</strong>, <strong>MARI</strong> (Método de Investigação Relacional e Interpessoal), <strong>remédios florais</strong> (Bach, Bush e California) e <strong>astrologia</strong> — todas ferramentas que conectam arte, relação e cuidado.</p>' +
        '<p>Este site reúne as mandalas criadas, organizadas por número de divisões (de Seis a Doze), com as datas de criação. Cada mandala está disponível em até três versões: colorida à mão, colorida no Illustrator e preto e branco — esta última disponível para download, para que você possa pintar em casa.</p>' +
        '<h2>Como usar as mandalas</h2>' +
        '<p>Baixe a versão preto e branco, imprima em papel A4 ou ofício, e pinte à sua maneira. Não existe certo ou errado — cada mandala é um convite à presença, ao respiro, ao momento.</p>' +
        '<p>Saiba mais em: <a href="https://ilzasite.wordpress.com/" target="_blank" rel="noopener noreferrer">ilzasite.wordpress.com</a></p>' +
      '</div>';
  }

  // ── Utilitários ──────────────────────────────
  function mk(tag, cls) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function svgDownload() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>' +
      '<polyline points="7 10 12 15 17 10"/>' +
      '<line x1="12" y1="15" x2="12" y2="3"/>' +
      '</svg>';
  }

  // ── Init ─────────────────────────────────────
  function init() {
    renderGallery();
    renderAbout();
    route();
    window.addEventListener('hashchange', route);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
