import { NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
  const navLinks = [
    { to: '/', ariaLabel: 'Accueil', title: 'Accueil', icon: 'fa-house' },
    {
      to: '/projects',
      ariaLabel: 'Projets',
      title: 'Projets',
      icon: 'fa-briefcase',
    },
    {
      to: '/about',
      ariaLabel: 'À propos de moi',
      title: 'À propos de moi',
      icon: 'fa-user',
    },
    {
      to: '/contact',
      ariaLabel: 'Contact',
      title: 'Contact',
      icon: 'fa-envelope',
    },
  ]

  return (
    <div className="header-container">
      <nav className="header-container_nav">
        {navLinks.map(({ to, ariaLabel, title, icon }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              `header-container_link ${
                isActive ? 'header-container_link-activated' : ''
              }`
            }
            to={to}
            aria-label={ariaLabel}
            title={title}
          >
            <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Header
