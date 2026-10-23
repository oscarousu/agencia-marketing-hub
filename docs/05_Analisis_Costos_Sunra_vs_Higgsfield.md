# Análisis Comparativo de Costos: Sunra.ai vs. Higgsfield AI (Suscripción vs. API)

**Marco de Referencia para la Agencia (Oscar Ortiz & Camilo Cortés):**
* **Formatos evaluados:** Comerciales de **15 segundos** (3 tomas de 5s) y **30 segundos** (6 tomas de 5s) en 1080p.
* **Factor de Realidad Operativa ("Multiplier de Iteración"):**
  * En cualquier agencia profesional de IA, **no siempre el primer clip generado sale perfecto**.
  * Con nuestro sistema de **Compuerta 1 (Aprobación previa de Keyframe/Imagen Base)** reducimos el desperdicio dramáticamente, pero aun así debemos calcular un **Factor de Iteración de 2x a 2.5x** (generar ~2 intentos de movimiento por cada clip definitivo de 5 segundos que entra al corte final en DaVinci Resolve).
* **Tasa de cambio referencial:** `$1 USD ≈ $4.200 COP`.

---

## 1. Radiografía de Plataformas: ¿Qué es cada una y cómo cobran?

### A. Sunra.ai (`sunra.ai` / `Sunra MCP`)
* **Naturaleza:** Es un **agregador multimodal y puente MCP** (Model Context Protocol). Conecta en un solo saldo todos los modelos líderes del mercado (**Kling 2.6/3.0, Google Veo, Sora, ByteDance Seedance, ElevenLabs, Nano Banana Pro, GPT-Image**) cobrando a **precio de fabricante ("Maker Pricing", 0% markup)**.
* **Unificación Web + API/MCP:** A diferencia de otras plataformas, en Sunra tu mismo saldo/créditos sirve tanto para usar su estudio visual en la web como para generar por código/automatización desde **Antigravity / Claude / Cursor** vía `Sunra MCP` (`1 USD = ~100 a 135 créditos` según el plan).
* **Planes de Suscripción:**
  * **Basic:** `$12 USD/mes` (`$9/mes` anual) $\rightarrow$ **1,200 créditos/mes** (~$0.010 USD por crédito).
  * **Pro:** `$29 USD/mes` (`$17/mes` anual) $\rightarrow$ **3,500 créditos/mes** (~$0.0082 USD por crédito).
  * **Creator:** `$125 USD/mes` (`$63/mes` anual) $\rightarrow$ **17,000 créditos/mes** (~$0.0073 USD por crédito).

### B. Higgsfield AI (`higgsfield.ai` vs `open.higgsfield.ai`)
* **Naturaleza:** Es tanto un **creador de modelos propios especializados en cine/publicidad** (*Soul ID* para consistencia facial de avatares, *DoP* para movimientos de cámara cinematográficos, *Marketing Studio*) como un catálogo de modelos de terceros (Kling, Seedance, Wan, MiniMax).
* **⚠️ Separación Estricta entre Web y API:**
  1. **Higgsfield Web (Suscripción):** Los créditos comprados en `higgsfield.ai` **solo funcionan haciendo clic manualmente en su página web** y **vencen cada mes (No Rollover)**.
     * **Basic:** `~$19 USD/mes` (`$9/mes` anual) $\rightarrow$ ~150–270 créditos (bloquea modelos tope de gama).
     * **Pro / Plus:** `$29 a $49 USD/mes` (`$23/mes` anual) $\rightarrow$ **600 a 1,200 créditos/mes**.
     * **Ultra / Max:** `$79 a $129 USD/mes` $\rightarrow$ **1,800 a 3,000 créditos/mes**.
     * *Recargas sueltas:* `$1 USD = 20 créditos` (`$0.05 USD` por crédito).
  2. **Higgsfield API (`open.higgsfield.ai`):** Es una plataforma aparte **100% Pay-As-You-Go (Prepago en USD desde $5 USD)**. No exige mensualidad fija y su saldo no se pierde a fin de mes.

---

## 2. Costo Unitario por Clip de 5 Segundos (La Unidad Básica)

Un comercial de **15 segundos** nunca se genera como un solo bloque continuo de 15s (sería aburrido y sin ritmo comercial); se construye uniendo **3 tomas dinámicas de 5 segundos** en DaVinci Resolve. Uno de **30 segundos** une **6 tomas de 5 segundos**.

| Plataforma y Modalidad | Costo por 1 Clip de 5s (1 intento directo) | Costo Real por 1 Clip de 5s Aprobado (Con 2x Iteración + Keyframe + Voz) |
| :--- | :---: | :---: |
| **1. Sunra.ai (Suscripción / MCP en Plan Pro $29/mes)** | `$0.25 – $0.45 USD` | **`$0.65 – $1.00 USD`** (~$2.700 – $4.200 COP) |
| **2. Sunra.ai (API Pura / Pay-as-you-go sin descuento de plan)** | `$0.35 – $0.60 USD` | **`$0.85 – $1.30 USD`** (~$3.500 – $5.400 COP) |
| **3. Higgsfield (Suscripción Web Pro $39–$49/mes)** | `$0.40 – $0.90 USD` *(8.5 a 22 créditos)* | **`$1.00 – $2.00 USD`** (~$4.200 – $8.400 COP) |
| **4. Higgsfield API (`open.higgsfield.ai` Pay-As-You-Go)** | `$0.25 – $0.80 USD` | **`$0.70 – $1.75 USD`** (~$2.900 – $7.350 COP) |

---

## 3. Comparativa Exacta: Video de 15 Segundos vs. Video de 30 Segundos

