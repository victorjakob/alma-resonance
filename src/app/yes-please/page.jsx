"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PropTypes from "prop-types";

const YesPleaseSection = ({ title, children }) => (
  <motion.section
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
    {children}
  </motion.section>
);

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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: null });

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitStatus({ success: true, error: null });
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        success: false,
        error: "Failed to submit application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
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
            <YesPleaseItem>✧ Price: 99,000 kr</YesPleaseItem>
            <YesPleaseItem>✧ Location: Snæfellsnes Peninsula</YesPleaseItem>
            <YesPleaseItem>✧ More details after application</YesPleaseItem>
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
            Application Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FormInput
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <FormInput
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-4">
                <textarea
                  name="message"
                  placeholder="Why would you like to join this retreat?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-[158px] p-3 bg-white/5 border border-white/10 rounded-lg text-white 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 
                           focus:border-transparent transition-all duration-200"
                  required
                  aria-label="Application Message"
                ></textarea>
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
              disabled={isSubmitting}
              className={`w-full md:w-auto px-8 py-4 text-lg text-white 
                       bg-gradient-to-r from-white/20 to-white/10 border-2 border-white/30 
                       rounded-full transition-all duration-300 ease-in-out backdrop-blur-sm
                       hover:bg-white/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
                       mx-auto block`}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? "Submitting..." : "Submit Application ✧"}
            </motion.button>
          </form>
        </motion.section>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-sm text-gray-300">
            Questions? Email us at{" "}
            <a
              href="mailto:viggijakob@gmail.com"
              className="underline hover:text-white transition-colors duration-200
                         hover:text-white/90 relative inline-block
                         after:content-[''] after:absolute after:bottom-0 after:left-0 
                         after:w-full after:h-[1px] after:bg-white/50 after:scale-x-0 
                         hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              viggijakob@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
