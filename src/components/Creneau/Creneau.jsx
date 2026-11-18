import './Creneau.css'

function Creneau({ matiere, jour, heure, duree, couleur }) {
  return (
    <div
      className="creneau"
      style={{
        gridColumn: jour + 2,
        gridRow: `${heure - 8 + 2} / span ${duree}`,
        background: couleur,
      }}
    >
      {matiere}
    </div>
  )
}

export default Creneau