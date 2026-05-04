import './Nearby.css'

const udawalawa =  "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872941/udawalawa_ru3nnf.jpg"
const morning = "https://res.cloudinary.com/dplcqfgvq/image/upload/v1777872842/morning_mxxhsz.jpg";
const waulpane = "https://res.cloudinary.com/dplcqfgvq/image/upload/v1777872948/waulpane_cmrj1u.jpg"

const PLACES = [
  {
    id: '01',
    name: 'Udawalawe National Park',
    type: 'Wildlife Safari',
    distance: '~25 km',
    time: '30 min drive',
    image: udawalawa,

    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2"/>
        <line x1="12" y1="6" x2="12" y2="8"/>
        <line x1="12" y1="16" x2="12" y2="18"/>
      </svg>
    ),

    color: '#2d8a60',
    bg: 'rgba(45,138,96,0.1)',
    border: 'rgba(45,138,96,0.28)',

    tag: 'Must Visit',
    tagColor: '#2d8a60',

    desc:
      'One of Sri Lanka’s finest wildlife sanctuaries, famous for wild elephants, jeep safaris and breathtaking nature. Established in 1972, it serves as a sanctuary for wildlife displaced by the Udawalawe Reservoir.',

    highlights: [
      'Wild Elephants',
      'Jeep Safari',
      'Bird Watching',
      'Leopards',
    ],
  },

  {
    id: '02',
    name: 'Waulpane Hunugal Guhawa',
    type: 'Geotourism ',
    distance: '~10 km',
    time: '20 min drive',
    image: waulpane,

    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),

    color: '#b8840e',
    bg: 'rgba(184,132,14,0.1)',
    border: 'rgba(184,132,14,0.28)',

    tag: 'Hidden Gem',
    tagColor: '#b8840e',

    desc:
      'Waulpane, known as the "Cave of Bats," is a prehistoric limestone cave system located in the Rakwana range, roughly 278 meters above sea level. It is famous for housing a massive colony of over 250,000 to 1,000,000 bats and for its internal waterfall.',

    highlights: [
      'Rock Paintings',
      'Buddha Statues',
      'Forest Climb',
      'Ancient History',
    ],
  },

  {
    id: '03',
    name: 'Morning Side Tea Estate',
    type: 'Eco-Hiking',
    distance: '~18 km',
    time: '30 min drive',
    image: morning,

    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="2" x2="6" y2="4"/>
        <line x1="10" y1="2" x2="10" y2="4"/>
        <line x1="14" y1="2" x2="14" y2="4"/>
      </svg>
    ),

    color: '#5a8abf',
    bg: 'rgba(90,138,191,0.1)',
    border: 'rgba(90,138,191,0.28)',

    tag: 'Scenic',
    tagColor: '#5a8abf',

    desc:
      'Morningside, located in Suriyakanda, is a remote and misty plateau on the eastern edge of the Sinharaja Forest Reserve. Often called the "Nuwara Eliya of the South," it is famous for its cool climate and the fact that it feels like morning all day long due to the persistent mist',

    highlights: [
      'Tea Tasting',
      'Factory Tour',
      'Mountain Views',
      'Tea Plucking',
    ],
  },
]

export default function Nearby() {
  return (
    <section className="nb-section" id="nearby">

      <div className="sec-header">
        <p className="sec-eyebrow">Day Trips</p>

        <h2 className="sec-title">
          Nearby Attractions
        </h2>

        <p className="sec-sub">
          Explore amazing destinations around Udagama.
        </p>

        <div className="sec-divider">
          <span />
          <span className="diamond" />
          <span />
        </div>
      </div>

      <div className="nb-grid">

        {PLACES.map(place => (

          <article
            className="nb-card"
            key={place.id}
            style={{
              '--nb-color': place.color,
              '--nb-bg': place.bg,
              '--nb-border': place.border,
            }}
          >

            <div className="nb-accent" />

            {/* IMAGE */}
            <div className="nb-image-wrap">
              <img
                src={place.image}
                alt={place.name}
                className="nb-image"
              />

              <div className="nb-image-overlay" />

              <span
                className="nb-tag nb-tag-image"
                style={{
                  color: place.tagColor,
                  background: place.bg,
                  border: `1px solid ${place.border}`,
                }}
              >
                {place.tag}
              </span>
            </div>

            {/* HEAD */}
            <div className="nb-head">

              <div className="nb-icon">
                {place.icon}
              </div>

              <div className="nb-meta-row">
                <span className="nb-type">
                  {place.type}
                </span>
              </div>

            </div>

            {/* BODY */}
            <div className="nb-body">

              

              <h3 className="nb-name">
                {place.name}
              </h3>

              <p className="nb-desc">
                {place.desc}
              </p>

              <div className="nb-highlights">
                {place.highlights.map(h => (
                  <span className="nb-hl" key={h}>
                    {h}
                  </span>
                ))}
              </div>

            </div>

            {/* FOOTER */}
            <div className="nb-footer">

              <div className="nb-distance">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>

                {place.distance}
              </div>

              <div className="nb-time">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>

                {place.time}
              </div>

            </div>

          </article>
        ))}
      </div>

      {/* NOTE */}
      <div className="nb-note">

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>

        <p>
          Local transport & guided trips can be arranged through the village.
        </p>

      </div>

    </section>
  )
}