import { NavLink } from 'react-router-dom'
import { navLinks } from '../data'

type HeaderProps = {
  isDark: boolean
  onToggleTheme: () => void
}

const Header = ({ isDark, onToggleTheme }: HeaderProps) => (
  <header className="site-header">
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">EF</NavLink>
      </div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="theme-toggle"
        aria-label="Toggle dark mode"
        onClick={onToggleTheme}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onToggleTheme()
          }
        }}
      >
        <span className="theme-icon">{isDark ? '🌙' : '☀️'}</span>
      </button>
    </nav>
  </header>
)

export default Header
