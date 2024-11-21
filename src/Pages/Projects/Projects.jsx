import './projects.scss'

import works from '../../Datas/Works/works.json'

import Gallery from '../../Components/Gallery/Gallery.jsx'

import Error from '../Error/Error.jsx'

import { useParams } from 'react-router-dom'
import ProjectDetails from '../../Components/ProjectDetails/ProjectDetails.jsx'
import ProjectLinks from '../../Components/ProjectLinks/ProjectLinks.jsx'
import ProjectList from '../ProjectList/ProjectList.jsx'

function Projects() {
  const { workId } = useParams()

  const listId = works.map((work) => work.id)
  if (!listId.includes(workId)) {
    return <Error />
  }

  const workSelected = works.find((work) => work.id === workId)

  return (
    <main className="projectList_main-container">
      <ProjectList />

      <header className="project-header">
        <h1 className="project-header_title">{workSelected.title}</h1>
        <p className="project-header_text">{workSelected.text}</p>
      </header>

      <Gallery
        pictures={workSelected.pictures.map(
          (picture) => process.env.PUBLIC_URL + picture
        )}
      />

      <ProjectLinks
        webSite={workSelected.webSite}
        siteCode={workSelected.siteCode}
      />

      <ProjectDetails
        description={workSelected.description}
        learned={workSelected.learned}
        // stacks={workSelected.stacks}
        stacks={workSelected.stacks.map(
          (stack) => process.env.PUBLIC_URL + stack
        )}
      />
    </main>
  )
}

export default Projects
