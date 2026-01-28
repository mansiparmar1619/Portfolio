import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaGithub,
} from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiMongodb, SiDjango, SiBootstrap } from 'react-icons/si'

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    // Fetch skills from API
    fetch('/api/getSkills.php')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSkills(data.skills)
        } else {
          // Fallback to default skills
          setSkills(defaultSkills)
        }
      })
      .catch(() => {
        setSkills(defaultSkills)
      })
  }, [])

  const defaultSkills = [
    { name: 'React', icon: FaReact, color: 'bg-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'bg-yellow-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'bg-green-500' },
    { name: 'HTML5', icon: FaHtml5, color: 'bg-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'bg-cyan-500' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'bg-purple-600' },
    { name: 'PHP', icon: FaPhp, color: 'bg-indigo-500' },
    { name: 'Python', icon: FaPython, color: 'bg-yellow-600' },
    { name: 'Django', icon: SiDjango, color: 'bg-green-700' },
    { name: 'MySQL', icon: SiMysql, color: 'bg-blue-700' },
    { name: 'MongoDB', icon: SiMongodb, color: 'bg-green-600' },
    { name: 'Git', icon: FaGitAlt, color: 'bg-red-600' },
    { name: 'GitHub', icon: FaGithub, color: 'bg-gray-800' },
  ]

  const displaySkills = skills.length > 0 ? skills : defaultSkills

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-white via-purple-50/20 to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-300/25 to-primary-500/10 dark:from-primary-900/25 dark:to-primary-700/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/25 to-purple-500/10 dark:from-purple-900/25 dark:to-purple-700/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300/15 dark:bg-pink-900/15 rounded-full blur-3xl animate-float"></div>
      
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
            Skills
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white drop-shadow-lg">Technologies I </span>
            <span className="gradient-text drop-shadow-2xl">Master</span>
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              <div className="card dark:bg-gray-800/50 backdrop-blur-sm border-2 border-transparent group-hover:border-primary-400/50 transition-all duration-300">
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`${skill.color} p-4 rounded-xl text-white mr-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden`}
                  >
                    <skill.icon size={32} className="relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400/0 via-primary-400/0 to-primary-400/0 group-hover:from-primary-400/5 group-hover:via-primary-400/10 group-hover:to-primary-400/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

