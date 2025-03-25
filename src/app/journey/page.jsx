"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Hero from "./Hero";

const JourneyPage = () => {
  const journeyElements = [
    {
      title: "Voice Activations",
      description:
        "We gather in a safe container to explore, be curious, be authentic, be weird, and embrace whatever arises in the now. Practicing presence and trusting our voices and sounds, we will learn and practice using our voices consciously and with clear intention, aiming to achieve a state of health, longevity, harmony, and balance. Singing the songs of our ancestors, harmonizing with the present moment, and letting your spirit soar on the wings of your unique expressions.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fmountain.jpg?alt=media&token=1b2c5ff2-b2df-41a5-a412-2fdb3075637f",
    },
    {
      title: "Creative Expression",
      description:
        "As we embark on this journey to free our voices, we will discover that beyond pain, struggle, or resistance lies a creative force yearning to flow freely. We will explore various ways, forms, shapes, and colors through which this creative expression can emerge, free from judgment or analysis. By practicing trust, we will gradually become more comfortable with the mystery of the unknown, embracing the mystical force of the universe that flows through us as creative expression.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fgong.png?alt=media&token=f9c35196-de97-41ad-be4a-ce155571b19a",
    },
    {
      title: "Body & Movement Exploration",
      description:
        "Embodiment practices invite you to move freely, express authentically, and go within. Feel the rhythm of your beating heart, connecting to the earth's pulse. Here, all your movements are welcomed, seen, and felt, crafting narratives that resonate with the depths of your being.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fdance.png?alt=media&token=42e4e688-1078-41a8-84e6-71436c78842b",
    },
    {
      title: "Authentic Connection",
      description:
        "Reconnect with yourself, with nature and others in a space of openness, presence, and genuine connection. Through guided practices, meaningful conversations, and shared experiences, this retreat invites you to drop the masks, embrace vulnerability, and cultivate deep, heart-centered relationships. Come as you are—allow yourself to be seen, heard and truly connected.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2F343077352_257111370062917_8540658407863785314_n.jpeg?alt=media&token=02a490ef-64f0-4b44-bf86-33098804c492",
    },
    {
      title: "Yoga & Chi Gong",
      description:
        "Each dawn greets you with the gentle discipline of Yoga and Chi Gong. Open the channels of your body, grounding and growing in the fertile soil of disciplined practice. These morning rituals prepare the body and spirit for the day's discoveries, aligning your energy with the elemental forces.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fyinyang.png?alt=media&token=825a0543-3a89-44c9-9706-30f6195dbbfe",
    },
  ];

  return (
    <div
      className="min-h-screen w-screen text-white flex items-center justify-center p-4 md:p-8
                    bg-[url('https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Fmountain.jpg?alt=media&token=1b2c5ff2-b2df-41a5-a412-2fdb3075637f')]
                    bg-cover bg-center bg-no-repeat bg-fixed
                    relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60"
    >
      <motion.div className="w-full relative z-10">
        <Hero />

        <div className="flex flex-col gap-24 items-center max-w-7xl mx-auto px-4 md:px-8">
          {journeyElements.map((element, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center justify-center max-w-6xl w-full`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            >
              <div className="w-full md:w-1/2">
                <motion.div
                  className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={element.image}
                    alt={element.title}
                    className={`w-full h-full rounded-2xl transform hover:scale-105 transition-transform duration-700 ${
                      element.title === "Creative Expression"
                        ? "object-contain"
                        : "object-cover"
                    }`}
                    fill
                    priority
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 space-y-6 px-4 md:px-8">
                <h3 className="text-3xl font-semibold text-white">
                  {element.title}
                </h3>
                <p className="text-white text-lg leading-relaxed font-light">
                  {element.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-24 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/the-space"
              className="inline-block px-8 py-2 text-lg text-white bg-white/20 border-2 border-white 
                       rounded-full decoration-none transition-all duration-300 ease-in-out
                       backdrop-blur-sm hover:bg-white/30 hover:-translate-y-1 hover:shadow-lg"
            >
              The Space
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JourneyPage;
