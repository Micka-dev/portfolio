import './projectDetails.scss'

function ProjectDetails({ description, learned, stacks }) {
  console.log('stacks', stacks)

  return (
    <div className="projectDetails">
      <div className="projectDetails_container">
        <div className="projectDetails_content">
          <h2 className="projectDetails_title">Description du projet</h2>
          <p
            className="projectDetails_text"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        <div className="projectDetails_content">
          <h2 className="projectDetails_title">Ce que j'ai appris</h2>
          <p
            className="projectDetails_text"
            dangerouslySetInnerHTML={{ __html: learned }}
          ></p>
        </div>
      </div>
      <div className="projectDetails_content projectDetails_content_last">
        <h2 className="projectDetails_title">
          Technologies et outils utilisés
        </h2>
        <div className="technologies-container">
          {stacks.map((stack) => (
            <img
              className="technology"
              key={stack}
              src={stack}
              alt="logo de la technologie"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
