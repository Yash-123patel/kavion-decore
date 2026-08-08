'use client'

import { ArrowLeft, ArrowUpRight, Camera, Filter, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const whatsappBase = 'https://wa.me/919301498676?text='
const instagramUrl = 'https://www.instagram.com/kevion_decors?igsh=cGp5d3NuejAwc2li'

const items = [
  { name: 'Sage woolen cushion', category: 'Woolen', price: 'Enquire for price', image: '/images/woolen-decor.png', detail: 'Soft texture for slow mornings.' },
  { name: 'Hand-knit winter throw', category: 'Woolen', price: 'Enquire for price', image: '/images/woolen-decor.png', detail: 'A warm layer with quiet character.' },
  { name: 'Crochet flower basket', category: 'Crochet', price: 'Enquire for price', image: '/images/crochet-decor.png', detail: 'A delicate home for everyday things.' },
  { name: 'Ivory crochet wall art', category: 'Crochet', price: 'Enquire for price', image: '/images/crochet-decor.png', detail: 'Handwoven texture for considered walls.' },
  { name: 'Clay arch vase', category: 'Moulded clay', price: 'Enquire for price', image: '/images/clay-decor.png', detail: 'Organic form, shaped one at a time.' },
  { name: 'Earth-tone bud vase', category: 'Moulded clay', price: 'Enquire for price', image: '/images/clay-decor.png', detail: 'A small sculptural accent.' },
  { name: 'Sculptural clay bowl', category: 'Moulded clay', price: 'Enquire for price', image: '/images/clay-decor.png', detail: 'For shelves, tables and slow styling.' },
  { name: 'Golden balance mandala', category: 'Mandala art', price: 'Enquire for price', image: '/images/mandala-art.png', detail: 'Pattern and calm in one composition.' },
  { name: 'Sage garden mandala', category: 'Mandala art', price: 'Enquire for price', image: '/images/mandala-art.png', detail: 'A meditative focal point for your room.' },
  { name: 'Sunrise mandala panel', category: 'Mandala art', price: 'Enquire for price', image: '/images/mandala-art.png', detail: 'A hand-painted note of warmth.' },
  { name: 'Textured crochet runner', category: 'Crochet', price: 'Enquire for price', image: '/images/crochet-decor.png', detail: 'A tactile finishing touch for tables.' },
  { name: 'Handmade clay trio', category: 'Moulded clay', price: 'Enquire for price', image: '/images/clay-decor.png', detail: 'Three imperfect forms, made to belong together.' },
]

const categories = ['All items', 'Woolen', 'Crochet', 'Moulded clay', 'Mandala art']

export default function AvailableItemsPage() {
  const [activeCategory, setActiveCategory] = useState('All items')
  const visibleItems = activeCategory === 'All items' ? items : items.filter((item) => item.category === activeCategory)

  return (
    <main className="catalog-page">
      <header className="catalog-header shell">
        <a className="back-link" href="/"><ArrowLeft size={15} /> Back home</a>
        <a className="catalog-logo" href="/"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%208%2C%202026%2C%2005_54_03%20PM-v4hMOHZWmPyHDmMeIqA3GD9eRe4F0c.png" alt="Kevion Decors" width={180} height={100} /></a>
        <a className="catalog-instagram" href={instagramUrl} target="_blank" rel="noreferrer"><Camera size={16} /> Instagram <ArrowUpRight size={14} /></a>
      </header>

      <section className="catalog-intro shell">
        <p className="eyebrow">Available items · handmade with intention</p>
        <h1>Find something<br /><em>worth keeping.</em></h1>
        <p className="catalog-lede">Browse our small-batch collection of woolen textures, crochet details, moulded clay forms and mandala art. Every piece can be discussed, customized and made yours.</p>
      </section>

      <section className="catalog-list shell">
        <div className="catalog-toolbar"><div className="filter-label"><Filter size={15} /> Filter collection</div><div className="catalog-filters">{categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><span className="catalog-count">{visibleItems.length} items</span></div>
        <div className="items-grid">{visibleItems.map((item) => { const message = encodeURIComponent(`Hi, I am interested in the ${item.name} from Kevion Decors.`); return <article className="item-card" key={item.name}><div className="item-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" /></div><div className="item-info"><div><span>{item.category}</span><h2>{item.name}</h2><p>{item.detail}</p><strong>{item.price}</strong></div><a className="item-arrow" href={`${whatsappBase}${message}`} target="_blank" rel="noreferrer" aria-label={`Enquire about ${item.name}`}><ArrowUpRight size={18} /></a></div><div className="item-actions"><a href={`${whatsappBase}${message}`} target="_blank" rel="noreferrer"><MessageCircle size={14} /> DM on WhatsApp</a><a href={instagramUrl} target="_blank" rel="noreferrer"><Camera size={14} /> DM on Instagram</a></div></article>})}</div>
      </section>

      <section className="catalog-cta"><div className="shell catalog-cta-inner"><div><p className="eyebrow">Need a custom piece?</p><h2>Tell us what<br /><em>you&apos;re imagining.</em></h2></div><div><p>Share a photo, color or idea with us. We&apos;ll help you find the right piece or create something especially for your space.</p><a className="button button-dark" href={`${whatsappBase}${encodeURIComponent('Hi, I would like to discuss a custom Kevion Decors piece.')}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Start a WhatsApp chat</a></div></div></section>
      <footer className="footer"><div className="shell footer-inner"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%208%2C%202026%2C%2005_54_03%20PM-v4hMOHZWmPyHDmMeIqA3GD9eRe4F0c.png" alt="Kevion Decors" width={155} height={90} /><p>Designing spaces, defining lifestyles.</p><a href={instagramUrl} target="_blank" rel="noreferrer"><Camera size={19} /></a><span>© 2026 Kevion Decors</span></div></footer>
    </main>
  )
}
