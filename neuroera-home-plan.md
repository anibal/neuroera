# Neuroera — Plan del Home Page (placeholder único)

Objetivo: una sola página estática que sostenga la presencia digital de Neuroera mientras se construye el sitio completo. Debe lucir intencional, comunicar la propuesta de valor a tres audiencias (personas, educación, organizaciones) y canalizar todos los leads a WhatsApp / Instagram / Facebook.

---

## 1\. Alcance

### Dentro del alcance (v1 — esta entrega)

- **Una sola página HTML** (`index.html`) con todas las secciones en scroll vertical.  
- **Dos páginas legales mínimas** (`aviso-legal.html`, `privacidad.html`) enlazadas desde el footer.  
- **404 estática** (`404.html`).  
- CSS propio, sin build process, sin frameworks con compilación.  
- JavaScript vanilla únicamente para: toggle de menú móvil y scroll suave a anclas.  
- Imágenes mínimas, generadas con IA como placeholders.  
- Despliegue en Cloudflare Pages como sitio estático.

### Fuera del alcance (NO se construye ahora)

Estos elementos se mencionan/insinúan en la página pero **no tienen sub-páginas propias** todavía. Los CTAs apuntan a WhatsApp con mensaje pre-cargado en lugar de a páginas de detalle.

- ❌ Sub-página dedicada a **Personas / Pacientes**  
- ❌ Sub-página dedicada a **Educación / Colegios**  
- ❌ Sub-página dedicada a **Organizaciones / Empresas**  
- ❌ Páginas individuales de cada terapia (Neurofeedback, rTMS, qEEG, Neuronutrición, Psicoterapia, Ozonoterapia, etc.)  
- ❌ Página de **Método / Metodología** detallada  
- ❌ Página de **Investigaciones**  
- ❌ Página de **Testimonios**  
- ❌ Sección **Tests Online**  
- ❌ Blog / Cultura Neuroera / contenido editorial  
- ❌ Área privada de consultantes  
- ❌ FAQ extensa (solo 4-6 preguntas embebidas si caben)  
- ❌ Formulario de contacto, sistema de citas, pasarela de pago  
- ❌ Toggle de idioma ES/EN (solo español)  
- ❌ CMS, login, base de datos  
- ❌ Cookie banner complejo (solo aviso si se usa analítica)

### Convención de "huecos" en navegación

El menú superior listará las anclas internas. Cuando en el futuro existan las sub-páginas, los items del menú se convertirán en links a páginas reales. **No habrá items rotos** en v1: lo que no existe, no se enlaza.

---

## 2\. Stack técnico

| Capa | Decisión |
| :---- | :---- |
| HTML | HTML5 semántico, una sola página |
| CSS | CSS vanilla con custom properties (design tokens). Mobile-first. Sin Tailwind, sin Sass, sin PostCSS. |
| JS | Vanilla JS en un solo archivo `main.js`, ≤ 2KB. Solo nav móvil y smooth scroll. |
| Fuentes | Máximo una familia desde Google Fonts vía `<link>` en `<head>` (sugerencia: Inter o similar). Fallback a `system-ui`. |
| Iconos | SVG inline o sprite. Sin Font Awesome. |
| Imágenes | Formato AVIF con fallback WebP. Lazy-load nativo (`loading="lazy"`). Máximo 5 imágenes en total. |
| Hosting | Cloudflare Pages (gratuito), conectado a repo Git. |
| Dominio | `neuroera.net` — cutover al final, primero staging en subdominio. |

**Restricción fuerte**: sin paso de build. Si abro `index.html` con doble click en el navegador local, debe funcionar idéntico que en producción.

---

## 3\. Estructura del Home (orden vertical)

┌──────────────────────────────────────────┐

│  1\. Header / Nav (sticky)                │

├──────────────────────────────────────────┤

│  2\. Hero                                 │

├──────────────────────────────────────────┤

│  3\. Bifurcación de audiencias (3 cards)  │

├──────────────────────────────────────────┤

│  4\. Nuestra Ciencia es el Eje            │

│     (Medimos / Entrenamos / Sostenemos)  │

├──────────────────────────────────────────┤

│  5\. Método de dos fases                  │

│     (Neuro-Auditoría → Neurocoaching)    │

├──────────────────────────────────────────┤

│  6\. Áreas de aplicación (lista agrupada) │

├──────────────────────────────────────────┤

│  7\. Quiénes somos (breve)                │

├──────────────────────────────────────────┤

│  8\. Sedes \+ Contacto                     │

├──────────────────────────────────────────┤

│  9\. Footer                               │

└──────────────────────────────────────────┘

### 3.1 Header / Nav

