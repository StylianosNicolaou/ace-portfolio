"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Magnetic from "@/components/Magnetic";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaSpinner } from "react-icons/fa6";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit message to 500 characters
    if (name === "message" && value.length > 500) {
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
      const mainTemplateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
      const autoReplyTemplateId =
        process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID ||
        "your_auto_reply_template_id";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

      // Send main email to ACE team
      await emailjs.send(
        serviceId,
        mainTemplateId,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "ACE Team",
          message: form.message,
        },
        publicKey
      );

      // Send auto-reply to the user
      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: form.name,
          message: form.message,
        },
        publicKey
      );

      setShowSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="relative z-10 text-white">
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

      {/* Success and Error Messages */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 font-medium"
          >
            🎉 Message sent successfully! We'll be in touch shortly.
          </motion.div>
        )}
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 font-medium"
          >
            ❌ Failed to send message. Please try again or contact us directly.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl"
      >
        <div className="mb-6">
          <label className="text-body block mb-2 text-sm font-medium">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-heading focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition-all duration-200 ${
              errors.name
                ? "border-red-400 focus:ring-red-400"
                : "border-white/20 focus:border-purple-400"
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="text-body block mb-2 text-sm font-medium">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-heading focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition-all duration-200 ${
              errors.email
                ? "border-red-400 focus:ring-red-400"
                : "border-white/20 focus:border-purple-400"
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-8">
          <label className="text-body block mb-2 text-sm font-medium">
            Message *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us about your project, ideas, or how we can help you..."
            className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-heading focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none placeholder-gray-400 transition-all duration-200 ${
              errors.message
                ? "border-red-400 focus:ring-red-400"
                : "border-white/20 focus:border-purple-400"
            }`}
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message}</p>
          )}
          <p className="text-gray-400 text-xs mt-1">
            {form.message.length}/500 characters
          </p>
        </div>

        <Magnetic>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </Magnetic>
      </motion.form>
    </SectionWrapper>
  );
}
