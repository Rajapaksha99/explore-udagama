import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ─────────────────────────────────────────────
//  PASTE YOUR EMAILJS KEYS HERE
//  Get them from https://www.emailjs.com
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_t7dy43m'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_5wgjpf5'  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'lbx_gEjznolSK3DSK'   // e.g. 'aBcDeFgHiJkLmNoP'
// ─────────────────────────────────────────────

const SUBJECTS = [
  'General Inquiry',
  'Planning a Visit',
  'Waterfall Hike Guide',
  'Accommodation & Stay',
  'Photography / Media',
  'Group / Tour Booking',
  'Other',
]

const INITIAL = { from_name: '', from_email: '', subject: '', message: '' }

export default function Contact() {
  const formRef                   = useRef(null)
  const [fields,   setFields]     = useState(INITIAL)
  const [errors,   setErrors]     = useState({})
  const [status,   setStatus]     = useState('idle') // idle | sending | success | error
  const [focused,  setFocused]    = useState(null)

  /* ── Validation ── */
  const validate = () => {
    const e = {}
    if (!fields.from_name.trim())                        e.from_name  = 'Please enter your name.'
    if (!fields.from_email.trim())                       e.from_email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.from_email))
                                                         e.from_email = 'Please enter a valid email.'
    if (!fields.subject)                                 e.subject    = 'Please choose a subject.'
    if (!fields.message.trim())                          e.message    = 'Please write your message.'
    else if (fields.message.trim().length < 20)          e.message    = 'Message must be at least 20 characters.'
    return e
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  /* ── Submit ── */
  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFields(INITIAL)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const reset = () => setStatus('idle')

  return (
    <section className="ct-section" id="contact">

      {/* ── Header ── */}
      <div className="sec-header">
        <p className="sec-eyebrow">Get in Touch</p>
        <h2 className="sec-title">Send Us a Message</h2>
        <p className="sec-sub">Planning a visit? Have a question? We'd love to hear from you.</p>
        <div className="sec-divider"><span /><span className="diamond" /><span /></div>
      </div>

      <div className="ct-wrapper">

        {/* ── Left — decorative info ── */}
        <div className="ct-aside">
          <div className="ct-aside-inner">

            <p className="ct-aside-label">Why reach out?</p>
            <ul className="ct-aside-list">
              {[
                { icon: '🗺️', text: 'Get personalised directions to the village' },
                { icon: '🥾', text: 'Book a guided waterfall hike' },
                { icon: '📸', text: 'Photography & media visit planning' },
                { icon: '🏡', text: 'Ask about local stay arrangements' },
                { icon: '👥', text: 'Organise a group or tour booking' },
                { icon: '❓', text: 'Any question about Udagama' },
              ].map((item, i) => (
                <li key={i} className="ct-aside-item">
                  <span className="ct-aside-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="ct-aside-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              We typically reply within 24 hours.
            </div>

          </div>
        </div>

        {/* ── Right — form ── */}
        <div className="ct-form-wrap">

          {/* ══ SUCCESS state ══ */}
          {status === 'success' && (
            <div className="ct-success">
              <div className="ct-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="ct-success-title">Message Sent!</h3>
              <p className="ct-success-sub">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button className="ct-success-btn" onClick={reset}>Send Another Message</button>
            </div>
          )}

          {/* ══ ERROR state ══ */}
          {status === 'error' && (
            <div className="ct-error-banner">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>Something went wrong. Please try again or contact us directly.</span>
              <button onClick={reset} className="ct-error-close">✕</button>
            </div>
          )}

          {/* ══ FORM ══ */}
          {status !== 'success' && (
            <form className="ct-form" ref={formRef} onSubmit={onSubmit} noValidate>

              {/* Name + Email row */}
              <div className="ct-row">
                <div className={`ct-field ${focused === 'from_name' ? 'focused' : ''} ${errors.from_name ? 'has-error' : ''} ${fields.from_name ? 'has-value' : ''}`}>
                  <label htmlFor="from_name">Your Name</label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    value={fields.from_name}
                    onChange={onChange}
                    onFocus={() => setFocused('from_name')}
                    onBlur={() => setFocused(null)}
                    placeholder="John Silva"
                    autoComplete="name"
                  />
                  {errors.from_name && <span className="ct-err">{errors.from_name}</span>}
                </div>

                <div className={`ct-field ${focused === 'from_email' ? 'focused' : ''} ${errors.from_email ? 'has-error' : ''} ${fields.from_email ? 'has-value' : ''}`}>
                  <label htmlFor="from_email">Your Email</label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    value={fields.from_email}
                    onChange={onChange}
                    onFocus={() => setFocused('from_email')}
                    onBlur={() => setFocused(null)}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {errors.from_email && <span className="ct-err">{errors.from_email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className={`ct-field ${focused === 'subject' ? 'focused' : ''} ${errors.subject ? 'has-error' : ''} ${fields.subject ? 'has-value' : ''}`}>
                <label htmlFor="subject">Subject</label>
                <div className="ct-select-wrap">
                  <select
                    id="subject"
                    name="subject"
                    value={fields.subject}
                    onChange={onChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="" disabled>Select a subject…</option>
                    {SUBJECTS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <svg className="ct-select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                {errors.subject && <span className="ct-err">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className={`ct-field ${focused === 'message' ? 'focused' : ''} ${errors.message ? 'has-error' : ''} ${fields.message ? 'has-value' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={fields.message}
                  onChange={onChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell us about your visit plans, questions, or anything you'd like to know about Udagama…"
                />
                <span className="ct-char-count">{fields.message.length} chars</span>
                {errors.message && <span className="ct-err">{errors.message}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`ct-submit ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="ct-spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  )
}