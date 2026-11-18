import './Creneau.css'

function Creneau({ matiere, jour, heure, duree, couleur, onDeplacer }) {
  return (
    <div
      className="creneau"
      style={{
        gridColumn: jour + 2,
        gridRow: `${heure - 8 + 2} / span ${duree}`,
        background: couleur,
      }}
    >
      <button onClick={() => onDeplacer(-1)}>◀</button>
      <span>{matiere}</span>
      <button onClick={() => onDeplacer(1)}>▶</button>
    </div>
  )
}

export default Creneau