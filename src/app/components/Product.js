'use client'

import { motion } from 'framer-motion'
import { Rocket, Bug, Database, Code, Monitor, Wrench } from 'lucide-react'

const products = [
  {
    title: 'K6 Test Report Generator',
    description: 'Generate beautiful, animated, analytics-style reports from K6 load test outputs.',
    icon: <Rocket className="h-10 w-10" />,
  },
  {
    title: 'Selenium Cucumber Step Definitions Generator',
    description: 'Instantly generate structured step definitions for Selenium Java from Cucumber steps.',
    icon: <Bug className="h-10 w-10" />,
  },
  {
    title: 'API Analytics Result AI Enhancer',
    description: 'Enhance your API test result visibility with dynamic, customizable UI dashboards.',
    icon: <Database className="h-10 w-10" />,
  },
  {
    title: 'Backend Suggestor',
    description: 'AI-based backend code and architecture suggestions for faster development and testing.',
    icon: <Wrench className="h-10 w-10" />,
  },
  {
    title: 'VS Code Extension for Selenium Java',
    description: 'Supercharge your Selenium Java workflow with auto-generated step definitions in VS Code.',
    icon: <Code className="h-10 w-10" />,
  },
  {
    title: 'Frontend UI Tester',
    description: 'Automate and validate UI components with seamless test scripts and visual checks.',
    icon: <Monitor className="h-10 w-10" />,
  },
]

export default function Product() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-white to-sky-50 relative overflow-hidden">
      {/* Soft floating circles for background vibe */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-sky-200 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-sky-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-gray-800 mb-12"
        >
          Our Products
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex flex-col items-center justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100/50"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-sky-100 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
              
              <div className="flex flex-col items-center relative z-10">
                <div className="flex items-center justify-center mb-6 text-sky-600">
                  {product.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">{product.title}</h2>
                <p className="text-sm text-gray-500 text-center mb-6">{product.description}</p>
              </div>
              
              <button className="relative z-10 mt-4 px-6 py-2 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                View Project
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}