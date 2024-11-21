import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './TimeLine.scss'
import timelineData from '../../Datas/TimeLine/timelineData.json'

function Timeline() {
  return (
    <section>
      <VerticalTimeline>
        {timelineData.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2a2a2a', color: '##b4b4b4' }}
            contentArrowStyle={{ borderRight: '7px solid  #eeeeee' }}
            date={item.date}
            iconStyle={{ background: '#606060', color: '#fff' }}
            iconClassName={item.iconClassName}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Timeline
