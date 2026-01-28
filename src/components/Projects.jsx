import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Tooltip from './Tooltip'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/getProjects.php')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.projects)
        } else {
          setProjects(defaultProjects)
        }
        setLoading(false)
      })
      .catch(() => {
        setProjects(defaultProjects)
        setLoading(false)
      })
  }, [])

  const defaultProjects = [
    {
      id: 1,
      title: 'India Unveiled',
      description: 'A beautiful static website showcasing the rich culture, heritage, and diversity of India. Built with pure HTML, CSS, and JavaScript. Features interactive sections, smooth animations, and responsive design that works seamlessly on all devices.',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/mansiparmar1619/India-Unveiled.git',
      live: '#',
    },
    {
      id: 2,
      title: 'NP Solutions',
      description: 'A fully functional real-world website created for a client. Built with HTML, CSS, JavaScript, PHP, and SQL. Features dynamic content, database integration, responsive design, and complete backend functionality. A professional business solution delivered to meet all client requirements.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
      github: 'https://github.com/mansiparmar1619/WT_PROJECTT.git',
      live: '#',
    },
  ]

  const displayProjects = projects.length > 0 ? projects : defaultProjects

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container text-center">
          <div className="text-lg text-gray-600 dark:text-gray-300">Loading projects...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-300/25 to-primary-500/10 dark:from-primary-900/25 dark:to-primary-700/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/25 to-purple-500/10 dark:from-purple-900/25 dark:to-purple-700/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-300/15 dark:bg-pink-900/15 rounded-full blur-3xl animate-float"></div>
      
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
            Projects
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white drop-shadow-lg">Featured </span>
            <span className="gradient-text drop-shadow-2xl">Projects</span>
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="card overflow-hidden dark:bg-gray-700/50 backdrop-blur-sm border-2 border-transparent group-hover:border-primary-400/50 transition-all duration-500">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-primary-400/5 group-hover:via-purple-400/5 group-hover:to-pink-400/5 transition-all duration-500 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-xl mb-4 group/image">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-purple-600/0 group-hover:from-primary-600/90 group-hover:to-purple-600/90 transition-all duration-500 flex items-center justify-center z-20">
                      <Tooltip text="View on GitHub">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub size={40} />
                        </motion.a>
                      </Tooltip>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-1.5 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

