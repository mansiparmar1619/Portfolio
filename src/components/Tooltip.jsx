import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Tooltip = ({ children, text, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const tooltipRef = useRef(null)

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.8, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 5 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-[10001] ${positionClasses[position]} pointer-events-none`}
          >
            <div className="bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
              {text}
              <div
                className={`absolute w-2 h-2 bg-gray-900 dark:bg-gray-700 transform rotate-45 ${
                  position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2' :
                  position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2' :
                  position === 'left' ? 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2' :
                  'right-full top-1/2 -translate-y-1/2 translate-x-1/2'
                }`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip

