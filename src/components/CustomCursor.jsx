import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Check if device is desktop (has mouse)
    const checkDevice = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches)
    }
    checkDevice()
    
    if (!isDesktop) return
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Check for interactive elements
    const handleMouseEnter = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.card') ||
        target.closest('.btn-primary') ||
        target.closest('.btn-secondary') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (
        !target.closest('a') &&
        !target.closest('button') &&
        !target.closest('.card') &&
        !target.closest('.btn-primary') &&
        !target.closest('.btn-secondary') &&
        !target.closest('input') &&
        !target.closest('textarea')
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <>
      {/* Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      >
        <div
          className={`w-12 h-12 rounded-full border-2 transition-all duration-500 ${
            isHovering 
              ? 'border-primary-400 scale-150 bg-primary-400/10' 
              : 'border-primary-600/40 dark:border-primary-400/40 scale-100 bg-transparent'
          } ${isClicking ? 'scale-50 border-primary-500' : ''}`}
        />
      </motion.div>

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`w-5 h-5 rounded-full transition-all duration-300 ${
            isHovering 
              ? 'scale-150 bg-primary-500/80 backdrop-blur-sm' 
              : 'scale-100 bg-primary-600 dark:bg-primary-400'
          } ${isClicking ? 'scale-75' : ''}`}
          style={{
            boxShadow: isHovering ? '0 0 20px rgba(14, 165, 233, 0.5)' : 'none'
          }}
        />
      </motion.div>

      {/* Inner Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: 'tween',
          duration: 0,
        }}
      >
        <div
          className={`w-1 h-1 rounded-full transition-all duration-200 ${
            isHovering ? 'bg-white scale-300' : 'bg-white scale-100'
          }`}
        />
      </motion.div>
    </>
  )
}

export default CustomCursor

