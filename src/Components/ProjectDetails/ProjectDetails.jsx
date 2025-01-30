import './projectDetails.scss'

function ProjectDetails({ description, learned, stacks }) {
  return (
    <div className="projectDetails">
      <div className="projectDetails_container">
        <article className="projectDetails_content">
          <h2 className="projectDetails_title">Description du projet</h2>
          <p
            className="projectDetails_text"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </article>
        <article className="projectDetails_content">
          <h2 className="projectDetails_title">Ce que j'ai appris</h2>
          <p
            className="projectDetails_text"
            dangerouslySetInnerHTML={{ __html: learned }}
          ></p>
        </article>
      </div>
      <article className="projectDetails_content projectDetails_content_last">
        <h2 className="projectDetails_title">
          Technologies et outils utilisés
        </h2>
        <div className="technologies-container">
          {stacks.map((stack) => (
            <img
              className="technology"
              key={stack.id}
              src={stack.src}
              alt={`logo de la technologie ${stack.alt}`}
              title={stack.alt}
            />
          ))}
        </div>
      </article>
    </div>
  )
}

export default ProjectDetails
