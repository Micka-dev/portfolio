import './projectCard.scss'
import { NavLink } from 'react-router-dom'

function ProjectCard({ id, cover, title, text }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? ' projectCard-container-activated projectCard-container'
          : ' projectCard-container'
      }
      to={`/projects/${id}`}
    >
      <article className="projectCard">
        <img
          className="projectCard_img"
          src={cover}
          alt="logement sélectionné"
        />
        {title && text ? (
          <div className="projectCard_content">
            <h2 className="projectCard_title">{title}</h2>
            <p className="projectCard_text">{text}</p>
          </div>
        ) : null}
      </article>
    </NavLink>
  )
}

export default ProjectCard
