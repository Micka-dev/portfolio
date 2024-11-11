import '../Projects/projects.scss'
import works from '../../Datas/Works/works.json'
import ProjectCard from '../../Components/ProjectCard/ProjectCard.jsx'

function ProjectList() {
  return (
    <section>
      <div className="projectCards-container_projects">
        {works.map((work) => (
          <ProjectCard
            key={work.id}
            id={work.id}
            cover={work.cover}
            title={work.title}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectList
