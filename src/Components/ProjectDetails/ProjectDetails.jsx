import './projectDetails.scss'

function ProjectDetails({ description, learned, stack }) {
  return (
    <div className="projectDetails">
      <div className="projectDetails_container">
        <div className="projectDetails_content">
          <h2 className="projectDetails_title">Description du projet</h2>
          <p className="projectDetails_text">{description}</p>
        </div>
        <div className="projectDetails_content">
          <h2 className="projectDetails_title">Ce que j'ai appris</h2>
          <p className="projectDetails_text">{learned}</p>
        </div>
      </div>
      <div className="projectDetails_content projectDetails_content_last">
        <h2 className="projectDetails_title">
          Tecnnologies et outils utilisés
        </h2>
        <div>{stack}</div>
      </div>
    </div>
  )
}

export default ProjectDetails
