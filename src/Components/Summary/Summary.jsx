import './summary.scss'
import photoProfil from '../../Assets/Micka.png'
import { Link } from 'react-router-dom'

function Summary() {
  return (
    <div>
      <div className="summary-container">
        <Link to="/about">
          <img
            src={photoProfil}
            className="summary-container_img"
            alt="Mickaël Douceré"
          />
        </Link>
        <h1 className="summary-container_title">
          Mickaël Douceré <br></br>Développeur Web
        </h1>
        <p className="summary-container_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          accusamus cum quaerat incidunt debitis modi, ullam beatae. Qui
          assumenda provident amet eum aspernatur molestias quasi omnis totam
          eveniet, sunt earum.
        </p>
      </div>
    </div>
  )
}

export default Summary
