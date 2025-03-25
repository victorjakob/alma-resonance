"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Facilitators() {
  return (
    <div
      className="min-h-screen w-screen text-white flex items-center justify-center p-4 md:p-8
                    bg-[url('https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2F4cec8127-d0a8-4f8f-8425-965f090af238.webp?alt=media&token=f7534d20-c442-49eb-bcd3-742aee42fca6')]
                    bg-cover bg-center bg-no-repeat bg-fixed
                    relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60"
    >
      <motion.div
        className="w-full pt-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl mb-6">Meet Your Guides</h1>
          <p className="text-xl italic font-light">
            "We walk this path with you. This is a journey we take together."
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 items-center max-w-7xl mx-auto px-4 md:px-8">
          {/* Luana's Section */}
          <motion.div
            className="flex flex-col md:flex-row-reverse gap-12 items-center justify-center max-w-6xl w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-full md:w-2/6">
              <motion.div
                className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2FLuana1.png?alt=media&token=fc584fc9-699f-4492-b503-b5c3e2f4022b"
                  alt="Luana Schwengber"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-semibold">Luana Schwengber</h2>
              <p className="text-lg leading-relaxed font-light">
                A DJ and space holder from Brazil, Luana performs worldwide
                creating safe spaces for people to explore the power of sound,
                movement, and self-expression. Through voice and dance, she
                inspires deeper states of presence and connection with self,
                others, community, and the environment.
              </p>
              <p className="text-lg leading-relaxed font-light">
                As an Ecstatic Dance DJ and ceremony facilitator, Luana leads
                retreats and immersive workshops that weave together music,
                dance, nature, yoga, and creative expression.
              </p>
              <a
                href="http://www.luanaschwengber.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white hover:text-gray-300 transition-colors"
              >
                www.luanaschwengber.com
              </a>
            </div>
          </motion.div>

          {/* Victor's Section */}
          <motion.div
            className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-6xl w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-full md:w-2/6">
              <motion.div
                className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fvictor1.jpg?alt=media&token=bf26ba67-c96b-469c-8037-6e220df5ce11"
                  alt="Victor Gressier"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-semibold">Victor Gressier</h2>
              <p className="text-lg leading-relaxed font-light">
                Born in Iceland with Icelandic and French roots, I walk the path
                of sound and vibration as a lifelong student.
              </p>
              <p className="text-lg leading-relaxed font-light">
                Since 2018, I’ve been part of BlessSing, a collective sharing
                songs and ceremonies from diverse cultures around the world. In
                2020, I studied at the Sounds of Light mystery school in
                Guatemala, followed by completing the Sound Healing and Therapy
                program at the Globe Institute in 2022.
              </p>
              <p className="text-lg leading-relaxed font-light">
                My journey has taken me deep into the Amazon, where I’ve learned
                from the Shipibo and Huni Kuin tribes, studying with plant
                teachers and immersing in the sacred ways of indigenous wisdom.
                <br />
                I’ve also explored voice and embodiment through Lucid Voice,
                Lucid Body, and the vocal method of Nadine George.
              </p>
              <blockquote className="italic border-l-4 border-white/20 pl-4 my-6 text-gray-300">
                "I humbly offer what I’ve gathered so far — to support others in
                reconnecting with their authentic voice, presence, and inner
                truth. This is a path of devotion, and I remain a student of the
                mystery. "
              </blockquote>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/yes-please"
                className="inline-block px-8 py-2 text-lg text-white bg-white/20 border-2 border-white 
                         rounded-full decoration-none transition-all duration-300 ease-in-out
                         backdrop-blur-sm hover:bg-white/30 hover:-translate-y-1 hover:shadow-lg"
              >
                I am Ready
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
