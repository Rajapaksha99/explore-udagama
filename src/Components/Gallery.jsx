import { useState, useEffect, useCallback } from 'react'
import './Gallery.css'

/* ── All project images ── */
const hero1   = ""
const wf1   =  "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873896/1_vtwxpq.jpg"
const wf2  =   "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873188/5_pg48ug.jpg"
const wf3  =   "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777871882/4_d7sglw.jpg"
const vl1  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872680/village13_hjbfcj.jpg"
const vl2  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872793/IMG_6026_zpxbyn.jpg"
const vl3  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777874377/village2_ishhby.jpg"
const vl4  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872012/village5_dp45uw.jpg"
const vl5  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777874121/village17_eupstc.jpg"
const vl6  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873351/village4_jeuzrc.jpg"
const vl7  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777874044/village3_jdbwx0.jpg"
const vl8  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873748/village1_vjdk1g.jpg"
const vl9  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873492/IMG_3965_1_ivwyug.jpg"
const vl10  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872152/village7_zfar2x.jpg"

const vl11 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872944/IMG_3996_xvwvzz.jpg"
const vl12 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872793/IMG_6026_zpxbyn.jpg"


const ALL_IMAGES = [
  { src: hero1, label: 'Udagama',        cat: 'Landscape' },
  { src: wf1,   label: 'Duwili Ella',    cat: 'Waterfalls' },
  { src: wf2,   label: 'Hadapaan Ella',  cat: 'Waterfalls' },
  { src: wf3,   label: 'Palle Ella',     cat: 'Waterfalls' },
  { src: vl1,   label: 'Village Life',   cat: 'Village' },
  { src: vl2,   label: 'Village Path',   cat: 'Village' },
  { src: vl3,   label: 'Village View',   cat: 'Village' },
  { src: vl4,   label: 'Paddy Field',    cat: 'Village' },
  { src: vl5,   label: 'Forest Trail',   cat: 'Village' },
  { src: vl6,   label: 'Morning Mist',   cat: 'Village' },
  { src: vl7,   label: 'Wild Flowers',   cat: 'Village' },
  { src: vl8,   label: 'Muddy Road',     cat: 'Village' },
  { src: vl9,   label: 'Green Fields',   cat: 'Village' },
  { src: vl10,  label: 'Village Heart',  cat: 'Village' },
  { src: vl11,  label: 'Valley View',    cat: 'Village' },
  { src: vl12,  label: 'Sunrise',        cat: 'Village' },
]

const CATS = ['All', 'Waterfalls', 'Village', 'Landscape']

/* ─────────────────────────────────
   LIGHTBOX
───────────────────────────────── */
function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index)
  const [transitioning, setTransitioning] = useState(false)

  const go = useCallback((dir) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(i => (i + dir + images.length) % images.length)
      setTransitioning(false)
    }, 220)
  }, [transitioning, images.length])

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  go(-1)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'Escape')     onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [go, onClose])

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const img = images[current]

  return (
    <div className="lb-backdrop" onClick={onClose}>
      <div className="lb-box" onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className="lb-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Counter */}
        <div className="lb-counter">
          <span className="lb-cur">{String(current + 1).padStart(2,'0')}</span>
          <span className="lb-sep">/</span>
          <span className="lb-tot">{String(images.length).padStart(2,'0')}</span>
        </div>

        {/* Image */}
        <div className={`lb-img-wrap ${transitioning ? 'fading' : ''}`}>
          <img src={img.src} alt={img.label} className="lb-img" />
        </div>

        {/* Caption */}
        <div className="lb-caption">
          <span className="lb-cat-pill">{img.cat}</span>
          <span className="lb-label">{img.label}</span>
        </div>

        {/* Prev / Next */}
        <button className="lb-arrow lb-prev" onClick={() => go(-1)} aria-label="Previous">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button className="lb-arrow lb-next" onClick={() => go(1)} aria-label="Next">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        {/* Thumbnail strip */}
        <div className="lb-strip">
          {images.map((im, i) => (
            <button
              key={i}
              className={`lb-thumb ${i === current ? 'active' : ''}`}
              onClick={() => { setTransitioning(false); setCurrent(i) }}
              aria-label={im.label}
            >
              <img src={im.src} alt={im.label} loading="lazy" />
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

/* ─────────────────────────────────
   MAIN GALLERY
───────────────────────────────── */
export default function Gallery() {
  const [activeCat, setActiveCat] = useState('All')
  const [lightbox,  setLightbox]  = useState(null) // { images, index }
  const [revealed,  setRevealed]  = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const filtered = activeCat === 'All'
    ? ALL_IMAGES
    : ALL_IMAGES.filter(img => img.cat === activeCat)

  const openLightbox = (index) => setLightbox({ images: filtered, index })

  return (
    <section className="gl-section" id="gallery">

      {/* ── Header ── */}
      <div className="sec-header">
        <p className="sec-eyebrow">Visual Journey</p>
        <h2 className="sec-title">Moments of Udagama</h2>
        <p className="sec-sub">Every frame a story — from mist-veiled waterfalls to golden paddy at dusk.</p>
        <div className="sec-divider"><span /><span className="diamond" /><span /></div>
      </div>

      {/* ── Filter tabs ── */}
      <div className="gl-filters">
        {CATS.map(cat => (
          <button
            key={cat}
            className={`gl-filter ${activeCat === cat ? 'active' : ''}`}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
            <span className="gl-filter-count">
              {cat === 'All' ? ALL_IMAGES.length : ALL_IMAGES.filter(i => i.cat === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* ── Masonry grid ── */}
      <div className={`gl-masonry ${revealed ? 'revealed' : ''}`}>
        {filtered.map((img, i) => (
          <div
            className="gl-item"
            key={img.src + activeCat}
            style={{ animationDelay: `${(i % 8) * 60}ms` }}
            onClick={() => openLightbox(i)}
          >
            <div className="gl-item-inner">
              <img src={img.src} alt={img.label} loading="lazy" className="gl-photo" />
              <div className="gl-overlay">
                <div className="gl-overlay-content">
                  <span className="gl-overlay-cat">{img.cat}</span>
                  <span className="gl-overlay-label">{img.label}</span>
                </div>
                <div className="gl-zoom-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

    </section>
  )
}