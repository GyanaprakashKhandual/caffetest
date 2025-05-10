import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <FaGithub className="w-10 h-10" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <FaTwitter className="w-10 h-10" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <FaFacebook className="w-10 h-10" />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <a href="/terms" className="text-gray-300 hover:text-white text-sm font-semibold transition-colors duration-300">Terms & Conditions</a>
          <a href="/privacy" className="text-gray-300 hover:text-white text-sm font-semibold transition-colors duration-300">Privacy Policy</a>
          <a href="/cookie-policy" className="text-gray-300 hover:text-white text-sm font-semibold transition-colors duration-300">Cookie Policy</a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-300">
          <p>© 2025 Caffe Test. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
