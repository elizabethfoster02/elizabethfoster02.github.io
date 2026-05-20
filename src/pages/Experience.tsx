import { educationDetails, skillCategories, workExperience } from '../data'

const Experience = () => (
  <>
    <section className="page-header">
      <div className="section-inner">
        <h1>Professional Experience</h1>
        <p className="page-subtitle">
          A comprehensive overview of my career journey, skills, and professional achievements
        </p>
      </div>
    </section>

    <section className="experience-section">
      <div className="section-inner">
        <h2>Work History</h2>
        <div className="timeline">
          {workExperience.map((experience) => (
            <div className="timeline-item" key={experience.title}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{experience.title}</h3>
                    <p className="company-name">{experience.company}</p>
                  </div>
                  <div className="experience-dates">
                    <span className="date">{experience.dates}</span>
                    <span className="duration">{experience.duration}</span>
                  </div>
                </div>
                <p className="experience-description">{experience.description}</p>
                <div className="experience-highlights">
                  {experience.highlights.map((tag) => (
                    <span className="highlight-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="education-section">
      <div className="section-inner">
        <h2>Education</h2>
        <div className="education-grid">
          {educationDetails.map((education) => (
            <div className="education-card" key={education.title}>
              <div className="education-icon">{education.icon}</div>
              <h3>{education.title}</h3>
              {education.field && <p className="education-field">{education.field}</p>}
              {education.school && <p className="education-school">{education.school}</p>}
              {education.date && <p className="education-date">{education.date}</p>}
              {education.details && <p className="education-details">{education.details}</p>}
              {education.certs && (
                <div className="cert-list">
                  {education.certs.map((cert) => (
                    <div className="cert-item" key={cert.label}>
                      <strong>{cert.label}</strong>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="skills-section">
      <div className="section-inner">
        <h2>Technical & Professional Skills</h2>
        <div className="skills-matrix">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: skill.level }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default Experience
