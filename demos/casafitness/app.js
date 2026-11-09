/* ==========================================================================
   CASA FITNESS COLOMBIA (@casafitnesscol) — INTERACTIVE ENGINE (app.js)
   100% Datos Oficiales del Catálogo Real de Casa Fitness (+57 317 4242001)
   ========================================================================== */

const CF_WHATSAPP_NUMBER = '573174242001';

const CF_PRODUCTS = [
  {
    id: 'creatina-animal',
    code: 'CF-01 // MONO',
    name: 'CREATINA ANIMAL',
    category: 'monohidratada',
    categoryLabel: 'CREATINA MONOHIDRATADA',
    lab: 'Universal Nutrition',
    jarImg: 'assets/products/01_creatina_animal.png',
    labImg: 'assets/labs/lab_01_creatina_animal.png',
    bgWord: 'ANIMAL',
    offer: false,
    summary: 'Creatina monohidratada pura de grado pesado para fuerza bruta, resíntesis acelerada de ATP e hipertrofia sarcomérica.',
    metrics: { atp: 98, vol: 95, abs: 92, def: 85 },
    goalTag: 'fuerza',
    variants: [
      { label: '300 GR', price: 108000, servings: 60, durationDays: '60 días' },
      { label: '500 GR', price: 140000, servings: 100, durationDays: '100 días' },
      { label: '1 KG', price: 225000, servings: 200, durationDays: '200 días' }
    ]
  },
  {
    id: 'crea-stack',
    code: 'CF-02 // STACK',
    name: 'CREA STACK',
    category: 'monohidratada',
    categoryLabel: 'COMPLEJO CREATINA + HMB',
    lab: 'Nutramerican Pharma',
    jarImg: 'assets/products/02_crea_stack.png',
    labImg: 'assets/labs/lab_02_crea_stack.png',
    bgWord: 'STACK',
    offer: false,
    summary: 'Sinergia avanzada de Creatina + HMB + Ácido Alfa Lipoico para bloquear el catabolismo y disparar la ganancia muscular.',
    metrics: { atp: 95, vol: 96, abs: 94, def: 88 },
    goalTag: 'volumen',
    variants: [
      { label: '600 GR', price: 131000, servings: 60, durationDays: '60 días' }
    ]
  },
  {
    id: 'ultra-pure-100',
    code: 'CF-03 // PURE',
    name: 'ULTRA PURE 100%',
    category: 'monohidratada',
    categoryLabel: 'CREATINA MONOHIDRATADA',
    lab: 'Smart Nutrition',
    jarImg: 'assets/products/03_ultra_pure.png',
    labImg: 'assets/labs/lab_03_ultra_pure.png',
    bgWord: 'PURE 100',
    offer: false,
    summary: 'Monohidrato micronizado de rápida disolución celular para entrenamientos explosivos y recuperación entre series.',
    metrics: { atp: 93, vol: 91, abs: 92, def: 86 },
    goalTag: 'fuerza',
    variants: [
      { label: '500 GR', price: 112000, servings: 100, durationDays: '100 días' }
    ]
  },
  {
    id: 'cell-tech',
    code: 'CF-04 // MASS',
    name: 'CELL TECH',
    category: 'monohidratada',
    categoryLabel: 'VOLUMINIZADOR CELULAR',
    lab: 'MuscleTech',
    jarImg: 'assets/products/04_cell_tech.png',
    labImg: 'assets/labs/lab_04_cell_tech.png',
    bgWord: 'CELLTECH',
    offer: false,
    summary: 'Fórmula legendaria de creatina con matriz de carbohidratos multifase, BCAAs y taurina para pico de insulina y volumen extremo.',
    metrics: { atp: 97, vol: 100, abs: 96, def: 75 },
    goalTag: 'volumen',
    variants: [
      { label: '3 LB', price: 149000, servings: 28, durationDays: '28-56 días' },
      { label: '6 LB', price: 224000, servings: 56, durationDays: '56-112 días' }
    ]
  },
  {
    id: 'monster-test',
    code: 'CF-05 // TEST',
    name: 'MONSTER TEST',
    category: 'monohidratada',
    categoryLabel: 'CREATINA MONOHIDRATADA',
    lab: 'Angry Supplements',
    jarImg: 'assets/products/05_monster_test.png',
    labImg: 'assets/labs/lab_05_monster_test.png',
    bgWord: 'MONSTER',
    offer: false,
    summary: 'Creatina monohidratada sin sabor de excelente relación costo-beneficio para potenciar fuerza y resistencia anaeróbica.',
    metrics: { atp: 91, vol: 90, abs: 89, def: 84 },
    goalTag: 'fuerza',
    variants: [
      { label: '300 GR', price: 89000, servings: 60, durationDays: '60 días' }
    ]
  },
  {
    id: 'atomic-mono',
    code: 'CF-06 // ATOMIC',
    name: 'ATOMIC MONOHIDRATADA',
    category: 'monohidratada',
    categoryLabel: 'CREATINA MONOHIDRATADA',
    lab: 'SmartMuscle',
    jarImg: 'assets/products/06_atomic_mono.png',
    labImg: 'assets/labs/lab_06_atomic_mono.png',
    bgWord: 'ATOMIC',
    offer: false,
    summary: '120 servicios de creatina monohidratada pura de alto rendimiento para ciclos largos de fuerza e hipertrofia sostenida.',
    metrics: { atp: 94, vol: 92, abs: 91, def: 86 },
    goalTag: 'fuerza',
    variants: [
      { label: '600 GR', price: 104000, servings: 120, durationDays: '120 días' }
    ]
  },
  {
    id: 'creatina-nutrex',
    code: 'CF-07 // NUTREX',
    name: 'CREATINE MONOHYDRATE',
    category: 'monohidratada',
    categoryLabel: 'CREATINA MICRONIZADA',
    lab: 'Nutrex Research',
    jarImg: 'assets/products/07_creatina_nutrex.png',
    labImg: 'assets/labs/lab_07_creatina_nutrex.png',
    bgWord: 'NUTREX',
    offer: false,
    summary: 'Creatina ultra micronizada de laboratorio estadounidense Nutrex Research para máxima biodisponibilidad y potencia muscular.',
    metrics: { atp: 96, vol: 94, abs: 95, def: 88 },
    goalTag: 'fuerza',
    variants: [
      { label: '300 GR', price: 90000, servings: 60, durationDays: '60 días' },
      { label: '1 KG', price: 180000, servings: 200, durationDays: '200 días' }
    ]
  },
  {
    id: 'platinum-creatine',
    code: 'CF-08 // PLATINUM',
    name: 'PLATINUM CREATINE',
    category: 'monohidratada',
    categoryLabel: 'CREATINA HPLC TESTED',
    lab: 'MuscleTech',
    jarImg: 'assets/products/08_platinum_creatine.png',
    labImg: 'assets/labs/lab_08_platinum_creatine.png',
    bgWord: 'PLATINUM',
    offer: false,
    summary: 'Creatina micronizada certificada por HPLC de MuscleTech: 80 servicios de 5g clínicos para ganancia magra comprobada.',
    metrics: { atp: 98, vol: 95, abs: 97, def: 90 },
    goalTag: 'fuerza',
    variants: [
      { label: '400 GR', price: 143000, servings: 80, durationDays: '80 días' }
    ]
  },
  {
    id: 'creatina-on',
    code: 'CF-09 // GOLD ON',
    name: 'CREATINA ON',
    category: 'monohidratada',
    categoryLabel: 'MICRONIZED CREATINE',
    lab: 'Optimum Nutrition',
    jarImg: 'assets/products/09_creatina_on.png',
    labImg: 'assets/labs/lab_09_creatina_on.png',
    bgWord: 'OPTIMUM',
    offer: false,
    summary: 'El estándar mundial de Optimum Nutrition: creatina micronizada 100% pura sin rellenos para atletas exigentes.',
    metrics: { atp: 99, vol: 95, abs: 98, def: 92 },
    goalTag: 'fuerza',
    variants: [
      { label: '300 GR', price: 116000, servings: 60, durationDays: '60 días' }
    ]
  },
  {
    id: 'creatina-metrx',
    code: 'CF-10 // MET-RX',
    name: 'CREATINA MET RX',
    category: 'monohidratada',
    categoryLabel: 'CREATINA MONOHIDRATADA',
    lab: 'MET-Rx',
    jarImg: 'assets/products/10_creatina_metrx.png',
    labImg: 'assets/labs/lab_10_creatina_metrx.png',
    bgWord: 'MET-RX',
    offer: true,
    summary: 'Edición en OFERTA OFICIAL: 400 gramos (80 servicios) de monohidrato puro MET-Rx para fuerza pesada y recuperación.',
    metrics: { atp: 96, vol: 94, abs: 94, def: 89 },
    goalTag: 'fuerza',
    variants: [
      { label: '400 GR', price: 105000, servings: 80, durationDays: '80 días' }
    ]
  },
  {
    id: 'creatina-dymatize',
    code: 'CF-11 // CREAPURE',
    name: 'CREATINA DYMATIZE',
    category: 'monohidratada',
    categoryLabel: 'MICRONIZED CREAPURE®',
    lab: 'Dymatize',
    jarImg: 'assets/products/11_creatina_dymatize.png',
    labImg: 'assets/labs/lab_11_creatina_dymatize.png',
    bgWord: 'DYMATIZE',
    offer: false,
    summary: 'Sello alemán Creapure® de pureza farmacéutica superior: máxima absorción celular sin molestias digestivas.',
    metrics: { atp: 99, vol: 96, abs: 100, def: 94 },
    goalTag: 'fuerza',
    variants: [
      { label: '300 GR', price: 135000, servings: 60, durationDays: '60 días' }
    ]
  },
  {
    id: 'legacy-proscience',
    code: 'CF-12 // HCL PRO',
    name: 'LEGACY',
    category: 'hcl',
    categoryLabel: 'CREATINA HCL + LEUCINA + BETAÍNA',
    lab: 'ProScience',
    jarImg: 'assets/products/12_legacy_proscience.png',
    labImg: 'assets/labs/lab_12_legacy_proscience.png',
    bgWord: 'LEGACY',
    offer: false,
    summary: 'Creatina HCL + Leucina + Betaína de ProScience: absorción ultrarrápida, síntesis proteica y cero retención subcutánea.',
    metrics: { atp: 96, vol: 90, abs: 99, def: 99 },
    goalTag: 'definicion',
    variants: [
      { label: '50 SERVICIOS', price: 102000, servings: 50, durationDays: '50 días' }
    ]
  },
  {
    id: 'atomic-hcl',
    code: 'CF-13 // HCL 60',
    name: 'ATOMIC HCL',
    category: 'hcl',
    categoryLabel: 'CREATINA HCL + LEUCINA',
    lab: 'SmartMuscle',
    jarImg: 'assets/products/13_atomic_hcl.png',
    labImg: 'assets/labs/lab_13_atomic_hcl.png',
    bgWord: 'ATOMIC HCL',
    offer: false,
    summary: '60 servicios de Creatina HCL hidrocloruro de alta solubilidad para fuerza limpia, rocosidad muscular y definición.',
    metrics: { atp: 94, vol: 88, abs: 97, def: 98 },
    goalTag: 'definicion',
    variants: [
      { label: '60 SERVICIOS', price: 83000, servings: 60, durationDays: '60 días' }
    ]
  },
  {
    id: 'crea-hcl',
    code: 'CF-14 // HCL OFERTA',
    name: 'CREA HCL',
    category: 'hcl',
    categoryLabel: 'CREATINA HIDROCLORURO',
    lab: 'Natural Nutrition',
    jarImg: 'assets/products/14_crea_hcl.png',
    labImg: 'assets/labs/lab_14_crea_hcl.png',
    bgWord: 'CREA HCL',
    offer: true,
    summary: 'OFERTA OFICIAL Casa Fitness: 50 servicios de Creatina HCL 4.5g para máxima definición estética y digestión ligera.',
    metrics: { atp: 92, vol: 87, abs: 96, def: 97 },
    goalTag: 'definicion',
    variants: [
      { label: '50 SERVICIOS', price: 80000, servings: 50, durationDays: '50 días' }
    ]
  },
  {
    id: 'creactor-muscletech',
    code: 'CF-15 // HCL 120',
    name: 'CREACTOR',
    category: 'hcl',
    categoryLabel: 'HCL + FREE-ACID CREATINE',
    lab: 'MuscleTech',
    jarImg: 'assets/products/15_creactor_muscletech.png',
    labImg: 'assets/labs/lab_15_creactor_muscletech.png',
    bgWord: 'CREACTOR',
    offer: false,
    summary: '120 servicios ultra concentrados de Creatina HCL + Creatina de Ácido Libre MuscleTech. Cero carga, cero hinchazón.',
    metrics: { atp: 98, vol: 91, abs: 100, def: 100 },
    goalTag: 'definicion',
    variants: [
      { label: '120 SERVICIOS', price: 115000, servings: 120, durationDays: '120 días' }
    ]
  }
];

