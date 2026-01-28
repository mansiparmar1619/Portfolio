import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/mansiparmar1619', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mansi-parmar-135532257/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:mansiparmar1619@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-gray-900 text-white py-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              A modern portfolio website showcasing my projects, skills, and experience.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

