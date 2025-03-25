"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen w-screen bg-black text-white flex items-center justify-center p-4 bg-[url('https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2FIMG_2164.PNG?alt=media&token=056e3f8c-948b-497d-973d-82d8c391b48e')] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="max-w-4xl text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Are you ready to start living the life of your dreams?
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Step into your purpose. Awaken the ancient wisdom that lives in your
          bones. Through the power of your voice, the guidance of your
          intuition, and the sacred connection to the deepest part of your
          being— remember who you are.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link
            href="/journey"
            className="inline-block px-8 py-2 text-lg text-white bg-white/20 border-2 border-white 
                     rounded-full decoration-none transition-all duration-300 ease-in-out
                     backdrop-blur-sm hover:bg-white/30 hover:-translate-y-1 hover:shadow-lg"
          >
            Yes! I am ready
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
