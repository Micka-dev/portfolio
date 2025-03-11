import './summary.scss'
import photoProfil from '../../Assets/Micka.webp'
import { Link } from 'react-router-dom'
import technologies from '../../Datas/Technologies/technologies-outils.json'
import Cube from '../Cube/Cube.jsx'
import TechKey from '../TechKey/TechKey.jsx'
import ContactLink from '../../Components/ContactLink/ContactLink'

function Summary({ intro }) {
  const techLeftNames = ['React', 'SASS']
  const selectedLeftTechs = technologies.filter((tech) =>
    techLeftNames.includes(tech.name)
  )
  const techRightNames = ['Redux']
  const selectedRightTechs = technologies.filter((tech) =>
    techRightNames.includes(tech.name)
  )

  return (
    <header className="summary-container">
      <div className="header-intro_container">
        <div className="main-stack-container">
          <div className="keys-main-container">
            <div className="keys-container1">
              {selectedLeftTechs.map((tech, index) => (
                <TechKey key={index} tech={tech} delay={index} />
              ))}
            </div>
            <div className="keys-container2">
              {selectedRightTechs.map((tech, index) => (
                <TechKey
                  key={index}
                  tech={tech}
                  delay={index}
                  // permet d'ajouter la classe key2 et d'utiliser delay2-#
                  variant="here"
                />
              ))}
            </div>
          </div>
        </div>
        <Link className="summary-container_portrait" to="/about">
          <img
            src={photoProfil}
            className="summary-container_img"
            alt="Portrait Mickaël Douceré"
          />
        </Link>
        <Cube />
      </div>
      <h1 className="summary-container_title">
        Mickaël Douceré <br></br>Développeur Web
      </h1>
      <Link to="/contact">
        <p className="summary-container_availability">
          Disponible pour de nouvelles opportunités
        </p>
      </Link>
      <div className="summary-container_main-links-container">
        <ContactLink
          href="mailto:mickael.doucere@gmail.com"
          ariaLabel="M'envoyer un email à mickael.doucere@gmail.com"
          title="M'envoyer un email à mickael.doucere@gmail.com"
          iconClass="fa-solid fa-at"
        />
        <ContactLink
          href="https://www.linkedin.com/in/mickaël-douceré/"
          ariaLabel="Me retrouver sur LinkedIn"
          title="Me retrouver sur LinkedIn"
          iconClass="fa-brands fa-linkedin"
        />
        <ContactLink
          href="https://github.com/Micka-dev"
          ariaLabel="Me retrouver sur GitHub"
          title="Me retrouver sur GitHub"
          iconClass="fa-brands fa-github"
        />
        <a
          className="preview-cv"
          href={`${process.env.PUBLIC_URL}/CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          title="Prévisualiser mon CV avant de le partager"
        >
          CV
        </a>
      </div>
      <p
        className="summary-container_text"
        dangerouslySetInnerHTML={{ __html: intro }}
      ></p>
    </header>
  )
}

export default Summary
