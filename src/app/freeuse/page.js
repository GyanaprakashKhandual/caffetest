'use client';

import { motion } from "framer-motion";
import { FaCoffee } from "react-icons/fa";
import {useRouter} from "next/navigation";

const GetStartedForm = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f9f9f9] via-[#dbe6f6] to-[#c5796d] flex items-center justify-center px-6 relative">

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
        <h1 className="text-5xl font-extrabold text-[#432818] mb-8 text-center tracking-wide">
          Welcome to CaffeeTest ☕
        </h1>

        {/* Form */}
        <form className="w-full flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="fullname" className="text-sm text-[#432818] mb-1 ml-1">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Your full name"
              className="rounded-xl p-4 bg-white/70 outline-none focus:ring-2 focus:ring-[#432818] text-[#432818] placeholder:text-[#432818]/50"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-[#432818] mb-1 ml-1">Email ID</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="rounded-xl p-4 bg-white/70 outline-none focus:ring-2 focus:ring-[#432818] text-[#432818] placeholder:text-[#432818]/50"
              required
            />
          </div>

          {/* Button */}
          <button
          onClick={() => router.push("/caffeetest")}
            type="submit"
            className="bg-[#432818] hover:bg-[#5c3825] text-white font-bold py-4 rounded-full mt-6 transition hover:scale-105 shadow-lg"
          >
            Get Started Free
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default GetStartedForm;
