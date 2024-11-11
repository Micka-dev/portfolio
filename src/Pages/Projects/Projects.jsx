import './projects.scss'

import works from '../../Datas/Works/works.json'

import ProjectCard from '../../Components/ProjectCard/ProjectCard.jsx'
import Gallery from '../../Components/Gallery/Gallery.jsx'

import Error from '../Error/Error.jsx'

import { useParams } from 'react-router-dom'
import ProjectDetails from '../../Components/ProjectDetails/ProjectDetails.jsx'
import ProjectLinks from '../../Components/ProjectLinks/ProjectLinks.jsx'

function Projects() {
  const { workId } = useParams()

  const listId = works.map((work) => work.id)
  if (!listId.includes(workId)) {
    return <Error />
  }

  const workSelected = works.find((work) => work.id === workId)
  console.log('workSelected', workSelected)

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

      <div className="project-header">
        <h1 className="project-header_title">{workSelected.title}</h1>
        <p className="project-header_text">{workSelected.text}</p>
      </div>

      <Gallery pictures={workSelected.pictures} />

      <ProjectLinks
        webSite={workSelected.webSite}
        siteCode={workSelected.siteCode}
      />

      <ProjectDetails
        key={workSelected.id}
        id={workSelected.id}
        description={workSelected.description}
        learned={workSelected.learned}
        stack={workSelected.stack}
      />
    </section>
  )
}

export default Projects
