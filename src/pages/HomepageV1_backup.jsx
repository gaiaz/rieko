import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import ChiSiamo from './pages/ChiSiamo.jsx'
import bgPng from './assets/bg.png'
import iconDistribuzione from './assets/distribuzione.svg'
import iconComunicazione from './assets/comunicazione.svg'
import iconSupporto from './assets/supporto.svg'
import iconRifiuti from './assets/rifiuti.svg'
import iconImpronta from './assets/impronta.svg'
import iconEconomiaCircolare from './assets/economia ciroclare.svg'
import logoInsinkerator from './assets/logoinsinkerator.svg'
import imgInsinkerator from './assets/insinkeratorimage.jpg'
import imgInsinkerator2 from './assets/insinkeratorimage2.jpg'
import imgInsinkerator3 from './assets/insinkeratorimage3.jpg'

/* ── Logo ─────────────────────────────────────────────────── */
function Logo({ color = '#F7F4EE', height = 28 }) {
  return (
    <svg height={height} viewBox="0 0 104 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <g clipPath="url(#lc)">
        <path d="M7.30535 7.2415C10.4741 9.04591 12.093 12.2246 11.0275 15.8951L21.1935 6.44016L22.1306 6.53682C23.4569 7.91815 24.9295 9.15098 26.3261 10.4511C27.2384 11.3 32.8789 16.6194 33.1356 17.163C33.8837 18.7488 31.957 19.4283 31.013 18.1268V26.7804L33.1839 27.013L33.5 27.691C26.8382 38.9 9.94414 38.2345 1.86907 28.8664L1.71173 28.0315C3.28369 26.0674 5.79964 24.9774 8.11686 24.2503L8.13066 18.2669C1.71587 17.8032 -0.151425 11.202 0.689067 5.63602C0.869862 4.97477 2.71784 5.56177 3.25609 5.68785C4.41676 5.95823 6.27164 6.6531 7.30397 7.2415H7.30535ZM2.20582 7.2415V10.3824C2.20582 12.6491 5.06404 17.0985 7.71663 16.1081L5.1013 11.2902C7.07073 12.0089 8.13894 13.9422 9.16575 15.6135C11.6224 10.9792 5.97354 7.82009 2.20582 7.2415ZM28.9456 26.7132V16.1053L21.4502 8.78393L13.8568 16.3182L14.0527 23.3649C19.1909 23.6928 23.784 27.352 28.9456 26.7132ZM11.8542 23.5723V18.2683L11.0648 18.9366L9.92482 18.8259V23.711L11.8542 23.5709V23.5723ZM23.6515 27.9586C16.8585 25.5056 10.2588 23.3972 3.86196 28.3887C10.9751 35.3668 23.2388 36.6403 30.3188 28.9477C30.3161 28.6815 29.1085 28.9099 28.9359 28.9393C26.166 29.4086 22.9269 31.0253 19.8506 31.6039C18.5119 31.856 17.1566 32.1558 15.7779 32.0956L15.2148 31.5408L15.4439 30.909L24.6686 28.456C24.4878 28.2864 23.8888 28.0455 23.6501 27.9586H23.6515Z" fill="#022A0C"/>
        <path d="M26.3261 10.4511C24.9281 9.15101 23.4569 7.91818 22.1306 6.53685L21.1935 6.44019L11.0275 15.8951C12.0916 12.2261 10.4741 9.04734 7.30536 7.24152C10.5514 -4.07248 26.9762 -1.46253 26.3261 10.4525V10.4511Z" fill="#C5E77B"/>
        <path d="M28.9456 26.7132C23.784 27.352 19.1909 23.6928 14.0528 23.3649L13.8568 16.3182L21.4502 8.78394L28.9456 16.1053V26.7132ZM23.5245 21.7118L23.6529 16.8576L18.5933 16.9276L18.6651 21.4905C19.1371 22.1867 22.6385 21.9332 23.5259 21.7118H23.5245Z" fill="#C4E77B"/>
        <path d="M23.6515 27.9587C23.8916 28.0455 24.4892 28.2865 24.67 28.456L15.4453 30.9091L15.2162 31.5409L15.7793 32.0957C17.158 32.1545 18.5119 31.8547 19.852 31.6039C22.9283 31.0253 26.166 29.4087 28.9373 28.9393C29.1098 28.9099 30.3174 28.6816 30.3202 28.9478C23.2402 36.6417 10.9751 35.3683 3.86334 28.3888C10.2602 23.3972 16.8599 25.5056 23.6529 27.9587H23.6515Z" fill="#5D9B33"/>
        <path d="M2.20581 7.24146C5.97491 7.81864 11.6224 10.9778 9.16575 15.6135C8.13756 13.9422 7.07073 12.0089 5.1013 11.2902L7.71662 16.108C5.06404 17.0971 2.20581 12.6477 2.20581 10.3824V7.24146Z" fill="#5D9B34"/>
        <path d="M23.5245 21.7117C22.6385 21.9316 19.1371 22.1852 18.6637 21.4903L18.592 16.9275L23.6515 16.8574L23.5231 21.7117H23.5245Z" fill="#022A0C"/>
      </g>
      <path d="M41.125 26V8.54545H48.6591C49.9545 8.54545 51.0881 8.78125 52.0597 9.25284C53.0313 9.72443 53.7869 10.4034 54.3267 11.2898C54.8665 12.1761 55.1364 13.2386 55.1364 14.4773C55.1364 15.7273 54.858 16.7812 54.3011 17.6392C53.75 18.4972 52.9744 19.1449 51.9744 19.5824C50.9801 20.0199 49.8182 20.2386 48.4886 20.2386H43.9886V16.5568H47.5341C48.0909 16.5568 48.5653 16.4886 48.9574 16.3523C49.3551 16.2102 49.6591 15.9858 49.8693 15.679C50.0852 15.3722 50.1932 14.9716 50.1932 14.4773C50.1932 13.9773 50.0852 13.571 49.8693 13.2585C49.6591 12.9403 49.3551 12.7074 48.9574 12.5597C48.5653 12.4062 48.0909 12.3295 47.5341 12.3295H45.8636V26H41.125ZM51.3523 17.9886L55.7159 26H50.5682L46.3068 17.9886H51.3523ZM56.2828 26V12.9091H60.9873V26H56.2828ZM58.6351 11.5455C57.9987 11.5455 57.4532 11.3352 56.9987 10.9148C56.5442 10.4943 56.3169 9.98864 56.3169 9.39773C56.3169 8.80682 56.5442 8.30114 56.9987 7.88068C57.4532 7.46023 57.9987 7.25 58.6351 7.25C59.2771 7.25 59.8226 7.46023 60.2714 7.88068C60.726 8.30114 60.9532 8.80682 60.9532 9.39773C60.9532 9.98864 60.726 10.4943 60.2714 10.9148C59.8226 11.3352 59.2771 11.5455 58.6351 11.5455ZM62.3745 26V8.54545H74.9541V12.3636H67.1132V15.3636H74.3063V19.1818H67.1132V22.1818H74.92V26H62.3745ZM80.658 22.8977L80.6921 17.3068H81.3058L84.4762 12.9091H89.7603L84.4421 19.7614H83.1126L80.658 22.8977ZM76.4308 26V8.54545H81.1353V26H76.4308ZM84.5103 26L81.5103 20.8182L84.5785 17.4773L89.8967 26H84.5103ZM95.8116 26.2386C94.3911 26.2386 93.1752 25.9574 92.1638 25.3949C91.1525 24.8267 90.3769 24.0369 89.8371 23.0256C89.2974 22.0085 89.0275 20.8295 89.0275 19.4886C89.0275 18.1477 89.2974 16.9716 89.8371 15.9602C90.3769 14.9432 91.1525 14.1534 92.1638 13.5909C93.1752 13.0227 94.3911 12.7386 95.8116 12.7386C97.232 12.7386 98.4479 13.0227 99.4593 13.5909C100.471 14.1534 101.246 14.9432 101.786 15.9602C102.326 16.9716 102.596 18.1477 102.596 19.4886C102.596 20.8295 102.326 22.0085 101.786 23.0256C101.246 24.0369 100.471 24.8267 99.4593 25.3949C98.4479 25.9574 97.232 26.2386 95.8116 26.2386ZM95.8457 22.7614C96.2434 22.7614 96.5871 22.6278 96.8769 22.3608C97.1667 22.0937 97.3911 21.7131 97.5502 21.2188C97.7093 20.7244 97.7888 20.1364 97.7888 19.4545C97.7888 18.767 97.7093 18.179 97.5502 17.6903C97.3911 17.196 97.1667 16.8153 96.8769 16.5483C96.5871 16.2812 96.2434 16.1477 95.8457 16.1477C95.4252 16.1477 95.0644 16.2812 94.7633 16.5483C94.4621 16.8153 94.232 17.196 94.0729 17.6903C93.9138 18.179 93.8343 18.767 93.8343 19.4545C93.8343 20.1364 93.9138 20.7244 94.0729 21.2188C94.232 21.7131 94.4621 22.0937 94.7633 22.3608C95.0644 22.6278 95.4252 22.7614 95.8457 22.7614Z" fill={color} style={{ transition: 'fill .3s ease' }}/>
      <defs>
        <clipPath id="lc"><rect width="33" height="36" fill="white"/></clipPath>
      </defs>
    </svg>
  )
}

/* ── Scroll reveal ──────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.r')
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ── Nav ──────────────────────────────────────────────────── */
function Nav() {
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Blocca scroll quando menu aperto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '/chi-siamo', label: 'Chi siamo', internal: true },
    { href: '#prodotti', label: 'Prodotti' },
    { href: '#partnership', label: 'Partnership' },
    { href: '#assistenza', label: 'Assistenza' },
  ]

  return (
    <>
    <nav className={`top${solid ? ' scrolled' : ''}`}>
      <div className="c">
        <div className="inner">
          <Link to="/" style={{ lineHeight: 0 }}>
            <Logo color={menuOpen ? '#F7F4EE' : (solid ? '#111' : '#F7F4EE')} height={36} />
          </Link>

          {/* pill-nav desktop */}
          <div className="nav-links" style={{
            alignItems: 'center', gap: 4,
            background: solid ? 'rgba(17,17,17,0.06)' : 'rgba(247,244,238,0.1)',
            borderRadius: 100, padding: '4px 6px',
            backdropFilter: 'blur(12px)',
            border: '1px solid',
            borderColor: solid ? 'rgba(17,17,17,0.08)' : 'rgba(247,244,238,0.15)',
          }}>
            {links.map(l => {
              const isCurrent = l.internal && location.pathname === l.href
              const isHovered = active === l.href
              const style = {
                fontSize: 13, fontWeight: isCurrent ? 700 : 500,
                padding: '7px 16px', borderRadius: 100, transition: 'all .2s',
                position: 'relative',
                background: isCurrent
                  ? (solid ? 'rgba(58,106,26,0.10)' : 'rgba(197,224,122,0.15)')
                  : isHovered
                    ? (solid ? 'rgba(17,17,17,0.08)' : 'rgba(247,244,238,0.15)')
                    : 'transparent',
                color: isCurrent
                  ? (solid ? '#3A6A1A' : '#C5E07A')
                  : solid ? (isHovered ? '#111' : 'rgba(17,17,17,0.55)') : (isHovered ? '#F7F4EE' : 'rgba(247,244,238,0.6)'),
              }
              return l.internal
                ? <Link key={l.href} to={l.href} onMouseEnter={() => setActive(l.href)} onMouseLeave={() => setActive(null)} style={style}>{l.label}</Link>
                : <a key={l.href} href={l.href} onMouseEnter={() => setActive(l.href)} onMouseLeave={() => setActive(null)} style={style}>{l.label}</a>
            })}
          </div>

          {/* CTA desktop */}
          <a href="#contatti" className={`btn nav-cta-desktop ${solid ? 'btn-dark' : 'btn-ghost'}`}
            style={{ fontSize: 13, padding: '10px 22px' }}>
            Contattaci
          </a>

          {/* Hamburger mobile */}
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              flexDirection: 'column', gap: 5,
              padding: 8, zIndex: 201,
            }}>
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M2 2l18 18M20 2L2 20" stroke="#F7F4EE" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                <path d="M1 1h20M1 9h20M1 17h20" stroke={solid ? '#111' : '#F7F4EE'} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>

    {/* Overlay menu mobile */}
    <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 48 }}>
        {links.map(l => {
          const style = { fontSize: 'clamp(28px, 8vw, 40px)', fontWeight: 800, color: '#F7F4EE', letterSpacing: '-.02em', padding: '8px 0', borderBottom: '1px solid rgba(247,244,238,.08)' }
          return l.internal
            ? <Link key={l.href} to={l.href} onClick={() => setMenuOpen(false)} style={style}>{l.label}</Link>
            : <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={style}>{l.label}</a>
        })}
      </nav>
      <a href="#contatti" className="btn btn-lime" onClick={() => setMenuOpen(false)}
        style={{ fontSize: 15, padding: '14px 32px', alignSelf: 'flex-start' }}>
        Contattaci →
      </a>
    </div>
    </>
  )
}