// Estado global de la aplicación
const state = {
  activeProductId: 'creatina-animal',
  selectedVariantByProduct: {},
  currentFilter: 'all',
  searchQuery: '',
  cart: [],
  hud: {
    goal: 'fuerza',       // 'fuerza' | 'definicion' | 'volumen'
    duration: 'standard', // 'standard' | 'extended'
    budget: 'all'         // 'optimo' | 'all'
  }
};

// Inicializar variante por defecto (índice 0) para cada producto
CF_PRODUCTS.forEach(p => {
  state.selectedVariantByProduct[p.id] = 0;
});

function formatCOP(num) {
  return '$' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/* ==========================================================================
   1. ESCENARIO HERO INTERACTIVO EN 3 CAPAS
   ========================================================================== */
function setHeroProduct(prodId) {
  const prod = CF_PRODUCTS.find(p => p.id === prodId) || CF_PRODUCTS[0];
  const v = prod.variants[0];

  const jarEl = document.getElementById('heroJarImg');
  const catEl = document.getElementById('heroProdCat');
  const nameEl = document.getElementById('heroProdName');
  const priceEl = document.getElementById('heroProdPrice');
  const codeEl = document.getElementById('heroHudCode');
  const labEl = document.getElementById('heroHudLab');
  const bgTextEl = document.getElementById('heroKineticWord');
  const heroRight = document.getElementById('heroStageRight');
  const addBtn = document.getElementById('heroAddBtn');

  if (jarEl) {
    jarEl.style.opacity = '0.2';
    jarEl.style.transform = 'scale(0.92)';
    setTimeout(() => {
      jarEl.src = prod.jarImg;
      jarEl.alt = prod.name;
      jarEl.style.opacity = '1';
      jarEl.style.transform = 'scale(1)';
    }, 120);
  }
  if (catEl) catEl.textContent = `${prod.categoryLabel} // ${v.label}`;
  if (nameEl) nameEl.textContent = prod.name;
  if (priceEl) priceEl.textContent = formatCOP(v.price);
  if (codeEl) codeEl.textContent = prod.code;
  if (labEl) labEl.textContent = prod.lab.toUpperCase();
  if (bgTextEl) bgTextEl.textContent = `${prod.bgWord} // CASA FITNESS`;
  if (heroRight) {
    const glow = prod.category === 'hcl'
      ? 'rgba(2, 108, 192, 0.36)'
      : 'rgba(206, 4, 16, 0.34)';
    heroRight.style.setProperty('--hero-stage-glow', glow);
  }
  if (addBtn) {
    addBtn.onclick = () => addToCart(prod.id, 0);
  }

  document.querySelectorAll('.cf-stage-QuickBtn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.heroId === prod.id);
  });
}

