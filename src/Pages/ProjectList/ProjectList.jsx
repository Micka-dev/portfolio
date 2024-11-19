import '../Projects/projects.scss'
import works from '../../Datas/Works/works.json'
import ProjectCard from '../../Components/ProjectCard/ProjectCard.jsx'

function ProjectList() {
  return (
    <section className="projectList_main-container">
      <h2 className="projectList-title">Liste des projets</h2>
      <div className="projectCards-container_projects">
        {works.map((work) => (
          <ProjectCard
            key={work.id}
            id={work.id}
            cover={process.env.PUBLIC_URL + work.cover}
            title={work.title}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectList
