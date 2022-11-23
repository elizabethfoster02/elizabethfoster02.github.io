import React from "react";
import "./resume.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Resume() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(118, 92, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(118, 92, 155)" }}
        date="September 2022 - present"
        iconStyle={{
          background: "rgb(118, 92, 155)",
          color: "rgb(118, 92, 155)",
        }}
      >
        <h3 className="jobTitle">Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Medford, Massachusetts
        </h4>
        <p>
          - Generated data with backend functions: Wrote a script to generate
          test data for local environment, increasing privacy and securing
          customer data. Developed technical skills including functional
          programming, databases, and featuring multiple APIs - Tracked and
          displayed user data: Implemented a fullstack project that recorded
          user actions on the platform using an API. Visualized data to describe
          use and inform product planning
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<linkedin />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Resume;
