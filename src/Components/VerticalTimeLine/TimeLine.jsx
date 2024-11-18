import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './TimeLine.scss'

function Timeline() {
  return (
    // <div className="App">

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        contentArrowStyle={{ borderRight: '7px solid  #eeeeee' }}
        date="2024 - aujourd'hui"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<WorkIcon />}
        iconClassName={'fa-solid fa-graduation-cap'}
      >
        <h3 className="vertical-timeline-element-title">
          Formation OpenClassrooms
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          12 projets professionnels réalisés
        </h4>
        <p>
          React, Redux, Sass, Redux toolkit, Figma, swagger, Notion, Json,
          HTML5, CSS3...
        </p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2023"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Formation OpenClassrooms
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          React, Redux, Sass, Redux toolkit
        </h4>
        <p>Figma, swagger, Notion, Json, HTML5, CSS3...</p>
      </VerticalTimelineElement> */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2022 - 2023"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<WorkIcon />}
        iconClassName={'fa-solid fa-briefcase'}
      >
        <h3 className="vertical-timeline-element-title">
          {' '}
          Directeur ALSH Périscolaire & Extrascolaire
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle">
          
        </h4> */}
        <p>
          Gestion de la défaillance du portail famille. Projet
          intergénérationnel & maison de tous les dangers
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2021-2023"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<WorkIcon />}
        iconClassName={'fa-solid fa-graduation-cap'}
      >
        <h3 className="vertical-timeline-element-title"> BAFD</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Brevet d’aptitude aux fonctions de directeur
        </h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2a2a2a', color: '#b4b4b4' }}
        date="2021 - 2022"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<WorkIcon />}
        iconClassName={'fa-solid fa-briefcase'}
      >
        <h3 className="vertical-timeline-element-title">
          Directeur ALSH Extrascolaire
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2022"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<WorkIcon />}
        iconClassName={'fa-solid fa-briefcase'}
      >
        <h3 className="vertical-timeline-element-title">PSC1</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Diplôme d'état de Prévention et Secours Civiques de Niveau 1
        </h4>
        <p>Renouvellement</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2020 - 2021"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<WorkIcon />}
        iconClassName={'fa-solid fa-briefcase'}
      >
        <h3 className="vertical-timeline-element-title">
          Coordonnateur enfance et jeunesse & directeur périscolaire
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
        <p>
          Elaboration du PEdT en concertation avec l’équipe d’animation, les
          élus, les enseignants, les familles... Relation avec les élus accru
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2006 - 2020 ?"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<WorkIcon />}
        iconClassName={'fa-solid fa-briefcase'}
      >
        <h3 className="vertical-timeline-element-title">Educateur sportif</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Football, Basket, Multisport
        </h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2003 - 2020"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<WorkIcon />}
        iconClassName={'fa-solid fa-briefcase'}
      >
        <h3 className="vertical-timeline-element-title">Animateur ALSH</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">
          
        </h4> */}
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2016 - 2017"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<SchoolIcon />}
        iconClassName={'fa-solid fa-graduation-cap'}
      >
        <h3 className="vertical-timeline-element-title">
          Concours professeur des écoles
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          En candidat libre, écrit obtenu uniquement
        </h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2005 - 2007"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<SchoolIcon />}
        iconClassName={'fa-solid fa-graduation-cap'}
      >
        <h3 className="vertical-timeline-element-title">Concours CAPEPS</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Certificat d'aptitude au professorat d'éducation physique et sportive
        </h4>
        <p>Cursus suivi à l'IUFM de Bretagne</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2005"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<SchoolIcon />}
        iconClassName={'fa-solid fa-graduation-cap'}
      >
        <h3 className="vertical-timeline-element-title">Licence STAPS</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Spécialité éducation et motricité
        </h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
        date="2001"
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<SchoolIcon />}
        iconClassName={'fa-solid fa-graduation-cap'}
      >
        <h3 className="vertical-timeline-element-title">Bac S</h3>
        <h4 className="vertical-timeline-element-subtitle">Bac scientifique</h4>

        <p></p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        iconStyle={{ background: '#606060', color: '#fff' }}
        // icon={<StarIcon />}
      /> */}
    </VerticalTimeline>
  )
}
export default Timeline
