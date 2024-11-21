import { NavLink } from 'react-router-dom'
import './projectLinks.scss'

function ProjectLinks({ webSite, siteCode }) {
  return (
    <nav className="projectLinks">
      <div className="projectLinks_container">
        {webSite ? (
          <NavLink to={webSite} target="_blank" rel="noopener noreferrer">
            <i className="projectLinks_icon fa-solid fa-globe"></i>
          </NavLink>
        ) : null}
        {siteCode ? (
          <NavLink to={siteCode} target="_blank" rel="noopener noreferrer">
            <i className="projectLinks_icon fa-brands fa-github"></i>
          </NavLink>
        ) : null}
      </div>
    </nav>
  )
}

export default ProjectLinks
