import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-3 border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            Portfolio
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-14 h-8 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 p-1 transition-all duration-300"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isDark ? 'translate-x-6' : 'translate-x-0'
                }`}
              >
                {isDark ? <FaMoon /> : <FaSun />}
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