/* ==========================================================================
   2. VITRINA SPLIT-STAGE & LISTA EDITORIAL SUIZA DE 1PX
   ========================================================================== */
function updateDissectionStage(prodId) {
  state.activeProductId = prodId;
  const prod = CF_PRODUCTS.find(p => p.id === prodId) || CF_PRODUCTS[0];
  const varIdx = state.selectedVariantByProduct[prod.id] || 0;
  const variant = prod.variants[varIdx] || prod.variants[0];
  const costPerServ = Math.round(variant.price / variant.servings);

  document.getElementById('dissectCode').textContent = prod.code;
  document.getElementById('dissectCat').textContent = prod.categoryLabel;
  document.getElementById('dissectLabImg').src = prod.labImg;
  document.getElementById('dissectLabImg').alt = prod.lab;
  document.getElementById('dissectBgWord').textContent = prod.bgWord;
  document.getElementById('dissectJarImg').src = prod.jarImg;
  document.getElementById('dissectJarImg').alt = prod.name;
  document.getElementById('dissectTitle').textContent = prod.name;
  document.getElementById('dissectSubtitle').textContent = prod.summary;

  // Barras de telemetría
  document.getElementById('teleAtpBar').style.width = prod.metrics.atp + '%';
  document.getElementById('teleAtpVal').textContent = prod.metrics.atp + '%';
  document.getElementById('teleVolBar').style.width = prod.metrics.vol + '%';
  document.getElementById('teleVolVal').textContent = prod.metrics.vol + '%';
  document.getElementById('teleAbsBar').style.width = prod.metrics.abs + '%';
  document.getElementById('teleAbsVal').textContent = prod.metrics.abs + '%';
  document.getElementById('teleDefBar').style.width = prod.metrics.def + '%';
  document.getElementById('teleDefVal').textContent = prod.metrics.def + '%';

  // Variantes / Gramajes
  const pillsContainer = document.getElementById('dissectVariantPills');
  pillsContainer.innerHTML = prod.variants.map((v, idx) => `
    <button type="button" class="cf-variant-btn ${idx === varIdx ? 'active' : ''}" onclick="selectProductVariant('${prod.id}', ${idx})">
      ${v.label} — ${formatCOP(v.price)}
    </button>
  `).join('');

  document.getElementById('dissectPriceMain').textContent = formatCOP(variant.price);
  document.getElementById('dissectCostPerDay').textContent =
    `≈ ${formatCOP(costPerServ)} / servicio (${variant.servings} serv. · ${variant.durationDays})`;

  const dissectAddBtn = document.getElementById('dissectAddBtn');
  dissectAddBtn.onclick = () => addToCart(prod.id, varIdx);

  // Resaltar fila activa en la tabla suiza
  document.querySelectorAll('.cf-ledger-row').forEach(row => {
    row.classList.toggle('active', row.dataset.prodId === prod.id);
  });
}

