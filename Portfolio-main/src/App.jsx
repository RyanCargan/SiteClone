import { ThemeProvider } from './context/ThemeContext'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Projects } from './sections/Projects/Projects'
import { Skills } from './sections/Skills/Skills'
import { Contact } from './sections/Contact/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App