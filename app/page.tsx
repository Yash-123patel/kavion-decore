'use client'

import { ArrowUpRight, Camera, HandHeart, Leaf, Menu, MessageCircle, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const whatsappUrl = 'https://wa.me/919301498676?text=Hi%2C%20I%27m%20interested%20in%20Kevion%20Decors'
const instagramUrl = 'https://www.instagram.com/kevion_decors?igsh=cGp5d3NuejAwc2li'

const collections = [
  { title: 'Woolen items', category: '01 — soft textures', description: 'Warm, tactile pieces for slow living.', image: '/images/woolen-decor.png' },
  { title: 'Crochet items', category: '02 — handwoven', description: 'Delicate details with a handmade soul.', image: '/images/crochet-decor.png' },
  { title: 'Moulded clay items', category: '03 — earth made', description: 'Organic forms shaped one piece at a time.', image: '/images/clay-decor.png' },
  { title: 'Mandala arts', category: '04 — mindful art', description: 'Pattern, color and balance for considered walls.', image: '/images/mandala-art.png' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell">
          <a href="#home" className="nav-logo"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%208%2C%202026%2C%2005_54_03%20PM-v4hMOHZWmPyHDmMeIqA3GD9eRe4F0c.png" alt="Kevion Decors" width={210} height={120} /></a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="/available-items" onClick={() => setMenuOpen(false)}>Available items</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Instagram <ArrowUpRight size={14} /></a>
          </div>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={15} /></a>
          <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu size={22} /></button>
        </nav>
        <div className="hero-content shell">
          <p className="eyebrow">Wool · Crochet · Clay · Mandala</p>
          <h1>Handmade pieces<br /><em>with a story.</em></h1>
          <p className="hero-copy">Thoughtful decor made by hand, bringing texture, warmth and quiet character into the spaces you call home.</p>
          <div className="hero-actions"><a className="button button-dark" href="#collection">Explore the collection <ArrowUpRight size={16} /></a><a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">Follow our journal <Camera size={16} /></a></div>
        </div>
        <div className="hero-note">Designing spaces,<br />defining lifestyles.</div>
      </section>

      <section className="intro shell" id="story"><p className="eyebrow">The Kevion point of view</p><div className="intro-grid"><h2>We believe a home should be <em>felt</em> before it is seen.</h2><div><p>From calm, considered rooms to the objects that make them yours, we create interiors with a quiet confidence and a love for the details.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Tell us about your space <ArrowUpRight size={16} /></a></div></div></section>

      <section className="collection shell" id="collection"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Made for living.</h2></div><span className="section-count">04 / 04</span></div><div className="collection-grid">{collections.map((item) => <a className="collection-card" key={item.title} href={whatsappUrl} target="_blank" rel="noreferrer"><div className="image-wrap"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="card-meta"><div><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p></div><ArrowUpRight size={20} /></div></a>)}</div></section>

      <section className="cotton"><div className="shell cotton-grid"><div><p className="eyebrow">The handcrafted collection</p><h2>Made by hand,<br /><em>made to keep.</em></h2></div><div><p className="cotton-copy">From cozy woolen textures and intricate crochet to moulded clay and meditative mandala art, every piece brings warmth, character and a personal touch to your space.</p><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Enquire about the collection <ArrowUpRight size={16} /></a></div></div></section>

      <section className="values shell"><div className="section-heading"><div><p className="eyebrow">Why choose handmade</p><h2>Details worth<br /><em>living with.</em></h2></div></div><div className="values-grid"><div className="value-card"><HandHeart size={24} /><h3>Made with care</h3><p>Every piece carries the touch, patience and personality of its maker.</p></div><div className="value-card"><Leaf size={24} /><h3>Inspired by nature</h3><p>Organic colors and grounded textures bring a softer rhythm home.</p></div><div className="value-card"><Sparkles size={24} /><h3>One of a kind</h3><p>Small variations make your piece uniquely yours, never mass-produced.</p></div></div></section>

      <section className="availability"><div className="shell availability-inner"><div><p className="eyebrow">Bring it home</p><h2>Find your<br /><em>favorite piece.</em></h2></div><p>Browse the collection, save what speaks to you, and message us for sizes, colors and custom orders.</p><a className="button button-dark" href="/available-items">See available items <ArrowUpRight size={16} /></a></div></section>

      <section className="closing shell"><Sparkles size={23} /><h2>Like something?<br /><em>Let&apos;s make it yours.</em></h2><p>Every Kevion piece begins with a conversation.</p><a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Chat on WhatsApp</a></section>

      <footer className="footer"><div className="shell footer-inner"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%208%2C%202026%2C%2005_54_03%20PM-v4hMOHZWmPyHDmMeIqA3GD9eRe4F0c.png" alt="Kevion Decors" width={155} height={90} /><p>Designing spaces, defining lifestyles.</p><a href={instagramUrl} target="_blank" rel="noreferrer"><Camera size={19} /></a><span>© 2026 Kevion Decors</span></div></footer>
      <a className="float-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Kevion Decors on WhatsApp"><MessageCircle size={22} /></a>
    </main>
  )
}
