import { NavLink } from 'react-router-dom'
import './projectLinks.scss'

function ProjectLinks({ webSite, siteCode }) {
  const links = [
    {
      to: webSite,
      ariaLabel: 'Visitez le site web',
      title: 'Visitez le site web',
      icon: 'fa-solid fa-globe',
      condition: !!webSite,
    },
    {
      to: siteCode,
      ariaLabel: 'Voir le code source sur GitHub',
      title: 'Voir le code source sur GitHub',
      icon: 'fa-brands fa-github',
      condition: !!siteCode,
    },
  ]

  return (
    <nav className="projectLinks">
      <div className="projectLinks_container">
        {links.map(
          ({ to, ariaLabel, title, icon, condition }) =>
            condition && (
              <NavLink
                key={to}
                to={to}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                title={title}
              >
                <i
                  className={`projectLinks_icon ${icon}`}
                  aria-hidden="true"
                ></i>
              </NavLink>
            )
        )}
      </div>
    </nav>
  )
}

export default ProjectLinks
