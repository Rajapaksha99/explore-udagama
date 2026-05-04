import { useRef, useState } from 'react'
import './Village.css'
const v1  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872680/village13_hjbfcj.jpg"
const v2  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872793/IMG_6026_zpxbyn.jpg"
const v3  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777874377/village2_ishhby.jpg"
const v4  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872012/village5_dp45uw.jpg"
const v5  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777874121/village17_eupstc.jpg"
const v6  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873351/village4_jeuzrc.jpg"
const v7  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777874044/village3_jdbwx0.jpg"
const v8  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873748/village1_vjdk1g.jpg"
const v9  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873492/IMG_3965_1_ivwyug.jpg"
const v10  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872152/village7_zfar2x.jpg"
const  v11  = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777873980/village18_mgn2rn.jpg"
const v12 = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872891/IMG_5488_xba8fg.jpg"

const PHOTOS = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12]

const HIGHLIGHTS = [
  { icon: '🌾', label: 'Paddy Fields' },
  { icon: '🌸', label: 'Wild Flowers' },
  { icon: '🛤️', label: 'Muddy Trails' },
 
  { icon: '🏡', label: 'Village Life' },
]

export default function Village() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollTo = (i) => {
    const track = trackRef.current
    if (!track) return
    const item = track.children[i]
    if (!item) return
    item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setActive(i)
  }

  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    let closest = 0
    let minDist = Infinity
    Array.from(track.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2
      const dist = Math.abs(center - childCenter)
      if (dist < minDist) { minDist = dist; closest = i }
    })
    setActive(closest)
  }

  

  return (
    <section className="vl-section" id="village">

      {/* ── Section header ── */}
      <div className="sec-header">
        <p className="sec-eyebrow">The Village</p>
        <h2 className="sec-title">Life in Udagama</h2>
        <p className="sec-sub">A place where time slows down and every path leads to something beautiful.</p>
        
      </div>

      {/* ── Single wide card ── */}
      <div className="vl-card">

        {/* Left — text side */}
        <div className="vl-info">
          <p className="vl-label">
            <span className="vl-label-line" />
            Explore the Beauty
          </p>
          <h3 className="vl-heading">Walk Through<br />the Heart of<br />the Village</h3>
          <p className="vl-desc">
            Wander through emerald paddy fields that shimmer in the morning mist,
            follow winding muddy tracks into the forest, and discover wildflowers
            blooming along every path. Udagama is not just a destination — it is a
            feeling. The kind that fills your lungs with clean mountain air and your
            eyes with colours you did not know existed. Here, the pace of village
            life draws you in, and the raw beauty of nature reminds you what the
            world looks like when left untouched.
          </p>

          <div className="vl-highlights">
            {HIGHLIGHTS.map(h => (
              <span className="vl-hl" key={h.label}>
                <span className="vl-hl-icon">{h.icon}</span>
                {h.label}
              </span>
            ))}
          </div>

          

          
        </div>

        {/* Right — horizontal scroll carousel */}
        <div className="vl-carousel-wrap">
          <div className="vl-track" ref={trackRef} onScroll={onScroll}>
            {PHOTOS.map((src, i) => (
              <div
                className={`vl-slide ${i === active ? 'active' : ''}`}
                key={i}
                onClick={() => scrollTo(i)}
              >
                <img src={src} alt={`Udagama village ${i + 1}`} loading="lazy" />
                <div className="vl-slide-grad" />
              </div>
            ))}
          </div>

          {/* Dot row */}
          <div className="vl-dots">
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                className={`vl-dot ${i === active ? 'active' : ''}`}
                onClick={() => scrollTo(i)}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}