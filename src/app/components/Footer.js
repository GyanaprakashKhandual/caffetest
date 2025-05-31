import React from 'react';
import { Github, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-sky-800 via-sky-700 to-sky-600 text-white py-16 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-sky-300 opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-sky-400 opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group text-sky-200 hover:text-white transition-all duration-300 transform hover:scale-110">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 opacity-0 group-hover:opacity-20 rounded-full blur-lg transition-all duration-300"></div>
              <Github className="w-10 h-10 relative z-10" />
            </div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group text-sky-200 hover:text-white transition-all duration-300 transform hover:scale-110">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 opacity-0 group-hover:opacity-20 rounded-full blur-lg transition-all duration-300"></div>
              <Linkedin className="w-10 h-10 relative z-10" />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group text-sky-200 hover:text-white transition-all duration-300 transform hover:scale-110">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 opacity-0 group-hover:opacity-20 rounded-full blur-lg transition-all duration-300"></div>
              <Twitter className="w-10 h-10 relative z-10" />
            </div>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group text-sky-200 hover:text-white transition-all duration-300 transform hover:scale-110">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 opacity-0 group-hover:opacity-20 rounded-full blur-lg transition-all duration-300"></div>
              <Facebook className="w-10 h-10 relative z-10" />
            </div>
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <a href="/terms" className="text-sky-200 hover:text-white text-sm font-semibold transition-colors duration-300 hover:underline decoration-sky-300">
            Terms & Conditions
          </a>
          <a href="/privacy" className="text-sky-200 hover:text-white text-sm font-semibold transition-colors duration-300 hover:underline decoration-sky-300">
            Privacy Policy
          </a>
          <a href="/cookie-policy" className="text-sky-200 hover:text-white text-sm font-semibold transition-colors duration-300 hover:underline decoration-sky-300">
            Cookie Policy
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-sky-100">
          <p>© 2025 Caffe Test. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;