import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './components/Toast'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Particles from './components/Particles'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="App">
          <LoadingScreen />
          <ScrollProgress />
          <Particles />
          <CustomCursor />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App

