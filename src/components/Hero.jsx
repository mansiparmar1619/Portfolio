

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFileAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Tooltip from './Tooltip'

const Hero = () => {
  const [imageError, setImageError] = useState(false)
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/mansiparmar1619', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mansi-parmar-135532257/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:mansiparmar1619@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 cursor-none">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-purple-50/50 via-pink-50/30 to-blue-50 dark:from-gray-900 dark:via-purple-900/30 dark:via-pink-900/20 dark:to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-400/40 to-primary-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-pulse-glow"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/40 to-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/40 to-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float"></div>
        </div>
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/50 dark:to-purple-900/30 px-6 py-2.5 rounded-full shadow-lg border border-primary-200/50 dark:border-primary-700/50 backdrop-blur-sm">
                👋 Welcome to my Portfolio
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
              <span className="text-gray-900 dark:text-white drop-shadow-lg">Hi, I'm </span>
              <span className="gradient-text drop-shadow-2xl">Mansi Parmar</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6 drop-shadow-md">
                Full Stack Developer
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed font-medium"
            >
              I create beautiful, functional, and user-friendly web applications
              using modern technologies. Passionate about clean code and great user experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a href="#contact" className="btn-primary relative z-10">
                <span className="relative z-10">Get In Touch</span>
              </a>
              <a
                href="https://github.com/mansiparmar1619/resume/blob/main/MANSI%20PARMAR-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FaFileAlt /> View Resume
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <social.icon size={20} />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating Shapes */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl floating"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl floating" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10">
              <div className="relative w-full h-96 rounded-3xl overflow-hidden group">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 animated-gradient"></div>
                
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border-4 border-white/30 shadow-2xl overflow-hidden relative"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      {!imageError ? (
                        <img
                          src="/profile-photo.jpg"
                          alt="Mansi Parmar"
                          className="w-full h-full object-cover rounded-full"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <span className="text-4xl font-bold text-white drop-shadow-lg">MP</span>
                      )}
                    </motion.div>
                    <motion.p
                      className="text-xl font-semibold text-white drop-shadow-lg"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Portfolio
                    </motion.p>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-primary-400/20 to-primary-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-200 to-purple-200 dark:from-primary-900 dark:to-purple-900 rounded-3xl -z-10 blur-2xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
