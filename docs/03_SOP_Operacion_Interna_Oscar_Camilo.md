# Manual de Operación Interna (SOP) — Flujo entre Camilo y Oscar

Este manual define cómo interactúan **Camilo Cortés (Comercial & Estrategia)** y **Oscar Ortiz (Tecnología, IA & Producción)** para operar como un reloj suizo, sin cuellos de botella ni reprocesos.

---

## 1. Mapa de Responsabilidades Claras

| Área Operativa | Responsable Líder | Responsabilidades Específicas |
| :--- | :--- | :--- |
| **Estrategia Comercial y Prospección** | **Camilo Cortés** | Investigar el mercado en Cali/Jamundí, filtrar prospectos rentables, identificar qué producto del prospecto tiene mayor potencial visual y definir el ángulo de venta. |
| **Ventas, Negociación y Cuentas** | **Camilo Cortés** | Entregar los Demos ("Caballo de Troya"), agendar reuniones con dueños, presentar propuestas, cerrar contratos, gestionar cobros y liderar la comunicación con el cliente. |
| **Tecnología, Pipeline IA y Demos** | **Oscar Ortiz** | Administrar las APIs y servidores MCP (Sunra, Higgsfield, Kling/Veo, ElevenLabs), optimizar costos de generación y construir las automatizaciones en Antigravity. |
| **Dirección Audiovisual y Post-Producción** | **Oscar Ortiz** | Ejecutar la Fidelidad Híbrida sobre fotos reales, dirigir las cámaras virtuales IA, generar locución + SFX, editar en DaVinci Resolve y asegurar calidad cinematográfica. |

---

## 2. SOP #1: Fábrica de Demos "Caballo de Troya" (Prospección B2B)

Para no desperdiciar créditos de IA ni tiempo técnico, ningún Demo gratuito se produce sin cumplir este flujo de 4 pasos:

```
[Camilo: Filtra Prospecto] ──► [Camilo: Llena Ficha Demo] ──► [Oscar: Produce Spot 12s] ──► [Camilo: Entrega y Cierra]
```

### Paso 1: Filtro de Calificación (Camilo)
Antes de pedir un demo, Camilo verifica que el negocio cumpla los **3 Requisitos de Oro**:
1. **Ticket / Margen suficiente:** Es una constructora, clínica, restaurante consolidado, concesionario o comercio con capacidad de pago en Cali/Jamundí.
2. **Brecha visual evidente:** Tienen buen local/producto, pero sus últimos 6 Reels tienen baja producción o son fotos estáticas.
3. **Insumo disponible:** Tienen al menos 1 o 2 fotos nítidas de su producto real en Instagram o su página web.

### Paso 2: Solicitud de Demo — "Ficha de Disparo" (Camilo $\rightarrow$ Oscar)
Camilo envía a Oscar la solicitud con estos 5 datos exactos:
* **Nombre del Negocio y Nicho:** (Ej. *Condominio Campestre X — Jamundí*).
* **Enlace a la Foto Real Base:** Foto de alta calidad descargada de su Instagram/Web.
* **Objetivo del Spot (1 frase):** (Ej. *Mostrar la fachada real cobrando vida al atardecer con familia y dron FPV entrando a la piscina*).
* **Texto de Cierre / Gancho:** Qué debe decir la voz en off en 10 segundos.
* **Prioridad Comercial:** Alta (ya hay contacto con el dueño) / Media (prospección en frío).

### Paso 3: Producción Express del Demo (Oscar)
* **Duración máxima del Demo:** 10 a 15 segundos (suficiente para impactar, cuesta menos de $1 USD en API y toma ~30-45 minutos producirlo).
* **Estructura Visual del Demo:**
  * *Segundos 0 a 2:* Pantalla dividida o transición rápida mostrando **"Tu foto actual en Instagram"** $\rightarrow$ **"Lo que creamos para tu marca"**.
  * *Segundos 2 a 12:* Explosión visual cinematográfica con IA manteniendo el producto real + SFX envolvente + Voz comercial.
  * *Marca de agua sutil:* Sello discreto de la agencia en una esquina (se retira si el cliente compra el paquete).

### Paso 4: Entrega y Seguimiento Comercial (Camilo)
* Camilo envía el video al decisor (WhatsApp / DM / Presencial en iPad) y aplica la secuencia de seguimiento a las **24 horas**, **72 horas** y **Día 7**.

---

## 3. SOP #2: Línea de Producción para Clientes Activos (Fábrica Mensual)

Una vez que Camilo cierra un cliente y se confirma el anticipo, el proyecto entra en un ciclo estandarizado de **5 Etapas Internas**:

### Etapa 1: Traducción Estratégica (Camilo)
* Camilo realiza el Onboarding con el cliente, recolecta las fotografías reales en alta calidad y redacta la **Orden de Producción del Mes** (qué producto va en cada video, qué promoción u oferta se destaca y cuál es el llamado a la acción hacia WhatsApp).

### Etapa 2: Guionización y Compuerta 1 (Camilo + Oscar)
* Con ayuda de nuestro sistema en Antigravity, generamos los **Guiones Comerciales de 3 columnas** (Tiempo | Imagen/Cámara IA | Audio/Voz + Texto en Pantalla) y preparamos las **Imágenes Base (Keyframes)** con el producto real del cliente.
* **Regla Crítica:** Camilo envía los guiones e imágenes base al cliente para **Aprobación de Compuerta 1** *antes* de gastar créditos de video en movimiento.

### Etapa 3: Generación Multimodal IA (Oscar)
Con la Compuerta 1 aprobada por el cliente, Oscar ejecuta el pipeline técnico:
1. **Preparación de Activos:** Limpieza de la foto real del producto, recorte de máscaras y composición del escenario base (*Inpainting / Image-to-Image* controlado).
2. **Síntesis de Movimiento (Video IA):** Generación de clips de 5s/10s en **Higgsfield / Kling / Veo (vía Sunra MCP)** aplicando movimientos de cámara precisos (*FPV drone, Dolly zoom, Macro slow-motion*) y consistencia de personaje (*Soul ID*).
3. **Síntesis de Voz y Foley:** Generación de locución comercial y efectos de sonido en **ElevenLabs**.

### Etapa 4: Ensamblaje, Color y Multi-Hook (Oscar)
1. Montaje rítmico en **DaVinci Resolve**.
2. Aplicación de subtítulos dinámicos de alta lectura, logos del cliente y llamados a la acción.
3. Exportación del video principal + **variaciones de los primeros 3 segundos (Hooks)** en formato vertical `1080x1920` (9:16, 30/60 fps, H.264/H.265 optimizado para que Instagram/Meta Ads no comprima la calidad).

### Etapa 5: Control de Calidad Interno (QA Checklist)
Antes de que Oscar le pase el video a Camilo para entregar al cliente, verifica estos 5 puntos:
- [ ] **Fidelidad del Producto:** ¿El plato, inmueble, rostro o producto real se ve 100% auténtico y sin deformaciones de IA?
- [ ] **Gancho en 3 Segundos:** ¿Los primeros 3 segundos detienen el dedo al hacer scroll en el celular?
- [ ] **Audio Limpio:** ¿La voz se escucha clara por encima de la música y los efectos de sonido (*foley*) están sincronizados?
- [ ] **Zonas Seguras (Safe Zones 9:16):** ¿Los subtítulos y logos están dentro del margen seguro de Instagram Reels/TikTok para que no los tapen los botones de la interfaz?
- [ ] **Llamado a la Acción (CTA):** ¿Queda claro qué debe hacer el espectador al final (ej. *"Haz clic en el botón de WhatsApp y agenda tu cita hoy"*)?
