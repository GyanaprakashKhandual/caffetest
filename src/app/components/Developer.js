import React from 'react';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

const DeveloperBranding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-white to-sky-50 relative overflow-hidden">
      {/* Soft floating circles for background vibe */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-sky-200 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-sky-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-12 text-center">Our Developers</h1>

        {/* Card Container */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
          {/* First Card */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 w-[400px] h-[600px] text-center border border-sky-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-sky-100 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 mx-auto mb-6 shadow-lg"></div>
              <h1 className="text-2xl font-semibold text-gray-700 mb-2">Gyana Prakash Khandual</h1>
              <p className="text-gray-500 text-lg mb-6">Passionate Full Stack Developer | Building the Web with Love</p>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Developer Message:</h2>
              <p className="text-sm text-gray-500 mb-6">
                CaffeTest is an automation tool for efficient test case management, bug tracking, and CI/CD integration. It streamlines the testing process, ensuring faster issue detection and high-quality releases.
              </p>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-gray-800 transition-colors duration-300">
                  <Github className="w-8 h-8 hover:text-black" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-blue-700 transition-colors duration-300">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-blue-400 transition-colors duration-300">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-green-500 transition-colors duration-300">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">© 2025 Gyana Prakash Khandual. All rights reserved.</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 w-[400px] h-[600px] text-center border border-sky-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-sky-100 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 mx-auto mb-6 shadow-lg"></div>
              <h1 className="text-2xl font-semibold text-gray-700 mb-2">Jane Smith</h1>
              <p className="text-gray-500 text-lg mb-6">Creative UI/UX Designer | Passionate About User-Centric Design</p>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Developer Message:</h2>
              <p className="text-sm text-gray-500 mb-6">
                Crafting intuitive and beautiful user experiences that make technology accessible and enjoyable for everyone. Every pixel matters in creating meaningful connections between users and products.
              </p>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-gray-800 transition-colors duration-300">
                  <Github className="w-8 h-8 hover:text-black" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-blue-700 transition-colors duration-300">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-blue-400 transition-colors duration-300">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-green-500 transition-colors duration-300">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">© 2025 Jane Smith. All rights reserved.</p>
            </div>
          </div>

          {/* Third Card */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 w-[400px] h-[600px] text-center border border-sky-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-sky-100 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 mx-auto mb-6 shadow-lg"></div>
              <h1 className="text-2xl font-semibold text-gray-700 mb-2">Alice Johnson</h1>
              <p className="text-gray-500 text-lg mb-6">Backend Developer | Building Scalable Systems</p>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Developer Message:</h2>
              <p className="text-sm text-gray-500 mb-6">
                Architecting robust and scalable backend solutions that power modern applications. Passionate about clean code, performance optimization, and building systems that can handle millions of users.
              </p>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-gray-800 transition-colors duration-300">
                  <Github className="w-8 h-8 hover:text-black" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-blue-700 transition-colors duration-300">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-blue-400 transition-colors duration-300">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-green-500 transition-colors duration-300">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">© 2025 Alice Johnson. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperBranding;