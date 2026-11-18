import { useState } from 'react'
import Grille from './components/Grille/Grille'
import Creneau from './components/Creneau/Creneau'
import './App.css'

function App() {
  const [creneaux, setCreneaux] = useState([
    { id: 1, matiere: 'Maths', jour: 0, heure: 9, duree: 2, couleur: '#4f8ef7' },
  ])

  // Décale un créneau de deltaJour, sans sortir de la semaine (0 à 6)
  const deplacer = (id, deltaJour) => {
    setCreneaux((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, jour: Math.min(6, Math.max(0, c.jour + deltaJour)) }
          : c
      )
    )
  }

  return (
    <Grille>
      {creneaux.map((c) => (
        <Creneau
          key={c.id}
          {...c}
          onDeplacer={(delta) => deplacer(c.id, delta)}
        />
      ))}
    </Grille>
  )
}

export default App