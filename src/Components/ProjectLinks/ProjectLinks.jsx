import { NavLink } from 'react-router-dom'
import './projectLinks.scss'

function ProjectLinks({ webSite, siteCode }) {
  console.log('webSite', webSite)

  return (
    <div className="projectLinks">
      <div className="projectLinks_container">
        {webSite ? (
          <NavLink to={webSite}>
            <i className="projectLinks_icon fa-solid fa-globe"></i>
          </NavLink>
        ) : null}
        {siteCode ? (
          <NavLink to={siteCode}>
            <i className="projectLinks_icon fa-brands fa-github"></i>
          </NavLink>
        ) : null}
      </div>
    </div>
  )
}

export default ProjectLinks
