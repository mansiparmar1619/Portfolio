import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices.',
    },
    {
      icon: FaLaptopCode,
      title: 'Responsive Design',
      description: 'Creating beautiful interfaces that work on all devices.',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency.',
    },
  ]

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white via-blue-50/20 to-purple-50/20 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-300/30 to-primary-500/10 dark:from-primary-900/30 dark:to-primary-700/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/30 to-purple-500/10 dark:from-purple-900/30 dark:to-purple-700/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300/20 dark:bg-pink-900/20 rounded-full blur-3xl animate-float"></div>
      
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
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white drop-shadow-lg">Crafting Digital </span>
            <span className="gradient-text drop-shadow-2xl">Experiences</span>
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative card text-center dark:bg-gray-700/50 backdrop-blur-sm border-2 border-transparent group-hover:border-primary-400/50 transition-all duration-500"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-purple-400/0 group-hover:from-primary-400/10 group-hover:to-purple-400/10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon size={48} />
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

