/* ============================================================
   PLENNUS BEM-ESTAR — JavaScript Compartilhado
   Site completo · main.js
   ============================================================ */

(function() {
  'use strict';

  // ============================================================
  // PRODUCT DATA
  // ============================================================
  const WHATSAPP = '5515996340480';

  const techDescriptions = {
    'FIR Power': { icon: '☀', desc: 'Biocerâmica que emite infravermelho longo (4-16 mícrons) para circulação e relaxamento muscular.' },
    'FIR NG': { icon: '☀', desc: 'Nova geração de biocerâmica FIR com emissão otimizada de infravermelho longo.' },
    'MFP': { icon: '◈', desc: 'Magnetic FIR Power — fusão de campo magnético + infravermelho longo. Patenteada em 40+ países.' },
    'Rabatan': { icon: '✋', desc: 'Espuma vulcanizada a 180°C com milhares de pontos de acupressão para automassagem.' },
    'Íon Balls': { icon: '●', desc: 'Microesferas de minerais raros que liberam íons negativos para oxigenação.' },
    'Magnetos': { icon: '⊕', desc: 'Magnetos permanentes de Ferrita Bário para campo magnético terapêutico.' },
    'BioPower': { icon: '⚡', desc: 'Vibromassagem + PEMF-ELF: ondas eletromagnéticas pulsadas controladas por app.' },
    'EPS 2000': { icon: '▣', desc: 'Base isotérmica italiana com passagens de ar para ventilação e durabilidade.' },
    'G-Zero': { icon: '∞', desc: '6 camadas de densidade progressiva para sensação de flutuação e equilíbrio postural.' },
    'Relax System': { icon: '♫', desc: '9 modos de massagem, 5 zonas corporais, controle Bluetooth via app.' },
    'Íons de Prata': { icon: '✧', desc: 'Ação antimicrobiana contra 650+ bactérias e vírus. Certificado ISO 18184:2019.' },
    'Íon Balls (12 cápsulas)': { icon: '●', desc: '12 cápsulas posicionadas na região da cabeça para máxima oxigenação.' },
    'Íon Balls (12)': { icon: '●', desc: '12 cápsulas posicionadas na região da cabeça para máxima oxigenação.' }
  };

  const produtos = {
    'star-prime': {
      nome: 'Star Prime FIR Automassagem',
      categoria: 'Topo de Linha',
      descricao: 'O ápice da ciência do sono Nipponflex. Sistema completo com Rabatan® de milhares de pontos de acupressão, infravermelho longo FIR Power®, MFP® patenteada em 40+ países, Íon Balls e magnetos terapêuticos. A superfície Rabatan Perfilado High Tech vulcanizada a 180°C simula dedos de massagista profissional para automassagem restauradora.',
      altura: null,
      massagem: 'Automassagem passiva (Rabatan)',
      densidade: 'Progressiva',
      pillow: 'Euro Top',
      techs: ['FIR Power', 'FIR NG', 'MFP', 'Rabatan', 'Íon Balls', 'Magnetos', 'EPS 2000'],
      imagens: ['star-prime-1.jpg', 'star-prime-2.jpg', 'star-prime-3.jpg'],
      idealPara: ['Quem busca o melhor', 'Dores crônicas', 'Profissionais intensos']
    },
    'american-fir': {
      nome: 'American FIR',
      categoria: 'Premium',
      descricao: 'O modelo flagship da Nipponflex com 34cm de altura e construção de 7 camadas. Incorpora o conjunto mais completo de tecnologias incluindo massagem eletrônica BioPower com emissão de ondas PEMF-ELF. Tecido com íons de prata antimicrobianos contra 650+ tipos de bactérias e vírus.',
      altura: '34 cm',
      massagem: 'BioPower (PEMF-ELF via app)',
      densidade: 'Progressiva',
      pillow: 'Euro Top',
      techs: ['FIR Power', 'FIR NG', 'MFP', 'Rabatan', 'Íon Balls', 'Magnetos', 'BioPower', 'EPS 2000', 'Íons de Prata'],
      imagens: ['american-1.jpg', 'american-2.jpeg', 'american-3.jpeg', 'american-4.png'],
      idealPara: ['Casais exigentes', 'Quem quer massagem ativa', 'Tecnologia máxima']
    },
    'evolution-gz-bio': {
      nome: 'Evolution FIR G-z Bio',
      categoria: 'Intermediário+',
      descricao: 'O colchão com mais tecnologias terapêuticas da Nipponflex. 26cm de altura com Pillow Euro Top e Densidade Progressiva G-Zero de 6 camadas. Inclui 12 cápsulas de Íon Balls posicionadas na região da cabeça e massagem eletrônica BioPower com PEMF-ELF.',
      altura: '26 cm',
      massagem: 'BioPower (PEMF-ELF via app)',
      densidade: 'Progressiva G-Zero',
      pillow: 'Euro Top',
      techs: ['FIR Power', 'FIR NG', 'MFP', 'Rabatan', 'Íon Balls (12 cápsulas)', 'BioPower', 'G-Zero', 'EPS 2000', 'Íons de Prata'],
      imagens: ['evo-gz-bio-1.png', 'evo-gz-bio-2.jpeg', 'evo-gz-bio-3.jpeg', 'evo-gz-bio-4.jpeg'],
      idealPara: ['Problemas posturais', 'Insônia', 'Máximo de tecnologia terapêutica']
    },
    'evolution-gz-relax': {
      nome: 'Evolution FIR G-z Relax',
      categoria: 'Intermediário+',
      descricao: 'Sistema de 29cm com Relax System — vibromassageador eletrônico com 5 zonas corporais e 9 modos automáticos de massagem controlados por Bluetooth. Densidade Progressiva G-Zero para equilíbrio postural perfeito. 12 pastilhas de Íon Balls na região da cabeça.',
      altura: '29 cm',
      massagem: 'Relax System (9 modos, 5 zonas, Bluetooth)',
      densidade: 'Progressiva G-Zero',
      pillow: 'Euro Top',
      techs: ['FIR Power', 'FIR NG', 'MFP', 'Rabatan', 'Íon Balls (12)', 'Relax System', 'G-Zero', 'EPS 2000', 'Íons de Prata'],
      imagens: ['evo-gz-relax-1.png', 'evo-gz-relax-2.jpeg', 'evo-gz-relax-3.jpeg', 'evo-gz-relax-4.jpeg'],
      idealPara: ['Relaxamento profundo', 'Casais', 'Controle total pelo celular']
    },
    'evolution-automassagem': {
      nome: 'Evolution FIR Automassagem',
      categoria: 'Intermediário+',
      descricao: 'Sistema científico de dormir com automassagem através do Rabatan Perfilado High Tech. Construção de 6 camadas com densidade progressiva para suporte anatômico ideal. Sistema de circulação de ar reduz transpiração noturna.',
      altura: null,
      massagem: 'Automassagem passiva (Rabatan)',
      densidade: 'Progressiva (6 camadas)',
      pillow: 'Euro Top',
      techs: ['FIR Power', 'FIR NG', 'MFP', 'Rabatan', 'Íon Balls', 'Magnetos', 'EPS 2000'],
      imagens: ['evo-auto-1.png', 'evo-auto-2.jpeg', 'evo-auto-3.jpeg', 'evo-auto-4.jpeg'],
      idealPara: ['Automassagem natural', 'Dores musculares', 'Ventilação superior']
    },
    'sleep-fir': {
      nome: 'Sleep FIR',
      categoria: 'Entrada',
      descricao: 'A porta de entrada para o sono científico Nipponflex. Inclui FIR Power com biocerâmica e FIR NG, Rabatan® para acupressão, magnetos de Ferrita Bário, MFP® patenteada em 40+ países e massagem eletrônica BioPower com PEMF-ELF.',
      altura: null,
      massagem: 'BioPower (PEMF-ELF via app)',
      densidade: 'Progressiva',
      pillow: null,
      techs: ['FIR Power', 'FIR NG', 'MFP', 'Rabatan', 'Magnetos', 'BioPower', 'EPS 2000'],
      imagens: ['sleep-fir-1.png', 'sleep-fir-2.jpeg', 'sleep-fir-3.jpeg', 'sleep-fir-4.jpeg'],
      idealPara: ['Primeiro colchão científico', 'Custo-benefício', 'BioPower acessível']
    },
    'quantum-fir-gz': {
      nome: 'Quantum FIR G-z',
      categoria: 'Inovação',
      descricao: 'Inovação quântica com 28cm e construção de 7 camadas. Combina Densidade Progressiva G-Zero para equilíbrio postural com MFP® patenteada e BioPower PEMF-ELF. Poliuretano de alta performance com resiliência e conforto superiores.',
      altura: '28 cm',
      massagem: 'BioPower (PEMF-ELF via app)',
      densidade: 'Progressiva G-Zero (7 camadas)',
      pillow: null,
      techs: ['FIR Power', 'FIR NG', 'MFP', 'Rabatan', 'Magnetos', 'BioPower', 'G-Zero', 'EPS 2000'],
      imagens: ['quantum-1.png', 'quantum-2.jpeg', 'quantum-3.jpeg', 'quantum-4.jpeg'],
      idealPara: ['Inovação quântica', 'Equilíbrio postural', 'Tecnologia de ponta']
    }
  };

  // ============================================================
  // UTILITY: WhatsApp URL generator
  // ============================================================
  function waUrl(msg) {
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);
  }

  // ============================================================
  // 1. PRELOADER
  // ============================================================
  function initPreloader() {
    var el = document.getElementById('preloaderText');
    if (!el) return;
    var text = 'PLENNUS';
    el.innerHTML = text.split('').map(function(c, i) {
      return '<span style="animation-delay:' + (0.3 + i * 0.1) + 's">' + c + '</span>';
    }).join('');
    setTimeout(function() {
      var preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(function() { preloader.style.display = 'none'; }, 800);
      }
    }, 2200);
  }

  // ============================================================
  // 2. STAR GENERATION
  // ============================================================
  function generateStars(containerId, count) {
    var container = document.getElementById(containerId);
    if (!container) return;
    count = count || 50;
    for (var i = 0; i < count; i++) {
      var star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.setProperty('--duration', (3 + Math.random() * 5) + 's');
      star.style.setProperty('--delay', (Math.random() * 5) + 's');
      star.style.setProperty('--max-opacity', (0.3 + Math.random() * 0.5).toString());
      if (Math.random() > 0.85) {
        star.style.width = '3px';
        star.style.height = '3px';
        star.style.boxShadow = '0 0 6px rgba(232, 213, 163, 0.4)';
      }
      container.appendChild(star);
    }
  }

  // ============================================================
  // 3. STICKY NAVIGATION
  // ============================================================
  function initNav() {
    var nav = document.getElementById('mainNav');
    var hamburger = document.getElementById('hamburgerBtn');
    var overlay = document.getElementById('navOverlay');
    if (!nav) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });

    if (hamburger && overlay) {
      hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
      });
      var overlayLinks = overlay.querySelectorAll('a');
      overlayLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          hamburger.classList.remove('open');
          overlay.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // ============================================================
  // 4. INTERSECTION OBSERVER — Scroll Reveal
  // ============================================================
  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(function(el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease ' + (i % 4) * 0.1 + 's, transform 0.8s ease ' + (i % 4) * 0.1 + 's';
      observer.observe(el);
    });
  }

  // ============================================================
  // 5. ANTI-DIVIDER animation
  // ============================================================
  function initAntiDivider() {
    var divider = document.querySelector('.anti-divider');
    if (!divider) return;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          divider.classList.add('visible');
          observer.unobserve(divider);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(divider);
  }

  // ============================================================
  // 6. COUNT-UP ANIMATION
  // ============================================================
  function initCountUp() {
    var numbers = document.querySelectorAll('.number-value[data-target]');
    if (!numbers.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'));
          var suffix = el.querySelector('.number-suffix');
          var suffixText = suffix ? suffix.outerHTML : '';
          animateCount(el, target, suffixText);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    numbers.forEach(function(n) { observer.observe(n); });
  }

  function animateCount(el, target, suffixHtml) {
    var duration = 2000;
    var start = performance.now();
    function step(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(eased * target);
      el.innerHTML = value.toLocaleString('pt-BR') + suffixHtml;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ============================================================
  // 7. TECHNOLOGY TABS
  // ============================================================
  function initTechTabs() {
    var nav = document.getElementById('techTabsNav');
    if (!nav) return;
    var buttons = nav.querySelectorAll('.tech-tab-btn');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tabId = btn.getAttribute('data-tab');
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        document.querySelectorAll('.tech-tab-content').forEach(function(t) { t.classList.remove('active'); });
        var target = document.getElementById('tab-' + tabId);
        if (target) target.classList.add('active');
      });
    });
  }

  // ============================================================
  // 8. MOUSE PARALLAX (hero stars, desktop only)
  // ============================================================
  function initParallax() {
    var container = document.getElementById('heroStars');
    if (!container || window.innerWidth < 768) return;
    document.addEventListener('mousemove', function(e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 20;
      var y = (e.clientY / window.innerHeight - 0.5) * 20;
      container.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    }, { passive: true });
  }

  // ============================================================
  // 9. PRODUCT PAGE — Hash Routing & Rendering
  // ============================================================
  function initProductPage() {
    if (!document.getElementById('productHero')) return;

    function render() {
      var slug = window.location.hash.replace('#', '');
      var product = produtos[slug];
      if (!product) {
        window.location.href = 'index.html#colchoes';
        return;
      }

      document.title = product.nome + ' — Plennus Bem-Estar | Nipponflex';

      // Gallery
      var mainImg = document.getElementById('galleryMainImg');
      mainImg.src = 'images/produtos/' + product.imagens[0];
      mainImg.alt = product.nome;

      var thumbsContainer = document.getElementById('galleryThumbs');
      thumbsContainer.innerHTML = '';
      product.imagens.forEach(function(img, i) {
        var thumb = document.createElement('div');
        thumb.className = 'product-gallery-thumb' + (i === 0 ? ' active' : '');
        thumb.innerHTML = '<img src="images/produtos/' + img + '" alt="' + product.nome + ' - foto ' + (i + 1) + '">';
        thumb.addEventListener('click', function() {
          mainImg.src = 'images/produtos/' + img;
          thumbsContainer.querySelectorAll('.product-gallery-thumb').forEach(function(t) { t.classList.remove('active'); });
          thumb.classList.add('active');
        });
        thumbsContainer.appendChild(thumb);
      });

      // Info
      document.getElementById('productCategory').textContent = product.categoria;
      document.getElementById('productName').textContent = product.nome;
      document.getElementById('productDesc').textContent = product.descricao;

      // Specs
      var specsHtml = '';
      if (product.altura) specsHtml += '<div><div class="product-detail-spec-label">Altura</div><div class="product-detail-spec-value">' + product.altura + '</div></div>';
      if (product.massagem) specsHtml += '<div><div class="product-detail-spec-label">Massagem</div><div class="product-detail-spec-value">' + product.massagem + '</div></div>';
      if (product.densidade) specsHtml += '<div><div class="product-detail-spec-label">Densidade</div><div class="product-detail-spec-value">' + product.densidade + '</div></div>';
      if (product.pillow) specsHtml += '<div><div class="product-detail-spec-label">Pillow Top</div><div class="product-detail-spec-value">' + product.pillow + '</div></div>';
      document.getElementById('productSpecs').innerHTML = specsHtml;

      // Tech pills
      document.getElementById('productTechs').innerHTML = product.techs.map(function(t) {
        return '<span class="product-tech-pill">' + t + '</span>';
      }).join('');

      // WhatsApp
      var waMsg = 'Olá! Vi o ' + product.nome + ' no site Plennus e gostaria de saber mais.';
      document.getElementById('productWhatsApp').href = waUrl(waMsg);

      // Tech Section Title
      var techTitle = document.getElementById('techSectionTitle');
      if (techTitle) techTitle.textContent = product.nome;

      // Tech Grid
      var techGrid = document.getElementById('productTechGrid');
      if (techGrid) {
        techGrid.innerHTML = product.techs.map(function(t) {
          var info = techDescriptions[t] || { icon: '◈', desc: 'Tecnologia avançada Nipponflex.' };
          return '<div class="tech-card reveal">' +
            '<div class="tech-icon">' + info.icon + '</div>' +
            '<h4 class="tech-title">' + t + '</h4>' +
            '<p class="tech-desc">' + info.desc + '</p>' +
            '</div>';
        }).join('');
      }

      // Ideal For
      var idealGrid = document.getElementById('idealForGrid');
      if (idealGrid) {
        var icons = ['◈', '✦', '☽', '∞'];
        idealGrid.innerHTML = product.idealPara.map(function(item, i) {
          return '<div class="product-ideal-card reveal">' +
            '<div class="ideal-icon">' + icons[i % icons.length] + '</div>' +
            '<p>' + item + '</p>' +
            '</div>';
        }).join('');
      }

      // Other Products
      var otherContainer = document.getElementById('otherProducts');
      if (otherContainer) {
        otherContainer.innerHTML = '';
        Object.keys(produtos).forEach(function(key) {
          if (key === slug) return;
          var p = produtos[key];
          var card = document.createElement('div');
          card.className = 'product-card';
          card.innerHTML =
            '<div class="product-card-image"><img src="images/produtos/' + p.imagens[0] + '" alt="' + p.nome + '" loading="lazy"></div>' +
            '<div class="product-card-body">' +
            '<div class="product-badge">' + p.categoria + '</div>' +
            '<h3 class="product-name">' + p.nome + '</h3>' +
            '<a href="produto.html#' + key + '" class="product-card-cta">Ver detalhes →</a>' +
            '</div>';
          otherContainer.appendChild(card);
        });
      }

      // CTA
      var ctaHeadline = document.getElementById('ctaHeadline');
      if (ctaHeadline) ctaHeadline.innerHTML = 'Quer experimentar o<br><em>' + product.nome + '</em>?';
      var ctaWA = document.getElementById('ctaWhatsApp');
      if (ctaWA) ctaWA.href = waUrl(waMsg);

      // Re-init scroll reveals for new content
      initScrollReveal();
      window.scrollTo(0, 0);
    }

    render();
    window.addEventListener('hashchange', render);
  }

  // ============================================================
  // 10. QUIZ ENGINE
  // ============================================================
  function initQuiz() {
    var container = document.getElementById('quizContainer');
    if (!container) return;

    var state = { step: 1, position: null, priority: null, needs: [], techLevel: 'essencial' };
    var steps = [document.getElementById('step1'), document.getElementById('step2'), document.getElementById('step3'), document.getElementById('step4')];
    var result = document.getElementById('quizResult');
    var progress = document.getElementById('quizProgress');
    var nav = document.getElementById('quizNav');

    // Step 1: Single select
    steps[0].querySelectorAll('.quiz-option').forEach(function(opt) {
      opt.addEventListener('click', function() {
        steps[0].querySelectorAll('.quiz-option').forEach(function(o) { o.classList.remove('selected'); });
        opt.classList.add('selected');
        state.position = opt.getAttribute('data-value');
        setTimeout(function() { goToStep(2); }, 300);
      });
    });

    // Step 2: Single select
    steps[1].querySelectorAll('.quiz-option').forEach(function(opt) {
      opt.addEventListener('click', function() {
        steps[1].querySelectorAll('.quiz-option').forEach(function(o) { o.classList.remove('selected'); });
        opt.classList.add('selected');
        state.priority = opt.getAttribute('data-value');
      });
    });

    // Step 3: Multi-select
    steps[2].querySelectorAll('.quiz-option').forEach(function(opt) {
      opt.addEventListener('click', function() {
        var val = opt.getAttribute('data-value');
        if (val === 'nenhuma') {
          steps[2].querySelectorAll('.quiz-option').forEach(function(o) { o.classList.remove('selected'); });
          opt.classList.add('selected');
          state.needs = ['nenhuma'];
        } else {
          steps[2].querySelector('[data-value="nenhuma"]').classList.remove('selected');
          opt.classList.toggle('selected');
          state.needs = [];
          steps[2].querySelectorAll('.quiz-option.selected').forEach(function(s) {
            state.needs.push(s.getAttribute('data-value'));
          });
        }
      });
    });

    // Step 4: Tech level selection
    var techLabels = document.querySelectorAll('.quiz-slider-label');
    var techDesc = document.getElementById('techLevelDesc');
    var techDescriptions = {
      essencial: 'Tecnologias base: FIR Power, Rabatan e MFP',
      avancado: 'Massagem eletrônica + Densidade G-Zero',
      maximo: 'Tudo que existe: BioPower, Relax, G-Zero, Íons de Prata'
    };
    techLabels.forEach(function(label) {
      label.addEventListener('click', function() {
        techLabels.forEach(function(l) { l.classList.remove('active'); });
        label.classList.add('active');
        state.techLevel = label.getAttribute('data-value');
        if (techDesc) techDesc.textContent = techDescriptions[state.techLevel];
      });
    });

    // Nav buttons
    var backBtn = document.getElementById('quizBack');
    var nextBtn = document.getElementById('quizNext');

    backBtn.addEventListener('click', function() {
      if (state.step > 1) goToStep(state.step - 1);
    });

    nextBtn.addEventListener('click', function() {
      if (state.step < 4) {
        goToStep(state.step + 1);
      } else {
        showResult();
      }
    });

    // Restart
    var restartBtn = document.getElementById('quizRestart');
    if (restartBtn) {
      restartBtn.addEventListener('click', function() {
        state = { step: 1, position: null, priority: null, needs: [], techLevel: 'essencial' };
        container.querySelectorAll('.quiz-option').forEach(function(o) { o.classList.remove('selected'); });
        techLabels.forEach(function(l) { l.classList.remove('active'); });
        techLabels[0].classList.add('active');
        if (techDesc) techDesc.textContent = techDescriptions.essencial;
        result.classList.remove('active');
        result.style.display = 'none';
        goToStep(1);
      });
    }

    function goToStep(n) {
      state.step = n;
      steps.forEach(function(s, i) {
        s.classList.toggle('active', i === n - 1);
      });
      // Progress dots
      var dots = progress.querySelectorAll('.quiz-progress-dot');
      dots.forEach(function(dot, i) {
        dot.classList.remove('active', 'completed');
        if (i < n - 1) dot.classList.add('completed');
        if (i === n - 1) dot.classList.add('active');
      });
      // Nav visibility
      if (n === 1) {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nextBtn.textContent = n === 4 ? 'Ver Resultado →' : 'Próximo →';
      }
      progress.style.display = 'flex';
      result.style.display = 'none';
    }

    function showResult() {
      steps.forEach(function(s) { s.classList.remove('active'); });
      nav.style.display = 'none';
      progress.style.display = 'none';

      // Scoring
      var scores = {};
      Object.keys(produtos).forEach(function(k) { scores[k] = 0; });

      // Priority scoring
      if (state.priority === 'alivio') {
        scores['star-prime'] += 5;
        scores['evolution-automassagem'] += 4;
        scores['american-fir'] += 3;
      } else if (state.priority === 'circulacao') {
        scores['american-fir'] += 5;
        scores['evolution-gz-bio'] += 4;
        scores['star-prime'] += 3;
      } else if (state.priority === 'massagem') {
        scores['american-fir'] += 5;
        scores['evolution-gz-relax'] += 5;
        scores['evolution-gz-bio'] += 3;
      } else if (state.priority === 'postural') {
        scores['evolution-gz-bio'] += 5;
        scores['evolution-gz-relax'] += 4;
        scores['quantum-fir-gz'] += 4;
      }

      // Needs scoring
      if (state.needs.indexOf('dores') >= 0) {
        scores['star-prime'] += 3;
        scores['evolution-automassagem'] += 3;
      }
      if (state.needs.indexOf('insonia') >= 0) {
        scores['evolution-gz-bio'] += 3;
        scores['evolution-gz-relax'] += 3;
      }
      if (state.needs.indexOf('alergia') >= 0) {
        scores['american-fir'] += 3;
        scores['evolution-gz-bio'] += 2;
        scores['evolution-gz-relax'] += 2;
      }
      if (state.needs.indexOf('transpiracao') >= 0) {
        scores['evolution-automassagem'] += 3;
        scores['quantum-fir-gz'] += 2;
      }

      // Tech level scoring
      if (state.techLevel === 'essencial') {
        scores['sleep-fir'] += 4;
        scores['evolution-automassagem'] += 2;
      } else if (state.techLevel === 'avancado') {
        scores['evolution-gz-bio'] += 3;
        scores['evolution-gz-relax'] += 3;
        scores['quantum-fir-gz'] += 3;
      } else {
        scores['american-fir'] += 4;
        scores['star-prime'] += 3;
        scores['evolution-gz-bio'] += 3;
      }

      // Sort
      var sorted = Object.keys(scores).sort(function(a, b) { return scores[b] - scores[a]; });
      var best = sorted[0];
      var second = sorted[1];
      var p = produtos[best];
      var p2 = produtos[second];

      // Render result
      document.getElementById('resultHeadline').innerHTML = 'Seu colchão ideal é o <em>' + p.nome + '</em>';
      document.getElementById('resultImg').src = 'images/produtos/' + p.imagens[0];
      document.getElementById('resultImg').alt = p.nome;
      document.getElementById('resultBadge').textContent = p.categoria;
      document.getElementById('resultName').textContent = p.nome;
      document.getElementById('resultDesc').textContent = p.descricao;
      document.getElementById('resultTechs').innerHTML = p.techs.map(function(t) {
        return '<span class="product-tech-pill">' + t + '</span>';
      }).join('');
      document.getElementById('resultCTA').href = waUrl('Olá! Fiz o quiz no site Plennus e meu resultado foi o ' + p.nome + '. Gostaria de saber mais!');
      document.getElementById('resultSecondary').innerHTML = 'Segunda opção: <a href="produto.html#' + second + '" style="color: var(--gold); text-decoration: underline;">' + p2.nome + '</a>';

      result.style.display = 'block';
      result.classList.add('active');
    }
  }

  // ============================================================
  // INIT
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    generateStars('heroStars', 60);
    generateStars('ctaStars', 40);
    generateStars('quizStars', 50);
    initNav();
    initScrollReveal();
    initAntiDivider();
    initCountUp();
    initTechTabs();
    initParallax();
    initProductPage();
    initQuiz();
  });

})();
