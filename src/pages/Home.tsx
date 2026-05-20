import { Link } from 'react-router-dom'
import type { FormEvent } from 'react'
import {
  heroContent,
  aboutText,
  technicalSkills,
  designSkills,
  highlights,
  featuredProjects,
  contactMethods
} from '../data'

const Home = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const name = form.name
    const email = form.email.value
    const message = form.message.value
    const mailtoLink = `mailto:your-email@example.com?subject=New message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`

    window.location.href = mailtoLink
    form.reset()
  }

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>{heroContent.name}</h1>
          <p className="tagline">{heroContent.tagline}</p>
          <div className="hero-cta">
            <Link to={heroContent.primaryCta.to} className="btn btn-primary">
              {heroContent.primaryCta.label}
            </Link>
            <Link to={heroContent.secondaryCta.to} className="btn btn-secondary">
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-inner">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              {aboutText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-skills">
              <h3>Technical Skills</h3>
              <ul className="skills-list">
                {technicalSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="about-skills">
              <h3>Design & Craft</h3>
              <ul className="skills-list">
                {designSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="section-inner">
          <h2>What I Do</h2>
          <div className="highlights-grid">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.title}>
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-inner">
          <h2>Featured Projects</h2>
          <div className="projects-preview">
            {featuredProjects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-image placeholder">
                  <span>Project Image</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/projects" className="project-link">
                  View Project →
                </Link>
              </div>
            ))}
          </div>
          <div className="center">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-inner">
          <h2>Let's Connect</h2>
          <p>
            Whether you want to discuss a project, collaborate, or just chat about
            code and knitting, I'd love to hear from you.
          </p>
          <div className="contact-methods">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                {method.icon} {method.label}
              </a>
            ))}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Your message..." />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Home