/* ── Hero ─────────────────────────────────────────────────── */
// tonalità di verde flat, niente glass
const stats = [
  { value: '–70%', unit: '',    label: 'odori in cucina',        sub: 'Meno accumulo di rifiuti organici nel bidone',      bg: '#2D4A1E', color: '#C5E07A', textMuted: 'rgba(197,224,122,0.55)', rot: -7, x: -96 },
  { value: '−30%', unit: '',    label: 'rifiuti organici',       sub: 'Di umido in meno rispetto alla raccolta tradizionale', bg: '#4A7A2A', color: '#F7F4EE', textMuted: 'rgba(247,244,238,0.6)',  rot: 0,  x: 0   },
  { value: '5 sec', unit: '',   label: 'per smaltire gli scarti', sub: 'Gli avanzi vengono immediatamente smaltiti',        bg: '#3A6122', color: '#C5E07A', textMuted: 'rgba(197,224,122,0.55)', rot: 7,  x: 96  },
]

function easeOut(t) { return 1 - Math.pow(1 - t, 3) }

function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth)
  useEffect(() => {
    const fn = () => setW(window.innerWidth)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return w
}

function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [entryP, setEntryP] = useState(0)
  const isMobile = useWindowWidth() < 768

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Sincronizzato con delay (.85s) e durata (1.1s) di .hc in CSS
  useEffect(() => {
    const DELAY = 850, DURATION = 1100
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const elapsed = now - t0 - DELAY
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return }
      const p = Math.min(elapsed / DURATION, 1)
      setEntryP(p)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Le card si aprono in orizzontale allo scroll (progress 0→1 nei primi 300px)
  const progress = Math.min(scrollY / 300, 1)

  return (
    <section className="hero" style={{
      height: '100vh',
      minHeight: 600,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}>

      {/* Immagine di sfondo semitrasparente */}
      <div className="hero-img" />

      {/* Testo centrato verticalmente tra nav e card */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: isMobile ? 56 : 64,
        paddingBottom: isMobile ? 160 : 'clamp(140px, 22vh, 220px)',
      }}>
      <div className="c" style={{ textAlign: 'center' }}>
        <div className="ht1" style={{ marginBottom: 'clamp(12px, 1.5vw, 22px)' }}>
          <span style={{ fontSize: 'clamp(9px, 0.85vw, 12px)', fontWeight: 600, letterSpacing: '.35em', textTransform: 'uppercase', color: 'rgba(197,224,122,0.6)' }}>
            Soluzioni sostenibili per la vita quotidiana
          </span>
        </div>

        <h1 className="ht2" style={{ fontSize: 'clamp(40px, 5.03vw, 98px)', fontWeight: 900, fontStyle: 'normal', lineHeight: .95, letterSpacing: '-0.03em', marginBottom: 'clamp(10px, 1.2vw, 20px)', textAlign: 'center' }}>
          Una mano <span style={{ color: '#C5E07A' }}>alle persone,</span><br />
          una mano all'ambiente.
        </h1>

        <p className="ht3" style={{
          fontSize: 'clamp(13px, 1.35vw, 17px)', lineHeight: 1.65, color: 'rgba(247,244,238,0.5)',
          maxWidth: 'clamp(280px, 36vw, 440px)', margin: `0 auto clamp(18px, 2vw, 32px)`,
        }}>
          Portiamo sul mercato soluzioni che migliorano la vita quotidiana e riducono l'impatto ambientale.
        </p>

        <div className="ht4" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="#partnership" className="btn btn-lime">Diventa partner →</a>
          <a href="#chi-siamo" className="btn btn-ghost">Scopri di più</a>
        </div>
      </div>
      </div>

      {/* Card ancorate al fondo — entrano dal basso, poi si aprono allo scroll */}
      <div className="hc" style={{
        position: 'absolute',
        bottom: -40,
        left: 0, right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: isMobile ? '0 16px' : '0 80px',
      }}>
        {stats.map((s, i) => {
          const isCenter = i === 1
          const ep = easeOut(Math.min(entryP, 1))

          // Dimensioni responsive
          const cW = isMobile ? 200 : 320
          const sW = isMobile ? 130 : 290
          const overlapStart = isMobile ? -60 : -100
          const overlapEnd   = isMobile ? -20 : -40
          const overlapSpread = isMobile ? 12 : 56
          const rotScale     = isMobile ? 0.5 : 1   // rotazione ridotta su mobile
          const vOff         = isMobile ? 12 : 24

          const marginLeft = i === 0 ? 0
            : overlapStart + ((overlapEnd - overlapStart) * ep) + (overlapSpread * progress * ep)
          const rotation = s.rot * rotScale * (0.1 + 0.9 * ep) * (1 - progress * ep)
          const vertOffset = isCenter ? 0 : vOff * ep * (1 - progress)
          const width = isCenter ? cW : sW
          const zIndex = isCenter ? 3 : i === 0 ? 1 : 2
          return (
          <div key={i} style={{
            width,
            flexShrink: 0,
            marginLeft,
            padding: isMobile
              ? (isCenter ? '20px 18px 80px' : '16px 14px 80px')
              : (isCenter ? '28px 28px 100px' : '22px 22px 100px'),
            background: s.bg,
            borderRadius: 20,
            transform: `translateY(${vertOffset}px) rotate(${rotation}deg)`,
            transformOrigin: 'bottom center',
            zIndex,
            position: 'relative',
          }}>
            <div style={{
              fontSize: isMobile ? (isCenter ? 28 : 22) : (isCenter ? 44 : 36),
              fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', color: s.color, marginBottom: 8,
            }}>
              {s.value}
              {s.unit && <span style={{ fontSize: 14, marginLeft: 4, fontWeight: 700 }}>{s.unit}</span>}
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 12, lineHeight: 1.5, color: s.textMuted }}>{s.sub}</div>
          </div>
          )
        })}
      </div>

    </section>
  )
}

