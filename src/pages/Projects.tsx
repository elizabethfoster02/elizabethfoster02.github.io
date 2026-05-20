import { projects, colors } from '../data'

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-6" style={{ backgroundColor: '#f7f7ff' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center" style={{ color: colors.darkSlate }}>
          Projects
        </h1>
        <p className="text-xl text-center mb-16" style={{ color: colors.mutedBlue }}>
          A selection of my recent work and technical projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: colors.lightBlue }}
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: colors.darkSlate }}>
                {project.title}
              </h3>
              <p className="mb-4" style={{ color: colors.darkSlate }}>
                {project.description}
              </p>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: colors.mutedBlue, color: colors.offWhite }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="flex-1 py-2 px-4 rounded-lg text-center font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: colors.coral, color: colors.offWhite }}
                >
                  View
                </a>
                <a
                  href={project.github}
                  className="flex-1 py-2 px-4 rounded-lg text-center font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: colors.darkSlate, color: colors.offWhite }}
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
