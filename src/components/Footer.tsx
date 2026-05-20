import { portfolio, colors } from '../data'

const Footer: React.FC = () => {
  return (
    <footer
      className="mt-16 py-8 px-6"
      style={{ backgroundColor: colors.darkSlate }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4" style={{ color: colors.coral }}>
              Contact
            </h3>
            <a
              href={`mailto:${portfolio.email}`}
              className="hover:opacity-80 transition-opacity block"
              style={{ color: colors.lightBlue }}
            >
              {portfolio.email}
            </a>
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ color: colors.coral }}>
              Social
            </h3>
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity block mb-2"
              style={{ color: colors.lightBlue }}
            >
              GitHub
            </a>
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity block"
              style={{ color: colors.lightBlue }}
            >
              LinkedIn
            </a>
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ color: colors.coral }}>
              Location
            </h3>
            <p style={{ color: colors.lightBlue }}>{portfolio.location}</p>
          </div>
        </div>
        <div
          className="pt-8 border-t text-center"
          style={{ borderColor: colors.mutedBlue, color: colors.lightBlue }}
        >
          <p>&copy; {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