- Logo Neuroera (izquierda).  
- Menú (derecha): `Personas` · `Colegios` · `Empresas` · `Método` · `Contacto`.  
- Todos los items son anclas (`#personas`, `#educacion`, `#organizaciones`, `#metodo`, `#contacto`).  
- Botón CTA primario a WhatsApp (visible desde desktop).  
- Hamburger en móvil.  
- Sticky al hacer scroll.

### 3.2 Hero

- **Titular**: `Ciencia para una vida extraordinaria.`  
- **Sub-titular**: `Aplicamos las neurociencias para entender, sanar y potenciar las inteligencias múltiples en personas, colegios y organizaciones.`  
- **CTA primario**: `Hablar con Neuroera` → WhatsApp.  
- **CTA secundario**: `Conocer el método` → scroll a `#metodo`.  
- Imagen / visual de fondo: una sola pieza de IA — abstracta, neurodiseño suave, paleta oscura con acentos cian/violeta. No fotografía de personas.

### 3.3 Bifurcación de audiencias (la sección clave)

Tres tarjetas en grid (3 columnas desktop, 1 columna móvil). Cada tarjeta lleva:

- Etiqueta de audiencia (mayúsculas pequeñas)  
- Titular corto  
- Una oración de propuesta de valor  
- CTA → WhatsApp con mensaje pre-cargado específico

| Tarjeta | Titular | Sub | CTA → WhatsApp (mensaje pre-cargado) |
| :---- | :---- | :---- | :---- |
| **PERSONAS** | Recupera tu equilibrio / Inicia tu evolución / Transforma tu realidad | Evaluación objetiva con mapeo cerebral, pruebas neuropsicológicas y un plan de neurocoaching diseñado a tu medida. | `Hola, soy paciente o familiar y me gustaría conocer más sobre la evaluación de Neuroera.` |
| **COLEGIOS**  | Mapeo cerebral  | Programas para colegios que entienden cómo aprende cada estudiante, con respaldo académico. | `Hola, represento a una institución educativa y quisiera conocer los programas de Neuroera.` |
| **ORGANIZACIONES** | Capital humano medido con inteligencia biológica | Auditoría neurocognitiva para líderes y equipos: menos burnout, mejor toma de decisiones. | `Hola, represento a una empresa y quisiera conocer Neuroera para mi equipo.` |

### 3.4 Nuestra Ciencia es el Eje

Tres bloques horizontales con icono SVG \+ título \+ 2 líneas de descripción:

- **Medimos** — qEEG, mapeo cerebral sLORETA, pruebas neurocognitivas (BASC-3, EFECO), perfil de microbiota y analítica avanzada.  
- **Entrenamos** — Neurofeedback, Estimulación Magnética Transcraneal (rTMS), Realidad Virtual, psicoterapia y neuropsicología.  
- **Sostenemos** — Eje intestino-cerebro, nutrición funcional, higiene del sueño y hábitos neuro-saludables.

Una oración de cierre: *"Una sola ciencia, tres aplicaciones, resultados medibles."*

### 3.5 Método de dos fases

Dos columnas / dos pasos visuales:

1. **Neuro-Auditoría Clínica** — Evaluación objetiva en tres dimensiones (neurofisiológica, neurocognitiva, bioquímica). Salimos del ensayo y error.  
2. **Neurocoaching de Precisión** — Intervención diseñada únicamente sobre lo que arrojó la auditoría. Datos accionables, acompañamiento estratégico.

≤ 60 palabras por fase. CTA al final: `Iniciar mi proceso` → WhatsApp Personas.

### 3.6 Áreas de aplicación

Lista **agrupada** (no la lista cruda de 17 condiciones del sitio viejo). Cuatro categorías con 3-4 ejemplos cada una:

- **Neurodesarrollo y aprendizaje**: TDAH, espectro del autismo, dislexia, alteraciones conductuales.  
- **Salud mental**: ansiedad, depresión, TOC, insomnio, trauma.  
- **Rendimiento y alto desempeño**: foco ejecutivo, manejo del estrés, rendimiento deportivo y artístico.  
- **Neurología funcional**: migrañas, fibromialgia, fatiga crónica, memoria, secuelas de lesiones cerebrales.

### 3.7 Quiénes somos

Párrafo único, ≤ 80 palabras. Énfasis: pioneros en Venezuela en neurociencias aplicadas, atendemos individuos **y** organizaciones, vinculación con instituciones académicas. Sin fotos del equipo en v1 (se incorporan cuando existan).

### 3.8 Sedes \+ Contacto

Dos tarjetas lado a lado:

