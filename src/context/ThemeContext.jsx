import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Initialize with a default value, then update on mount
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Update theme when isDark changes
  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark, mounted])

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev
      // Immediately update DOM for instant feedback
      const root = document.documentElement
      if (newValue) {
        root.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        root.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return newValue
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}
