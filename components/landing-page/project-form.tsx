"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

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

    const emailBody = `Name: ${formData.name}%0A%0AEmail: ${formData.email}%0A%0APhone: ${formData.phone}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=softvibeservices@gmail.com&su=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${emailBody}`

    window.open(gmailLink, "_blank")
  }

  return (
    <div className="container mx-auto py-12 px-6 md:px-10">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-gradient-to-br from-[#3a3a3a] to-[#2a2a2a] rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-700">
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-white text-2xl font-semibold mb-3">Get In Touch</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Fill out the form below and we'll get back to you as soon as possible to discuss your project.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#4a4a4a] border border-[#5a5a5a] rounded-lg text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#4a4a4a] border border-[#5a5a5a] rounded-lg text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#4a4a4a] border border-[#5a5a5a] rounded-lg text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] focus:border-transparent transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Project Details <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#4a4a4a] border border-[#5a5a5a] rounded-lg text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#7A7FEE] hover:bg-[#6a6fde] text-white rounded-lg text-base font-medium transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
