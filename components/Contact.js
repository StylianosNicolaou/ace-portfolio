"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" className="relative z-10 text-white">
      {/* Glass overlay for background readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl z-[-1]" />

      {/* Heading with animation */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-heading text-5xl md:text-6xl font-extrabold text-center mb-6"
      >
        Let’s Work Together
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-body text-lg text-center max-w-2xl mx-auto mb-10"
      >
        Have a project in mind? Drop us a line — we usually reply within 24
        hours.
      </motion.p>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 text-glow font-medium"
          >
            🎉 Message sent! We’ll be in touch shortly.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-xl"
      >
        <div className="mb-6">
          <label className="text-body block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-heading focus:outline-none focus:ring-2 focus:ring-purple placeholder-gray"
          />
        </div>

        <div className="mb-6">
          <label className="text-body block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-heading focus:outline-none focus:ring-2 focus:ring-purple placeholder-gray"
          />
        </div>

        <div className="mb-6">
          <label className="text-body block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Tell us about your idea..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-heading focus:outline-none focus:ring-2 focus:ring-purple resize-none placeholder-gray"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex justify-center gap-6 mt-12"
      >
        <Magnetic>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-body hover:text-glow transition"
          >
            <FaGithub />
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-body hover:text-glow transition"
          >
            <FaLinkedinIn />
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="mailto:hello@yourdomain.com"
            className="text-xl text-body hover:text-glow transition"
          >
            <FaEnvelope />
          </a>
        </Magnetic>
      </motion.div>
    </SectionWrapper>
  );
}