- **Sede Caracas** — Urb. Macaracuay, Avenida Principal, Torre California, Ofic 3i. Caracas, Venezuela. Teléfono. Botón "Cómo llegar" → Google Maps.  
- **Sede Lechería** — Av. Fermín Toro, Conjunto Residencial Villa Mercedes, Casa Nro 1\. Lechería, Anzoátegui, Venezuela. Teléfono. Botón "Cómo llegar" → Google Maps.

Debajo: fila de tres botones grandes con iconos: **WhatsApp · Instagram · Facebook**.

### 3.9 Footer

- Logo \+ tagline corta.  
- Links: Aviso legal · Política de privacidad · Contacto (ancla).  
- Redes sociales (iconos).  
- Copyright: `© 2026 Neuroera. Caracas y Lechería, Venezuela.`

---

## 4\. Lead mechanism — solo deep links

**No hay formulario, no hay booking.** Toda conversión sale a un canal de mensajería ya conocido. Esto simplifica legales, evita backend y respeta el comportamiento real del paciente venezolano.

### Plantilla de URLs

WhatsApp:   https://wa.me/{NUMERO\_E164}?text={MENSAJE\_URL\_ENCODED}

Instagram:  https://instagram.com/institutoneuroera

Facebook:   https://facebook.com/neovital

**TODO de contenido**: el sitio actual muestra `+58 (412) 234 45 56`, que parece un placeholder. Necesito el número real (formato E.164, ej. `+584121234567`) antes de Phase 3\.

### Mensajes pre-cargados por CTA

Cada botón de la página lleva su propio mensaje, codificado en URL:

- Hero → `Hola%2C%20me%20gustar%C3%ADa%20conocer%20a%20Neuroera.`  
- Personas → `Hola%2C%20soy%20paciente%20o%20familiar...`  
- Educación → `Hola%2C%20represento%20a%20una%20instituci%C3%B3n%20educativa...`  
- Organizaciones → `Hola%2C%20represento%20a%20una%20empresa...`  
- Método → `Hola%2C%20quiero%20iniciar%20mi%20Neuro-Auditor%C3%ADa...`

Esto permite saber por dónde entró el lead sin analítica avanzada.

---

## 5\. Imágenes (mínimas, IA)

Total: **máximo 5 imágenes** generadas con IA.

1. **Hero background** — abstracta, neurodiseño oscuro.  
2. **Personas** — figura humana minimalista, tono cálido.  
3. **Educación** — escena de aula moderna, sin caras reconocibles.  
4. **Organizaciones** — escena de reunión corporativa, sin caras reconocibles.  
5. **OG image** — para compartir en redes (1200×630).

Todas exportadas en AVIF (con fallback WebP) y a tres tamaños (móvil / tablet / desktop) usando `<picture>` o `srcset`. Peso objetivo: ≤ 80KB cada una en su tamaño máximo.

Iconos (Medimos / Entrenamos / Sostenemos, WhatsApp, IG, FB, ubicación, menú) → SVG inline, no imágenes.

---

## 6\. SEO, performance y accesibilidad — mínimos

### SEO

- `<title>`: `Neuroera — Neurociencia aplicada para personas, colegios y organizaciones`  
- `meta description`: ≤ 155 caracteres, basada en el sub-titular del hero.  
- Open Graph \+ Twitter Card con imagen 1200×630.  
- Schema.org JSON-LD: `MedicalBusiness` \+ `Organization` con ambas sedes.  
- `sitemap.xml` y `robots.txt`.  
- Redirecciones 301 desde las URLs viejas de Wix más visitadas (verificar en Google Search Console antes del cutover).  
- `lang="es-VE"` en `<html>`.

### Performance (presupuesto)

- HTML ≤ 30KB · CSS ≤ 25KB · JS ≤ 3KB · cada imagen ≤ 80KB.  
- LCP \< 2.0s en 4G móvil.  
- 0 dependencias de terceros bloqueantes.  
- Fuentes con `font-display: swap`.

### Accesibilidad (WCAG AA básico)

- Contraste mínimo 4.5:1 (cuidado con paleta oscura).  
- Todas las imágenes con `alt`.  
- Foco visible en todos los elementos interactivos.  
- `prefers-reduced-motion` respetado en cualquier animación.  
- Navegación por teclado funcional.  
- Estructura de encabezados correcta (`h1` único en hero).

---

## 7\. Legal — mínimo viable Venezuela

Dos páginas HTML planas, sin estilo elaborado, enlazadas desde el footer:

- **`aviso-legal.html`** — Titular del sitio, RIF (TODO), domicilio fiscal, naturaleza del servicio, disclaimer de que el contenido no sustituye consulta médica presencial.  
- **`privacidad.html`** — Qué datos se recolectan (ninguno si no hay form ni analítica; o el mínimo si se usa Plausible/GA). Que las conversaciones por WhatsApp se rigen por los términos de Meta. Contacto para ejercer derechos. Referencia a la Ley Orgánica de Protección de Datos / LOPCYMAT en lo aplicable.

