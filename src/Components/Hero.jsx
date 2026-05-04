import { useState, useEffect, useRef } from 'react'
import './Hero.css'
const logo = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872833/logo_sea3ef.png"

const hero1  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872680/village13_hjbfcj.jpg"
const hero2 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872526/3_ugu38m.jpg"
const hero3 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872948/waulpane_cmrj1u.jpg"
const hero4 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872944/IMG_3996_xvwvzz.jpg"
const hero5 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872795/village15_od05ua.jpg"
const hero6 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872793/IMG_6026_zpxbyn.jpg"
const hero7 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872676/village10_zb67xo.jpg"
const hero8 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872616/IMG_3989_grfnc6.jpg"
const hero9 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872548/IMG_3963_x4sism.jpg"
const IMAGES        = [hero1, hero2, hero3, hero4, hero5,hero6,hero7,hero8,hero9]
const AUTO_MS       = 5000   // auto-advance every 5 s
const TRANSITION_MS = 1200   // must match CSS transition

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  // ── slideshow state ──
  const [cur,    setCur]    = useState(0)
  const [prev,   setPrev]   = useState(null)
  const [locked, setLocked] = useState(false)
  const timerRef     = useRef(null)
  const mouseCoolRef = useRef(0)

  const slideTo = (next) => {
    if (locked || next === cur) return
    setPrev(cur)
    setCur(next)
    setLocked(true)
    setTimeout(() => { setPrev(null); setLocked(false) }, TRANSITION_MS)
  }

  // auto-timer restarts every time cur changes
  useEffect(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(
      () => slideTo((cur + 1) % IMAGES.length),
      AUTO_MS
    )
    return () => clearInterval(timerRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cur, locked])

  // fast mouse movement → next slide (max once per 3 s)
  const onMouseMove = (e) => {
    const now = Date.now()
    if (now - mouseCoolRef.current < 3000) return
    if (Math.abs(e.movementX) > 18 || Math.abs(e.movementY) > 18) {
      mouseCoolRef.current = now
      slideTo((cur + 1) % IMAGES.length)
    }
  }

  return (
    <section className="hero" id="home" onMouseMove={onMouseMove}>

      {/* ══ Background slideshow — ONLY THIS PART CHANGED ══ */}
      <div className="hero-bg">

        {/* outgoing layer: stays visible, fades out */}
        {prev !== null && (
          <div
            key={`out-${prev}`}
            className="hbg-layer hbg-out"
            style={{ backgroundImage: `url(${IMAGES[prev]})` }}
          />
        )}

        {/* incoming layer: fades in + Ken Burns zoom */}
        <div
          key={`in-${cur}`}
          className="hbg-layer hbg-in"
          style={{ backgroundImage: `url(${IMAGES[cur]})` }}
        />

        <div className="hero-overlay" />
      </div>

      {/* dot indicators */}
      <div className="hbg-dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`hbg-dot${i === cur ? ' hbg-dot--active' : ''}`}
            onClick={() => { clearInterval(timerRef.current); slideTo(i) }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      {/* ══ End of slideshow change ══ */}

      {/* ── Decorative shapes ── */}
      <div className="hero-deco deco-1" />
      <div className="hero-deco deco-2" />

      {/* ── Content — unchanged ── */}
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="eyebrow-line" />
          Sri Lanka's Hidden Paradise
          <span className="eyebrow-line" />
        </p>

        <h1 className="hero-title">
          <span className="ht-explore">Explore</span>
          <span className="ht-village">Udagama</span>
        </h1>

        <p className="hero-sub">Nature &nbsp;·&nbsp; Adventure &nbsp;·&nbsp; Village</p>

        <p className="hero-desc">
          Where three hidden waterfalls cascade through ancient forest,
          emerald paddy fields trace the hillside, and the village welcomes
          you with a warmth as pure as its mountain streams.
        </p>

        <div className="hero-btns">
          <a href="#waterfalls" className="btn-main">
            <span>Discover the Falls</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button className="btn-watch" onClick={() => setVideoOpen(true)}>
            <span className="play-dot">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            </span>
            Watch Video
          </button>
        </div>

        <div className="hero-stats">
          <div className="hstat">
            <span className="hstat-num">3</span>
            <span className="hstat-lbl">Waterfalls</span>
          </div>
          <div className="hstat-sep" />
          <div className="hstat">
            <span className="hstat-num">∞</span>
            <span className="hstat-lbl">Memories</span>
          </div>
          <div className="hstat-sep" />
          <div className="hstat">
            <span className="hstat-num">1</span>
            <span className="hstat-lbl">Hidden Village</span>
          </div>
        </div>
      </div>

      {/* ── Scroll hint — unchanged ── */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-bar" />
      </div>

      {/* ── Video Modal — unchanged ── */}
      {videoOpen && (
        <div className="vmodal" onClick={() => setVideoOpen(false)}>
          <div className="vmodal-box" onClick={e => e.stopPropagation()}>
            <button className="vmodal-close" onClick={() => setVideoOpen(false)}>✕</button>
            <div className="vmodal-brand">
              <img src={logo} alt="logo" />
              <div>
                <p className="vb-name">Explore Udagama</p>
                <p className="vb-tag">Nature · Adventure · Village</p>
              </div>
            </div>
            <video
              src="/src/images/1.mp4"
              autoPlay
              controls
              className="vmodal-video"
              onError={(e) => { e.target.style.display='none' }}
            />
            <div className="vmodal-placeholder">
              <p>🎬 Video coming soon — add your 1.mp4 to src/images/</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}