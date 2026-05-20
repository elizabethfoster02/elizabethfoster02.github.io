import { portfolio, colors } from '../data'

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-6 py-20"
        style={{ backgroundColor: colors.offWhite }}
      >
        <div className="max-w-4xl text-center">
          <h1
            className="text-6xl font-bold mb-6"
            style={{ color: colors.darkSlate }}
          >
            {portfolio.name}
          </h1>
          <p className="text-3xl mb-8" style={{ color: colors.mutedBlue }}>
            {portfolio.title}
          </p>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: colors.darkSlate }}>
            {portfolio.bio}
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/projects"
              className="px-8 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.coral, color: colors.offWhite }}
            >
              View My Work
            </a>
            <a
              href={`mailto:${portfolio.email}`}
              className="px-8 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.mutedBlue, color: colors.offWhite }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: colors.lightBlue }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: colors.darkSlate }}
          >
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.mutedBlue }}>
                Software Engineering
              </h3>
              <p style={{ color: colors.darkSlate }} className="leading-relaxed">
                With several years of experience in full-stack development, I specialize in creating
                responsive, performant web applications. I'm passionate about clean code, user
                experience, and continuous learning.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.mutedBlue }}>
                Knitwear Design
              </h3>
              <p style={{ color: colors.darkSlate }} className="leading-relaxed">
                Beyond code, I find creative expression through hand-knitted designs. Each piece
                combines intricate patterns with quality materials, reflecting my attention to detail
                and design sensibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
