import './Grille.css'

const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const heures = Array.from({ length: 12 }, (_, i) => 8 + i)

function Grille({ children }) {
  return (
    <div className="grille">
      <div className="case entete"></div>
      {jours.map((jour) => (
        <div key={jour} className="case entete">{jour}</div>
      ))}

      {heures.map((h) => (
        <div key={h} style={{ display: 'contents' }}>
          <div className="case heure">{h}h</div>
          {jours.map((jour) => (
            <div key={jour + h} className="case"></div>
          ))}
        </div>
      ))}

      {children}
    </div>
  )
}

export default Grille