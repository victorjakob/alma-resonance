import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  // Animation variants for consistent and reusable animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative px-4 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="banner"
      aria-label="Welcome section"
    >
      <motion.h1
        className="text-5xl md:text-7xl mb-8 text-white font-light tracking-wider text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        The Journey
      </motion.h1>

      <motion.p
        className="text-2xl md:text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Peace - Harmony - Flow
      </motion.p>

      <motion.div
        className="mt-8 text-lg md:text-xl font-light max-w-2xl text-center leading-relaxed"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.p
          className="mt-2 text-white/90 leading-loose"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          When we are at peace within,
          <br />
          we can meet others in harmony.
          <br />
          From this space, life flows
          <br />- creative, connected, and alive -
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-16 text-white/80 cursor-pointer"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <ChevronDown size={42} />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
