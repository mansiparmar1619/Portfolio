import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Certifications = () => {
  const trainings = [
    {
      id: 1,
      title: 'Python, PL/SQL, Java',
      company: 'Zensar Technologies Ltd.',
      date: 'Jan 2025',
      description: [
        'Completed 4-5 weeks of hands-on training for Python, MYSQL, Java.',
        'Gained practical experience in writing efficient code and implementing basic database operations.',
      ],
    },
    {
      id: 2,
      title: 'Rubicon Foundation',
      company: 'Deutsche Bank',
      date: 'Feb-March 2025',
      description: [
        'Completed training in Python and Django Framework, Aptitude, and Soft Skills.',
        'Learned to build scalable and structured web application using Django MVC architecture',
      ],
    },
  ]

  return (
    <section id="training" className="relative py-20 bg-gradient-to-b from-white via-blue-50/30 to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-300/25 to-primary-500/10 dark:from-primary-900/25 dark:to-primary-700/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/25 to-purple-500/10 dark:from-purple-900/25 dark:to-purple-700/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-300/15 dark:bg-blue-900/15 rounded-full blur-3xl animate-float"></div>
      
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
            Training
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white drop-shadow-lg">My </span>
            <span className="gradient-text drop-shadow-2xl">Training</span>
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional training programs and courses that have enhanced my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="card h-full dark:bg-gray-700/50 backdrop-blur-sm border-2 border-transparent group-hover:border-primary-400/50 transition-all duration-500">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-primary-400/5 group-hover:via-purple-400/5 group-hover:to-pink-400/5 transition-all duration-500 pointer-events-none rounded-2xl"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Training Icon */}
                  <div className="mb-6 flex justify-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary-400 to-purple-400 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <FaGraduationCap size={40} />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {training.title}
                  </h3>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                    {training.company}
                  </p>
                  
                  <div className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                    <ul className="list-disc list-inside space-y-2">
                      {training.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Duration:</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{training.date}</span>
                    </div>
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

export default Certifications
