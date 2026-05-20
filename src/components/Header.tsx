import { Link } from 'react-router-dom'
import { portfolio, colors } from '../data'

const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: colors.darkSlate }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" style={{ color: colors.coral }}>
          {portfolio.name}
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
              style={{ color: colors.offWhite }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:opacity-80 transition-opacity"
              style={{ color: colors.offWhite }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="hover:opacity-80 transition-opacity"
              style={{ color: colors.offWhite }}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/designs"
              className="hover:opacity-80 transition-opacity"
              style={{ color: colors.offWhite }}
            >
              Designs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