function selectProductVariant(prodId, varIdx, event) {
  if (event) event.stopPropagation();
  state.selectedVariantByProduct[prodId] = varIdx;
  renderSwissLedger();
  updateDissectionStage(prodId);
}

function renderSwissLedger() {
  const container = document.getElementById('swissLedgerBody');
  if (!container) return;

  const filtered = CF_PRODUCTS.filter(p => {
    if (state.currentFilter === 'monohidratada' && p.category !== 'monohidratada') return false;
    if (state.currentFilter === 'hcl' && p.category !== 'hcl') return false;
    if (state.currentFilter === 'oferta' && !p.offer) return false;
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchLab = p.lab.toLowerCase().includes(q);
      const matchCat = p.categoryLabel.toLowerCase().includes(q);
      return matchName || matchLab || matchCat;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 3rem 2rem; font-family: var(--font-mono); color: var(--cf-text-muted);">
        No se encontraron suplementos con ese filtro. Prueba buscando otra marca o limpia el filtro.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => {
    const varIdx = state.selectedVariantByProduct[prod.id] || 0;
    const activeVar = prod.variants[varIdx] || prod.variants[0];
    const costPerServ = Math.round(activeVar.price / activeVar.servings);
    const isActive = prod.id === state.activeProductId;

    const variantChips = prod.variants.map((v, idx) => `
      <button type="button"
        class="cf-row-var-chip ${idx === varIdx ? 'active' : ''}"
        onclick="selectProductVariant('${prod.id}', ${idx}, event)">
        ${v.label}
      </button>
    `).join('');

    return `
      <article class="cf-ledger-row ${isActive ? 'active' : ''}"
        data-prod-id="${prod.id}"
        onmouseenter="updateDissectionStage('${prod.id}')"
        onclick="updateDissectionStage('${prod.id}')">
        <div class="cf-row-jar-wrap">
          <img src="${prod.jarImg}" alt="${prod.name}" class="cf-row-jar-img" loading="lazy" />
        </div>
        <div class="cf-row-prod-info">
          <span class="cf-row-cat-badge">${prod.categoryLabel}</span>
          ${prod.offer ? '<span class="cf-row-offer-tag">OFERTA</span>' : ''}
          <h3 class="cf-row-prod-title">${prod.name}</h3>
          <p class="cf-row-prod-benefit">${prod.lab} · ${activeVar.servings} servicios aprox.</p>
        </div>
        <div class="cf-row-lab-pill" title="Laboratorio: ${prod.lab}">
          <img src="${prod.labImg}" alt="${prod.lab}" loading="lazy" />
        </div>
        <div class="cf-row-variants">
          ${variantChips}
        </div>
        <div class="cf-row-price-col">
          <span class="cf-row-price-val">${formatCOP(activeVar.price)}</span>
          <span class="cf-row-serv-cost">${formatCOP(costPerServ)} / serv.</span>
        </div>
        <div class="cf-row-action-col">
          <button type="button" class="cf-row-add-btn" onclick="event.stopPropagation(); addToCart('${prod.id}', ${varIdx})">
            + AGREGAR
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function setCatalogFilter(filterKey) {
  state.currentFilter = filterKey;
  document.querySelectorAll('.cf-filter-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filterKey);
  });
  renderSwissLedger();
  const firstMatch = CF_PRODUCTS.find(p => {
    if (filterKey === 'monohidratada') return p.category === 'monohidratada';
    if (filterKey === 'hcl') return p.category === 'hcl';
    if (filterKey === 'oferta') return p.offer;
    return true;
  });
  if (firstMatch) updateDissectionStage(firstMatch.id);
}

/* ==========================================================================
   3. CONSOLA TÁCTICA BIO-MÉTRICA HUD (RECOMENDADOR DE PROTOCOLO)
   ========================================================================== */
function setHudParam(paramKey, val) {
  state.hud[paramKey] = val;
  document.querySelectorAll(`[data-hud-group="${paramKey}"]`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset.hudVal === val);
  });
  computeHudRecommendation();
}

function computeHudRecommendation() {
  const { goal, duration, budget } = state.hud;

  let candidates = CF_PRODUCTS.filter(p => p.goalTag === goal);
  if (candidates.length === 0) candidates = [...CF_PRODUCTS];

  // Buscar la mejor combinación producto + variante según duración y presupuesto
  let scored = [];
  candidates.forEach(p => {
    p.variants.forEach((v, vIdx) => {
      let score = 0;
      if (duration === 'extended' && v.servings >= 80) score += 35;
      if (duration === 'standard' && v.servings <= 80) score += 25;
      if (budget === 'optimo' && v.price <= 110000) score += 40;
      if (budget === 'all' && v.price >= 110000) score += 30;
      if (p.offer) score += 12;
      score += (p.metrics.atp + p.metrics.abs) / 10;
      scored.push({ product: p, variant: v, varIdx: vIdx, score });
    });
  });

  scored.sort((a, b) => b.score - a.score);
  const winner = scored[0] || { product: CF_PRODUCTS[0], variant: CF_PRODUCTS[0].variants[0], varIdx: 0 };
  const costDay = Math.round(winner.variant.price / winner.variant.servings);

  document.getElementById('hudResultCode').textContent = `MATCH ÓPTIMO // ${winner.product.code}`;
  document.getElementById('hudResultJar').src = winner.product.jarImg;
  document.getElementById('hudResultJar').alt = winner.product.name;
  document.getElementById('hudResultTitle').textContent = `${winner.product.name} (${winner.variant.label})`;
  document.getElementById('hudResultLab').textContent = `LABORATORIO: ${winner.product.lab.toUpperCase()}`;
  document.getElementById('hudResultDesc').textContent = winner.product.summary;
  document.getElementById('hudResultPrice').textContent = formatCOP(winner.variant.price);
  document.getElementById('hudResultServ').textContent =
    `${winner.variant.servings} Servicios · Costo diario: ${formatCOP(costDay)} COP`;

  const hudAddBtn = document.getElementById('hudAddBtn');
  hudAddBtn.onclick = () => addToCart(winner.product.id, winner.varIdx);
}

/* ==========================================================================
   4. COMPARADOR CARA A CARA DE LABORATORIO (HEAD-TO-HEAD DUEL)
   ========================================================================== */
function initComparator() {
  const selA = document.getElementById('compSelectA');
  const selB = document.getElementById('compSelectB');
  if (!selA || !selB) return;

  const opts = CF_PRODUCTS.map(p => `<option value="${p.id}">${p.name} — ${p.lab}</option>`).join('');
  selA.innerHTML = opts;
  selB.innerHTML = opts;
  selA.value = 'creatina-animal';
  selB.value = 'legacy-proscience';

  selA.addEventListener('change', renderComparator);
  selB.addEventListener('change', renderComparator);
  renderComparator();
}

function renderComparator() {
  const idA = document.getElementById('compSelectA').value;
  const idB = document.getElementById('compSelectB').value;
  renderCompColumn('A', idA);
  renderCompColumn('B', idB);
}

function renderCompColumn(side, prodId) {
  const p = CF_PRODUCTS.find(x => x.id === prodId) || CF_PRODUCTS[0];
  const v = p.variants[0];
  const costServ = Math.round(v.price / v.servings);
  const el = document.getElementById(`compBody${side}`);
  if (!el) return;

  el.innerHTML = `
    <div class="cf-comp-stage">
      <img src="${p.jarImg}" alt="${p.name}" class="cf-comp-jar" />
      <div>
        <span class="cf-sec-kicker">${p.categoryLabel}</span>
        <h4 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 0.4rem;">${p.name}</h4>
        <p style="font-size: 0.84rem; color: var(--cf-text-muted); margin-bottom: 0.85rem;">${p.summary}</p>
        <button type="button" class="cf-row-add-btn" onclick="addToCart('${p.id}', 0)">
          + ELEGIR ${p.name} (${formatCOP(v.price)})
        </button>
      </div>
    </div>
    <div class="cf-comp-spec-list">
      <div class="cf-comp-spec-row">
        <span style="color: var(--cf-text-muted);">LABORATORIO</span>
        <strong>${p.lab}</strong>
      </div>
      <div class="cf-comp-spec-row">
        <span style="color: var(--cf-text-muted);">PRESENTACIÓN BASE</span>
        <strong>${v.label} (${v.servings} serv.)</strong>
      </div>
      <div class="cf-comp-spec-row">
        <span style="color: var(--cf-text-muted);">PRECIO OFICIAL CASA FITNESS</span>
        <strong style="color: var(--cf-whatsapp);">${formatCOP(v.price)} COP</strong>
      </div>
      <div class="cf-comp-spec-row">
        <span style="color: var(--cf-text-muted);">COSTO POR SERVICIO</span>
        <strong>${formatCOP(costServ)} COP / día</strong>
      </div>
      <div class="cf-comp-spec-row">
        <span style="color: var(--cf-text-muted);">POTENCIA ATP / FUERZA</span>
        <strong>${p.metrics.atp}%</strong>
      </div>
      <div class="cf-comp-spec-row">
        <span style="color: var(--cf-text-muted);">DEFINICIÓN / CERO RETENCIÓN</span>
        <strong>${p.metrics.def}%</strong>
      </div>
    </div>
  `;
}

/* ==========================================================================
   5. CARRITO DE PROTOCOLO & WHATSAPP ONE-CLICK CHECKOUT (+57 317 4242001)
   ========================================================================== */
function toggleCartDrawer(forceOpen) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const isOpen = typeof forceOpen === 'boolean' ? forceOpen : !drawer.classList.contains('open');
  drawer.classList.toggle('open', isOpen);
  backdrop.classList.toggle('open', isOpen);
}

function addToCart(prodId, varIdx = 0) {
  const prod = CF_PRODUCTS.find(p => p.id === prodId);
  if (!prod) return;
  const variant = prod.variants[varIdx] || prod.variants[0];
  const key = `${prod.id}__${variant.label}`;

  const existing = state.cart.find(item => item.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key,
      prodId: prod.id,
      name: prod.name,
      lab: prod.lab,
      jarImg: prod.jarImg,
      variantLabel: variant.label,
      price: variant.price,
      qty: 1
    });
  }
  renderCart();
  toggleCartDrawer(true);
}

