"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, User, Mail, Phone, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    const emailBody = `Name: ${formData.name}%0D%0A%0D%0AEmail: ${formData.email}%0D%0A%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`

    const emailLink = isMobile
      ? `mailto:softvibeservices@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${emailBody}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=softvibeservices@gmail.com&su=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${emailBody}`

    window.open(emailLink, "_blank")
  }

  return (
    <div className="container mx-auto py-12 px-6 md:px-10 relative z-10">
      <motion.div
        className="max-w-2xl mx-auto w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-card via-card to-muted/50 dark:from-[#1a1a1a] dark:via-[#222] dark:to-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50 backdrop-blur-sm relative overflow-hidden">
          {/* Animated gradient accent */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-foreground text-2xl md:text-3xl font-bold mb-3">Get In Touch</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible to discuss your project.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-foreground text-sm font-medium mb-2">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-xl text-foreground text-base placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-xl text-foreground text-base placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </motion.div>

              {/* Phone Number */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label htmlFor="phone" className="block text-foreground text-sm font-medium mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-xl text-foreground text-base placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <label htmlFor="message" className="block text-foreground text-sm font-medium mb-2">
                  Project Details <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-xl text-foreground text-base placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
      {/* </CHANGE> */}
    </div>
  )
}
