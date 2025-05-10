import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

const DeveloperBranding = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-100 p-8">
      
      {/* Heading */}
      <h1 className="text-6xl font-bold text-gray-800 mb-12">Our Developers</h1>

      {/* Card Container */}
      <div className="flex justify-center space-x-8">
        {/* First Card */}
        <div className="bg-white p-8 rounded-2xl bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-300 w-[450px] h-[600px] text-center">
          <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-6"></div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Gyana Prakash Khandual</h1>
          <p className="text-gray-600 text-lg mb-6">Passionate Full Stack Developer | Building the Web with Love</p>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Developer Message:</h1>
          <p className="text-gray-600 text-lg mb-6">
            CaffeTest is an automation tool for efficient test case management, bug tracking, and CI/CD integration. It streamlines the testing process, ensuring faster issue detection and high-quality releases.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaGithub className="w-8 h-8 hover:text-black" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaLinkedin className="w-8 h-8 hover:text-blue-700" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaTwitter className="w-8 h-8 hover:text-blue-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaGlobe className="w-8 h-8 hover:text-green-500" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Gyana Prakash Khandual. All rights reserved.</p>
        </div>

        {/* Second Card */}
        <div className="bg-white p-8 rounded-2xl bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-300 w-[450px] h-[600px] text-center">
          <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-6"></div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Jane Smith</h1>
          <p className="text-gray-600 text-lg mb-6">Creative UI/UX Designer | Passionate About User-Centric Design</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaGithub className="w-8 h-8 hover:text-black" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaLinkedin className="w-8 h-8 hover:text-blue-700" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaTwitter className="w-8 h-8 hover:text-blue-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaGlobe className="w-8 h-8 hover:text-green-500" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Jane Smith. All rights reserved.</p>
        </div>

        {/* Third Card */}
        <div className="bg-white p-8 rounded-2xl bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-300 w-[450px] h-[600px] text-center">
          <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-6"></div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Alice Johnson</h1>
          <p className="text-gray-600 text-lg mb-6">Backend Developer | Building Scalable Systems</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaGithub className="w-8 h-8 hover:text-black" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaLinkedin className="w-8 h-8 hover:text-blue-700" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaTwitter className="w-8 h-8 hover:text-blue-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaGlobe className="w-8 h-8 hover:text-green-500" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Alice Johnson. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperBranding;
