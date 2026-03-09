import { useEffect } from 'react'
import { Link } from 'react-router-dom'

/* ── Scroll reveal (locale alla pagina) ─────────────────────── */
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

/* ── Valori ───────────────────────────────────────────────────── */
const valori = [
  {
    n: '01',
    t: 'Credibilità',
    d: 'La fiducia si costruisce nel tempo, attraverso coerenza tra ciò che diciamo e ciò che facciamo.',
  },
  {
    n: '02',
    t: 'Concretezza',
    d: 'Le soluzioni devono funzionare davvero, nella vita reale delle persone, non solo sulla carta.',
  },
  {
    n: '03',
    t: 'Responsabilità',
    d: "Verso le persone, i partner e l'ambiente. Ogni scelta che facciamo tiene conto di chi ne è coinvolto.",
  },
]

/* ── Criteri selezione ────────────────────────────────────────── */
const criteri = [
  { icon: '◎', t: 'Impatto ambientale reale', d: "Soluzioni che riducono concretamente l’impronta ecologica, con effetti misurabili." },
  { icon: '◎', t: 'Affidabilità tecnica', d: 'Tecnologie validate, durevoli e conformi agli standard di sicurezza internazionali.' },
  { icon: '◎', t: 'Semplicità di utilizzo', d: 'Prodotti che si integrano naturalmente nella vita quotidiana senza richiedere cambiamenti forzati.' },
  { icon: '◎', t: 'Scalabilità', d: 'Soluzioni con potenziale di diffusione su larga scala, per un impatto che va oltre il singolo utente.' },
]

