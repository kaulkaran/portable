import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            Karan Kaul
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-6"
          >
            Senior Software Developer at Oracle | Founder at Veron
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex space-x-4"
          >
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.instagram.com/kaulkaran._/?igsh=OXA3NW8zcTNlZDM3#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:karankaul02@gmail.com" className="hover:text-red-400 transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="md:w-1/2 flex justify-center"
        >
          <img 
            src="https://res.cloudinary.com/dw5ow19cc/image/upload/v1737708717/mn_d2brub.jpg" 
            alt="Karan Kaul" 
            className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-800 py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300">
                A dynamic professional leveraging expertise as a Senior Software Developer at Oracle, 
                bringing innovation to the forefront of technological solutions. Graduate from IIT Delhi 
                in Information Technology (Class of 2020).
              </p>
              <p className="text-gray-300">
                Beyond technical prowess, I'm a captivating writer on Instagram, sharing insightful content 
                and weaving together experiences and observations that inspire and engage.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Education</h3>
                <p>IIT Delhi - B.Tech in Information Technology (2016-2020)</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Current Ventures</h3>
                <p>Founder at Veron (2023-Present)</p>
                <p>Senior Software Developer at Oracle</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Founder</h3>
                  <p className="text-blue-400">Veron</p>
                </div>
                <span className="text-gray-400">2023 - Present</span>
              </div>
              <p className="text-gray-300">Leading innovation and development of cutting-edge software solutions.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Senior Software Developer</h3>
                  <p className="text-blue-400">Oracle</p>
                </div>
                <span className="text-gray-400">2020 - Present</span>
              </div>
              <p className="text-gray-300">Developing enterprise-level solutions and driving technological innovation.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Karan Kaul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
