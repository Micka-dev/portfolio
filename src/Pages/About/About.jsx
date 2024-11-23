import Timeline from '../../Components/VerticalTimeLine/TimeLine'
import './about.scss'

import about from '../../Datas/About/about.json'
import technologies from '../../Datas/Technologies/technologies-outils.json'

import photoProfil from '../../Assets/Micka.webp'

function About() {
  return (
    <main className="aboutDetails">
      <section className="aboutDetails_container">
        <div className="summary-container_img-wrapper outside">
          <img
            src={photoProfil}
            className="summary-container_img"
            alt="Mickaël Douceré"
          />
        </div>
        <section className="aboutDetails_content">
          <h1 className="aboutDetails_title">A propos de moi</h1>
          <div className="summary-container_img-wrapper inside">
            <img
              src={photoProfil}
              className="summary-container_img"
              alt="Mickaël Douceré"
            />
          </div>
          <div className="aboutDetails_text-container">
            <p
              className="aboutDetails_text"
              dangerouslySetInnerHTML={{ __html: about.aboutMe }}
            ></p>
          </div>
        </section>
      </section>
      <section className="aboutDetails_content">
        <h2 className="aboutDetails_title">
          Technologies et outils utiisés quotidiennement
        </h2>
        <div className="technologies-container">
          {technologies.map((tech) => (
            <img
              className="technology"
              key={tech.id}
              src={process.env.PUBLIC_URL + tech.source}
              alt={tech.name}
            />
          ))}
        </div>
      </section>
      <section className="aboutDetails_content">
        <h2 className="aboutDetails_title">Expériences et formations</h2>
        <Timeline />
      </section>
    </main>
  )
}

export default About
