import './Experience.css'

const EXPERIENCES = [
  {
    cat: 'Nature',
    title: 'Pure Nature',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2a9 9 0 0 1 9 9c0 5-9 13-9 13S3 16 3 11a9 9 0 0 1 9-9z"/>
        <circle cx="12" cy="11" r="3"/>
      </svg>
    ),
    color: '#2d8a60',
    bg: 'rgba(45,138,96,0.1)',
    border: 'rgba(45,138,96,0.3)',
    items: [
      'Hidden waterfalls in the forest',
      'Green paddy fields and mountain views',
      'Fresh streams and natural pools',
    ],
    quote: 'Where the forest breathes.',
  },

  {
    cat: 'Adventure',
    title: 'Adventure',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    color: '#b8840e',
    bg: 'rgba(184,132,14,0.1)',
    border: 'rgba(184,132,14,0.3)',
    items: [
      'Jungle hiking trails',
      'Natural rock pool swimming',
      'Sunrise and sunset trekking',
    ],
    quote: 'Every trail feels different.',
  },

  {
    cat: 'Peace',
    title: 'Relax & Rest',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: '#5a8abf',
    bg: 'rgba(90,138,191,0.1)',
    border: 'rgba(90,138,191,0.3)',
    items: [
      'Quiet nature atmosphere',
      'Cool mountain air',
      'Peaceful nights under stars',
    ],
    quote: 'Silence that heals the mind.',
  },

  {
    cat: 'Culture',
    title: 'Village Culture',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: '#b83a20',
    bg: 'rgba(184,58,32,0.1)',
    border: 'rgba(184,58,32,0.3)',
    items: [
      'Traditional village lifestyle',
      'Authentic Sri Lankan food',
      'Friendly local community',
    ],
    quote: 'Traditions still live here.',
  },
]

export default function Experience() {
  return (
    <section className="exp-section" id="experience">

      <div className="sec-header">
        <p className="sec-eyebrow">What Awaits You</p>

        <h2 className="sec-title">
          The Udagama Experience
        </h2>

        <p className="sec-sub">
          Discover nature, adventure, peace and culture.
        </p>

        <div className="sec-divider">
          <span />
          <span className="diamond" />
          <span />
        </div>
      </div>

      <div className="exp-grid">
        {EXPERIENCES.map((exp, index) => (
          <article
            className="exp-card"
            key={index}
            style={{
              '--exp-color': exp.color,
              '--exp-bg': exp.bg,
              '--exp-border': exp.border,
            }}
          >

            <div className="exp-card-top">
              <div className="exp-icon-wrap">
                {exp.icon}
              </div>

              <div>
                <p className="exp-cat">
                  {exp.cat}
                </p>

                <h3 className="exp-title">
                  {exp.title}
                </h3>
              </div>
            </div>

            <ul className="exp-list">
              {exp.items.map((item, i) => (
                <li key={i}>
                  <span className="exp-dot" />
                  {item}
                </li>
              ))}
            </ul>

            <blockquote className="exp-quote">
              <span className="exp-quote-mark">"</span>
              {exp.quote}
            </blockquote>

          </article>
        ))}
      </div>

    </section>
  )
}