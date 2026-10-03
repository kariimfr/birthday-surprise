
'use client'

import { useState } from 'react'
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Gift,
  Heart,
  Music2,
  Pause,
  Play,
  Sparkles,
  Watch,
  X,
} from 'lucide-react'

type Scene =
  | 'envelope'
  | 'birthday'
  | 'menu'
  | 'journey'
  | 'moments'
  | 'playlist'
  | 'gift'
  | 'final'

/* =========================================================
   FOTO BIRTHDAY
   Khusus untuk halaman Birthday
========================================================= */

const birthdayPhotos = [
  {
    src: '/images/.jpg',
    alt: 'Birthday main photo',
  },
  {
    src: '/images/.jpg',
    alt: 'Birthday memory',
  },
]

/* =========================================================
   FOTO JOURNEY
   SETIAP CHAPTER MEMILIKI FOTO BERBEDA
========================================================= */

const journeyPhotos = [
  {
    src: '/images/.jpg',
    chapter: 'Chapter 01',
    date: '06 . 2024',
    caption: 'The first little hello',
  },
  {
    src: '/images/.jpg',
    chapter: 'Chapter 02',
    date: '08 . 2024',
    caption: 'A day worth remembering',
  },
  {
    src: '/images/.jpg',
    chapter: 'Chapter 03',
    date: '08 . 2025',
    caption: 'Where we are now',
  },
]

/* =========================================================
   FOTO MOMENTS
   Khusus untuk halaman Moments
========================================================= */

const momentPhotos = [
  {
    src: '/images/.jpg',
    className: 'photo-one',
    caption: 'That one random day.',
    alt: 'Foto anda',
  },
  {
    src: '/images/.jpg',
    className: 'photo-two',
    caption: 'Simple, but unforgettable.',
    alt: 'Foto anda',
  },
  {
    src: '/images/.jpg',
    className: 'photo-three',
    caption: 'Still one of my favorites.',
    alt: 'Foto anda',
  },
]

/* =========================================================
   FOTO FINAL
========================================================= */

const finalPhoto = '/images/final.jpg'

/* =========================================================
   MENU CHOICES
========================================================= */

const choices = [
  {
    id: 'journey' as const,
    title: 'Journey',
    subtitle: 'Our little journey',
    Icon: Camera,
    className: 'object-camera',
  },
  {
    id: 'moments' as const,
    title: 'Moment',
    subtitle: 'Moments worth remembering',
    Icon: Watch,
    className: 'object-watch',
  },
  {
    id: 'playlist' as const,
    title: 'Playlist',
    subtitle: 'Songs that remind me of you',
    Icon: Music2,
    className: 'object-record',
  },
  {
    id: 'gift' as const,
    title: 'Gift',
    subtitle: 'Something special for you',
    Icon: Gift,
    className: 'object-gift',
  },
]

/* =========================================================
   FLOATING DECORATION
========================================================= */

function FloatingDetails() {
  return (
    <div className="floating-details" aria-hidden="true">
      <span>✦</span>
      <span>✧</span>
      <span>·</span>
      <span>✦</span>
      <i className="butterfly">♧</i>
    </div>
  )
}

/* =========================================================
   BACK BUTTON
========================================================= */

