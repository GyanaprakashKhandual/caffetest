'use client';

import { motion } from "framer-motion";
import { FaCoffee } from "react-icons/fa";
import {useRouter} from "next/navigation";

const Brand = () => {
    const router = useRouter();
  return (
    <div className="w-full min-h-[600px] bg-gradient-to-tr from-[#7f5539] via-[#ddb892] to-[#e6ccb2] flex items-center justify-center relative overflow-hidden px-4">

      {/* Background floating icons */}
      <FaCoffee className="absolute top-10 left-10 text-[150px] text-white opacity-5 animate-spin-slow" />
      <FaCoffee className="absolute bottom-10 right-10 text-[120px] text-white opacity-5 animate-bounce" />
      <FaCoffee className="absolute bottom-20 left-40 text-[80px] text-white opacity-5 animate-pulse" />

      {/* Main Content */}
      <motion.div 
        className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl flex flex-col items-center max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}
        <motion.div
          className="text-6xl text-[#432818] mb-6"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaCoffee />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 tracking-wider">
          Welcome to CaffeeTest
        </h1>

        {/* Subtitle */}
        <p className="text-center text-white/80 mb-8 px-2">
          Brew powerful tests with love and precision ☕✨ 
          <br /> Get started and elevate your testing journey.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 flex-wrap justify-center">
          <button
          onClick={() => router.push('/freeuse')}
           className="bg-[#432818] hover:bg-[#5c3825] text-white py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition">
            Get Started Free
          </button>
          <button 
          onClick={() => router.push('/subscribe')}
          className="bg-white hover:bg-gray-100 text-[#432818] font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition">
            Subscribe Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Brand;
