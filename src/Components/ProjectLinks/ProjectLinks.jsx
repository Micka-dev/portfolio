import { NavLink } from 'react-router-dom'
import './projectLinks.scss'

function ProjectLinks({ webSite, siteCode }) {
  console.log('webSite', webSite)

  return (
    <div className="projectLinks">
      <div className="projectLinks_container">
        <NavLink to={webSite}>
          <i className="projectLinks_icon fa-solid fa-globe"></i>
        </NavLink>
        <NavLink to={siteCode}>
          <i className="projectLinks_icon fa-brands fa-github"></i>
        </NavLink>
      </div>
    </div>
  )
}

export default ProjectLinks