A continuación, el costo total terminado (incluyendo **Imágenes Base/Keyframes + Tomas de Video IA con factor de iteración realista 2x + Locución y Efectos de Sonido en ElevenLabs**):

### Escenario A: Comercial de **15 Segundos** (3 Tomas de 5s + Voz + SFX)
*(Ideal para Demos "Caballo de Troya" de 12-15s y Reels de impacto rápido)*

| Método / Plataforma | Costo Neto 1 Video de 15s (USD) | Costo Neto 1 Video de 15s (COP) | ¿Cuántos videos de 15s reales salen al mes con su plan medio? |
| :--- | :---: | :---: | :--- |
| **Sunra (Plan Pro $29/mes + MCP)** | **`$1.95 – $2.85 USD`** | **`$8.200 – $12.000 COP`** | **~11 a 15 videos completos de 15s** (con `$29 USD/mes`) |
| **Sunra (API / Créditos Sueltos)** | **`$2.50 – $3.60 USD`** | **`$10.500 – $15.100 COP`** | Pago exacto por uso sin límite mensual |
| **Higgsfield (Suscripción Web Pro ~$39/mes)** | **`$3.00 – $5.50 USD`** | **`$12.600 – $23.100 COP`** | **~7 a 12 videos completos de 15s** (y si no los usas en el mes, pierdes los créditos) |
| **Higgsfield API (`open.higgsfield.ai`)** | **`$2.10 – $4.80 USD`** | **`$8.800 – $20.100 COP`** | Pago por uso desde `$5 USD` de recarga (saldo no vence a los 30 días) |

---

### Escenario B: Comercial de **30 Segundos** (6 Tomas de 5s + Voz + SFX)
*(Ideal para Constructoras en Jamundí, Clínicas Estéticas y Storytelling completo)*

| Método / Plataforma | Costo Neto 1 Video de 30s (USD) | Costo Neto 1 Video de 30s (COP) | ¿Cuántos videos de 30s reales salen al mes con su plan medio? |
| :--- | :---: | :---: | :--- |
| **Sunra (Plan Pro $29/mes + MCP)** | **`$3.90 – $5.70 USD`** | **`$16.400 – $24.000 COP`** | **~5 a 7 videos completos de 30s** (con `$29 USD/mes`) |
| **Sunra (API / Créditos Sueltos)** | **`$5.00 – $7.20 USD`** | **`$21.000 – $30.200 COP`** | Pago exacto por uso sin límite mensual |
| **Higgsfield (Suscripción Web Pro ~$39/mes)** | **`$6.00 – $11.00 USD`** | **`$25.200 – $46.200 COP`** | **~4 a 6 videos completos de 30s** |
| **Higgsfield API (`open.higgsfield.ai`)** | **`$4.20 – $9.60 USD`** | **`$17.600 – $40.300 COP`** | Pago por uso según demanda de clientes |

---

## 4. Veredicto Estratégico: ¿Qué Método Debemos Usar en la Agencia?

El error #1 de las agencias principiantes es atarse desde el Día 1 a suscripciones grandes en páginas web (`$129 USD/mes` en Higgsfield Ultra + `$125 USD/mes` en Sunra + `$22 USD/mes` en ElevenLabs = **`+$276 USD/mes` / `$1.150.000 COP` de gasto fijo** antes de haber vendido el primer cliente).

Además, en **Higgsfield Web**, los créditos no usados al día 30 **se borran (No Rollover)**.

### 🏆 La Combinación Ganadora para Oscar y Camilo (Por Fases):

#### Fase 1 y 2 (Creación de los 5 Demos "Caballo de Troya" y Primeros 2 Clientes):
1. **Motor Principal de Video, Imagen y Audio (80% del trabajo): `Sunra.ai Plan Basic ($12 USD/mes) o Pro ($29 USD/mes)` conectado por `Sunra MCP` a Antigravity.**
   * **Por qué:** Por solo **`$12 a $29 USD`** tienes unificados en un solo lugar **Kling, Google Veo, Seedance, Nano Banana Pro (para la imagen base del producto real) y ElevenLabs (para la voz y SFX)**, tanto en interfaz web como automatizado aquí en Antigravity.
   * Con `$29 USD` produces de sobra los **5 Demos de 15 segundos** para que Camilo salga a vender en Cali y Jamundí, y aún te queda la mitad del saldo para el primer cliente.
2. **Motor Especializado de Avatares y Cámaras Exclusivas (20% del trabajo): `Higgsfield API (open.higgsfield.ai)` en modalidad Prepago (`$10 a $20 USD` de saldo recargable, CERO suscripción mensual).**
   * **Por qué:** No pagues la suscripción mensual de Higgsfield Web al inicio. Abre cuenta en `open.higgsfield.ai`, recarga solo **`$10 USD` en Pay-As-You-Go**, y úsala únicamente cuando necesites el modelo exclusivo **Soul 2 / Soul ID** (para presentadores virtuales consistentes de clínicas o constructoras) o movimientos de cámara **DoP**. Si un mes no usas Higgsfield, tu gasto fijo ahí es **`$0 USD`**.

#### Fase 3 (Cuando ya tengamos 4+ Clientes Mensuales Activos en Cali/Jamundí):
* Subir **Sunra al Plan Creator (`$63 USD/mes` anual o `$125/mes`)**, que baja el costo por crédito en casi un **40%**, manteniendo **Higgsfield API por recarga según demanda**.
* Así, un paquete de **10 videos de 15–20 segundos** que ustedes venden en **`$1.800.000 COP` (`~$430 USD`)** les costará en total entre **`$25 y $38 USD` (`$105.000 a $160.000 COP`)**, asegurando un **margen bruto real superior al 90%**.