function changeCartQty(key, delta) {
  const idx = state.cart.findIndex(i => i.key === key);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  renderCart();
}

function renderCart() {
  const countEl = document.getElementById('headerCartCount');
  const bodyEl = document.getElementById('cartDrawerBody');
  const totalEl = document.getElementById('cartTotalValue');

  const totalItems = state.cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (countEl) countEl.textContent = totalItems;
  if (totalEl) totalEl.textContent = formatCOP(totalPrice) + ' COP';

  if (!bodyEl) return;
  if (state.cart.length === 0) {
    bodyEl.innerHTML = `
      <div style="padding: 3rem 1rem; text-align: center; font-family: var(--font-mono); color: var(--cf-text-muted); font-size: 0.8rem;">
        Tu protocolo está vacío.<br/><br/>Selecciona cualquier suplemento del catálogo o usa la Consola Bio-Métrica para armar tu pedido.
      </div>
    `;
    return;
  }

  bodyEl.innerHTML = state.cart.map(item => `
    <div class="cf-cart-item">
      <img src="${item.jarImg}" alt="${item.name}" />
      <div>
        <div style="font-family: var(--font-display); font-size: 0.8rem; font-weight: 700;">${item.name}</div>
        <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--cf-blue-bright);">
          ${item.variantLabel} · ${item.lab}
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.82rem; margin-top: 0.2rem;">
          ${formatCOP(item.price * item.qty)}
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 0.4rem; font-family: var(--font-mono);">
        <button type="button" onclick="changeCartQty('${item.key}', -1)" style="background:#161c26;border:1px solid var(--cf-line-strong);color:#fff;width:26px;height:26px;cursor:pointer;">-</button>
        <span>${item.qty}</span>
        <button type="button" onclick="changeCartQty('${item.key}', 1)" style="background:#161c26;border:1px solid var(--cf-line-strong);color:#fff;width:26px;height:26px;cursor:pointer;">+</button>
      </div>
    </div>
  `).join('');
}

