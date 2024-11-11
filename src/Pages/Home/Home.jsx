import './home.scss'
import Summary from '../../Components/Summary/Summary.jsx'
import ProjectCard from '../../Components/ProjectCard/ProjectCard.jsx'
import works from '../../Datas/Works/works.json'

function Home() {
  return (
    <div>
      <Summary />
      <h3 className="project-title">Projets Réalisés</h3>
      <div className="projectCards-container">
        {works.map((work) => (
          <ProjectCard
            key={work.id}
            id={work.id}
            cover={work.cover}
            title={work.title}
            text={work.text}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
