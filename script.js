/* ============================================================
   Silvio Cesar — Portfólio Premium · script.js
   Vanilla JS + GSAP / Lenis / Typed.js / Swiper
   ============================================================ */
(function () {
  "use strict";

  const WHATS = "5598992513797";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const money = (n) => "R$ " + n.toLocaleString("pt-BR");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(max-width: 900px)").matches;

  /* ---------- Data ---------- */
  const services = [
    { i: "fa-laptop-code", t: "Criação de Sites", d: "Sites institucionais sob medida, rápidos e prontos para converter." },
    { i: "fa-rocket", t: "Landing Pages", d: "Páginas de alta conversão focadas em campanhas e resultados." },
    { i: "fa-cart-shopping", t: "Lojas Virtuais", d: "E-commerce completo, seguro e otimizado para vender mais." },
    { i: "fa-bullhorn", t: "Tráfego Pago", d: "Campanhas estratégicas que trazem clientes qualificados." },
    { i: "fa-pen-nib", t: "Design Gráfico", d: "Identidade visual e peças que fortalecem a sua marca." },
    { i: "fa-wand-magic-sparkles", t: "UI / UX Design", d: "Interfaces elegantes com foco total na experiência do usuário." },
    { i: "fa-film", t: "Editor de Vídeo", d: "Edições dinâmicas para redes sociais e anúncios." },
    { i: "fa-robot", t: "Automações com IA", d: "Fluxos inteligentes que economizam tempo e escalam o negócio." },
    { i: "fa-comments", t: "Consultoria Digital", d: "Estratégia digital para posicionar e crescer a sua empresa." },
  ];

  const feats = [
    { i: "fa-gauge-high", t: "Sites Rápidos", d: "Performance otimizada e carregamento instantâneo." },
    { i: "fa-magnifying-glass", t: "SEO", d: "Estrutura preparada para o Google encontrar você." },
    { i: "fa-mobile-screen", t: "Responsivos", d: "Perfeitos em qualquer tela: celular, tablet ou desktop." },
    { i: "fa-shield-halved", t: "Segurança", d: "Boas práticas de proteção e certificado SSL." },
    { i: "fa-palette", t: "Design Moderno", d: "Visual premium alinhado às maiores referências do mundo." },
    { i: "fa-chart-line", t: "Alta Conversão", d: "Cada detalhe pensado para transformar visita em cliente." },
    { i: "fa-headset", t: "Suporte", d: "Acompanhamento próximo e atendimento humano." },
    { i: "fa-brain", t: "IA Aplicada", d: "Inteligência artificial integrada ao seu negócio." },
    { i: "fa-microchip", t: "Tecnologias Atuais", d: "Stack moderna e as melhores ferramentas do mercado." },
  ];

  const projects = [
    { url: "https://agenciadaviecoturismo.com.br/", name: "Davi Ecoturismo", cat: "Turismo & Ecoturismo", desc: "Site institucional para agência de ecoturismo, com foco em experiências e conversão.", img: "daviecoturismo.png" },
    { url: "https://agenciaveracruzexpedicoes.com.br/", name: "Vera Cruz Expedições", cat: "Turismo & Aventura", desc: "Plataforma para expedições e roteiros de aventura com visual imersivo.", img: "veracruzexpedições.png" },
    { url: "https://agenciawalterguialencois.com.br/", name: "Walter Guia Lençóis", cat: "Guia Turístico", desc: "Site para guia turístico dos Lençóis Maranhences, elegante e objetivo.", img: "walter guia.png" },
    { url: "https://drmatheuscassio.com.br/", name: "Dr. Matheus Cássio", cat: "Saúde & Medicina", desc: "Presença digital profissional para médico, transmitindo confiança.", img: "doutormatheuscassio.png" },
    { url: "https://planetlencois.com.br/", name: "Planet Lençóis", cat: "Turismo", desc: "Portal de turismo para a região de Lençóis com design vibrante.", img: "planettourlençóis.png" },
    { url: "https://xn--agnciagalegotrekking-x2b.com.br/", name: "Galego Trekking", cat: "Trilhas & Trekking", desc: "Site para agência de trekking com foco em trilhas e experiências.", img: "galegotrekking.png" },
  ];

  const steps = [
    { i: "fa-clipboard-list", t: "Briefing", d: "Entendo seu negócio, objetivos e público-alvo em detalhe." },
    { i: "fa-diagram-project", t: "Planejamento", d: "Defino estrutura, conteúdo e estratégia de conversão." },
    { i: "fa-palette", t: "Design", d: "Crio o layout premium e aprovamos juntos cada tela." },
    { i: "fa-code", t: "Desenvolvimento", d: "Codifico com performance, SEO e responsividade impecáveis." },
    { i: "fa-rocket", t: "Entrega", d: "Publico o site com domínio, hospedagem e tudo funcionando." },
    { i: "fa-headset", t: "Suporte", d: "Fico à disposição para ajustes e evolução contínua." },
  ];

  const testimonials = [
    { q: "O Silvio entregou um site muito acima do que eu esperava. Rápido, lindo e já trouxe clientes novos.", n: "Carla Menezes", r: "Empresária · Estética", a: "CM" },
    { q: "Profissionalismo do início ao fim. Entendeu exatamente o que eu precisava e superou.", n: "Rafael Souza", r: "Dono · Agência de Turismo", a: "RS" },
    { q: "Design impecável e um atendimento raro de encontrar. Recomendo de olhos fechados.", n: "Dra. Larissa Alves", r: "Médica", a: "LA" },
    { q: "Meu e-commerce ficou moderno e vende muito melhor. Trabalho de altíssimo nível.", n: "Bruno Lima", r: "Lojista", a: "BL" },
    { q: "A landing page que ele criou disparou minha conversão nos anúncios. Sensacional!", n: "Patrícia Gomes", r: "Infoprodutora", a: "PG" },
  ];

  const faqs = [
    { q: "Quanto tempo leva para o site ficar pronto?", a: "Depende da complexidade, mas a maioria dos projetos fica pronta entre 7 e 20 dias após o briefing e a entrega dos conteúdos." },
    { q: "O domínio é realmente gratuito?", a: "Sim, o domínio é gratuito apenas no primeiro ano. Após esse período, é necessário pagar a renovação anual do domínio, além da continuidade da hospedagem mensal." },
    { q: "O que está incluído na hospedagem de R$100/mês?", a: "Servidor rápido e seguro, o site sempre no ar, certificado SSL e a manutenção básica da infraestrutura durante todo o período." },
    { q: "As atualizações do site estão inclusas?", a: "As atualizações futuras não estão inclusas no valor inicial e são cobradas separadamente, conforme a necessidade e o escopo de cada mudança." },
    { q: "Você atende clientes de outras cidades?", a: "Sim! Todo o processo é feito de forma online, então atendo empresas de qualquer cidade do Brasil." },
    { q: "Posso pagar de forma parcelada?", a: "Podemos conversar sobre condições de pagamento no briefing para encontrar o formato que melhor se adapta a você." },
  ];

  /* ---------- Render helpers ---------- */
  function render() {
    $("#servicesGrid").innerHTML = services.map((s, idx) => `
      <article class="svc-card reveal" data-tilt data-delay="${(idx % 3) * 80}">
        <div class="svc-card__icon"><i class="fa-solid ${s.i}"></i></div>
        <h3>${s.t}</h3><p>${s.d}</p>
      </article>`).join("");

    $("#featGrid").innerHTML = feats.map((f, idx) => `
      <div class="feat reveal" data-delay="${(idx % 3) * 70}">
        <i class="fa-solid ${f.i}"></i>
        <div><h4>${f.t}</h4><p>${f.d}</p></div>
      </div>`).join("");

    $("#portfolioGrid").innerHTML = projects.map((p, idx) => `
      <article class="proj reveal" data-delay="${(idx % 3) * 90}">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="proj__overlay">
          <span class="proj__cat">${p.cat}</span>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <a class="proj__link" href="${p.url}" target="_blank" rel="noopener">Visitar Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </article>`).join("");

    $("#stepsGrid").innerHTML = steps.map((s, idx) => `
      <div class="step reveal" data-delay="${(idx % 3) * 80}">
        <div class="step__num">0${idx + 1}</div>
        <i class="fa-solid ${s.i}"></i>
        <h4>${s.t}</h4><p>${s.d}</p>
      </div>`).join("");

    $("#testimonialsWrapper").innerHTML = testimonials.map((t) => `
      <div class="swiper-slide">
        <div class="testi">
          <div class="testi__quote">${t.q}</div>
          <div class="testi__stars">★★★★★</div>
          <div class="testi__author">
            <div class="testi__avatar">${t.a}</div>
            <div><b>${t.n}</b><span>${t.r}</span></div>
          </div>
        </div>
      </div>`).join("");

    $("#faqList").innerHTML = faqs.map((f, idx) => `
      <div class="faq-item">
        <div class="faq-q"><span>${f.q}</span><i class="fa-solid fa-plus"></i></div>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`).join("");
  }

  /* ---------- Preloader ---------- */
  function preloader() {
    const el = $("#preloader"), bar = $("#preloaderBar"), pct = $("#preloaderPct");
    let p = 0, finished = false;
    const t = setInterval(() => {
      p += Math.random() * 22 + 12;
      if (p >= 100) { p = 100; clearInterval(t); setTimeout(done, 250); }
      bar.style.width = p + "%"; pct.textContent = Math.floor(p) + "%";
    }, 90);
    function done() {
      if (finished) return;
      finished = true;
      clearInterval(t);
      bar.style.width = "100%"; pct.textContent = "100%";
      el.classList.add("done"); document.body.style.overflow = ""; heroIntro();
    }
    document.body.style.overflow = "hidden";
    setTimeout(done, 2000); // hard safety
  }

  /* ---------- Smooth scroll (Lenis) ---------- */
  function smoothScroll() {
    if (reduced || typeof Lenis === "undefined") return null;
    const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (typeof gsap !== "undefined" && gsap.ticker) { lenis.on("scroll", () => window.ScrollTrigger && ScrollTrigger.update()); }
    $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1) { const tgt = $(id); if (tgt) { e.preventDefault(); lenis.scrollTo(tgt, { offset: -70 }); closeMenu(); } }
    }));
    return lenis;
  }

  /* ---------- Custom cursor + mouse glow ---------- */
  function cursor() {
    if (isTouch) return;
    const dot = $("#cursorDot"), ring = $("#cursorRing"), glow = $("#mouseGlow");
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      glow.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a,button,.choice__btn,.addon,.faq-q,[data-tilt]")) ring.classList.add("hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a,button,.choice__btn,.addon,.faq-q,[data-tilt]")) ring.classList.remove("hover");
    });
  }

  /* ---------- Progress bar + nav state + scrollspy ---------- */
  function scrollUi() {
    const bar = $("#scrollProgress"), nav = $("#nav");
    const links = $$(".nav__link");
    const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean);
    function upd() {
      const h = document.documentElement;
      const sc = h.scrollTop || document.body.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      if (bar) bar.style.width = (max > 0 ? (sc / max) * 100 : 0) + "%";
      nav.classList.toggle("scrolled", sc > 40);
      let cur = "";
      sections.forEach((s) => { if (sc >= s.offsetTop - 120) cur = "#" + s.id; });
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === cur));
    }
    window.addEventListener("scroll", upd, { passive: true });
    upd();
  }

  /* ---------- Mobile menu ---------- */
  let menuOpen = false;
  function menu() {
    const burger = $("#navBurger"), links = $("#navLinks");
    burger.addEventListener("click", () => {
      menuOpen = !menuOpen;
      burger.classList.toggle("open", menuOpen);
      links.classList.toggle("open", menuOpen);
    });
  }
  function closeMenu() {
    if (!menuOpen) return;
    menuOpen = false;
    $("#navBurger").classList.remove("open");
    $("#navLinks").classList.remove("open");
  }

  /* ---------- Typed hero ---------- */
  function typed() {
    if (typeof Typed === "undefined") { $("#typed").textContent = "sites de alta conversão."; return; }
    new Typed("#typed", {
      strings: ["sites de alta conversão.", "landing pages que vendem.", "experiências com IA.", "interfaces premium.", "e-commerce que converte."],
      typeSpeed: 55, backSpeed: 28, backDelay: 1600, startDelay: 400, loop: true, smartBackspace: true,
    });
  }

  /* ---------- Hero intro (GSAP) ---------- */
  function heroIntro() {
    if (reduced || typeof gsap === "undefined") { $$(".hero [data-split], .hero .reveal").forEach((e) => (e.style.opacity = 1)); return; }
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero .pill", { y: 24, opacity: 0, duration: .7 })
      .from(".hero__title .line", { yPercent: 110, opacity: 0, duration: .9, stagger: .12 }, "-=.3")
      .from(".hero__typed", { y: 20, opacity: 0, duration: .6 }, "-=.4")
      .from(".hero__desc", { y: 20, opacity: 0, duration: .6 }, "-=.35")
      .from(".hero__cta", { y: 20, opacity: 0, duration: .6 }, "-=.35")
      .from(".hero__stats .stat", { y: 20, opacity: 0, duration: .5, stagger: .1 }, "-=.3")
      .from(".hero__visual", { scale: .9, opacity: 0, duration: 1 }, "-=.9");
    $$(".hero [data-split]").forEach((e) => (e.style.opacity = 1));
    countUp();
  }

  /* ---------- Reveal on scroll ---------- */
  function reveals() {
    const els = $$(".reveal");
    if (reduced || typeof IntersectionObserver === "undefined") { els.forEach((e) => e.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const d = en.target.dataset.delay || 0;
          en.target.style.animationDelay = d + "ms";
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Count up ---------- */
  function countUp() {
    $$("[data-count]").forEach((el) => {
      const target = +el.dataset.count; let n = 0;
      const step = Math.max(1, target / 40);
      const t = setInterval(() => { n += step; if (n >= target) { n = target; clearInterval(t); } el.textContent = Math.floor(n); }, 28);
    });
  }

  /* ---------- Parallax on visual ---------- */
  function parallax() {
    if (reduced || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero__visual", { yPercent: -14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".orb--1", { yPercent: 30, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: true } });
    gsap.to(".orb--2", { yPercent: -20, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: true } });
  }

  /* ---------- 3D tilt ---------- */
  function tilt() {
    if (isTouch) return;
    $$("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  /* ---------- Hero photo auto-swap ---------- */
  function photoSwap() {
    const photos = $$(".photo-stack .photo");
    if (photos.length < 2) return;
    let i = 0;
    setInterval(() => {
      photos[i].classList.remove("active");
      i = (i + 1) % photos.length;
      photos[i].classList.add("active");
    }, 3200);
  }

  /* ---------- FAQ accordion ---------- */
  function faqAccordion() {
    $$(".faq-item").forEach((item) => {
      const q = $(".faq-q", item), a = $(".faq-a", item);
      q.addEventListener("click", () => {
        const open = item.classList.contains("open");
        $$(".faq-item").forEach((it) => { it.classList.remove("open"); $(".faq-a", it).style.maxHeight = null; });
        if (!open) { item.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }
      });
    });
  }

  /* ---------- Swiper testimonials ---------- */
  function swiper() {
    if (typeof Swiper === "undefined") return;
    new Swiper("#testimonialsSwiper", {
      slidesPerView: 1, spaceBetween: 22, grabCursor: true, loop: true,
      autoplay: { delay: 4200, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 720: { slidesPerView: 2 }, 1080: { slidesPerView: 3 } },
    });
  }

  /* ---------- Ambient particles ---------- */
  function particles() {
    if (reduced) return;
    const c = $("#fx"), ctx = c.getContext("2d");
    let w, h, pts = [];
    const N = isTouch ? 34 : 70;
    function resize() { w = c.width = innerWidth; h = c.height = innerHeight; }
    resize(); addEventListener("resize", resize);
    for (let i = 0; i < N; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 });
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(91,140,255,.55)"; ctx.fill();
        for (let j = i + 1; j < N; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(120,150,255,${(1 - dist / 130) * 0.14})`; ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ---------- Budget calculator ---------- */
  function calculator() {
    const form = $("#calcForm");
    let base = 1100, typeLabel = "Landing Page";
    const pagesEl = $("#calcPages"), pagesVal = $("#pagesVal");
    const totalEl = $("#calcTotal"), urgency = $("#calcUrgency");

    function compute() {
      let total = base;
      const pages = +pagesEl.value;
      total += Math.max(0, pages - 1) * 180;
      $$(".addons input:checked").forEach((a) => (total += +a.dataset.price));
      total += +urgency.value;
      totalEl.textContent = money(total);
      pagesVal.textContent = pages;
      return total;
    }

    $$(".choice__btn").forEach((b) => b.addEventListener("click", () => {
      $$(".choice__btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active"); base = +b.dataset.price; typeLabel = b.dataset.label; compute();
    }));
    [pagesEl, urgency].forEach((el) => el.addEventListener("input", compute));
    $$(".addons input").forEach((a) => a.addEventListener("change", compute));
    compute();

    $("#calcWhats").addEventListener("click", () => {
      const total = compute();
      const name = $("#calcName").value.trim() || "(não informado)";
      const company = $("#calcCompany").value.trim() || "(não informado)";
      const notes = $("#calcNotes").value.trim() || "(nenhuma)";
      const feats = $$(".addons input:checked").map((a) => a.dataset.label);
      const urgLabel = urgency.options[urgency.selectedIndex].text;
      const msg =
        `*Solicitação de Orçamento — Site*\n\n` +
        `*Nome:* ${name}\n` +
        `*Empresa:* ${company}\n` +
        `*Tipo de site:* ${typeLabel}\n` +
        `*Páginas:* ${pagesEl.value}\n` +
        `*Urgência:* ${urgLabel}\n` +
        `*Funcionalidades:* ${feats.length ? feats.join(", ") : "Nenhuma extra"}\n` +
        `*Valor estimado:* ${money(total)}\n` +
        `_(+ hospedagem R$ 100/mês · domínio grátis no 1º ano)_\n\n` +
        `*Observações:* ${notes}`;
      window.open(`https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`, "_blank");
    });
  }

  /* ---------- Contact form ---------- */
  function contactForm() {
    $("#contactForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const g = (id) => ($("#" + id).value.trim() || "(não informado)");
      const msg =
        `*Novo Contato pelo Site*\n\n` +
        `*Nome:* ${g("cfName")}\n` +
        `*Empresa:* ${g("cfCompany")}\n` +
        `*Cidade:* ${g("cfCity")}\n` +
        `*Telefone:* ${g("cfPhone")}\n` +
        `*Email:* ${g("cfEmail")}\n` +
        `*Tipo do projeto:* ${$("#cfType").value}\n\n` +
        `*Mensagem:* ${g("cfMsg")}`;
      window.open(`https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`, "_blank");
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    $("#year").textContent = new Date().getFullYear();
    render();
    preloader();
    smoothScroll();
    cursor();
    scrollUi();
    menu();
    typed();
    reveals();
    parallax();
    tilt();
    photoSwap();
    faqAccordion();
    swiper();
    particles();
    calculator();
    contactForm();
    if (reduced) heroIntro();
  });

  window.addEventListener("load", () => { if (window.ScrollTrigger) ScrollTrigger.refresh(); });
})();