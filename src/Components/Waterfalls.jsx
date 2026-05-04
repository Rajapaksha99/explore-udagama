import { useState, useRef, useCallback } from 'react'
import './Waterfalls.css'

// ── media imports ──────────────────────────────────────────────
const img2 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873896/1_vtwxpq.jpg"
const img3  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873188/5_pg48ug.jpg"
const img4  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777871882/4_d7sglw.jpg"
const img5  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873199/2_nb9ull.jpg"
const img6  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873896/1_vtwxpq.jpg"
const img7  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777871882/4_d7sglw.jpg"
const img8  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872526/3_ugu38m.jpg"
const img9  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873896/1_vtwxpq.jpg"
const img10  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873896/1_vtwxpq.jpg"


const FALLS = [
  {
    id:         '01',
    name:       'Duwili Ella',
    sinhala:    'දුවිලි ඇල්ල',
    tagline:    'The Smoky Veil',
    difficulty: 'Moderate',
    time:       '35 min hike',
    height:     '~40 m',
    diffColor:  '#4caf88',
    desc:       'Named for the billowing mist that hangs like smoke in the cool mountain air, Duwili Ella is the most dramatic of the three. A deep natural pool at its base makes it perfect for a refreshing swim after the trek.',
    features:   ['Natural Pool', 'Mist Spray', 'Moss Rock', 'Forest Trail'],
    media: [
      { type: 'image', src: img2 },
      { type: 'image', src: img3 },
      { type: 'image', src: img4 },
    ],
  },
  {
    id:         '02',
    name:       'Hadapaan Ella',
    sinhala:    'හදාපාන් ඇල්ල',
    tagline:    'The Forest Heart',
    difficulty: 'Challenging',
    time:       '45 min hike',
    height:     '~25 m',
    diffColor:  '#4caf88',
    desc:       'Hidden beneath a thick canopy, Hadapaan Ella rewards those who venture off the main trail. Dappled sunlight filters through ancient trees onto crystal water while endemic birds fill the air with song.',
    features:   ['Birdwatching', 'Crystal Water', 'Canopy Walk', 'Peaceful'],
    media: [
      { type: 'image', src: img5 },
      { type: 'image', src: img6 },
      { type: 'image', src: img7 },
    ],
  },
  {
    id:         '03',
    name:       'Palle Ella',
    sinhala:    'පල්ලේ ඇල්ල',
    tagline:    'The Valley Drop',
    difficulty: 'Easy',
    time:       '',
    height:     '~12 m',
    diffColor:  '#4caf88',
    desc:       'The most adventurous of all — Palle Ella plunges into a remote valley reached by winding ridgeline trails. Views of surrounding mountains and paddy terraces are breathtaking.',
    features:   ['Valley Views', 'Wild Ridge', 'Solitude', 'Dramatic Drop'],
    media: [
      { type: 'image', src: img8 },
      { type: 'image', src: img9 },
      { type: 'image', src: img10 },
    ],
  },
]

