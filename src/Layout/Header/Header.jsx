import { NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <div className="header-container">
      {/* <img className="header-container_logo" src={Logo} alt="Logo du site" /> */}

      <nav className="header-container_nav">
        <NavLink
          // Permet la navigation vers la route définie
          // Condition qui permet d'activer ou non le style d'un lien sélectionné
          className={({ isActive }) =>
            isActive
              ? 'header-container_link-activated header-container_link'
              : 'header-container_link'
          }
          to="/"
        >
          <i className="fa-solid fa-house projects"></i>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'header-container_link-activated header-container_link'
              : ' header-container_link'
          }
          to="/projects"
        >
          <i className="fa-solid fa-briefcase"></i>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'header-container_link-activated header-container_link'
              : 'header-container_link'
          }
          to="/about"
        >
          {/* <i className="fa-regular fa-address-card"></i> */}
          {/* <i className="fa-solid fa-address-card"></i> */}
          {/* <i className="fa-regular fa-user"></i> */}
          <i className="fa-solid fa-user"></i>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'header-container_link-activated header-container_link'
              : 'header-container_link'
          }
          to="/contact"
        >
          <i className="fa-solid fa-envelope"></i>
          {/* <i className="fa-regular fa-envelope"></i> */}
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