function checkoutViaWhatsApp() {
  const city = (document.getElementById('checkoutCity')?.value || '').trim() || 'Por confirmar';
  const payment = document.getElementById('checkoutPayment')?.value || 'Transferencia Bancolombia / Nequi';

  if (state.cart.length === 0) {
    const msgEmpty = encodeURIComponent(
      'Hola Casa Fitness Colombia (@casafitnesscol) 💪. Vengo desde su plataforma web y quiero asesoría para elegir mi suplemento deportivo.'
    );
    window.open(`https://wa.me/${CF_WHATSAPP_NUMBER}?text=${msgEmpty}`, '_blank');
    return;
  }

  const total = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const lines = state.cart.map(
    (item, i) => `${i + 1}. *${item.name}* (${item.variantLabel} - ${item.lab}) x${item.qty} = *${formatCOP(item.price * item.qty)}*`
  );

  const text = [
    '🔥 *NUEVO PEDIDO WEB — CASA FITNESS COLOMBIA* 🔥',
    '',
    '*Suplementos seleccionados:*',
    ...lines,
    '',
    `💰 *TOTAL PRODUCTOS:* ${formatCOP(total)} COP`,
    `📍 *Ciudad / Destino:* ${city}`,
    `💳 *Método de pago preferido:* ${payment}`,
    '',
    'Quedo atento(a) para confirmar datos de envío y pago. ¡Gracias!'
  ].join('\n');

  window.open(`https://wa.me/${CF_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

/* ==========================================================================
   INICIALIZACIÓN DOM
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderSwissLedger();
  updateDissectionStage('creatina-animal');
  computeHudRecommendation();
  initComparator();
  renderCart();

  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      state.searchQuery = e.target.value;
      renderSwissLedger();
    });
  }
});
