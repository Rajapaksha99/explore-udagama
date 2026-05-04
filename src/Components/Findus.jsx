import './Findus.css'

const DIRECTIONS = [
  
  {
    from:  'From Embilipitiya',
    route: 'Head north on the Embilipitiya–Rathnapura Road → Turn at Waulpane junction → Follow the village road into Udagama.',
    time:  '~35 min',
    km:    '~22 km',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    from:  'From Ratnapura',
    route: 'Take the Ratnapura–Embilipitiya Road south → Take your right from thunthota junction pallebedda → Continue to Udagama.',
    time:  '~1.5 hrs',
    km:    '~55 km',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
]

const CONTACTS = [
  {
    type:  'Phone',
    value: '+94 70 188 5056',
    sub:   'Call us for any enquiry',
    href:  'tel:+94701885056',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    color: '#2d8a60',
  },
  {
    type:  'WhatsApp',
    value: '+94 70 188 5056',
    sub:   'Message us on WhatsApp',
    href:  'https://wa.me/94701885056',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
    color: '#25d366',
  },
  {
    type:  'Email',
    value: 'rmkrr99@gmail.com',
    sub:   'Write to us anytime',
    href:  'mailto:rmkrr99@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: '#b8840e',
  },
]

export default function FindUs() {
  return (
    <section className="fu-section" id="map">

      {/* ── Header ── */}
      <div className="sec-header">
        <p className="sec-eyebrow">Find Us</p>
        <h2 className="sec-title">Get to Udagama</h2>
        <p className="sec-sub">Nestled in the highland foothills of Sabaragamuwa — closer than you think, wilder than you expect.</p>
        <div className="sec-divider"><span /><span className="diamond" /><span /></div>
      </div>

      {/* ── Two-column layout ── */}
      <div className="fu-grid">

        {/* ══ LEFT — Info panel ══ */}
        <div className="fu-left">

          {/* Location badge */}
          <div className="fu-location-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Udagama, Pallebedda, Sabaragamuwa, Sri Lanka</span>
          </div>

          {/* ── Directions ── */}
          <div className="fu-block">
            <p className="fu-block-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              How to Get Here
            </p>
            <div className="fu-directions">
              {DIRECTIONS.map((d, i) => (
                <div className="fu-dir" key={i}>
                  <div className="fu-dir-icon">{d.icon}</div>
                  <div className="fu-dir-body">
                    <p className="fu-dir-from">{d.from}</p>
                    <p className="fu-dir-route">{d.route}</p>
                    <div className="fu-dir-meta">
                      <span>🕐 {d.time}</span>
                      <span className="fu-dir-dot" />
                      <span>📍 {d.km}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Contact ── */}
          <div className="fu-block">
            <p className="fu-block-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Contact Us
            </p>
            <div className="fu-contacts">
              {CONTACTS.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="fu-contact"
                  target={c.type === 'WhatsApp' ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{ '--c-color': c.color }}
                >
                  <span className="fu-contact-icon" style={{ color: c.color, background: `${c.color}18`, border: `1px solid ${c.color}35` }}>
                    {c.icon}
                  </span>
                  <div className="fu-contact-text">
                    <span className="fu-contact-type">{c.type}</span>
                    <span className="fu-contact-value">{c.value}</span>
                    <span className="fu-contact-sub">{c.sub}</span>
                  </div>
                  <svg className="fu-contact-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Best time note ── */}
          <div className="fu-tip">
            <span className="fu-tip-icon">☀️</span>
            <p><strong>Best time to visit:</strong> December – April for clear skies and low water. June – September for lush greenery and full waterfalls after the monsoon.</p>
          </div>

        </div>

        {/* ══ RIGHT — Map ══ */}
        <div className="fu-map-wrap">
          <div className="fu-map-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7928.849169127191!2d80.69086918940081!3d6.467776163346649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1777348497500!5m2!1sen!2slk"
              title="Udagama Village Location"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="fu-map"
            />
          </div>

          {/* Open in Google Maps button */}
          <a
            href="https://maps.google.com/?q=6.467776,80.690869"
            target="_blank"
            rel="noreferrer"
            className="fu-map-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Open in Google Maps
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>

        </div>

      </div>
    </section>
  )
}
