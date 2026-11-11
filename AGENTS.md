# 🧠 Memoria Operativa, Arquitectura de Subagentes y Reglas Maestras — Agencia Marketing IA (Oscar & Camilo)

Este archivo (`AGENTS.md`) se carga automáticamente al iniciar cualquier conversación nueva dentro del proyecto **Agencia Marketing**. Su objetivo es que toda nueva conversación para un **nuevo cliente** herede el **100% de las skills, agentes especializados y aprendizajes técnicos** acumulados, pero manteniendo **aislamiento total de contexto entre clientes**.

---

## 1. Regla #1: Aislamiento Estricto de Contexto por Cliente (Cero Mezcla entre Marcas)

1. **Contexto Limpio para Cada Nuevo Cliente:**
   - Cuando el usuario inicie una conversación para un cliente nuevo (o para el siguiente cliente en cola como `CuidArte Estética & Spa`), **NO mezcles historias, prompts, paletas, logos ni activos de clientes anteriores** (`Team Cano`, `Molle Pizza`).
   - Cada cliente vive en su propio espacio aislado:
     - Carpeta de trabajo y activos finales: `demos/<slug-cliente>/`
     - Activos oficiales extraídos de su Instagram: `demos/<slug-cliente>/brand_assets/`
     - Portal web exclusivo del cliente: `demos/<slug-cliente>/index.html` -> publicado en `https://oscarousu.github.io/agencia-marketing-hub/demos/<slug-cliente>/`
     - Además, se enlaza en la barra de navegación y directorio general de `index.html` (`https://oscarousu.github.io/agencia-marketing-hub/`).

2. **Estado Actual de Espacios de Clientes en Producción:**
   - ✅ **Team Cano (`@teamcano_fit`):** Completado y certificado `5/5` (`3 Reels 9:16` + `4 Posts 3:4` en `demos/teamcano/`).
   - ✅ **Molle Pizza (`@mollepizza`):** Completado y certificado `5/5` (`3 Reels 9:16` + `4 Posts 3:4` en `demos/mollepizza/`).
   - ⏳ **CuidArte Estética y Micropigmentación (`@cuidartesteticakg` — Katherine Gil, Jamundí):** Espacio base creado en `demos/cuidarte/index.html`; pendiente producción de su suite completa (`3 Reels 9:16` + `4 Posts 3:4`).
   - 🆕 **Cualquier Nuevo Cliente:** Crear su directorio exclusivo `demos/<nuevo-cliente>/` y su portal `demos/<nuevo-cliente>/index.html` desde el inicio.

---

## 2. Equipo de Agentes Especializados (A Qué se Dedica Cada Uno)

En cada nueva conversación, orquesta estos agentes especializados (definiendo con `define_subagent` los que no sean nativos cuando los necesites):

| Nombre del Agente | Rol / Título | A Qué se Dedica Exactamente y Cuándo Invocarlo | Skill Base Obligatoria |
| :--- | :--- | :--- | :--- |
| **`media-qa-reviewer`** | `Director de Control de Calidad Audiovisual & Física IA` | **Aduana obligatoria e innegociable (`5-Gate QA`).** Audita **cada imagen (`3:4`) y cada video (`9:16`)** antes de mostrarlo al usuario o subirlo a GitHub. Extrae fotogramas segundo a segundo con `ffmpeg`, verifica continuidad de eje sin giros antinaturales, coherencia térmica, anatomía de 5 dedos y muñecas rectas, visibilidad despejada del producto héroe, audio `-14 LUFS` con `0%` voces alucinadas (`ebur128`), e identidad oficial `@instagram`. Debe aprobar **5/5 compuertas**. | `/Users/oscarortiz/.gemini/config/skills/media-qa-reviewer/SKILL.md` |
| **`image-generator`** | `Generador de Keyframes Encadenados & Fotografía Comercial DSLR` | Subagente nativo para generar las **4 fotografías base de Post (`3:4`, `1080x1440`)** y los **Keyframes encadenados (`9:16`, `KF1 -> KF2 -> KF3`)** para Google Flow. Aplica óptica real (`85mm/35mm f/2.0`), *Semantic Negative Prompts* (en positivo), bloqueo de mismo eje (`Same-Axis Keyframe Locking`), agarre ergonómico humano y reserva de espacio negativo inferior (`y=1120–1440px`). | `/Users/oscarortiz/.gemini/config/skills/gemini-nano-banana-photorealism/SKILL.md` |
| **`video-production-agent`** | `Ingeniero de Producción Google Flow, Speed-Ramping, Foley & FFmpeg` | Ejecuta la animación de keyframes en **Google Flow** (**Veo 3.1** / **Google Omni 1.2 / Flash 1.1**), inspecciona grillas a `2 fps` de cada clip crudo, aplica recorte quirúrgico (`trim`) para eliminar cualquier rotación antinatural, aplica curvas de velocidad (`setpts`), diseña la mezcla de **4 capas de audio físico real** (ElevenLabs SFX + Beat a `-14 LUFS`), estampa los overlays oficiales con `-loop 1 -t 12` y exporta masters `_branded.mp4` y `_clean.mp4` en `pix_fmt=yuv420p`. | `/Users/oscarortiz/.gemini/config/skills/google-flow-filmmaking/SKILL.md` y `/Users/oscarortiz/.gemini/config/skills/higgsfield-video-production/SKILL.md` |
| **`fullstack-web-architect`** | `Arquitecto de Portales Exclusivos por Cliente & Scrollytelling` | Construye el portal exclusivo `demos/<cliente>/index.html` personalizado con la paleta, tipografía y logo oficial de ese cliente, incluyendo reproductores nativos y botones de descarga duales (`Branded` + `Clean`) para los 3 Reels y 4 Posts, y actualiza el selector de clientes en el Hub raíz (`index.html`). | — |
| **`qa-security-auditor`** | `Auditor de Integridad Web y Despliegue GitHub Pages` | Verifica que todas las rutas relativas (`./video_01...`, `./post_01...`), códigos HTTP y etiquetas HTML en `index.html` y `demos/<cliente>/index.html` funcionen al 100% y que el `git push` no suba carpetas pesadas de trabajo temporal (`google_flow_clips/`, `tmp/`). | — |

---

## 3. Los 10 Aprendizajes Técnicos de Oro (Aplicar Siempre desde el Día 1 con Cada Nuevo Cliente)

1. **Extracción Previa de Identidad Oficial del Instagram Real (`@cliente`) + Cero Recuadros Invasivos:**
   - Antes de diseñar un solo overlay, extrae del Instagram oficial del cliente su **logo real en PNG blanco/transparente de alta resolución** y su **paleta hexadecimal exacta**. Prohibido inventar logos con fuentes genéricas.
   - **Logo Limpio Flotante y Tipografía Pesada Libre de Cajas:** Evita encerrar el logo o los subtítulos en recuadros, parches o píldoras pesadas que ensucien el cuadro. Coloca el logo oficial limpio flotando en la zona superior con sombra óptica suave y usa **tipografía pesada en negrilla de alto contraste** (titular condensado fuerte + subtítulo bold con `stroke` oscuro nítido de `5–6px` y *drop-shadow* cinematográfico) directamente sobre el espacio negativo.
2. **Estándar Completo de Entregables por Cliente (`3 Reels + 4 Posts Duales`):**
   - Salvo instrucción distinta, cada cliente lleva un paquete completo en su espacio exclusivo:
     - **3 Videos Comerciales tipo Reel (`9:16`, `1080x1920`, `~12s`, `30fps`):** `video_01_...`, `video_02_...`, `video_03_...` (cada uno con versión `_branded.mp4` y `_clean.mp4`).
     - **4 Imágenes para Post de Instagram (`3:4`, `1080x1440`):** `post_01_...`, `post_02_...`, `post_03_...`, `post_04_...` (cada una con versión `_branded.jpg` y `_clean.jpg`).
