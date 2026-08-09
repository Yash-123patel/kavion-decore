'use client'

import Image from 'next/image'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useState } from 'react'

const frames = [
  { image: '/images/woolen-decor.png', label: 'Soft textures', title: 'A softer way to live.' },
  { image: '/images/crochet-decor.png', label: 'Handwoven details', title: 'Made slowly. Felt deeply.' },
  { image: '/images/clay-decor.png', label: 'Earth made', title: 'Objects with quiet character.' },
]

export function IntroVideo() {
  const [activeFrame, setActiveFrame] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % frames.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [isPlaying])

  const frame = frames[activeFrame]

  return (
    <section className="intro-video shell" aria-label="Kevion Decors introduction">
      <div className="intro-video-header">
        <div>
          <p className="eyebrow">A little introduction</p>
          <h2>Objects that make<br /><em>a room feel yours.</em></h2>
        </div>
        <p className="intro-video-lede">Step into the world of Kevion Decors — where handmade texture, natural materials and thoughtful detail come together.</p>
      </div>

      <div className="intro-video-stage" aria-live="polite">
        <div className="intro-video-frame active">
          <Image src={frame.image} alt="" fill sizes="(max-width: 700px) 100vw, 1180px" loading="lazy" quality={72} />
        </div>
        <div className="intro-video-overlay" />
        <div className="intro-video-copy">
          <span>{frame.label}</span>
          <h3>{frame.title}</h3>
        </div>
        <div className="intro-video-controls">
          <button type="button" onClick={() => setIsPlaying((value) => !value)} aria-label={isPlaying ? 'Pause introduction' : 'Play introduction'}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button type="button" onClick={() => setIsMuted((value) => !value)} aria-label={isMuted ? 'Unmute introduction' : 'Mute introduction'}>
            {isMuted ? <VolumeX /> : <Volume2 />}
          </button>
          <div className="intro-video-progress" aria-label={`Introduction scene ${activeFrame + 1} of ${frames.length}`}>
            {frames.map((item, index) => <button type="button" key={item.label} className={index === activeFrame ? 'active' : ''} aria-label={`Show scene ${index + 1}`} onClick={() => setActiveFrame(index)} />)}
          </div>
          <span className="intro-video-time">0{activeFrame + 1} / 0{frames.length}</span>
        </div>
      </div>
    </section>
  )
}