/* ── Carousel ─────────────────────────────────────────────── */
function Carousel({ images }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 2500)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {images.map((src, i) => (
        <img key={i} src={src} alt="" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          opacity: i === idx ? 1 : 0,
          transition: 'opacity .8s ease',
        }} />
      ))}
      <div style={{
        position: 'absolute', bottom: 16, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', gap: 6, zIndex: 2,
      }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            width: i === idx ? 20 : 6, height: 6,
            borderRadius: 100, border: 'none', cursor: 'pointer',
            background: i === idx ? '#fff' : 'rgba(255,255,255,.35)',
            transition: 'all .3s ease', padding: 0,
          }} />
        ))}
      </div>
    </div>
  )
}

/* ── Chi siamo ────────────────────────────────────────────── */
function ChiSiamoSection() {
  return (
    <section id="chi-siamo" className="s" style={{ background: `#F7F4EE url(${bgPng}) center center / cover no-repeat` }}>
      <div className="c">
        <span className="label label-green r">Cosa facciamo</span>
        <h2 className="h2 r d1" style={{ maxWidth: '18ch', marginBottom: 40 }}>
          RiEko accelera l'adozione di soluzioni sostenibili{' '}
          <span style={{ color: '#4A7A28' }}>già pronte per l'uso reale.</span>
        </h2>
        <div className="r d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
          <p className="body-lg">
            Aiutiamo soluzioni utili a passare dal potenziale all'uso quotidiano, accompagnandole nel mercato in modo strutturato e responsabile.
          </p>
          <p className="body-lg">
            Ci occupiamo di distribuzione, chiarezza dei benefici, dialogo con istituzioni e stakeholder, supporto post-vendita.
          </p>
        </div>

        <div className="pillars r d3">
          {[
            { n: '01', t: 'Distribuzione', d: 'Portiamo soluzioni mature nel mercato con canali e percorsi chiari.', icon: <img src={iconDistribuzione} alt="" width={44} height={44} /> },
            { n: '02', t: 'Comunicazione', d: 'Spieghiamo i benefici reali, senza ambiguità né greenwashing.', icon: <img src={iconComunicazione} alt="" width={44} height={44} /> },
            { n: '03', t: 'Supporto', d: 'Assistenza continuativa: la fiducia si costruisce dopo la vendita.', icon: <img src={iconSupporto} alt="" width={44} height={44} /> },
          ].map(p => (
            <div key={p.n} className="pillar">
              <div className="pillar-header">
                <span className="pillar-n">{p.n}</span>
                <div className="pillar-icon">{p.icon}</div>
              </div>
              <div className="pillar-t">{p.t}</div>
              <div className="pillar-d">{p.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Il problema ──────────────────────────────────────────── */
function IlProblema() {
  return (
    <section className="s" style={{ background: '#111' }}>
      <div className="c">
        <span className="label label-lime r">Il problema</span>
        <h2 className="r d1" style={{
          fontSize: 'clamp(36px, 4.5vw, 48px)', fontWeight: 900, lineHeight: 1.08,
          letterSpacing: '-.04em', color: '#F7F4EE', maxWidth: '22ch', marginBottom: 48,
        }}>
          Molte soluzioni sostenibili esistono già.{' '}
          <span style={{ color: '#C5E07A' }}>Poche riescono a diffondersi davvero.</span>
        </h2>
        <div className="r d2 two-col" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(247,244,238,.48)' }}>
            Non per mancanza di valore, ma per complessità, barriere normative e mancanza di supporto continuativo.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(247,244,238,.48)' }}>
            RiEko lavora su soluzioni che migliorano la qualità della vita senza richiedere cambiamenti forzati nelle abitudini.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Con chi lavoriamo ────────────────────────────────────── */
function Audience() {
  const items = [
    'Distributori e operatori professionali',
    'Istituzioni con obiettivi misurabili',
    'Consumatori che cercano chiarezza',
    'Aziende che vogliono entrare nel mercato italiano',
  ]
  return (
    <section className="s" style={{ background: '#F7F4EE' }}>
      <div className="c">
        <div className="audience-header">
          <div>
            <span className="label label-green r">Con chi lavoriamo</span>
            <h2 className="h2-xl r d1">
              Lavoriamo <span style={{ color: '#4A7A28' }}>con</span>
            </h2>
          </div>
          <p className="r d2 body-md audience-sub">
            Creiamo connessioni di valore tra chi produce innovazione e chi la utilizza ogni giorno.
          </p>
        </div>

        <div className="row-list">
          {items.map((item, i) => (
            <div key={i} className={`row-item r d${i + 1}`}>
              <span className="row-n">0{i + 1}</span>
              <span className="row-t">{item}</span>
            </div>
          ))}
        </div>

        <div className="r" style={{ marginTop: 48 }}>
          <a href="#partnership" className="btn btn-dark">Parliamo di una partnership →</a>
        </div>
      </div>
    </section>
  )
}

/* ── Prodotti ─────────────────────────────────────────────── */
function Prodotti() {
  return (
    <>
    <section id="prodotti" className="s" style={{ background: '#EEE9DF' }}>
      <div className="c">
        <span className="label label-green r">Prodotti e soluzioni</span>
        <h2 className="h2 r d1" style={{ maxWidth: '28ch' }}>
          Un esempio concreto di come lavoriamo.
        </h2>

        <div className="product-card r d2">
          {/* testo */}
          <div className="product-card-text" style={{ justifyContent: 'space-between' }}>
            {/* top: tag + titolo + paragrafi */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span className="product-tag">Partner ufficiale</span>
              <h3 className="product-h">InSinkErator®</h3>
              <p className="product-p">
                Una soluzione per semplificare la gestione dei rifiuti alimentari in cucina. Installato sotto il lavello, consente di eliminare gli scarti organici in modo immediato e igienico, utilizzando l'acqua.
              </p>
              <p className="product-p">
                Meno odori in casa, niente sacchetti da portare nel cassonetto e meno passaggi della raccolta.
              </p>
              <p className="product-p">
                Più comodità ogni giorno e un ambiente migliore.
              </p>
              <p className="product-p" style={{ color: 'rgba(247,244,238,.35)', fontSize: 13 }}>
                È un esempio concreto del lavoro RiEko: selezione, distribuzione, spiegazione e supporto nel tempo.
              </p>
              {/* CTA orizzontali */}
              <div className="product-ctas">
                <a href="#assistenza" className="btn" style={{ background: '#fff', color: '#005191', fontWeight: 700 }}>Scopri i prodotti</a>
                <a href="#assistenza" className="btn btn-ghost">Richiedi assistenza</a>
              </div>
            </div>
            {/* bottom: logo */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 24 }}>
              <img src={logoInsinkerator} alt="InSinkErator" style={{ height: 70, width: 'auto', opacity: .85 }} />
            </div>
          </div>
          {/* visual */}
          <div className="product-card-visual" style={{ padding: 0, overflow: 'hidden' }}>
            <Carousel images={[imgInsinkerator, imgInsinkerator2, imgInsinkerator3]} />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

/* ── Count-up ─────────────────────────────────────────────── */
// Parsa "-30%", "-15%CO₂", "+25%" → { prefix, number, suffix }
function parseMetric(metric) {
  const m = metric.match(/^([+-]?)(\d+)(.*)$/)
  if (!m) return { prefix: '', number: 0, suffix: metric }
  return { prefix: m[1], number: parseInt(m[2], 10), suffix: m[3] }
}

function AnimatedMetric({ metric }) {
  const { prefix, number, suffix } = parseMetric(metric)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect() } },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const DURATION = 1200
    const DELAY = 200
    let raf
    let t0
    const tick = (now) => {
      if (!t0) t0 = now
      const elapsed = now - t0 - DELAY
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return }
      const p = Math.min(elapsed / DURATION, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * number))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, number])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

/* ── Impatto ──────────────────────────────────────────────── */
function Impatto() {
  return (
    <section className="s impact-bg">
      <div className="c">
        <h2 className="impact-h r">Meno sprechi.<br />Più semplicità.</h2>
        <div className="impact-grid">
          {[
            { t: 'Rifiuti organici', d: 'Fino al 30% in meno di umido smaltito tramite raccolta tradizionale.', icon: iconRifiuti, metric: '-30%' },
            { t: 'Impronta CO₂', d: 'Meno trasporti, meno passaggi, processi di smaltimento più efficienti.', icon: iconImpronta, metric: '-15%CO₂' },
            { t: 'Economia circolare', d: 'Gli scarti rientrano nel ciclo idraulico per trattamenti specializzati.', icon: iconEconomiaCircolare, metric: '+25%' },
          ].map((item, i) => {
            return (
              <div key={i} className={`impact-item r d${i + 1}`}>
                <div className="impact-meta">
                  <img src={item.icon} alt="" className="impact-icon" />
                  <span className="impact-pill"><AnimatedMetric metric={item.metric} /></span>
                </div>
                <div className="impact-t">{item.t}</div>
                <div className="impact-d">{item.d}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Partnership ──────────────────────────────────────────── */
const partnershipItems = [
  { n: '01', t: 'Ingresso nel mercato', d: "Dal posizionamento ai canali distributivi, fino alla formazione e all'assistenza sul campo." },
  { n: '02', t: 'Dialogo istituzionale', d: 'Supporto strutturato con istituzioni e stakeholder, basato su dati concreti e obiettivi misurabili.' },
  { n: '03', t: 'Comunicazione responsabile', d: 'Chiarezza e credibilità che costruiscono fiducia nel tempo, senza greenwashing.' },
]

function Partnership() {

  return (
    <section id="partnership" className="s" style={{ background: `#F7F4EE url(${bgPng}) center center / cover no-repeat` }}>
      <div className="c">
        <span className="label label-green r">Partnership & Advocacy</span>
        <h2 className="h2 r d1" style={{ maxWidth: '26ch', marginBottom: 64 }}>
          Accelerare l'adozione. Costruire impatto reale.
        </h2>

        <div className="two-col">
          <div style={{ position: 'sticky', top: 80, alignSelf: 'start' }}>
            <p className="body-lg r" style={{ marginBottom: 20 }}>
              Molte soluzioni sostenibili non falliscono per mancanza di valore, ma perché non trovano il giusto supporto per entrare nel mercato.
            </p>
            <p className="body-lg r d1" style={{ marginBottom: 40 }}>
              RiEko lavora tra innovazione, mercato e istituzioni, creando le condizioni perché una soluzione venga compresa, adottata e sostenuta nel tempo.
            </p>
            <div className="r d2">
              <a href="#contatti" className="btn btn-dark">Proponi una partnership →</a>
            </div>
          </div>

          {/* Cards */}
          <div className="r d2" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {partnershipItems.map((item, i) => (
              <div key={i} className="pcard">
                <div className="pcard-header">
                  <span className="pcard-n">{item.n}</span>
                  <div className="pcard-t">{item.t}</div>
                </div>
                <div className="pcard-d">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Assistenza ───────────────────────────────────────────── */
function Assistenza() {
  return (
    <section id="assistenza" className="s" style={{ background: '#111' }}>
      <div className="c">
        <span className="label label-lime r">Assistenza post-vendita</span>
        <h2 className="r d1" style={{
          fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, lineHeight: 1.08,
          letterSpacing: '-.04em', color: '#F7F4EE', maxWidth: '22ch', marginBottom: 64,
        }}>
          Supporto diretto, senza intermediari.
        </h2>

        <div className="two-col">
          <div>
            <p className="r" style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(247,244,238,.5)', marginBottom: 16 }}>
              Le richieste vengono gestite tramite un modulo dedicato, per garantire risposte rapide e puntuali.
            </p>
            <p className="r d1" style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(247,244,238,.32)', marginBottom: 40 }}>
              Le richieste via form hanno priorità rispetto a contatti telefonici o email generiche.
            </p>
            <div className="r d2" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href="#contatti" className="btn btn-lime">Richiedi assistenza →</a>
              <a href="mailto:rieko@rieko.it" className="btn btn-ghost">rieko@rieko.it</a>
            </div>
          </div>

          <div className="r d2" style={{
            background: 'rgba(247,244,238,.04)',
            border: '1px solid rgba(247,244,238,.07)',
            borderRadius: 20, padding: 32,
          }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.35em', textTransform: 'uppercase', color: 'rgba(197,224,122,.45)', textAlign: 'center', marginBottom: 24 }}>
              Dati richiesti nel modulo
            </p>
            <div className="form-grid">
              {['Recapiti', 'Modello prodotto', 'Numero di serie', 'Data acquisto', 'Descrizione problema', 'Prova di acquisto', 'In garanzia?', 'Garanzia aggiuntiva'].map(item => (
                <div key={item} className="form-item">
                  <span className="form-check">✓</span>
                  <span className="form-label">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ──────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null)
  const items = [
    { q: 'InSinkErator è sicuro?', a: 'Sì. Non usa lame ma martelletti rotanti per forza centrifuga. Conforme a tutte le normative di sicurezza internazionali.' },
    { q: 'Serve una cucina nuova per installarlo?', a: 'No, si installa su quasi ogni lavello esistente con foro standard da 90mm, senza opere murarie.' },
    { q: 'Come richiedo assistenza?', a: 'Utilizza il modulo dedicato: riceverai supporto tecnico rapido dal team RiEko con priorità rispetto ai contatti diretti.' },
    { q: 'RiEko vende online?', a: 'RiEko si occupa di distribuzione strutturata e partnership, non di e-commerce diretto. Le soluzioni sono disponibili tramite i canali e partner ufficiali.' },
    { q: 'Come propongo una partnership?', a: 'Contattaci tramite il form per presentare il tuo progetto. Valutiamo soluzioni con impatto ambientale reale e potenziale di larga diffusione.' },
  ]
  return (
    <section className="s" style={{ background: '#F7F4EE' }}>
      <div className="c">
        <div className="faq-wrap">
          <span className="label label-green r" style={{ textAlign: 'center' }}>FAQ</span>
          <h2 className="h2 r d1" style={{ textAlign: 'center', marginBottom: 56 }}>Domande frequenti</h2>
          {items.map((item, i) => (
            <div key={i} className="faq-item r">
              <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}>
                <span className="faq-q">{item.q}</span>
                <span className={`faq-icon${open === i ? ' open' : ''}`}>{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-body" style={{ maxHeight: open === i ? 200 : 0 }}>
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA Finale ───────────────────────────────────────────── */
function CTAFinale() {
  return (
    <section id="contatti" className="s" style={{ background: '#192B18' }}>
      <div className="c" style={{ textAlign: 'center' }}>
        <span className="label label-lime r" style={{ textAlign: 'center', display: 'block' }}>Lavoriamo insieme</span>
        <h2 className="r d1" style={{
          fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 900, lineHeight: 1.08,
          letterSpacing: '-.04em', color: '#F7F4EE', maxWidth: '20ch',
          margin: '0 auto 24px',
        }}>
          La sostenibilità funziona solo quando entra nella vita delle persone.
        </h2>
        <p className="r d2" style={{ fontSize: 16, color: 'rgba(247,244,238,.42)', maxWidth: '36ch', margin: '0 auto 48px' }}>
          Noi lavoriamo per accelerarne l'adozione.
        </p>
        <div className="r d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:rieko@rieko.it" className="btn btn-lime">Diventa partner →</a>
          <a href="mailto:rieko@rieko.it" className="btn btn-ghost">Contattaci</a>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ───────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="c">
        <div className="footer-top">
          <div>
            <Logo color="#F7F4EE" height={28} />
            <div className="footer-tagline" style={{ marginTop: 10 }}>Una mano alle persone, una mano all'ambiente.</div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <span className="footer-col-title">Pagine</span>
              <Link to="/chi-siamo">Chi siamo</Link>
              <a href="#prodotti">Prodotti</a>
              <a href="#partnership">Partnership</a>
              <a href="#assistenza">Assistenza</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Contatti</span>
              <a href="mailto:rieko@rieko.it">rieko@rieko.it</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 RiEko S.r.l. — Milano</span>
          <div className="footer-partner-box" aria-label="Partner ufficiale InSinkErator">
            <span className="footer-partner-label">Partner</span>
            <img src={logoInsinkerator} alt="InSinkErator" className="footer-partner-logo" />
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Homepage ─────────────────────────────────────────────── */
function Homepage() {
  useReveal()
  return (
    <>
      <Hero />
      <ChiSiamoSection />
      <IlProblema />
      <Audience />
      <Prodotti />
      <Impatto />
      <Partnership />
      <Assistenza />
      <FAQ />
      <CTAFinale />
    </>
  )
}

/* ── Page transition wrapper ──────────────────────────────── */
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/" element={<Homepage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
      </Routes>
    </div>
  )
}

/* ── App ──────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </>
  )
}
