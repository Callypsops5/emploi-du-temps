import { useState } from 'react'
import Grille from './components/Grille/Grille'
import Creneau from './components/Creneau/Creneau'
import './App.css'

function App() {
  const [creneaux] = useState([
    { id: 1, matiere: 'Maths', jour: 0, heure: 9, duree: 2, couleur: '#4f8ef7' },
  ])

  return (
    <Grille>
      {creneaux.map((c) => (
        <Creneau key={c.id} {...c} />
      ))}
    </Grille>
  )
}

export default App