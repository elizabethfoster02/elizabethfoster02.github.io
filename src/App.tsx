import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Designs from './pages/Designs'

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f7f7ff' }}>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/designs" element={<Designs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
