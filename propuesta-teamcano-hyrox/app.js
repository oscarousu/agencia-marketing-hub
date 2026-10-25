/**
 * ============================================================================
 * TEAM CANO (@TEAMCANO_FIT) — LOOKBOOK VISUAL & SPLIT-SCREEN ENGINE
 * 80% Fotografía Real a Gran Escala · 20% Texto Conciso (Cero Redundancia)
 * Uso exclusivo de Seedance 2.5 (120 Frames Impecables) · Cero Bloqueo de Scroll.
 * Agencia de Marketing: Oscar Ortiz & Camilo Cortés (Cali / Jamundí)
 * ============================================================================
 */

(function () {
  "use strict";

  const TOTAL_FRAMES = 120;
  const WHATSAPP_NUMBER = "573184517759";
  const PHOTO_ADDON_PRICE = 50000;
  const MONTHLY_PLAN_PRICE = 220000;

  const STAGE_PRICES = {
    etapa1: { name: "Etapa 1", price: 250000 },
    etapa2: { name: "Etapa 2", price: 300000 },
    etapa3: { name: "Etapa 3", price: 350000 },
  };

  /* --------------------------------------------------------------------------
   * 1A. HOME: 4 PILARES DE METODOLOGÍA (MÁX 10-12 PALABRAS + FOTO REAL)
   * -------------------------------------------------------------------------- */
  const METHODOLOGY_PILLARS_DATA = [
    {
      num: "01",
      name: "MUSCULACIÓN GUIADA",
      runLabel: "LUNES A SÁBADO",
      img: "assets/gallery/mosaic_03_coach_lunges_guidance.webp",
      summary: "Profesor asignado en cada estación corrigiendo tu técnica y cargas.",
      metric: "COACH EN PLANTA",
    },
    {
      num: "02",
      name: "SESIONES HYROX",
      runLabel: "MARTES · JUEVES · SÁBADO",
      img: "assets/gallery/mosaic_06_every_push_builds_power.webp",
      summary: "Entrenamiento híbrido con trineos, SkiErg, Rower y Wall Balls.",
      metric: "INCLUIDO EN PLAN",
    },
    {
      num: "03",
      name: "NUTRICIÓN DEPORTIVA",
      runLabel: "RECOMPOSICIÓN CORPORAL",
      img: "assets/gallery/mosaic_10_coach_rower_motivation.webp",
      summary: "Plan nutricional estructurado según tu biotipo y objetivo físico.",
      metric: "RESULTADOS REALES",
    },
    {
      num: "04",
      name: "FISIOTERAPIA EN SEDE",
      runLabel: "DESCARGA & RECUPERACIÓN",
      img: "assets/gallery/mosaic_09_coach_canoverso_screen.webp",
      summary: "Prevención de lesiones y recuperación muscular sin salir del gimnasio.",
      metric: "SALUD INTEGRAL",
    },
  ];

  /* --------------------------------------------------------------------------
   * 1B. HOME: LAS 4 SEDES OFICIALES (CON FOTOGRAFÍA GRANDE REAL POR SEDE)
   * -------------------------------------------------------------------------- */
  const LOCATIONS_DATA = [
    {
      tag: "SEDE 01 · HYROX ACADEMY OFICIAL",
      name: "JAMUNDÍ",
      address: "Cra. 10 #26-98, Jamundí",
      hours: "Lun–Vie: 5am – 10pm · Sáb: 7am – 1pm",
      photo: "assets/gallery/mosaic_04_jamundi_building_facade.webp",
      selectValue: "Sede Jamundí (Cra. 10 #26-98)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Carrera+10+26-98+Jamundi+Team+Cano",
    },
    {
      tag: "SEDE 02 · SUR DE CALI",
      name: "BOCHALEMA",
      address: "Cl. 48 #106-83, Bochalema — Cali",
      hours: "Lun–Vie: 5am – 10pm · Sáb: 7am – 1pm",
      photo: "assets/gallery/mosaic_06_every_push_builds_power.webp",
      selectValue: "Sede Bochalema — Sur de Cali (Cl. 48 #106-83)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Calle+48+106-83+Bochalema+Cali+Team+Cano",
    },
    {
      tag: "SEDE 03 · NORTE DE CALI",
      name: "LA FLORA",
      address: "Av. 3 Norte #60-09, La Flora — Cali",
      hours: "Lun–Vie: 5am – 10pm · Sáb: 7am – 1pm",
      photo: "assets/gallery/mosaic_03_coach_lunges_guidance.webp",
      selectValue: "Sede La Flora — Norte de Cali (Av. 3 Norte #60-09)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+3+Norte+60-09+La+Flora+Cali+Team+Cano",
    },
    {
      tag: "SEDE 04 · CALI",
      name: "QUINTAS DE DON SIMÓN",
      address: "Cra. 80 entre Calles 14 y 13C — Cali",
      hours: "Lun–Vie: 5am – 10pm · Sáb: 7am – 1pm",
      photo: "assets/gallery/mosaic_07_double_sled_push_race.webp",
      selectValue: "Sede Quintas de Don Simón — Cali (Cra. 80 entre 14 y 13C)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Carrera+80+Calle+14+Quintas+de+Don+Simon+Cali+Team+Cano",
    },
  ];

  /* --------------------------------------------------------------------------
   * 2. HYROX360.HTML: LAS 8 ESTACIONES (1 SOLA FRASE CORTA + MINIATURA)
   * -------------------------------------------------------------------------- */
  const STATIONS_STREAM_DATA = [
    {
      num: "01",
      name: "SKIERG",
      runLabel: "RUN 1 (600M / 1KM)",
      img: "assets/stations/01_skierg_run.webp",
      summary: "Tracción explosiva de tren superior y core en máquina SkiErg.",
      metric: "1000M / 1500M",
    },
    {
      num: "02",
      name: "SLED PUSH",
      runLabel: "RUN 2 (600M / 1KM)",
      img: "assets/stations/02_sled_push.webp",
      summary: "Empuje de trineo de potencia sobre grama sintética oficial.",
      metric: "100M · 80–150 KG",
    },
    {
      num: "03",
      name: "SLED PULL",
      runLabel: "RUN 3 (600M / 1KM)",
      img: "assets/stations/03_sled_pull.webp",
      summary: "Tracción de trineo con cuerda dentro del cajón reglamentario.",
      metric: "100M · 60–120 KG",
    },
    {
      num: "04",
      name: "BURPEE BROAD JUMPS",
      runLabel: "RUN 4 (600M / 1KM)",
      img: "assets/stations/04_burpee_broad_jump.webp",
      summary: "Pecho al suelo y salto horizontal profundo con ambos pies.",
      metric: "100 METROS",
    },
    {
      num: "05",
      name: "ROWING",
      runLabel: "RUN 5 (600M / 1KM)",
      img: "assets/stations/05_rowing.webp",
      summary: "Remo indoor oficial en la mitad exacta de la competencia.",
      metric: "1000M / 1500M",
    },
    {
      num: "06",
      name: "FARMER'S CARRY",
      runLabel: "RUN 6 (600M / 1KM)",
      img: "assets/stations/06_farmers_carry.webp",
      summary: "Desplazamiento rápido cargando par de kettlebells pesadas.",
      metric: "300M · 16–28 KG",
    },
    {
      num: "07",
      name: "SANDBAG LUNGES",
      runLabel: "RUN 7 (600M / 1KM)",
      img: "assets/stations/07_sandbag_lunges.webp",
      summary: "Tijeras en avance con saco oficial tocando rodilla al suelo.",
      metric: "160M · 10–30 KG",
    },
    {
      num: "08",
      name: "WALL BALLS",
      runLabel: "RUN 8 (600M / 1KM)",
      img: "assets/stations/08_wall_balls.webp",
      summary: "Sentadilla profunda y lanzamiento a diana antes de cruzar meta.",
      metric: "100 / 140 REPS",
    },
  ];

  /* --------------------------------------------------------------------------
   * 3. BASE DE DATOS DE CATEGORÍAS DE PODER Y PENALIDADES (HYROX360.HTML)
   * -------------------------------------------------------------------------- */
  const POWER_CATEGORIES_DB = {
    principiante: {
      code: "CATEGORÍA 01 · PRINCIPIANTE",
      titlePrefix: "PRINCIPIANTE",
      SelectValue: "01. PRINCIPIANTE",
      description: "Cargas y volúmenes adaptados para tu primera competencia oficial HYROX.",
      modalities: {
        mujer: {
          label: "MUJER",
          totalRun: "4.8 KM",
          maxSled: "80 KG",
          wallBalls: "100 / 5 KG",
          meters: { strength: 58, cardio: 65, mental: 68 },
          stations: [
            { idx: "01", name: "SkiErg", run: "600m", work: "1000mts", note: "Tracción continua" },
            { idx: "02", name: "Sled Push", run: "600m", work: "100mts / 80kg", note: "Incluye trineo" },
            { idx: "03", name: "Sled Pull", run: "600m", work: "100mts / 60kg", note: "Halar con cuerda" },
            { idx: "04", name: "Burpee Broad Jumps", run: "600m", work: "100mts", note: "Salto bipodal" },
            { idx: "05", name: "Rowing", run: "600m", work: "1000mts", note: "Remo oficial" },
            { idx: "06", name: "Farmer's Carry", run: "600m", work: "300mts / 16kg", note: "Par de 16kg" },
            { idx: "07", name: "Sandbag Lunges", run: "600m", work: "160mts / 10kg", note: "Saco de 10kg" },
            { idx: "08", name: "Wall Balls", run: "600m", work: "100 rep / 5kg", note: "Balón de 5kg" },
          ],
        },
        hombre: {
          label: "HOMBRE",
          totalRun: "4.8 KM",
          maxSled: "100 KG",
          wallBalls: "100 / 7 KG",
          meters: { strength: 66, cardio: 68, mental: 72 },
          stations: [
            { idx: "01", name: "SkiErg", run: "600m", work: "1000mts", note: "Tracción continua" },
            { idx: "02", name: "Sled Push", run: "600m", work: "100mts / 100kg", note: "Incluye trineo" },
            { idx: "03", name: "Sled Pull", run: "600m", work: "100mts / 80kg", note: "Halar con cuerda" },
            { idx: "04", name: "Burpee Broad Jumps", run: "600m", work: "100mts", note: "Salto bipodal" },
            { idx: "05", name: "Rowing", run: "600m", work: "1000mts", note: "Remo oficial" },
            { idx: "06", name: "Farmer's Carry", run: "600m", work: "300mts / 24kg", note: "Par de 24kg" },
            { idx: "07", name: "Sandbag Lunges", run: "600m", work: "160mts / 20kg", note: "Saco de 20kg" },
            { idx: "08", name: "Wall Balls", run: "600m", work: "100 rep / 7kg", note: "Balón de 7kg" },
          ],
        },
        mixto: {
          label: "MIXTO",
          totalRun: "4.8 KM",
          maxSled: "100 KG",
          wallBalls: "100 / 7 KG",
          meters: { strength: 64, cardio: 68, mental: 70 },
          stations: [
            { idx: "01", name: "SkiErg", run: "600m", work: "1000mts", note: "Relevos en dupla" },
            { idx: "02", name: "Sled Push", run: "600m", work: "100mts / 100kg", note: "Incluye trineo" },
            { idx: "03", name: "Sled Pull", run: "600m", work: "100mts / 80kg", note: "Halar con cuerda" },
            { idx: "04", name: "Burpee Broad Jumps", run: "600m", work: "100mts", note: "Salto bipodal" },
            { idx: "05", name: "Rowing", run: "600m", work: "1000mts", note: "Remo oficial" },
            { idx: "06", name: "Farmer's Carry", run: "600m", work: "300mts / 20kg", note: "Par de 20kg" },
            { idx: "07", name: "Sandbag Lunges", run: "600m", work: "160mts / 20kg", note: "Saco de 20kg" },
            { idx: "08", name: "Wall Balls", run: "600m", work: "100 rep / 7kg", note: "Balón de 7kg" },
          ],
        },
      },
    },

    intermedio: {
      code: "CATEGORÍA 02 · INTERMEDIO",
      titlePrefix: "INTERMEDIO",
      SelectValue: "02. INTERMEDIO",
      description: "Para atletas con buena condición física, dominio técnico y resistencia constante.",
      modalities: {
        mujer: {
          label: "MUJER",
          totalRun: "5.6 KM",
          maxSled: "100 KG",
          wallBalls: "140 / 7 KG",
          meters: { strength: 76, cardio: 82, mental: 84 },
          stations: [
            { idx: "01", name: "SkiErg", run: "1km", work: "1500mts", note: "Run 1km + 1500m" },
            { idx: "02", name: "Sled Push", run: "600m", work: "100mts / 100kg", note: "Empuje 100kg" },
            { idx: "03", name: "Sled Pull", run: "600m", work: "100mts / 80kg", note: "Tracción 80kg" },
            { idx: "04", name: "Burpee Broad Jumps", run: "600m", work: "100mts", note: "100m continuos" },
            { idx: "05", name: "Rowing", run: "600m", work: "1500mts", note: "Fondo 1500m" },
            { idx: "06", name: "Farmer's Carry", run: "600m", work: "300mts / 24kg", note: "Par de 24kg" },
            { idx: "07", name: "Sandbag Lunges", run: "600m", work: "160mts / 20kg", note: "Saco de 20kg" },
            { idx: "08", name: "Wall Balls", run: "1km", work: "140 rep / 7kg", note: "Run 1km + 140 reps" },
          ],
        },
        hombre: {
          label: "HOMBRE",
          totalRun: "5.6 KM",
          maxSled: "120 KG",
          wallBalls: "140 / 10 KG",
          meters: { strength: 84, cardio: 85, mental: 88 },
          stations: [
            { idx: "01", name: "SkiErg", run: "1km", work: "1500mts", note: "Run 1km + 1500m" },
            { idx: "02", name: "Sled Push", run: "600m", work: "100mts / 120kg", note: "Empuje 120kg" },
            { idx: "03", name: "Sled Pull", run: "600m", work: "100mts / 100kg", note: "Tracción 100kg" },
            { idx: "04", name: "Burpee Broad Jumps", run: "600m", work: "100mts", note: "100m continuos" },
            { idx: "05", name: "Rowing", run: "600m", work: "1500mts", note: "Fondo 1500m" },
            { idx: "06", name: "Farmer's Carry", run: "600m", work: "300mts / 28kg", note: "Par de 28kg" },
            { idx: "07", name: "Sandbag Lunges", run: "600m", work: "160mts / 30kg", note: "Saco de 30kg" },
            { idx: "08", name: "Wall Balls", run: "1km", work: "140 rep / 10kg", note: "Balón de 10kg" },
          ],
        },
        mixto: {
          label: "MIXTO",
          totalRun: "5.6 KM",
          maxSled: "140 KG",
          wallBalls: "140 / 7 KG",
          meters: { strength: 85, cardio: 84, mental: 86 },
          stations: [
            { idx: "01", name: "SkiErg", run: "1km", work: "1500mts", note: "Run 1km + 1500m" },
            { idx: "02", name: "Sled Push", run: "600m", work: "100mts / 140kg", note: "Empuje 140kg" },
            { idx: "03", name: "Sled Pull", run: "600m", work: "100mts / 100kg", note: "Tracción 100kg" },
            { idx: "04", name: "Burpee Broad Jumps", run: "600m", work: "100mts", note: "100m continuos" },
            { idx: "05", name: "Rowing", run: "600m", work: "1500mts", note: "Fondo 1500m" },
            { idx: "06", name: "Farmer's Carry", run: "600m", work: "300mts / 24kg", note: "Par de 24kg" },
            { idx: "07", name: "Sandbag Lunges", run: "600m", work: "160mts / 30kg", note: "Saco de 30kg" },
            { idx: "08", name: "Wall Balls", run: "1km", work: "140 rep / 7kg", note: "Run 1km + 140 reps" },
          ],
        },
      },
    },

    rx: {
      code: "CATEGORÍA 03 · AVANZADO / RX",
      titlePrefix: "AVANZADO / RX",
      SelectValue: "03. AVANZADO / RX",
      description: "Máxima exigencia competitiva con cargas altas y 8 kilómetros de carrera.",
      modalities: {
        mujer: {
          label: "MUJER",
          totalRun: "8.0 KM",
          maxSled: "140 KG",
          wallBalls: "140 / 10 KG",
          meters: { strength: 94, cardio: 96, mental: 98 },
          stations: [
            { idx: "01", name: "SkiErg", run: "1km", work: "1500mts", note: "Estándar RX" },
            { idx: "02", name: "Sled Push", run: "1km", work: "100mts / 140kg", note: "Carga RX 140kg" },
            { idx: "03", name: "Sled Pull", run: "1km", work: "100mts / 100kg", note: "Tracción RX 100kg" },
            { idx: "04", name: "Burpee Broad Jumps", run: "1km", work: "100mts", note: "100m explosivos" },
            { idx: "05", name: "Rowing", run: "1km", work: "1500mts", note: "1500m potencia" },
            { idx: "06", name: "Farmer's Carry", run: "1km", work: "300mts / 28kg", note: "Par de 28kg" },
            { idx: "07", name: "Sandbag Lunges", run: "1km", work: "160mts / 20kg", note: "Saco de 20kg" },
            { idx: "08", name: "Wall Balls", run: "1km", work: "140 rep / 10kg", note: "140 reps con 10kg" },
          ],
        },
        hombre: {
          label: "HOMBRE",
          totalRun: "8.0 KM",
          maxSled: "150 KG",
          wallBalls: "140 / 10 KG",
          meters: { strength: 100, cardio: 98, mental: 100 },
          stations: [
            { idx: "01", name: "SkiErg", run: "1km", work: "1500mts", note: "Estándar RX" },
            { idx: "02", name: "Sled Push", run: "1km", work: "100mts / 150kg", note: "Carga máx 150kg" },
            { idx: "03", name: "Sled Pull", run: "1km", work: "100mts / 120kg", note: "Tracción máx 120kg" },
            { idx: "04", name: "Burpee Broad Jumps", run: "1km", work: "100mts", note: "100m explosivos" },
            { idx: "05", name: "Rowing", run: "1km", work: "1500mts", note: "1500m potencia" },
            { idx: "06", name: "Farmer's Carry", run: "1km", work: "300mts / 28kg", note: "Par de 28kg" },
            { idx: "07", name: "Sandbag Lunges", run: "1km", work: "160mts / 30kg", note: "Saco RX 30kg" },
            { idx: "08", name: "Wall Balls", run: "1km", work: "140 rep / 10kg", note: "140 reps con 10kg" },
          ],
        },
        mixto: {
          label: "MIXTO",
          totalRun: "8.0 KM",
          maxSled: "150 KG",
          wallBalls: "140 / 10 KG",
          meters: { strength: 98, cardio: 97, mental: 99 },
          stations: [
            { idx: "01", name: "SkiErg", run: "1km", work: "1500mts", note: "Estándar RX" },
            { idx: "02", name: "Sled Push", run: "1km", work: "100mts / 150kg", note: "Carga máx 150kg" },
            { idx: "03", name: "Sled Pull", run: "1km", work: "100mts / 120kg", note: "Tracción máx 120kg" },
            { idx: "04", name: "Burpee Broad Jumps", run: "1km", work: "100mts", note: "100m explosivos" },
            { idx: "05", name: "Rowing", run: "1km", work: "1500mts", note: "1500m potencia" },
            { idx: "06", name: "Farmer's Carry", run: "1km", work: "300mts / 28kg", note: "Par de 28kg" },
            { idx: "07", name: "Sandbag Lunges", run: "1km", work: "160mts / 30kg", note: "Saco RX 30kg" },
            { idx: "08", name: "Wall Balls", run: "1km", work: "140 rep / 10kg", note: "140 reps con 10kg" },
          ],
        },
      },
    },
  };

  const PENALTIES_DB = [
    { station: "General / Carrera", reason: "Vuelta de carrera omitida", penalty: "+7 MIN", type: "min" },
    { station: "General / Carrera", reason: "No completar los 100 m reglamentarios", penalty: "+3 MIN", type: "min" },
    { station: "General / Carrera", reason: "Workout o carrera omitida / orden incorrecto", penalty: "DESCALIFICACIÓN", type: "dq" },
    { station: "General / Carrera", reason: "Asistencia externa o conducta antideportiva", penalty: "+3 MIN / DQ", type: "dq" },
    { station: "General / Carrera", reason: "Hora de salida incorrecta o competir sin chip", penalty: "DESCALIFICACIÓN", type: "dq" },
    { station: "SkiErg", reason: "Pies fuera de la base o cambio de agarre", penalty: "+15 SEG", type: "15s" },
    { station: "Sled Push / Pull", reason: "Carril incorrecto o interferir a otros equipos", penalty: "+15 SEG", type: "15s" },
    { station: "Burpee Broad Jump", reason: "Repeticiones incorrectas o salto incompleto", penalty: "+15 SEG", type: "15s" },
    { station: "Rowing / Farmer Carry", reason: "Vueltas incompletas o kettlebell mal colocada", penalty: "+15 SEG", type: "15s" },
    { station: "Sandbag Lunges", reason: "Rodilla no toca suelo o soltar el saco", penalty: "+15 SEG", type: "15s" },
    { station: "Wall Balls", reason: "Reps faltantes, no romper paralelo o mala altura", penalty: "+15 SEG", type: "15s" },
  ];

  /* --------------------------------------------------------------------------
   * 4. SPLIT-SCREEN SCROLLYTELLING (CON MINIATURA FOTOGRÁFICA EN CADA FILA)
   * -------------------------------------------------------------------------- */
  const stationsStreamList = document.getElementById("stationsStreamList");
  const methodologyStreamList = document.getElementById("methodologyStreamList");
  const splitCircuitWrapper = document.getElementById("splitCircuitWrapper");
  const stickyStationCode = document.getElementById("stickyStationCode");
  const stickyStationPhoto = document.getElementById("stickyStationPhoto");
  const stickyStationRun = document.getElementById("stickyStationRun");
  const stickyStationName = document.getElementById("stickyStationName");
  const stickyStationMetric = document.getElementById("stickyStationMetric");
  const stickyCircuitProgress = document.getElementById("stickyCircuitProgress");
  const stickyFrameReadout = document.getElementById("stickyFrameReadout");
  const lensHybridBtn = document.getElementById("lensHybridBtn");
  const lensCanvasBtn = document.getElementById("lensCanvasBtn");
  const visualFrame = document.querySelector(".tc-stage-visual-frame");

  const isHomePage = Boolean(methodologyStreamList);
  const activeStreamDataset = isHomePage ? METHODOLOGY_PILLARS_DATA : STATIONS_STREAM_DATA;
  const activeStreamContainer = isHomePage ? methodologyStreamList : stationsStreamList;

  let activeLensMode = "hybrid";
  let currentActiveStationIdx = 0;

  function renderSplitEditorialStream() {
    if (!activeStreamContainer) return;
    activeStreamContainer.innerHTML = activeStreamDataset
      .map(
        (st, idx) => `
      <article class="tc-station-editorial-row ${idx === 0 ? "active" : ""}" data-station-idx="${idx}">
        <div class="tc-row-top-line">
          <span class="tc-row-run-tag">${st.runLabel}</span>
          <span class="tc-row-standard-metric">${st.metric}</span>
        </div>
        <div class="tc-row-with-thumb">
          <span class="tc-row-num">${st.num}</span>
          <div>
            <h3 class="tc-row-title">${st.name}</h3>
            <p class="tc-row-desc">${st.summary}</p>
          </div>
          <img src="${st.img}" alt="${st.name}" class="tc-row-thumb" loading="lazy" />
        </div>
        <img src="${st.img}" alt="${st.name}" class="tc-row-mobile-img" loading="lazy" />
      </article>
    `
      )
      .join("");

    activeStreamContainer.querySelectorAll(".tc-station-editorial-row").forEach((row) => {
      row.addEventListener("click", () => {
        const idx = parseInt(row.getAttribute("data-station-idx") || "0", 10);
        setActiveStation(idx);
      });
    });
  }

  function setActiveStation(idx) {
    const clampedIdx = Math.max(0, Math.min(activeStreamDataset.length - 1, idx));
    if (
      clampedIdx === currentActiveStationIdx &&
      stickyStationPhoto &&
      stickyStationPhoto.getAttribute("data-loaded") === "1"
    ) {
      return;
    }
    currentActiveStationIdx = clampedIdx;
    const st = activeStreamDataset[clampedIdx];
    if (!st) return;

    const rows = document.querySelectorAll(".tc-station-editorial-row");
    rows.forEach((r, i) => r.classList.toggle("active", i === clampedIdx));

    const totalCountStr = String(activeStreamDataset.length).padStart(2, "0");
    const prefixWord = isHomePage ? "PILAR" : "ESTACIÓN";
    if (stickyStationCode) stickyStationCode.textContent = `${prefixWord} ${st.num} / ${totalCountStr}`;
    if (stickyStationRun) stickyStationRun.textContent = st.runLabel;
    if (stickyStationName) stickyStationName.textContent = `${st.num}. ${st.name}`;
    if (stickyStationMetric) stickyStationMetric.textContent = st.metric;

    if (stickyStationPhoto) {
      stickyStationPhoto.src = st.img;
      stickyStationPhoto.setAttribute("data-loaded", "1");
    }

    updateVisualLensVisibility();
  }

  function updateVisualLensVisibility() {
    if (!visualFrame) return;
    // Show live Seedance 2.5 canvas when user clicks 'Video Seedance 2.5' OR on HYROX / Sled Push station
    const showCanvas = activeLensMode === "canvas" || (!isHomePage && currentActiveStationIdx === 1);
    visualFrame.classList.toggle("show-canvas", showCanvas);
  }

  if (lensHybridBtn && lensCanvasBtn) {
    lensHybridBtn.addEventListener("click", () => {
      activeLensMode = "hybrid";
      lensHybridBtn.classList.add("active");
      lensCanvasBtn.classList.remove("active");
      updateVisualLensVisibility();
    });
    lensCanvasBtn.addEventListener("click", () => {
      activeLensMode = "canvas";
      lensCanvasBtn.classList.add("active");
      lensHybridBtn.classList.remove("active");
      updateVisualLensVisibility();
    });
  }

  /* --------------------------------------------------------------------------
   * 5. MOTOR <CANVAS> EXCLUSIVO SEEDANCE 2.5 (120 FOTOGRAMAS WEBP)
   * -------------------------------------------------------------------------- */
  const canvas = document.getElementById("scrollyCanvas");
  const ctx = canvas ? canvas.getContext("2d", { alpha: false }) : null;
  const frames = new Array(TOTAL_FRAMES);
  let targetFrameIndex = 0;
  let currentFrameFloat = 0;
  let lastRenderedFrameIndex = -1;

  function pad4(n) {
    return String(n).padStart(4, "0");
  }

  function resizeCanvas() {
    if (!canvas || !visualFrame) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = visualFrame.getBoundingClientRect();
    const w = Math.max(320, rect.width);
    const h = Math.max(420, rect.height);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    lastRenderedFrameIndex = -1;
    drawFrame(Math.round(currentFrameFloat));
  }

  function drawFrame(index) {
    if (!ctx || !canvas) return;
    const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
    let img = frames[clamped];

    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = clamped - offset;
        const next = clamped + offset;
        if (prev >= 0 && frames[prev] && frames[prev].complete && frames[prev].naturalWidth > 0) {
          img = frames[prev];
          break;
        }
        if (next < TOTAL_FRAMES && frames[next] && frames[next].complete && frames[next].naturalWidth > 0) {
          img = frames[next];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const drawW = iw * scale;
    const drawH = ih * scale;
    const offsetX = (cw - drawW) * 0.5;
    const offsetY = (ch - drawH) * 0.5;

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  }

  function preloadSeedanceFrames() {
    if (!canvas) return;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = `assets/frames/frame_${pad4(i + 1)}.webp`;
      if (i === 0) {
        img.onload = () => resizeCanvas();
      }
      frames[i] = img;
    }
  }

  const globalProgressBar = document.getElementById("globalProgressBar");

  function onScrollUpdate() {
    const docEl = document.documentElement;
    const scrollTop = window.scrollY || docEl.scrollTop || 0;
    const maxDocScroll = Math.max(1, docEl.scrollHeight - window.innerHeight);
    const globalPct = Math.min(100, Math.max(0, (scrollTop / maxDocScroll) * 100));
    if (globalProgressBar) {
      globalProgressBar.style.width = `${globalPct.toFixed(1)}%`;
    }

    if (!splitCircuitWrapper) return;
    const rect = splitCircuitWrapper.getBoundingClientRect();
    const totalScrollable = Math.max(1, rect.height - window.innerHeight * 0.5);
    const rawProgress = (window.innerHeight * 0.35 - rect.top) / totalScrollable;
    const progress = Math.min(1, Math.max(0, rawProgress));

    targetFrameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * (TOTAL_FRAMES - 1)));

    if (stickyCircuitProgress) {
      stickyCircuitProgress.style.width = `${Math.max(12, progress * 100).toFixed(1)}%`;
    }

    const rows = document.querySelectorAll(".tc-station-editorial-row");
    const targetY = window.innerHeight * 0.38;
    let bestIdx = 0;
    let bestDist = Infinity;
    rows.forEach((row, idx) => {
      const r = row.getBoundingClientRect();
      const center = r.top + r.height * 0.5;
      const dist = Math.abs(center - targetY);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });
    setActiveStation(bestIdx);
  }

  function renderLoop() {
    if (canvas) {
      currentFrameFloat += (targetFrameIndex - currentFrameFloat) * 0.16;
      const rounded = Math.round(currentFrameFloat);
      if (rounded !== lastRenderedFrameIndex) {
        drawFrame(rounded);
        lastRenderedFrameIndex = rounded;
        if (stickyFrameReadout) {
          stickyFrameReadout.textContent = `SEEDANCE 2.5 · FRAME ${String(rounded + 1).padStart(3, "0")} / ${TOTAL_FRAMES}`;
        }
      }
    }
    requestAnimationFrame(renderLoop);
  }

  /* --------------------------------------------------------------------------
   * 6. HOME: GRILLA FOTOGRÁFICA DE LAS 4 SEDES Y MEMBRESÍA ($220K)
   * -------------------------------------------------------------------------- */
  const locationsEditorialList = document.getElementById("locationsEditorialList");
  const memBranchSelect = document.getElementById("memBranch");

  function renderLocationsList() {
    if (!locationsEditorialList) return;
    locationsEditorialList.innerHTML = LOCATIONS_DATA.map(
      (loc) => `
      <article class="tc-branch-visual-card">
        <div>
          <div class="tc-branch-photo-wrap">
            <img src="${loc.photo}" alt="Team Cano Sede ${loc.name}" loading="lazy" />
            <span class="tc-branch-tag-overlay">${loc.tag}</span>
          </div>
          <h3 class="tc-branch-card-title">${loc.name}</h3>
          <p class="tc-branch-card-addr">📍 ${loc.address}</p>
          <p class="tc-branch-card-hours">🕒 ${loc.hours}</p>
        </div>
        <div class="tc-branch-card-links">
          <button type="button" class="tc-branch-action-btn" data-select-branch="${loc.selectValue}">
            ELEGIR SEDE →
          </button>
          <a href="${loc.mapUrl}" target="_blank" rel="noopener noreferrer" class="tc-branch-map-link">
            Google Maps ↗
          </a>
        </div>
      </article>
    `
    ).join("");

    locationsEditorialList.querySelectorAll("[data-select-branch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-select-branch");
        if (memBranchSelect && val) {
          memBranchSelect.value = val;
          updateMembershipSummary();
        }
        const targetEl = document.getElementById("membresia-checkout");
        if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  const memFocusSelect = document.getElementById("memFocus");
  const memShiftSelect = document.getElementById("memShift");
  const memUserNameInput = document.getElementById("memUserName");
  const memHealthAddon = document.getElementById("memHealthAddon");

  const memSummaryBranch = document.getElementById("memSummaryBranch");
  const memSummaryFocus = document.getElementById("memSummaryFocus");
  const memSummaryShift = document.getElementById("memSummaryShift");
  const memSummaryHealth = document.getElementById("memSummaryHealth");
  const memSummaryTotal = document.getElementById("memSummaryTotal");
  const memWhatsappBtn = document.getElementById("memWhatsappBtn");

  function formatCOP(num) {
    return "$" + Number(num).toLocaleString("es-CO") + " COP";
  }

  function updateMembershipSummary() {
    if (!memWhatsappBtn) return;
    const branch = memBranchSelect ? memBranchSelect.value : "Sede Jamundí (Cra. 10 #26-98)";
    const focus = memFocusSelect ? memFocusSelect.value : "Musculación + HYROX (Mar/Jue/Sáb)";
    const shift = memShiftSelect ? memShiftSelect.value : "Mañana (5:00 a.m. – 12:00 m.)";
    const userName = memUserNameInput ? memUserNameInput.value.trim() : "";
    const wantHealth = memHealthAddon ? memHealthAddon.checked : false;

    if (memSummaryBranch) memSummaryBranch.textContent = branch;
    if (memSummaryFocus) memSummaryFocus.textContent = focus;
    if (memSummaryShift) memSummaryShift.textContent = shift;
    if (memSummaryHealth) {
      memSummaryHealth.textContent = wantHealth ? "Valoración incluida" : "Solo entreno";
    }
    if (memSummaryTotal) {
      memSummaryTotal.textContent = `${formatCOP(MONTHLY_PLAN_PRICE)} / MES`;
    }

    const lines = [
      "🔥 *¡Hola TEAM CANO! Quiero afiliarme al Plan Mensual ($220.000 COP/mes)* 🔥",
      "",
      `📍 *Sede:* ${branch}`,
      `🏋️ *Modalidad:* ${focus}`,
      `🕒 *Jornada:* ${shift}`,
      `🥗 *Nutrición & Fisio:* ${wantHealth ? "Sí, deseo información" : "No por ahora"}`,
    ];
    if (userName) {
      lines.push(`👟 *Nombre:* ${userName}`);
    }
    lines.push("", "¿Me indican cómo activar mi mensualidad?");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    memWhatsappBtn.setAttribute("href", waUrl);
  }

  [memBranchSelect, memFocusSelect, memShiftSelect, memUserNameInput, memHealthAddon].forEach((el) => {
    if (!el) return;
    el.addEventListener("change", updateMembershipSummary);
    el.addEventListener("input", updateMembershipSummary);
  });

  /* --------------------------------------------------------------------------
   * 7. HYROX360.HTML: MARCADOR DE CATEGORÍAS, PENALIDADES Y CHECKOUT EVENTO
   * -------------------------------------------------------------------------- */
  let selectedCategoryKey = "principiante";
  let selectedGenderKey = "mujer";

  const catButtons = document.querySelectorAll("#categorySelector .tc-utab");
  const genderButtons = document.querySelectorAll("#genderSelector .tc-utab");

  const activeCatCode = document.getElementById("activeCatCode");
  const activeGenderBadge = document.getElementById("activeGenderBadge");
  const activeCatTitle = document.getElementById("activeCatTitle");
  const activeCatDesc = document.getElementById("activeCatDesc");
  const kpiTotalRun = document.getElementById("kpiTotalRun");
  const kpiMaxSled = document.getElementById("kpiMaxSled");
  const kpiWallBalls = document.getElementById("kpiWallBalls");

  const meterStrengthVal = document.getElementById("meterStrengthVal");
  const meterStrengthFill = document.getElementById("meterStrengthFill");
  const meterCardioVal = document.getElementById("meterCardioVal");
  const meterCardioFill = document.getElementById("meterCardioFill");
  const meterMentalVal = document.getElementById("meterMentalVal");
  const meterMentalFill = document.getElementById("meterMentalFill");

  const standardsCardsGrid = document.getElementById("standardsCardsGrid");
  const enrollSelectedCatBtn = document.getElementById("enrollSelectedCatBtn");

  function renderPowerScoreboard() {
    if (!standardsCardsGrid) return;
    const catObj = POWER_CATEGORIES_DB[selectedCategoryKey];
    if (!catObj) return;
    const modObj = catObj.modalities[selectedGenderKey];
    if (!modObj) return;

    if (activeCatCode) activeCatCode.textContent = catObj.code;
    if (activeGenderBadge) activeGenderBadge.textContent = `MODALIDAD ${modObj.label}`;
    if (activeCatTitle) activeCatTitle.textContent = `${catObj.titlePrefix} — ${modObj.label}`;
    if (activeCatDesc) activeCatDesc.textContent = catObj.description;

    if (kpiTotalRun) kpiTotalRun.textContent = modObj.totalRun;
    if (kpiMaxSled) kpiMaxSled.textContent = modObj.maxSled;
    if (kpiWallBalls) kpiWallBalls.textContent = modObj.wallBalls;

    if (meterStrengthVal) meterStrengthVal.textContent = `${modObj.meters.strength}%`;
    if (meterStrengthFill) meterStrengthFill.style.width = `${modObj.meters.strength}%`;
    if (meterCardioVal) meterCardioVal.textContent = `${modObj.meters.cardio}%`;
    if (meterCardioFill) meterCardioFill.style.width = `${modObj.meters.cardio}%`;
    if (meterMentalVal) meterMentalVal.textContent = `${modObj.meters.mental}%`;
    if (meterMentalFill) meterMentalFill.style.width = `${modObj.meters.mental}%`;

    standardsCardsGrid.innerHTML = modObj.stations
      .map(
        (st) => `
      <div class="tc-score-cell">
        <div class="tc-score-top">
          <span class="tc-score-idx">ESTACIÓN ${st.idx}</span>
          <span class="tc-score-run">RUN ${st.run}</span>
        </div>
        <h4 class="tc-score-station">${st.name}</h4>
        <strong class="tc-score-value">${st.work}</strong>
        <p class="tc-score-note">${st.note}</p>
      </div>
    `
      )
      .join("");
  }

  catButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      catButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedCategoryKey = btn.getAttribute("data-category") || "principiante";
      renderPowerScoreboard();
      syncCheckoutFromCalculator();
    });
  });

  genderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      genderButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedGenderKey = btn.getAttribute("data-gender") || "mujer";
      renderPowerScoreboard();
      syncCheckoutFromCalculator();
    });
  });

  if (enrollSelectedCatBtn) {
    enrollSelectedCatBtn.addEventListener("click", () => {
      syncCheckoutFromCalculator();
      const checkoutEl = document.getElementById("preventa-checkout");
      if (checkoutEl) {
        checkoutEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  let activePenaltyFilter = "all";
  let penaltySearchTerm = "";

  const penaltySearchInput = document.getElementById("penaltySearchInput");
  const penaltyFilterPills = document.querySelectorAll("#penaltyFilterPills .tc-ptab");
  const penaltiesTableBody = document.getElementById("penaltiesTableBody");

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderPenaltiesTable() {
    if (!penaltiesTableBody) return;
    const filtered = PENALTIES_DB.filter((item) => {
      const matchesFilter = activePenaltyFilter === "all" || item.station === activePenaltyFilter;
      const q = penaltySearchTerm.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.station.toLowerCase().includes(q) ||
        item.reason.toLowerCase().includes(q) ||
        item.penalty.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      penaltiesTableBody.innerHTML = `
        <tr>
          <td colspan="3" style="padding: 1.5rem 0; color: #7F8B9E;">
            Sin resultados para ese filtro.
          </td>
        </tr>
      `;
      return;
    }

    penaltiesTableBody.innerHTML = filtered
      .map((item) => {
        const cls =
          item.type === "dq" ? "tc-pen-dq" : item.type === "min" ? "tc-pen-min" : "tc-pen-15s";
        return `
        <tr>
          <td><strong>${escapeHtml(item.station)}</strong></td>
          <td>${escapeHtml(item.reason)}</td>
          <td class="tc-align-right"><span class="tc-pen-label ${cls}">${escapeHtml(item.penalty)}</span></td>
        </tr>
      `;
      })
      .join("");
  }

  if (penaltySearchInput) {
    penaltySearchInput.addEventListener("input", (e) => {
      penaltySearchTerm = e.target.value || "";
      renderPenaltiesTable();
    });
  }

  penaltyFilterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      penaltyFilterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activePenaltyFilter = pill.getAttribute("data-filter") || "all";
      renderPenaltiesTable();
    });
  });

  const chkCategory = document.getElementById("chkCategory");
  const chkGender = document.getElementById("chkGender");
  const chkStage = document.getElementById("chkStage");
  const chkAthleteNames = document.getElementById("chkAthleteNames");
  const chkPhotoAddon = document.getElementById("chkPhotoAddon");

  const summaryCatGender = document.getElementById("summaryCatGender");
  const summaryStageName = document.getElementById("summaryStageName");
  const summaryBasePrice = document.getElementById("summaryBasePrice");
  const summaryPhotoPrice = document.getElementById("summaryPhotoPrice");
  const summaryTotalPrice = document.getElementById("summaryTotalPrice");
  const whatsappCheckoutBtn = document.getElementById("whatsappCheckoutBtn");
  const stageColumns = document.querySelectorAll("#presaleStagesGrid .tc-stage-column");
  const selectStageBtns = document.querySelectorAll(".tc-select-stage-btn");

  function syncCheckoutFromCalculator() {
    const catObj = POWER_CATEGORIES_DB[selectedCategoryKey];
    const modObj = catObj ? catObj.modalities[selectedGenderKey] : null;
    if (chkCategory && catObj) chkCategory.value = catObj.SelectValue;
    if (chkGender && modObj) chkGender.value = modObj.label;
    updateEventCheckoutSummary();
  }

  function updateEventCheckoutSummary() {
    if (!whatsappCheckoutBtn) return;
    const catVal = chkCategory ? chkCategory.value : "01. PRINCIPIANTE";
    const genVal = chkGender ? chkGender.value : "MUJER";
    const stageKey = chkStage ? chkStage.value : "etapa3";
    const stageObj = STAGE_PRICES[stageKey] || STAGE_PRICES.etapa3;
    const includePhoto = chkPhotoAddon ? chkPhotoAddon.checked : false;
    const athleteNames = chkAthleteNames ? chkAthleteNames.value.trim() : "";

    const baseAmount = stageObj.price;
    const photoAmount = includePhoto ? PHOTO_ADDON_PRICE : 0;
    const totalAmount = baseAmount + photoAmount;

    if (summaryCatGender) summaryCatGender.textContent = `${catVal} · ${genVal}`;
    if (summaryStageName) summaryStageName.textContent = stageObj.name;
    if (summaryBasePrice) summaryBasePrice.textContent = formatCOP(baseAmount);
    if (summaryPhotoPrice) {
      summaryPhotoPrice.textContent = includePhoto ? "+$50.000 COP" : "$0 COP";
    }
    if (summaryTotalPrice) summaryTotalPrice.textContent = formatCOP(totalAmount);

    stageColumns.forEach((col) => {
      const colStage = col.getAttribute("data-stage-id");
      const isActive = colStage === stageKey;
      col.classList.toggle("active", isActive);
      const btn = col.querySelector(".tc-select-stage-btn");
      if (btn) {
        btn.classList.toggle("active", isActive);
        btn.textContent = isActive ? "Etapa Seleccionada ✓" : `Simular ${colStage.toUpperCase()} →`;
      }
    });

    const messageLines = [
      "🔥 *¡Hola TEAM CANO! Quiero asegurar mi cupo en HYROX 360 TEAM CANO (Sede Jamundí)* 🔥",
      "",
      `🏋️ *Categoría:* ${catVal}`,
      `⚡ *Modalidad:* ${genVal}`,
      `🎟️ *Etapa:* ${stageObj.name} (${formatCOP(baseAmount)})`,
      `📸 *Registro Fotográfico ($50.000 x Pareja):* ${includePhoto ? "SÍ (+$50.000 COP)" : "No"}`,
    ];
    if (athleteNames) {
      messageLines.push(`👟 *Atleta(s):* ${athleteNames}`);
    }
    messageLines.push(`💰 *TOTAL A PAGAR:* *${formatCOP(totalAmount)}*`);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join("\n"))}`;
    whatsappCheckoutBtn.setAttribute("href", waUrl);
  }

  [chkCategory, chkGender, chkStage, chkPhotoAddon, chkAthleteNames].forEach((el) => {
    if (!el) return;
    el.addEventListener("change", updateEventCheckoutSummary);
    el.addEventListener("input", updateEventCheckoutSummary);
  });

  selectStageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const stg = btn.getAttribute("data-select-stage");
      if (chkStage && stg) {
        chkStage.value = stg;
        updateEventCheckoutSummary();
      }
    });
  });

  /* --------------------------------------------------------------------------
   * 8. MODALES Y MENÚ MÓVIL
   * -------------------------------------------------------------------------- */
  const openMasterReelBtn = document.getElementById("openMasterReelBtn");
  const closeReelModalBtn = document.getElementById("closeReelModalBtn");
  const reelModal = document.getElementById("reelModal");
  const masterReelVideo = document.getElementById("masterReelVideo");

  function toggleReelModal(show) {
    if (!reelModal) return;
    reelModal.classList.toggle("open", show);
    reelModal.setAttribute("aria-hidden", String(!show));
    if (masterReelVideo) {
      if (show) masterReelVideo.play().catch(() => {});
      else masterReelVideo.pause();
    }
  }

  if (openMasterReelBtn) openMasterReelBtn.addEventListener("click", () => toggleReelModal(true));
  if (closeReelModalBtn) closeReelModalBtn.addEventListener("click", () => toggleReelModal(false));
  if (reelModal) {
    reelModal.addEventListener("click", (e) => {
      if (e.target === reelModal) toggleReelModal(false);
    });
  }

  const openAgencyAuditBtn = document.getElementById("openAgencyAuditBtn");
  const closeAgencyAuditBtn = document.getElementById("closeAgencyAuditBtn");
  const agencyAuditModal = document.getElementById("agencyAuditModal");

  function toggleAuditModal(show) {
    if (!agencyAuditModal) return;
    agencyAuditModal.classList.toggle("open", show);
    agencyAuditModal.setAttribute("aria-hidden", String(!show));
  }

  if (openAgencyAuditBtn) openAgencyAuditBtn.addEventListener("click", () => toggleAuditModal(true));
  if (closeAgencyAuditBtn) closeAgencyAuditBtn.addEventListener("click", () => toggleAuditModal(false));
  if (agencyAuditModal) {
    agencyAuditModal.addEventListener("click", (e) => {
      if (e.target === agencyAuditModal) toggleAuditModal(false);
    });
  }

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
    });
    mobileDrawer.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobileDrawer.classList.remove("open"));
    });
  }

  /* --------------------------------------------------------------------------
   * INICIALIZACIÓN GENERAL
   * -------------------------------------------------------------------------- */
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("scroll", onScrollUpdate, { passive: true });

  renderSplitEditorialStream();
  renderLocationsList();
  updateMembershipSummary();
  renderPowerScoreboard();
  renderPenaltiesTable();
  updateEventCheckoutSummary();
  preloadSeedanceFrames();
  setActiveStation(0);
  onScrollUpdate();
  requestAnimationFrame(renderLoop);
})();
