"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const TheSpacePage = () => {
  return (
    <div
      className="min-h-screen w-screen text-white flex items-center justify-center p-4 md:p-8
                    bg-[url('https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2F4cec8127-d0a8-4f8f-8425-965f090af238.webp?alt=media&token=f7534d20-c442-49eb-bcd3-742aee42fca6')]
                    bg-cover bg-center bg-no-repeat bg-fixed
                    relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60"
    >
      <motion.div className="w-full pt-20 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl mb-6">The Space</h1>
          <p className="text-lg leading-relaxed font-light max-w-3xl mx-auto px-4">
            Nature is both the journey and the destination, a place to pause,
            reflect, and connect. With a short walk to the waterfall, river
            flowing through the land, we will make good use of the sauna to
            release and connect deeper with our prayers and intentions.
          </p>
        </motion.div>

        {/* Three images in a row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto px-4 md:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg bg-gray-800"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fenv3.jpeg?alt=media&token=9d5988ab-c7e9-48a9-984e-ff84463b9ecc"
              alt="Sauna"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg bg-gray-800"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fsauna1.jpeg?alt=media&token=d9e64f7b-64c6-4710-a055-4295aa18adca"
              alt="Sauna"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg bg-gray-800"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fenv1.jpeg?alt=media&token=161ca9f0-19df-4218-ac66-e05fe8415076"
              alt="Sauna"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-24 items-center max-w-7xl mx-auto px-4 md:px-8">
          {/* Accommodation Section */}
          <motion.div
            className="flex flex-col md:flex-row-reverse gap-12 items-center justify-center max-w-6xl w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-full md:w-1/2">
              <motion.div
                className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fdome2.png?alt=media&token=d3e3dc08-2c89-40a9-b95e-0d50e34dbd6e"
                  alt="Accommodation"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 space-y-6 px-4 md:px-8">
              <h3 className="text-3xl font-semibold text-white">
                Accommodation
              </h3>
              <p className="text-white text-lg leading-relaxed font-light">
                You'll be staying in a cozy house surrounded by the raw beauty
                of Snæfellsnes, with views of the majestic Kirkjufell mountain
                right outside. It's peaceful, simple, and warm — the perfect
                place to rest, reflect, and feel held by nature.
              </p>
            </div>
          </motion.div>

          {/* Nourishment Section */}
          <motion.div
            className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-6xl w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="w-full md:w-1/2">
              <motion.div
                className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Ffood1.jpg?alt=media&token=f631aa9c-074b-446f-b164-c3872b36661d"
                  alt="Nourishment"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 space-y-6 px-4 md:px-8">
              <h3 className="text-3xl font-semibold text-white">Nourishment</h3>
              <p className="text-white text-lg leading-relaxed font-light">
                We’ll share lovingly prepared vegan meals that nourish the body
                and support your journey. Every dish is made with care, using
                fresh ingredients to keep you grounded, energized, and connected
                throughout the retreat.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-24 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/facilitators"
              className="inline-block px-8 py-2 text-lg text-white bg-white/20 border-2 border-white 
                       rounded-full decoration-none transition-all duration-300 ease-in-out
                       backdrop-blur-sm hover:bg-white/30 hover:-translate-y-1 hover:shadow-lg"
            >
              Meet the Facilitators
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TheSpacePage;
