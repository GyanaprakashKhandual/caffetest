'use client';

import { motion } from "framer-motion";
import { FaCoffee } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#4f7cac] via-[#7db2c7] to-[#a2c6e4] flex items-center justify-center px-6 relative">

      {/* Floating Coffee Icons */}
      <FaCoffee className="absolute top-10 left-10 text-[100px] text-white opacity-5 animate-pulse" />
      <FaCoffee className="absolute bottom-10 right-10 text-[120px] text-white opacity-5 animate-bounce" />
      <FaCoffee className="absolute top-20 right-20 text-[80px] text-white opacity-5 animate-spin-slow" />
      <FaCoffee className="absolute bottom-40 left-10 text-[90px] text-white opacity-5 animate-bounce" />

      {/* Main Form Section */}
      <motion.div 
        className="bg-white/30 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl w-full max-w-3xl flex flex-col items-center"
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-[#0d3b66] mb-8 text-center tracking-wide">
          Contact Us
        </h1>

        {/* Form */}
        <form className="w-full flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="fullname" className="text-sm text-[#0d3b66] mb-1 ml-1">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Your full name"
              className="rounded-xl p-4 bg-white/70 outline-none focus:ring-2 focus:ring-[#0d3b66] text-[#0d3b66] placeholder:text-[#0d3b66]/50"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-[#0d3b66] mb-1 ml-1">Email ID</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="rounded-xl p-4 bg-white/70 outline-none focus:ring-2 focus:ring-[#0d3b66] text-[#0d3b66] placeholder:text-[#0d3b66]/50"
              required
            />
          </div>

          {/* Message/Query */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm text-[#0d3b66] mb-1 ml-1">Your Query/Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message or query here..."
              className="rounded-xl p-4 bg-white/70 resize-none outline-none focus:ring-2 focus:ring-[#0d3b66] text-[#0d3b66] placeholder:text-[#0d3b66]/50"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#0d3b66] hover:bg-[#084c74] text-white font-bold py-4 rounded-full mt-6 transition hover:scale-105 shadow-lg"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
