import { experience, colors } from '../data'

const Experience: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-6" style={{ backgroundColor: '#f7f7ff' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center" style={{ color: colors.darkSlate }}>
          Experience
        </h1>
        <p className="text-xl text-center mb-16" style={{ color: colors.mutedBlue }}>
          My professional journey and career highlights
        </p>

        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: colors.lightBlue }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: colors.darkSlate }}>
                    {job.role}
                  </h3>
                  <p className="text-lg" style={{ color: colors.mutedBlue }}>
                    {job.company}
                  </p>
                </div>
                <span
                  className="px-4 py-2 rounded-lg font-semibold"
                  style={{ backgroundColor: colors.coral, color: colors.offWhite }}
                >
                  {job.period}
                </span>
              </div>
              <p style={{ color: colors.darkSlate }} className="leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
