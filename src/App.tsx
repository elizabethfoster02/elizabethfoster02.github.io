import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Designs from './pages/Designs'

const App = () => {
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light'
    setIsDark(storedTheme === 'dark')
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  const handleToggleTheme = () => setIsDark((current) => !current)

  return (
    <>
      <Header isDark={isDark} onToggleTheme={handleToggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
