import { Link } from 'react-router-dom'
import { projects } from '../data'

const Projects = () => (
  <>
    <section className="page-header">
      <div className="section-inner">
        <h1>Software Projects</h1>
        <p className="page-subtitle">
          A collection of full-stack applications, frontend experiences, and creative solutions
        </p>
      </div>
    </section>

    <section className="projects-section">
      <div className="section-inner">
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card-detailed" key={project.title}>
              <div className="project-image placeholder-large">
                <span>Project Preview</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <div className="meta-item">
                    <strong>Technologies:</strong>
                    <span>{project.tech}</span>
                  </div>
                  <div className="meta-item">
                    <strong>Duration:</strong>
                    <span>{project.duration}</span>
                  </div>
                  <div className="meta-item">
                    <strong>Role:</strong>
                    <span>{project.role}</span>
                  </div>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href="#" className="btn btn-primary btn-small">
                    View Project
                  </a>
                  <a href="#" className="btn btn-secondary btn-small">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="section-inner">
        <h2>Interested in Collaborating?</h2>
        <p>
          I'm always open to exciting projects and creative partnerships. Let's build something amazing together.
        </p>
        <Link to="/#contact" className="btn btn-primary">
          Get In Touch
        </Link>
      </div>
    </section>
  </>
)

export default Projects
