"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const LandingPage = () => {
  const desktopImage =
    "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Falma-resonance-poster-landscape.jpeg?alt=media&token=9a5cfc61-cf7f-4989-b62d-3f279aec000f";
  const mobileImage =
    "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Falma-resonance-poster-portrait.jpeg?alt=media&token=a6233e1e-8ab6-4848-a7f1-469741ab4242";

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Background image with responsive switching */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={mobileImage}
          alt="Alma Resonance Background"
          fill
          className="object-cover md:hidden"
          priority
        />
        <Image
          src={desktopImage}
          alt="Alma Resonance Background"
          fill
          className="hidden md:block object-cover"
          priority
        />
      </motion.div>

      {/* Content overlay */}
      <motion.div
        className="absolute bottom-[20%] md:bottom-[10%] left-1/2 -translate-x-1/2 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/experience"
            className="inline-block px-4 py-2 text-lg text-white bg-white/20 border-2 border-white 
                     rounded-full decoration-none transition-all duration-300 ease-in-out
                     backdrop-blur-sm hover:bg-white/30 hover:-translate-y-1 hover:shadow-lg"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
