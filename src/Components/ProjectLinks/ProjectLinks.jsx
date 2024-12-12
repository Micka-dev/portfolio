import { NavLink } from 'react-router-dom'
import './projectLinks.scss'

function ProjectLinks({ webSite, siteCode }) {
  return (
    <nav className="projectLinks">
      <div className="projectLinks_container">
        {webSite ? (
          <NavLink
            to={webSite}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitez le site web"
            title="Visitez le site web"
          >
            <i
              className="projectLinks_icon fa-solid fa-globe"
              aria-hidden="true"
            ></i>
          </NavLink>
        ) : null}
        {siteCode ? (
          <NavLink
            to={siteCode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir le code source sur GitHub"
            title="Voir le code source sur GitHub"
          >
            <i
              className="projectLinks_icon fa-brands fa-github"
              aria-hidden="true"
            ></i>
          </NavLink>
        ) : null}
      </div>
    </nav>
  )
}

export default ProjectLinks
