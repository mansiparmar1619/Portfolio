import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useToast } from './Toast'
import Tooltip from './Tooltip'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      showToast('Please fill in all fields correctly', 'error')
      return
    }
    
    setLoading(true)
    setStatus({ type: '', message: '' })
    setErrors({})

    try {
      const response = await fetch('/api/sendMessage.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        showToast('Message sent successfully!', 'success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message' })
        showToast(data.message || 'Failed to send message', 'error')
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' })
      showToast('An error occurred. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'mansiparmar1619@gmail.com',
      link: 'mailto:mansiparmar1619@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9784591043',
      link: 'tel:+919784591043',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Pune, Maharashtra',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-300/25 to-primary-500/10 dark:from-primary-900/25 dark:to-primary-700/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/25 to-purple-500/10 dark:from-purple-900/25 dark:to-purple-700/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-300/15 dark:bg-blue-900/15 rounded-full blur-3xl animate-float"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full mb-4"
          >
            Contact
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white drop-shadow-lg">Get In </span>
            <span className="gradient-text drop-shadow-2xl">Touch</span>
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Tooltip key={info.label} text={`Click to ${info.label === 'Email' ? 'send an email' : info.label === 'Phone' ? 'make a call' : 'view location'}`}>
                  <motion.a
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all group"
                  >
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg mr-4 group-hover:bg-primary-600 transition-colors">
                      <info.icon className="text-primary-600 dark:text-primary-400 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                      <div className="text-gray-900 dark:text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                </Tooltip>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card dark:bg-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition ${
                    errors.name 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition ${
                    errors.email 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition ${
                    errors.subject 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition resize-none ${
                    errors.message 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  }`}
                  placeholder="Tell me about your project..."
                ></textarea>
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  ) : (
                    <p className={`text-sm ${formData.message.length > 450 ? 'text-yellow-500' : 'text-gray-500 dark:text-gray-400'}`}>
                      {formData.message.length}/500 characters
                    </p>
                  )}
                </div>
              </div>
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {status.message}
                </div>
              )}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

