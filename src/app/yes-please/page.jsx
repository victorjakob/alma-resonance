"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const YesPleaseItem = ({ children }) => (
  <div className="mb-2 text-gray-300 text-lg" role="listitem">
    {children}
  </div>
);

YesPleaseItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const FormInput = ({
  type,
  placeholder,
  value,
  onChange,
  required = true,
  name,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent
              transition-all duration-200"
    required={required}
    aria-label={placeholder}
  />
);

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default function YesPlease() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange", // Validate on change
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: null,
  });

  const onSubmit = async (data) => {
    setSubmitStatus({ success: false, error: null });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitStatus({ success: true, error: null });
      reset(); // Clear form
    } catch (error) {
      setSubmitStatus({
        success: false,
        error: "Failed to submit application. Please try again.",
      });
    }
  };

  return (
    <div
      className="min-h-screen w-screen text-white flex items-center justify-center p-4 md:p-8
                 bg-[url('https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2F4cec8127-d0a8-4f8f-8425-965f090af238.webp?alt=media&token=f7534d20-c442-49eb-bcd3-742aee42fca6')]
                 bg-cover bg-center bg-no-repeat bg-fixed relative
                 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b 
                 before:from-black/70 before:to-black/50 before:z-0"
      role="main"
    >
      <motion.div
        className="max-w-3xl w-full py-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1
            className="text-4xl md:text-6xl mb-6 bg-clip-text text-transparent 
                         bg-gradient-to-r from-white via-white/90 to-white/80
                         drop-shadow-[0_5px_15px_rgba(255,255,255,0.15)]"
          >
            Alma Resonance
          </h1>
          <p className="text-xl text-white/90 italic">
            Application & Logistics
          </p>
        </motion.div>

        <motion.section
          className="mb-12 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10
                     shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Key Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
            <YesPleaseItem>✧ Dates: May 15-18</YesPleaseItem>
            <YesPleaseItem>
              ✧ Price: 99,000 kr{" "}
              <span className="text-sm block mt-1 text-gray-400">
                (or 3 payments of 33,000 kr)
              </span>
            </YesPleaseItem>
            <YesPleaseItem>✧ Location: Snæfellsnes Peninsula</YesPleaseItem>
            <YesPleaseItem>✧ Limited spots available</YesPleaseItem>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-center">
              What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <YesPleaseItem>✧ Cosy Accommodation</YesPleaseItem>
              <YesPleaseItem>✧ Delicious vegan meals</YesPleaseItem>
              <YesPleaseItem>✧ Cacao Ceremonies</YesPleaseItem>
              <YesPleaseItem>✧ All practices & workshops</YesPleaseItem>
              <YesPleaseItem>✧ Sauna & hot tub access</YesPleaseItem>
              <YesPleaseItem>✧ Transformative experiences</YesPleaseItem>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10
                     shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Message us!
          </h2>

          <p className="text-gray-300 max-w-[70%] mx-auto mb-6 text-center">
            Please fill out the form below to apply for the retreat, or if you
            simply have any questions.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  type="text"
                  placeholder="Full Name *"
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent
                            transition-all duration-200"
                  aria-label="Full Name"
                />
                {errors.fullName && (
                  <span className="text-red-400 text-sm">
                    {errors.fullName.message}
                  </span>
                )}

                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email Address *"
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent
                            transition-all duration-200"
                  aria-label="Email Address"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm">
                    {errors.email.message}
                  </span>
                )}

                <input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent
                            transition-all duration-200"
                  aria-label="Phone Number"
                />
                {errors.phone && (
                  <span className="text-red-400 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="space-y-4">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Why would you like to join this retreat? *"
                  className="w-full h-[158px] p-3 bg-white/5 border border-white/10 rounded-lg text-white 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 
                           focus:border-transparent transition-all duration-200"
                  aria-label="Application Message"
                />
                {errors.message && (
                  <span className="text-red-400 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>

            {submitStatus.error && (
              <div className="text-red-400 text-sm mt-2" role="alert">
                {submitStatus.error}
              </div>
            )}

            {submitStatus.success && (
              <div className="text-green-400 text-sm mt-2" role="alert">
                Application submitted successfully! We'll be in touch soon.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting || !isValid}
              className={`w-full md:w-auto px-8 py-4 text-lg text-white 
                       bg-gradient-to-r from-white/20 to-white/10 border-2 border-white/30 
                       rounded-full transition-all duration-300 ease-in-out backdrop-blur-sm
                       hover:bg-white/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
                       disabled:hover:bg-white/5 disabled:hover:shadow-none
                       mx-auto block`}
              whileHover={{ scale: isSubmitting || !isValid ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting || !isValid ? 1 : 0.95 }}
            >
              {isSubmitting
                ? "Submitting..."
                : !isValid
                ? "Please fill all fields ✧"
                : "Submit Application ✧"}
            </motion.button>
          </form>
        </motion.section>

        <motion.div
          className="text-center mt-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-sm text-gray-300 mb-2">
            Connect with us on Instagram
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/victor_gressier/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 rounded-full border border-white/10 
                       hover:bg-white/10 transition-all duration-300 
                       hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
            >
              @victor_gressier ✧
            </a>
            <a
              href="https://www.instagram.com/luanaschwengber/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 rounded-full border border-white/10 
                       hover:bg-white/10 transition-all duration-300 
                       hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
            >
              @luanaschwengber ✧
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
