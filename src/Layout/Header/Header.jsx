import { NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <div className="header-container">
      <nav className="header-container_nav">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'header-container_link-activated header-container_link'
              : 'header-container_link'
          }
          to="/"
          aria-label="Accueil"
          title="Accueil"
        >
          <i className="fa-solid fa-house projects" aria-hidden="true"></i>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'header-container_link-activated header-container_link'
              : ' header-container_link'
          }
          to="/projects"
          aria-label="Projets"
          title="Projets"
        >
          <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'header-container_link-activated header-container_link'
              : 'header-container_link'
          }
          to="/about"
          aria-label="À propos"
          title="À propos"
        >
          <i className="fa-solid fa-user" aria-hidden="true"></i>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'header-container_link-activated header-container_link'
              : 'header-container_link'
          }
          to="/contact"
          aria-label="Contact"
          title="Contact"
        >
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
