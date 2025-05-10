"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCoffee } from "react-icons/fa";
import { Menu, X, Sun, Moon } from "lucide-react";
import gsap from "gsap";
import "../globals.css";
import {useRouter} from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleNavigation = (href) => {
    if (href === '#introduction' || href === '#products' || href === '#developers') {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    } else {
      router.push(href);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    gsap.from(".nav-link", {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Introduction", href: "#introduction" },
    { name: "Products", href: "#products" },
    { name: "Docs", href: "/docs" },
    { name: "Developers", href: "#developers" },
    { name: "Community", href: "#community" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "/contact" },
    { name: "Help", href: "/help" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <FaCoffee size={32} className="text-blue-500 animate-spin-slow" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white relative group">
            CaffeTest
            <span className="absolute left-0 -bottom-1 w-0 h-0.5"></span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              onClick={() => handleNavigation(link.href)}
              href={link.href}
              key={index}
              className="text-gray-700 dark:text-gray-200 text-lg font-medium underline-animation-infinite"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => router.push("/signup")}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Signup
          </button>
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
            Login
          </button>
          <button
            onClick={() => router.push("/subscribe")}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-green-600 hover:border-green-600 hover:text-white transition">
            Subscribe
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden flex flex-col items-center bg-gradient-to-b from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
        >
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="nav-link py-3 text-gray-700 dark:text-gray-200 w-full text-center font-medium border-b border-gray-300 dark:border-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col w-full items-center gap-4 py-4">
            <button onClick={() => router.push("/signup")} className="w-3/4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Signup
            </button>
            <button onClick={() => router.push("/login")} className="w-3/4 px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
