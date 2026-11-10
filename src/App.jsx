import { useState } from 'react'
import './App.css'

// El juego se carga desde Internet Archive, que aloja el episodio shareware
// oficial de DOOM (1993) y lo corre en el navegador con un emulador de DOS.
const GAME_EMBED_URL = 'https://archive.org/embed/DoomsharewareEpisode'
const GAME_PAGE_URL = 'https://archive.org/details/DoomsharewareEpisode'

const controls = [
  { keys: ['↑', '↓'], action: 'Avanzar / retroceder' },
  { keys: ['←', '→'], action: 'Girar' },
  { keys: ['Ctrl'], action: 'Disparar' },
  { keys: ['Espacio'], action: 'Abrir puertas / usar' },
  { keys: ['Shift'], action: 'Correr (mantener)' },
  { keys: ['Alt'], action: 'Moverse de costado (mantener + flechas)' },
  { keys: ['1', '–', '7'], action: 'Cambiar de arma' },
  { keys: ['Tab'], action: 'Ver el mapa' },
  { keys: ['Esc'], action: 'Menú / pausa' },
]

const facts = [
  {
    number: '1993',
    title: 'El año del lanzamiento',
    text: 'id Software lo publicó el 10 de diciembre de 1993 y cambió para siempre los juegos de disparos en primera persona.',
  },
  {
    number: '9',
    title: 'Niveles gratis',
    text: 'El episodio shareware, “Knee-Deep in the Dead”, se podía copiar y compartir libremente. Es el que vas a jugar acá.',
  },
  {
    number: '1997',
    title: 'Código abierto',
    text: 'El código del motor se liberó y desde entonces DOOM corre en casi cualquier cosa: calculadoras, heladeras y navegadores.',
  },
]

function App() {
  const [playing, setPlaying] = useState(false)

  const startGame = () => {
    setPlaying(true)
    document.getElementById('jugar')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page">
      <header className="nav">
        <span className="brand">
          <span className="brand-dot" /> RETRO ARCADE
        </span>
        <nav>
          <a href="#jugar">Jugar</a>
          <a href="#controles">Controles</a>
          <a href="#historia">Historia</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <p className="eyebrow">Clásico de 1993 · Gratis · Sin instalar nada</p>
        <h1>
          Jugá <span className="accent">DOOM</span>
          <br />
          en tu navegador
        </h1>
        <p className="lead">
          El episodio shareware original, con sus 9 niveles, corriendo en un emulador de DOS
          directamente en esta página.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={startGame}>
            ▶ Jugar ahora
          </button>
          <a className="btn btn-ghost" href="#controles">
            Ver controles
          </a>
        </div>
      </section>

      <section id="jugar" className="section">
        <h2>Zona de juego</h2>
        <p className="section-sub">
          Hacé clic adentro de la pantalla para que el juego tome el teclado. Usá el botón de
          pantalla completa del emulador para una mejor experiencia.
        </p>

        <div className="game-frame">
          {playing ? (
            <iframe
              src={GAME_EMBED_URL}
              title="DOOM (1993) - Episodio shareware"
              allowFullScreen
              allow="fullscreen; autoplay; gamepad"
            />
          ) : (
            <button className="game-placeholder" onClick={() => setPlaying(true)}>
              <span className="play-icon">▶</span>
              <span>Cargar el juego</span>
              <small>Se descarga el emulador (unos segundos)</small>
            </button>
          )}
        </div>
        <p className="note">
          ¿No carga? Probá jugarlo directamente en{' '}
          <a href={GAME_PAGE_URL} target="_blank" rel="noreferrer">
            Internet Archive
          </a>
          .
        </p>
      </section>

      <section id="controles" className="section">
        <h2>Controles</h2>
        <p className="section-sub">Son los controles originales de teclado de la versión de DOS.</p>
        <ul className="controls">
          {controls.map((c) => (
            <li key={c.action}>
              <span className="keys">
                {c.keys.map((k) =>
                  k === '–' ? (
                    <span key={k} className="dash">–</span>
                  ) : (
                    <kbd key={k}>{k}</kbd>
                  ),
                )}
              </span>
              <span>{c.action}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="historia" className="section">
        <h2>Un poco de historia</h2>
        <div className="facts">
          {facts.map((f) => (
            <article key={f.title} className="fact">
              <span className="fact-number">{f.number}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          DOOM es una marca de id Software. El episodio shareware se carga desde{' '}
          <a href={GAME_PAGE_URL} target="_blank" rel="noreferrer">
            Internet Archive
          </a>
          .
        </p>
        <p>Proyecto del Curso Intensivo de Vibe Coding con React · Hecho con React + Vite</p>
      </footer>
    </div>
  )
}

export default App
