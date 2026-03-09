# CLAUDE.md — RiEko v3

Linee guida per Claude Code su questo progetto. Leggere sempre prima di modificare.

---

## Stack

- **React 19** + **Vite 7** + **React Router DOM 7**
- **Tailwind CSS 4** (importato via `@tailwindcss/vite`, usato raramente — il progetto usa principalmente classi custom in `index.css`)
- **Geist Variable** come font (via `@fontsource-variable/geist`)
- **Lucide React** disponibile per icone
- Niente TypeScript — solo `.jsx`

---

## Struttura file

```
src/
├── App.jsx          # Tutti i componenti della homepage + Nav + Footer + routing
├── index.css        # Tutto lo stile custom (NO Tailwind utility classes nel CSS)
├── main.jsx         # Entry point con BrowserRouter
├── assets/          # SVG, PNG, JPG — importati direttamente nei componenti
└── pages/
    └── ChiSiamo.jsx # Pagina dedicata /chi-siamo
```

- **Nuove pagine** vanno in `src/pages/NomePagina.jsx`
- **Nuove route** vanno aggiunte in `AnimatedRoutes` dentro `App.jsx`
- **Nuovi link nav** vanno nell'array `links` dentro il componente `Nav`

---

## Design system

### Palette colori

| Token         | Hex       | Uso                                      |
|---------------|-----------|------------------------------------------|
| Cream         | `#F7F4EE` | Background principale, testo su scuro    |
| Dark          | `#111`    | Testo principale, sfondi scuri           |
| Deep green    | `#0D1A0C` | Hero background, mobile menu             |
| Forest        | `#192B18` | CTA finale, accenti scuri                |
| Green dark    | `#4A7A28` | Label verde, hover accenti               |
| Green medium  | `#3A6122` | Variante card                            |
| Lime          | `#C5E07A` | Accento principale, CTA primaria         |
| Sand          | `#EEE9DF` | Sezioni alternate chiare                 |
| Blue InSink   | `#005191` | Esclusivamente card prodotto InSinkErator|

### Tipografia fluida

Usare sempre le variabili CSS definite in `:root`, non valori fissi:

```css
--fs-4   /* H1 display: clamp(60px … 150px) */
--fs-6   /* H2 sezione: clamp(40px … 70px) */
--fs-7   /* H2 XL: clamp(34px … 56px) */
--fs-8   /* H2 standard: clamp(28px … 48px) */
--fs-9   /* Subheading: clamp(22px … 40px) */
--fs-10  /* Body L */
--fs-11  /* Body M */
--fs-12  /* Body S */
--fs-13  /* Caption / label */
```

Per font-size inline usa sempre `clamp()` se non c'è già la variabile adatta.

### Container

Usare sempre la classe `.c` per centrare il contenuto:
- max-width: 1080px
- padding: 16px mobile → 40px tablet → 80px desktop

### Spaziatura sezioni

- `.s` → padding verticale fluido (72/96/120px)
- `.s-sm` → padding verticale ridotto (48/64/80px)

---

## Componenti CSS riutilizzabili

| Classe          | Descrizione                                      |
|-----------------|--------------------------------------------------|
| `.btn`          | Base button                                      |
| `.btn-dark`     | Sfondo scuro, hover verde                        |
| `.btn-lime`     | Sfondo lime, hover verde scuro                   |
| `.btn-ghost`    | Trasparente con bordo, su sfondi scuri           |
| `.label`        | Tag uppercase sopra i titoli                     |
| `.label-green`  | Label su sfondi chiari                           |
| `.label-lime`   | Label su sfondi scuri                            |
| `.h2`           | H2 standard                                      |
| `.h2-xl`        | H2 grande                                        |
| `.body-lg`      | Paragrafo grande                                 |
| `.body-md`      | Paragrafo medio                                  |
| `.two-col`      | Grid 1→2 colonne a 768px                         |
| `.pillars`      | Grid 1→3 colonne per le card pilastro            |
| `.pillar`       | Card pilastro con hover animato                  |
| `.card`         | Card semplice su sfondo sand                     |
| `.r` + `.on`    | Scroll reveal (opacity + translateY)             |
| `.r.d1/.d2/.d3` | Delay staggered per reveal (0.07/0.14/0.21s)    |
| `.page-enter`   | Animazione entrata pagina                        |

---

## Scroll reveal

Ogni elemento che deve animarsi allo scroll riceve la classe `.r`.
Il hook `useReveal()` (definito sia in `App.jsx` che in ogni pagina) usa `IntersectionObserver` con `threshold: 0.12`.

```jsx
// Pattern corretto per elementi staggered
<div className="r">primo</div>
<div className="r d1">secondo</div>
<div className="r d2">terzo</div>
```

**Importante:** `useReveal()` va chiamato dentro ogni pagina/componente che monta nuovi `.r`.

---

## Routing e navigazione

- Router: `BrowserRouter` in `main.jsx`
- Link interni: sempre `<Link to="...">` da `react-router-dom`
- Anchor hash: `<a href="#id-sezione">` per scroll interno alla homepage
- Nuove pagine: aggiungere `<Route>` in `AnimatedRoutes` e link in `Nav`

### Nav links — struttura attuale

```js
{ href: '/chi-siamo', label: 'Chi siamo', internal: true },
{ href: '#prodotti',   label: 'Prodotti' },
{ href: '#partnership', label: 'Partnership' },
{ href: '#assistenza', label: 'Assistenza' },
```

`internal: true` attiva il comportamento `<Link>` e l'highlight active state.

---

## Regole di stile

1. **Non usare Tailwind utility classes** nel markup — tutto lo stile è in `index.css` con classi semantiche o inline style per valori unici.
2. **Inline style** solo per valori che variano per istanza (colori specifici, dimensioni uniche). Stili riutilizzabili vanno in `index.css`.
3. **Mai usare px fissi** per font-size — sempre `clamp()` o variabili `--fs-*`.
4. **Responsive** sempre mobile-first: `grid-template-columns: 1fr` di default, poi `@media (min-width: 768px)` per espandere.
5. **min-height: 44px** su tutti gli elementi interattivi (accessibilità touch).
6. **Transizioni**: usare `cubic-bezier(.22,1,.36,1)` per animazioni fluide, `.25s ease` per hover semplici.

---

## Struttura sezione standard

```jsx
<section id="id-sezione" className="s" style={{ background: '#F7F4EE' }}>
  <div className="c">
    <span className="label label-green r">Label</span>
    <h2 className="h2 r d1" style={{ maxWidth: '22ch', marginBottom: 48 }}>
      Titolo della sezione
    </h2>
    {/* contenuto con classi .r e .d1/.d2 per stagger */}
  </div>
</section>
```

---

## Asset

- Logo SVG inline in `App.jsx` (componente `<Logo>`) — non è un file separato
- Immagini in `src/assets/` — importate con `import nome from './assets/file.ext'`
- Hero image caricata via CSS (`.hero-img` in `index.css`) da `/public/hero.png`
- **Non rinominare o spostare asset esistenti** senza aggiornare tutti i riferimenti

---

## Comandi

```bash
npm run dev      # dev server su localhost:5173
npm run build    # build produzione in /dist
npm run preview  # preview della build
```