No es necesario abogado para v1 — son plantillas estándar de práctica médica. Cuando exista formulario o booking, se revisa con asesor legal.

### Cookies

Sin analítica → sin banner. Si en algún momento se agrega Plausible (sin cookies) → tampoco hace falta banner. Si se agrega GA4 → entonces sí, banner mínimo.

---

## 8\. Estructura de archivos

/

├── index.html

├── aviso-legal.html

├── privacidad.html

├── 404.html

├── robots.txt

├── sitemap.xml

├── \_headers                  \# Cloudflare Pages (security headers)

├── \_redirects                \# Cloudflare Pages (301 desde URLs Wix viejas)

└── assets/

    ├── css/

    │   └── styles.css

    ├── js/

    │   └── main.js

    ├── img/

    │   ├── hero.avif

    │   ├── hero.webp

    │   ├── personas.avif

    │   ├── educacion.avif

    │   ├── organizaciones.avif

    │   ├── og.jpg            \# 1200×630 para compartir

    │   └── favicon.svg

    └── icons/

        └── sprite.svg        \# iconos SVG agrupados

Total estimado del sitio: \< 500KB.

---

## 9\. Despliegue en Cloudflare Pages

1. Repo Git con la estructura anterior.  
2. Conectar repo a Cloudflare Pages.  
3. **Build command**: vacío. **Output directory**: `/` (raíz).  
4. Branch `main` → production, branch `staging` → preview.  
5. Headers de seguridad vía `_headers`:  
   - `X-Content-Type-Options: nosniff`  
   - `Referrer-Policy: strict-origin-when-cross-origin`  
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`  
   - `Content-Security-Policy` permisiva pero sin `unsafe-eval`.  
6. Conectar dominio `neuroera.net` al final (DNS en Cloudflare).

---

## 10\. Definición de "hecho" (Definition of Done)

La v1 está terminada cuando:

- [ ] Las 9 secciones del Home están construidas con el copy final lockeado.  
- [ ] Las 3 tarjetas de audiencia funcionan con sus mensajes WhatsApp pre-cargados.  
- [ ] WhatsApp, Instagram y Facebook abren correctamente en móvil y desktop.  
- [ ] Las 2 sedes muestran enlace "Cómo llegar" a Google Maps.  
- [ ] `aviso-legal.html` y `privacidad.html` existen y están enlazadas.  
- [ ] `404.html` existe y devuelve al home.  
- [ ] El sitio carga con LCP \< 2s en simulación móvil 4G (Lighthouse).  
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90\.  
- [ ] El sitio se ve correctamente en: iPhone SE (375px), iPhone 14 Pro (393px), iPad (768px), Desktop (1280px+).  
- [ ] Funciona sin JavaScript habilitado (degradación elegante: menú móvil siempre abierto, scroll instantáneo).  
- [ ] Desplegado en `staging.neuroera.net` (o subdominio equivalente) para revisión.  
- [ ] Aprobación de copy y look & feel por parte de Neuroera.  
- [ ] Cutover a `neuroera.net` con redirecciones desde URLs Wix relevantes.

---

## 11\. Pendientes de contenido / TODOs para Neuroera

Antes de Phase 3 necesito de tu lado:

1. **Número de WhatsApp real** en formato E.164 (`+58412XXXXXXX`).  
2. **Confirmar handles** de Instagram (`@institutoneuroera`) y Facebook (`neovital` — ¿sigue siendo este?).  
3. **Logo** vectorial (SVG preferible). Si no existe, lo generamos provisional con IA.  
4. **RIF** y domicilio fiscal para el aviso legal.  
5. **Confirmar direcciones** exactas de ambas sedes (la dirección actual de Wix puede estar desactualizada).  
6. **Aprobación del copy** de las tres tarjetas de audiencia (son el corazón de la página).  
7. **Template de referencia** que mencionaste, para adaptar el look & feel visual.

---

## 12\. Roadmap inmediato

| Fase | Entregable | Bloqueador |
| :---- | :---- | :---- |
| **Ya hecho** | Reconceptualización \+ este plan | — |
| **Phase 1** | Copy final en doc Markdown | Aprobación de los 3 mensajes de audiencia |
| **Phase 2** | Template de referencia \+ wireframe | Template que vas a enviar |
| **Phase 3** | Build del Home \+ 2 legales \+ 404 | TODOs de contenido (sección 11\) |
| **Phase 4** | Deploy a staging \+ revisión | — |
| **Phase 5** | Cutover a producción | Confirmación final |

La v1 puede estar en producción en **5-7 días hábiles** desde que llegue el template y el copy aprobado.  
