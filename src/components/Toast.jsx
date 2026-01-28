import React, { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa'

const ToastContext = createContext()

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const showToast = (message, type = 'success') => {
    const id = Date.now()
    const newToast = { id, message, type }
    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 3000)
  }

  const icons = {
    success: FaCheckCircle,
    error: FaTimesCircle,
    info: FaInfoCircle,
    warning: FaExclamationCircle,
  }

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[10002] space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => {
            const Icon = icons[toast.type]
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.8 }}
                className={`${colors[toast.type]} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 min-w-[300px]`}
              >
                <Icon size={20} />
                <span className="flex-1">{toast.message}</span>
                <button
                  onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                  className="text-white/80 hover:text-white"
                >
                  ×
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

