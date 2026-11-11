# Regla Obligatoria: Aduana Forense 5-Gate QA (`media-qa-reviewer`) e Identidad Oficial por Cliente

Antes de mostrar cualquier imagen (`3:4`) o video comercial (`9:16`) al usuario o hacer `git push` al portal compartido (`agencia-marketing-hub`):

1. **Aislamiento Estricto por Cliente:**
   - Cada negocio/cliente debe tener su propia carpeta y portal web independiente en `demos/<slug-cliente>/index.html` (`https://oscarousu.github.io/agencia-marketing-hub/demos/<slug-cliente>/`).
   - **Prohibido mezclar el contexto, logos, paletas, audios o prompts de clientes anteriores** cuando se inicia la producción de un cliente nuevo.

2. **Extracción Previa de Identidad Oficial (`@instagram` del cliente):**
   - Antes de crear overlays o posts, extrae siempre del Instagram oficial del cliente:
     - Su **logotipo oficial real** en PNG transparente de alta resolución (`brand_assets/`). **Nunca** escribas el nombre de la marca con fuentes genéricas en lugar de su logo oficial.
     - Su **paleta de colores hexadecimal real** y su **sistema tipográfico recurrente** en Reels/Posts.

3. **Auditoría Obligatoria de 5 Compuertas (`media-qa-reviewer` — 5/5 APROBADAS):**
   - Invoca siempre al subagente `media-qa-reviewer` (`/Users/oscarortiz/.gemini/config/skills/media-qa-reviewer/SKILL.md`) sobre cada imagen y cada video:
     - **Compuerta 1 (Física, Permanencia de Objetos `>= 5 fps`, Continuidad de Eje y Coherencia Térmica):** Auditoría obligatoria con grilla cronometrada a **`>= 5 fps` (cada `0.20s`, prohibido `1–2 fps`)**. Cero objetos/pizzas deslizándose solos sobre la mesa o saliendo mientras entra un clon superponiéndose (*zero object overlap/cloning*); cero giros antinaturales de 90° en objetos/alimentos al llevarlos a la boca/manos; conteo lógico 1-a-1; cero objetos flotando y **cero vapor en bebidas frías con hielo**.
     - **Compuerta 2 (Anatomía Humana y Agarres):** Exactamente 5 dedos articulados por mano, muñecas en ángulo ergonómico natural y cero extremidades fantasma.
     - **Compuerta 3 (Política de Audio y Loudness `ebur128`):** **0% voces habladas alucinadas** en Reels promocionales musicales; mezcla de 4 capas de sonido físico real (Beat + Foley continuo + Whoosh de transición + Impacto/Crunch/Clink con ElevenLabs SFX) normalizada entre `-12.5` y `-14.5 LUFS`.
     - **Compuerta 4 (Identidad Oficial Limpia Sin Recuadros, Safe Zones y Visibilidad del Producto):** Logo oficial libre sin recuadros ni píldoras invasivas; tipografía pesada en negrilla de alto contraste (`>12:1`) con trazo oscuro y sombra suave. El bloque tipográfico inferior nunca debe tapar ni cortar el producto héroe (`y <= 1105px` despejado en Posts `3:4`, texto en `y=1130px–1390px`). En Reels `9:16`, usar siempre `-loop 1 -t 12` en los PNGs de `ffmpeg` para evitar parpadeos.
     - **Compuerta 5 (Realismo DSLR y Formato Técnico):** Estética óptica real sin brillo plástico CGI; videos en `1080x1920`, `30fps`, `H.264`, **`pix_fmt=yuv420p` obligatorio** en versiones `_branded.mp4` y `_clean.mp4`; posts en `1080x1440` (`3:4`) `.jpg`.
