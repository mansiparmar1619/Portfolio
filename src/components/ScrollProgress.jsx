import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/20 dark:bg-gray-700/20 z-[100]">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}

export default ScrollProgress

