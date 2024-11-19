import './summary.scss'
import photoProfil from '../../Assets/Micka.webp'
import { Link } from 'react-router-dom'

function Summary({ intro }) {
  return (
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
      <p
        className="summary-container_text"
        dangerouslySetInnerHTML={{ __html: intro }}
      ></p>
    </div>
  )
}

export default Summary