function BackButton({
  onClick,
  label = 'Back to Surprise',
}: {
  onClick: () => void
  label?: string
}) {
  return (
    <button className="back-button" onClick={onClick}>
      <ChevronLeft size={16} />
      {label}
    </button>
  )
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function BirthdaySurprise() {
  const [scene, setScene] = useState<Scene>('envelope')
  const [envelopeOpen, setEnvelopeOpen] = useState(false)
  const [giftOpen, setGiftOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [track, setTrack] = useState(0)

  /* =======================================================
     OPEN ENVELOPE
  ======================================================= */

  const openEnvelope = () => {
    setEnvelopeOpen(true)

    window.setTimeout(() => {
      setScene('birthday')
    }, 900)
  }

  /* =======================================================
     OPEN GIFT
  ======================================================= */

  const openGift = () => {
    setGiftOpen(true)
  }

  /* =======================================================
     SONGS
  ======================================================= */

  const songs = [
    'Bloom — The Paper Kites',
    'Sweet Disposition — The Temper Trap',
    'First Day Of My Life — Bright Eyes',
  ]

  return (
    <main className={`surprise-app scene-${scene}`}>
      <FloatingDetails />

      {/* ===================================================
          SCENE 1 — ENVELOPE
      =================================================== */}

      {scene === 'envelope' && (
        <section
          className={`scene envelope-scene ${
            envelopeOpen ? 'envelope-opening' : ''
          }`}
          aria-label="Open your birthday letter"
        >
          <p className="eyebrow">
            A little something for you
          </p>

          <h1>
            Press the
            <br />
            <em>Envelope</em>
          </h1>

          <button
            className="envelope-button"
            onClick={openEnvelope}
            aria-label="Open the envelope"
          >
            <span className="envelope-paper" />
            <span className="seal">♡</span>
          </button>

          <p className="hint">
            tap to begin <span>✦</span>
          </p>

          <div className="date-stamp">
            08 / 28 / 26
            <br />
            <small>with love</small>
          </div>
        </section>
      )}

      {/* ===================================================
          SCENE 2 — BIRTHDAY
      =================================================== */}

      {scene === 'birthday' && (
        <section className="scene birthday-scene">
          <p className="eyebrow">
            A secret letter, just for you
          </p>

          <h2>
            Happy{' '}
            <em>
              Birthday
              <br />
              Ayraa
            </em>
          </h2>

          <p className="date-large">
            28.08.26
          </p>

          <div className="scrapbook-card">
            <span className="tape tape-top" />

            <span className="scribble">
              for you ✦
            </span>

            {/* FOTO BIRTHDAY 1 */}
            <div className="scrap-photo main-photo">
              <img
                src={birthdayPhotos[0].src}
                alt={birthdayPhotos[0].alt}
              />
            </div>

            {/* FOTO BIRTHDAY 2 */}
            <div className="scrap-photo small-photo">
              <img
                src={birthdayPhotos[1].src}
                alt={birthdayPhotos[1].alt}
              />
            </div>

            <div className="scrap-note">
              another year
              <br />
              of beautiful
              <br />
              <em>you</em>
            </div>

            <span className="flower">
              ✿
            </span>

            <span className="sparkle">
              ✧
            </span>
          </div>

          <p className="subtle-copy">
            A little surprise awaits you...
          </p>

          <button
            className="primary-button"
            onClick={() => setScene('menu')}
          >
            Tap for Surprise
            <Sparkles size={15} />
          </button>
        </section>
      )}

      {/* ===================================================
          SCENE 3 — MENU
      =================================================== */}

      {scene === 'menu' && (
        <section className="scene menu-scene">
          <div
            className="menu-sparkles"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <p className="eyebrow">
            The next chapter
          </p>

          <h2>
            Choose the <em>Surprise</em>
          </h2>

          <p className="subtle-copy">
            Which one would you like to open first?
          </p>

          <div className="choice-grid">
            {choices.map(
              ({
                id,
                title,
                subtitle,
                Icon,
                className,
              }) => (
                <button
                  key={id}
                  className={`choice-object ${className}`}
                  onClick={() => setScene(id)}
                >
                  <span className="object-icon">
                    <Icon
                      size={31}
                      strokeWidth={1.3}
                    />
                  </span>

                  <strong>{title}</strong>

                  <small>{subtitle}</small>
                </button>
              ),
            )}
          </div>

          <p className="menu-footer">
            take your time <span>♡</span>
          </p>
        </section>
      )}

      {/* ===================================================
          SCENE 4 — JOURNEY
          FOTO SUDAH TERPISAH PER CHAPTER
      =================================================== */}

      {scene === 'journey' && (
        <section className="scene content-scene">
          <BackButton
            onClick={() => setScene('menu')}
          />

          <p className="eyebrow">
            Chapter by chapter
          </p>

          <h2>
            Our <em>Journey</em>
          </h2>

          <p className="subtle-copy">
            Every chapter has a story.
          </p>

          <div className="timeline">
            {journeyPhotos.map((item) => (
              <article
                className="timeline-item"
                key={item.chapter}
              >
                <span className="chapter">
                  {item.chapter}
                </span>

                <div className="polaroid">
                  <img
                    src={item.src}
                    alt={item.caption}
                  />

                  <p>
                    {item.caption}
                  </p>
                </div>

                <span className="timeline-date">
                  {item.date}
                </span>
              </article>
            ))}
          </div>

          <p className="closing-line">
            Some memories are worth keeping forever.
          </p>
        </section>
      )}

      {/* ===================================================
          SCENE 5 — MOMENTS
          FOTO KHUSUS MOMENTS
      =================================================== */}

      {scene === 'moments' && (
        <section className="scene content-scene">
          <BackButton
            onClick={() => setScene('menu')}
          />

          <p className="eyebrow">
            The in-between bits
          </p>

          <h2>
            Little <em>Moments</em>
          </h2>

          <p className="subtle-copy">
            The little things became the best memories.
          </p>

          <div className="moment-grid">
            {momentPhotos.map((photo) => (
              <figure
                key={photo.src}
                className={`moment-card ${photo.className}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                />

                <figcaption>
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="moment-heart">
            ♡
          </div>
        </section>
      )}

      {/* ===================================================
          SCENE 6 — PLAYLIST
      =================================================== */}

     
```tsx
{scene === 'playlist' && (
  <section className="scene content-scene playlist-scene">

    <BackButton
      onClick={() => {
        const audio = document.getElementById(
          'birthday-audio'
        ) as HTMLAudioElement | null

        if (audio) {
          audio.pause()
          audio.currentTime = 0
        }

        setPlaying(false)
        setScene('menu')
      }}
    />

    <p className="eyebrow">
      Press play & listen close
    </p>

    <h2>
      A Playlist <em>For You</em> ♫
    </h2>

    <p className="subtle-copy">
      Some feelings sound better as music.
    </p>

    {/* TWO PHOTOS */}
    <div className="playlist-photos">

      <div className="playlist-photo playlist-photo-one">
        <img
          src="/images/.jpeg"
          alt="A special memory"
        />
        <span>♡ a little memory</span>
      </div>

      <div className="playlist-photo playlist-photo-two">
        <img
          src="/images/.jpeg"
          alt="Another special memory"
        />
        <span>✦ one of my favorites</span>
      </div>

    </div>

    {/* AUDIO */}
    <audio
      id="birthday-audio"
      src="/audio/bukanpujangga.mp3"
      loop
    />

    {/* MUSIC PLAYER */}
    <div
      className={`player-wrap ${
        playing ? 'is-playing' : ''
      }`}
    >

      {/* VINYL */}
      <div className="vinyl">
        <div className="vinyl-label">
          for
          <br />
          you
        </div>
      </div>

      {/* PLAYER INFORMATION */}
      <div className="player-info">

        <span className="now-playing">
          Now playing
        </span>

        <strong>
          Bukan Pujangga
        </strong>

        <div className="progress">
          <span />
        </div>

        <div className="player-actions">

          {/* RESTART */}
          <button
            onClick={() => {
              const audio = document.getElementById(
                'birthday-audio'
              ) as HTMLAudioElement | null

              if (audio) {
                audio.currentTime = 0
              }
            }}
            aria-label="Restart song"
          >
            <ChevronLeft />
          </button>

          {/* PLAY / PAUSE */}
          <button
            className="play-button"
            onClick={() => {
              const audio = document.getElementById(
                'birthday-audio'
              ) as HTMLAudioElement | null

              if (!audio) return

              if (playing) {
                audio.pause()
                setPlaying(false)
              } else {
                audio.play()
                setPlaying(true)
              }
            }}
            aria-label={
              playing
                ? 'Pause music'
                : 'Play music'
            }
          >
            {playing ? (
              <Pause fill="currentColor" />
            ) : (
              <Play fill="currentColor" />
            )}
          </button>

          {/* RESTART */}
          <button
            onClick={() => {
              const audio = document.getElementById(
                'birthday-audio'
              ) as HTMLAudioElement | null

              if (audio) {
                audio.currentTime = 0
                audio.play()
                setPlaying(true)
              }
            }}
            aria-label="Play song again"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </div>

    <p className="audio-note">
      {playing
        ? 'Now playing — Bukan Pujangga'
        : 'Press play to begin the little soundtrack'}
    </p>

  </section>
)}
2
      {/* ===================================================
          SCENE 7 — GIFT
      =================================================== */}

      {scene === 'gift' && (
        <section className="scene gift-scene">
          <BackButton
            onClick={() => {
              setScene('menu')
              setGiftOpen(false)
            }}
          />

          <p className="eyebrow">
            One last little thing
          </p>

          {!giftOpen ? (
            <>
              <h2>
                A Little <em>Gift</em> For You
              </h2>

              <p className="subtle-copy">
                There is something inside...
              </p>

              <button
                className="gift-box"
                onClick={openGift}
                aria-label="Open gift"
              >
                <span className="box-lid" />
                <span className="box-body" />
                <span className="ribbon" />
              </button>

              <p className="hint">
                tap to open <span>✦</span>
              </p>
            </>
          ) : (
            <div className="gift-message">
              <Sparkles className="message-sparkle" />

              <p className="eyebrow">
                for the birthday girl
              </p>

              <h2>
                Happy <em>Birthday!</em>
              </h2>

              <p>
                Thank you for being part of so many
                beautiful memories. I hope this year
                brings you happiness, good moments,
                and many reasons to smile.
              </p>

              <strong>
                With love ♡
              </strong>

              <button
                className="primary-button"
                onClick={() =>
                  setScene('final')
                }
              >
                One More Thing...
                <ChevronRight size={15} />
              </button>
            </div>
          )}
        </section>
      )}

      {/* ===================================================
          SCENE 8 — FINAL
      =================================================== */}

      {scene === 'final' && (
        <section className="scene final-scene">
          <div className="final-star">
            ✦
          </div>

          <p className="eyebrow">
            And for the year ahead
          </p>

          <h2>
            Happy Birthday,
            <br />
            <em>you</em> ♡
          </h2>

          <p className="final-copy">
            May your next chapter be
            <br />
            even more beautiful.
          </p>

          <div className="final-polaroid">
            <img
              src='/images/.jpg'
              alt="Foto anda"
            />

            <span>
              made specially for you
            </span>
          </div>

          <button
            className="back-button"
            onClick={() => setScene('menu')}
          >
            <Heart size={14} />
            start again
          </button>
        </section>
      )}

      {/* ===================================================
          MINI MUSIC PLAYER
      =================================================== */}

      {playing && scene !== 'playlist' && (
        <button
          className="mini-player"
          onClick={() => setScene('playlist')}
        >
          <Music2 size={14} />

          <span>
            {songs[track]}
          </span>

          <Pause
            size={13}
            fill="currentColor"
          />
        </button>
      )}

      {/* ===================================================
          CLOSE SCENE
      =================================================== */}

      {scene !== 'envelope' &&
        scene !== 'menu' &&
        scene !== 'final' && (
          <button
            className="close-scene"
            onClick={() => {
              setScene('menu')
              setGiftOpen(false)
            }}
            aria-label="Close scene"
          >
            <X size={16} />
          </button>
        )}
    </main>
  )
}

export default BirthdaySurprise

