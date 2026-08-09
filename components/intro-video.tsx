'use client'

import Image from 'next/image'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const frames = [
  { image: '/images/woolen-decor.png', label: 'Soft textures', title: 'A softer way to live.' },
  { image: '/images/crochet-decor.png', label: 'Handwoven details', title: 'Made slowly. Felt deeply.' },
  { image: '/images/clay-decor.png', label: 'Earth made', title: 'Objects with quiet character.' },
]

export function IntroVideo() {
  const [activeFrame, setActiveFrame] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const audioContextRef = useRef<AudioContext | null>(null)
  const audioTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (audioTimerRef.current) window.clearTimeout(audioTimerRef.current)
      audioContextRef.current?.close()
    }
  }, [])

  const toggleSound = () => {
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!AudioContextClass) return
      audioContextRef.current = new AudioContextClass()
    }

    const context = audioContextRef.current
    if (isMuted) {
      void context.resume()
      const playPhrase = () => {
        const notes = [220, 277.18, 329.63, 440]
        notes.forEach((frequency, index) => {
          const oscillator = context.createOscillator()
          const gain = context.createGain()
          oscillator.type = 'sine'
          oscillator.frequency.value = frequency
          gain.gain.setValueAtTime(0, context.currentTime)
          gain.gain.linearRampToValueAtTime(0.025, context.currentTime + 0.8)
          gain.gain.linearRampToValueAtTime(0, context.currentTime + 3.8)
          oscillator.connect(gain).connect(context.destination)
          oscillator.start(context.currentTime + index * 0.35)
          oscillator.stop(context.currentTime + 4.2)
        })
      }
      playPhrase()
      audioTimerRef.current = window.setInterval(playPhrase, 5200)
    } else {
      void context.suspend()
    }
    setIsMuted((value) => !value)
  }

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
          <button type="button" onClick={toggleSound} aria-label={isMuted ? 'Play instrumental sound' : 'Mute instrumental sound'}>
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
