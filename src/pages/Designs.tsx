import { designs } from '../data'

const Designs = () => (
  <>
    <section className="page-header">
      <div className="section-inner">
        <h1>Knitwear Designs</h1>
        <p className="page-subtitle">
          Original patterns and hand-knitted garments combining traditional craftsmanship with contemporary design
        </p>
      </div>
    </section>

    <section className="designs-section">
      <div className="section-inner">
        <div className="designs-grid">
          {designs.map((design) => (
            <article className="design-card" key={design.title}>
              <div className="design-image placeholder-large">
                <span>Design Image</span>
              </div>
              <div className="design-content">
                <h3>{design.title}</h3>
                <p className="design-description">{design.description}</p>
                <div className="design-specs">
                  {design.specs.map((spec) => (
                    <div className="spec-item" key={spec.label}>
                      <strong>{spec.label}:</strong>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="design-tags">
                  {design.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="design-actions">
                  <a href="#" className="btn btn-primary btn-small">
                    View Pattern
                  </a>
                  <a href="#" className="btn btn-secondary btn-small">
                    Learn More
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default Designs