/* ─── per-card slider ─────────────────────────────────────────── */
function WaterfallSlider({ media }) {
  const [active,   setActive]   = useState(0)
  const [prev,     setPrev]     = useState(null)
  const [entering, setEntering] = useState(false)   // triggers zoom-in anim on new slide
  const [dragging, setDragging] = useState(false)
  const startX   = useRef(0)
  const deltaX   = useRef(0)
  const trackRef = useRef(null)
  const lockRef  = useRef(false)

  const count = media.length

  const goTo = useCallback((idx) => {
    const next = Math.max(0, Math.min(idx, count - 1))
    if (lockRef.current || next === active) return
    lockRef.current = true
    setPrev(active)
    setActive(next)
    setEntering(true)
    // unlock after transition
    setTimeout(() => {
      setPrev(null)
      setEntering(false)
      lockRef.current = false
    }, 700)
  }, [active, count])

  // ── pointer drag ──
  const onPointerDown = (e) => {
    startX.current = e.clientX
    deltaX.current = 0
    setDragging(true)
    trackRef.current?.setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!dragging) return
    deltaX.current = e.clientX - startX.current
  }
  const onPointerUp = () => {
    if (!dragging) return
    setDragging(false)
    if      (deltaX.current < -40) goTo(active + 1)
    else if (deltaX.current >  40) goTo(active - 1)
    deltaX.current = 0
  }

  // ── horizontal scroll on trackpad ──
  const onWheel = (e) => {
    e.preventDefault()
    if      (e.deltaX > 20 || e.deltaY > 20)  goTo(active + 1)
    else if (e.deltaX < -20 || e.deltaY < -20) goTo(active - 1)
  }

  const getSlideState = (i) => {
    if (i === active) return 'active'
    if (i === prev)   return 'prev'
    // side thumbnails: 1 before and 1 after active
    const dist = i - active
    if (dist === -1) return 'side-left'
    if (dist ===  1) return 'side-right'
    if (dist < -1)   return 'far-left'
    return 'far-right'
  }

  return (
    <div className="wf-slider">

      {/* ── 3D stage ── */}
      <div
        ref={trackRef}
        className={`wf-stage${dragging ? ' dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onWheel={onWheel}
        style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      >
        {media.map((item, i) => {
          const state = getSlideState(i)
          return (
            <div
              key={i}
              className={`wf-slide wf-slide--${state}${i === active && entering ? ' entering' : ''}`}
              onClick={() => { if (state !== 'active') goTo(i) }}
            >
              {/* dimming veil — covers non-active slides */}
              <div className="wf-slide-veil" />

              {item.type === 'video' ? (
                <div className="wf-slide-media-wrap">
                  <video
                    src={item.src}
                    className="wf-slide-media"
                    autoPlay={i === active}
                    loop muted playsInline
                  />
                  <div className="wf-video-badge">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                    Video
                  </div>
                </div>
              ) : (
                <div className="wf-slide-media-wrap">
                  <img
                    src={item.src}
                    alt=""
                    className="wf-slide-media"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* ── bottom gradient ── */}
      <div className="wf-stage-grad" />

      {/* ── arrow buttons ── */}
      {active > 0 && (
        <button
          className="wf-arrow wf-arrow--prev"
          onClick={() => goTo(active - 1)}
          aria-label="Previous"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}
      {active < count - 1 && (
        <button
          className="wf-arrow wf-arrow--next"
          onClick={() => goTo(active + 1)}
          aria-label="Next"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      )}

      {/* ── dots ── */}
      <div className="wf-dots">
        {media.map((item, i) => (
          <button
            key={i}
            className={`wf-dot${i === active ? ' active' : ''}${item.type === 'video' ? ' is-video' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`${item.type === 'video' ? 'Video' : 'Photo'} ${i + 1}`}
          >
            {item.type === 'video' && (
              <svg width="6" height="6" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* ── counter ── */}
      <div className="wf-counter">
        <span className="wf-counter-cur">{active + 1}</span>
        <span className="wf-counter-sep">/</span>
        <span>{count}</span>
      </div>

    </div>
  )
}

/* ─── main section ────────────────────────────────────────────── */
export default function Waterfalls() {
  return (
    <section className="wf-section" id="waterfalls">

      <div className="sec-header">
        <p className="sec-eyebrow">Hidden Gems</p>
        <h2 className="sec-title">Three Sacred Falls</h2>
        <p className="sec-sub">
          Three waterfalls, three personalities — each carved by centuries
          of mountain rain into something uniquely unforgettable.
        </p>
        <div className="sec-divider"><span /><span className="diamond" /><span /></div>
      </div>

      <div className="wf-grid">
        {FALLS.map(fall => (
          <article className="wf-card" key={fall.id}>

            <WaterfallSlider media={fall.media} />

            {/* floating badges — sit over the slider */}
            <div className="wf-badges">
              <span className="wf-num">{fall.id}</span>
              <span className="wf-diff" style={{ background: fall.diffColor }}>
                {fall.difficulty}
              </span>
            </div>

            <div className="wf-body">
              <p className="wf-sinhala">{fall.sinhala}</p>
              <h3 className="wf-name">{fall.name}</h3>
              <p className="wf-tagline">"{fall.tagline}"</p>
              <div className="wf-meta">
                <span>↕ {fall.height}</span>
                <span className="meta-dot" />
                <span>⏱ {fall.time}</span>
              </div>
              <p className="wf-desc">{fall.desc}</p>
              <div className="wf-tags">
                {fall.features.map(f => (
                  <span className="wf-tag" key={f}>{f}</span>
                ))}
              </div>
            </div>

          </article>
        ))}
      </div>

    </section>
  )
}