/* ── ChiSiamo Page ────────────────────────────────────────────── */
export default function ChiSiamo() {
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section style={{
        background: '#0D1A0C',
        paddingTop: 'clamp(120px, 18vh, 180px)',
        paddingBottom: 'clamp(80px, 12vh, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* aurora leggera di sfondo */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 70% 60% at 80% 50%, rgba(60,110,25,.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 10% 80%, rgba(30,70,15,.25) 0%, transparent 55%)
          `,
        }} />
        <div className="c" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label label-lime" style={{ animationDelay: '0s' }}>Chi siamo</span>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 80px)',
            fontWeight: 900,
            lineHeight: .95,
            letterSpacing: '-0.03em',
            color: '#F7F4EE',
            maxWidth: '16ch',
            marginBottom: 'clamp(20px, 3vw, 36px)',
          }}>
            La sostenibilità funziona solo quando entra nella vita{' '}
            <span style={{ color: '#C5E07A' }}>di tutti i giorni.</span>
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 1.4vw, 20px)',
            lineHeight: 1.7,
            color: 'rgba(247,244,238,.5)',
            maxWidth: '42ch',
          }}>
            RiEko nasce da una convinzione semplice: le soluzioni sostenibili devono essere
            adottate, non solo raccontate.
          </p>
        </div>
      </section>

      {/* ── Perché siamo nati ──────────────────────────────── */}
      <section className="s" style={{ background: '#F7F4EE' }}>
        <div className="c">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'start' }} className="cs-two-col">
            <div>
              <span className="label label-green r">Perché siamo nati</span>
              <h2 className="h2 r d1" style={{ maxWidth: '20ch', marginBottom: 0 }}>
                Selezionare, portare sul mercato, supportare nel tempo.
              </h2>
            </div>
            <div style={{ paddingTop: 'clamp(0px, 2vw, 32px)' }}>
              <p className="body-lg r d1" style={{ marginBottom: 24 }}>
                La sostenibilità diventa efficace solo quando entra nella quotidianità. E questo
                richiede soluzioni pensate per essere adottate, non solo raccontate.
              </p>
              <p className="body-lg r d2">
                RiEko nasce per questo: selezionare soluzioni pronte per essere utilizzate ogni
                giorno e portarle sul mercato in modo affidabile e continuativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Il nostro approccio ────────────────────────────── */}
      <section className="s" style={{ background: '#111' }}>
        <div className="c">
          <span className="label label-lime r">Il nostro approccio</span>
          <h2 className="r d1" style={{
            fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-.04em', color: '#F7F4EE', maxWidth: '24ch', marginBottom: 'clamp(40px, 6vw, 72px)',
          }}>
            Non partiamo dalle promesse,{' '}
            <span style={{ color: '#C5E07A' }}>ma dall'uso reale.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }} className="cs-two-col">
            <p className="r d2" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.75, color: 'rgba(247,244,238,.55)' }}>
              Valutiamo ogni soluzione in base alla sua capacità di semplificare la vita
              quotidiana, ridurre l'impatto ambientale e integrarsi facilmente nei contesti
              domestici e professionali.
            </p>
            <p className="r d3" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.75, color: 'rgba(247,244,238,.55)' }}>
              Il nostro lavoro è rendere l'innovazione sostenibile accessibile, affidabile
              e concreta — per chi la usa ogni giorno.
            </p>
          </div>
        </div>
      </section>

      {/* ── Come selezioniamo ─────────────────────────────── */}
      <section className="s" style={{ background: '#EEE9DF' }}>
        <div className="c">
          <span className="label label-green r">Come selezioniamo le soluzioni</span>
          <h2 className="h2 r d1" style={{ maxWidth: '26ch', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
            Scegliamo solo ciò che risponde a criteri chiari.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {criteri.map((c, i) => (
              <div key={i} className={`r d${i + 1}`} style={{
                background: '#fff',
                borderRadius: 20,
                padding: 'clamp(24px, 3vw, 36px)',
                display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: '#0D1A0C', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="#C5E07A"/>
                    <circle cx="8" cy="8" r="7" stroke="#C5E07A" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#111', letterSpacing: '-.02em' }}>{c.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.65, color: '#888' }}>{c.d}</div>
              </div>
            ))}
          </div>
          <p className="r" style={{ marginTop: 32, fontSize: 13, lineHeight: 1.7, color: '#999', maxWidth: '52ch' }}>
            La ricerca e la validazione fanno parte del processo, perché la sostenibilità,
            per essere credibile, deve essere prima di tutto solida.
          </p>
        </div>
      </section>

      {/* ── Missione + Visione ─────────────────────────────── */}
      <section className="s" style={{ background: '#F7F4EE' }}>
        <div className="c">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="cs-mv-grid">
            {/* Missione */}
            <div className="r" style={{
              background: '#0D1A0C', borderRadius: 24,
              padding: 'clamp(36px, 5vw, 64px)',
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.35em', textTransform: 'uppercase', color: 'rgba(197,224,122,.5)', display: 'block', marginBottom: 24 }}>La nostra missione</span>
              <p style={{
                fontSize: 'clamp(22px, 2.8vw, 40px)',
                fontWeight: 800, lineHeight: 1.15,
                letterSpacing: '-.03em',
                color: '#F7F4EE',
              }}>
                Rendere la sostenibilità una scelta semplice,{' '}
                <span style={{ color: '#C5E07A' }}>quotidiana e alla portata di tutti.</span>
              </p>
            </div>
            {/* Visione */}
            <div className="r d1" style={{
              background: '#C5E07A', borderRadius: 24,
              padding: 'clamp(36px, 5vw, 64px)',
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.35em', textTransform: 'uppercase', color: 'rgba(25,43,24,.5)', display: 'block', marginBottom: 24 }}>La nostra visione</span>
              <p style={{
                fontSize: 'clamp(22px, 2.8vw, 40px)',
                fontWeight: 800, lineHeight: 1.15,
                letterSpacing: '-.03em',
                color: '#192B18',
              }}>
                Un futuro in cui ogni gesto quotidiano contribuisce al benessere delle persone
                e dell'ambiente, senza sacrifici.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valori ────────────────────────────────────────── */}
      <section className="s" style={{ background: '#F7F4EE' }}>
        <div className="c">
          <span className="label label-green r">I nostri valori</span>
          <h2 className="h2 r d1" style={{ maxWidth: '22ch', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
            Credibilità, concretezza, responsabilità.
          </h2>
          <div className="pillars">
            {valori.map((v, i) => (
              <div key={i} className={`pillar r d${i + 1}`}>
                <div className="pillar-header">
                  <span className="pillar-n">{v.n}</span>
                </div>
                <div className="pillar-t">{v.t}</div>
                <div className="pillar-d">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ────────────────────────────────────── */}
      <section className="s" style={{ background: '#111' }}>
        <div className="c">
          <span className="label label-lime r">Leadership</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }} className="cs-two-col">
            <div>
              <h2 className="r d1" style={{
                fontSize: 'clamp(28px, 3.5vw, 52px)', fontWeight: 900, lineHeight: 1.05,
                letterSpacing: '-.04em', color: '#F7F4EE', marginBottom: 24,
              }}>
                Paolo Lioy
              </h2>
              <p className="r d2" style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.8, color: 'rgba(247,244,238,.55)', marginBottom: 20 }}>
                RiEko è guidata da Paolo Lioy, con oltre trent'anni di esperienza internazionale
                in aziende multinazionali e un ruolo attivo nel dialogo istituzionale sulla
                sostenibilità.
              </p>
              <p className="r d3" style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.8, color: 'rgba(247,244,238,.35)' }}>
                La sua esperienza è alla base di un approccio pragmatico, orientato ai risultati
                e alla costruzione di valore duraturo.
              </p>
            </div>
            <div className="r d2" style={{
              background: 'rgba(197,224,122,.06)',
              border: '1px solid rgba(197,224,122,.12)',
              borderRadius: 24, padding: 'clamp(32px, 4vw, 56px)',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { n: '30+', l: 'anni di esperienza internazionale' },
                  { n: 'Multi', l: 'nazionale — presenza in mercati globali' },
                  { n: 'ESG', l: 'dialogo istituzionale sulla sostenibilità' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, paddingBottom: 20, borderBottom: i < 2 ? '1px solid rgba(197,224,122,.08)' : 'none' }}>
                    <div style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 900, color: '#C5E07A', minWidth: 80, letterSpacing: '-.03em' }}>{item.n}</div>
                    <div style={{ fontSize: 14, color: 'rgba(247,244,238,.45)', lineHeight: 1.4 }}>{item.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Finale ────────────────────────────────────── */}
      <section className="s" style={{ background: '#192B18' }}>
        <div className="c" style={{ textAlign: 'center' }}>
          <span className="label label-lime r" style={{ display: 'block' }}>Lavoriamo insieme</span>
          <h2 className="r d1" style={{
            fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-.04em', color: '#F7F4EE',
            maxWidth: '24ch', margin: '0 auto 20px',
          }}>
            RiEko porta sul mercato soluzioni che funzionano davvero.
          </h2>
          <p className="r d2" style={{ fontSize: 16, color: 'rgba(247,244,238,.42)', maxWidth: '38ch', margin: '0 auto 48px' }}>
            È così che la sostenibilità diventa una scelta concreta, con continuità e supporto nel tempo.
          </p>
          <div className="r d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#prodotti" className="btn btn-lime">Scopri i prodotti →</Link>
            <a href="mailto:rieko@rieko.it" className="btn btn-ghost">Contattaci</a>
          </div>
        </div>
      </section>
    </>
  )
}