3. **Bloqueo de Mismo Eje en Keyframes Encadenados (`Same-Axis Keyframe Locking`):**
   - Cuando un objeto/alimento pasa de la mesa a las manos o hacia la boca/rostro entre `Clip A` y `Clip B`, los keyframes deben mantener el objeto en **exactamente el mismo eje vertical/geométrico** y con el mismo tipo de agarre manual para evitar que el modelo de video gire el objeto 90° en el aire.
4. **Selección Explícita de `Omni 1.2 Flash`, Inspección `2 fps` y Recorte Quirúrgico (`Surgical Trim`) en Google Flow:**
   - En Google Flow, verificar siempre en el selector de modelo que esté activo **`Omni 1.2 Flash`** (o la versión más reciente disponible, evitando caer por defecto en `1.1`) para obtener paralaje 3D real, partículas físicas vivas y movimientos tipo brazo robótico / Steadicam.
   - Apenas se descargan los clips de Google Flow, extraer siempre una grilla `tile=4x3` a `2 fps` e inspeccionarla con `read_file`.
   - Si el modelo hizo un giro antinatural del objeto o de la mano en los primeros `0.0s–2.5s` pero de `2.6s` a `6.0s` el movimiento es 100% natural en el mismo eje, **recortar quirúrgicamente (`trim=2.65:6.03`)**, aplicar curvas de *speed-ramping* (`setpts`) y transiciones *flash-bloom* + texto cinético (*slide-up*) para un acabado comercial de alto impacto.
5. **Anatomía Humana y Agarres Ergonómicos (`5 Dedos + Muñeca Recta + Cero Objetos Flotantes`):**
   - Prohibidas las porciones o productos flotando en el aire sin soporte físico real. Toda mano en cuadro debe tener 5 dedos bien articulados y muñeca en línea anatómica natural.
6. **Coherencia Térmica y Lógica Espacial (`Zero Steam on Cold Drinks / 1-to-1 Object Count`):**
   - Nunca permitir vapor o humo subiendo detrás o encima de bebidas frías con hielo. Verificar siempre conteo lógico (1 atleta = 1 balón; promo 3x2 = 3 productos distintos).
7. **Visibilidad 100% Despejada del Producto Héroe (`Zero Text Occlusion`):**
   - En los Posts `3:4` (`1080x1440`) y Reels `9:16` (`1080x1920`), las cajas de texto inferiores (`lower-thirds`) **jamás deben tapar ni cortar el producto principal**. Dejar siempre el producto por encima de `y = 1105px` en Posts `3:4` (desplazando el encuadre hacia arriba si hace falta) y ubicar el bloque tipográfico sobre superficie limpia en `y = 1130px–1390px`.
8. **Regla Técnica FFmpeg `-loop 1` y `pix_fmt=yuv420p`:**
   - En `ffmpeg`, todo overlay PNG estático que lleve filtros `fade` debe cargarse con **`-loop 1 -t 12 -i overlay.png`** y `:shortest=1` en el `overlay` base. Exportar siempre tanto `_branded.mp4` como `_clean.mp4` con **`-pix_fmt yuv420p`** y `-movflags +faststart`.
9. **Diseño Sonoro Multicapa a `-14 LUFS` (Política de Cero Voces Alucinadas):**
   - En Reels promocionales sin locución hablada, eliminar al 100% el audio crudo del generador de video y construir una mezcla maestra de **4 capas** (`Beat musical` + `Foley continuo` + `Whoosh de transición` + `Impacto/Crunch/Clink` generados con ElevenLabs Sound Effects) normalizada con `loudnorm=I=-14:TP=-1.5:LRA=7`.
10. **Filtro Final Innegociable (`media-qa-reviewer` 5/5):**
    - Ninguna imagen ni video se da por terminado hasta que `media-qa-reviewer` emita su tabla de auditoría con las **5 compuertas aprobadas (`5/5`)**.
