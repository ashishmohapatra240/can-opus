"use client";

import { useState } from "react";
import {
  RiSendPlane2Line,
  RiCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const services = [
    "Condition Monitoring Equipment",
    // 'Emission Monitoring',
    "Flow & Level Instruments",
    "Gas Phase Filtration",
    "Gas Turbine Filtration",
    "Industrial Dust, Fume and Mist",
    // 'Microbial Filtration',
    "Power Transmission Technology",
    "Screw Pumps",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Header */}
          <div>
            <div className="flex mb-8">
              <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                Send Message
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              <span className="block">Ready to start</span>
              <span className="block text-secondary">your project?</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Tell us about your requirements and we&apos;ll get back to you
              with a customized solution. Our team of experts is ready to help
              you achieve your operational goals.
            </p>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <div className="flex items-center">
                  <RiCheckLine className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-green-800 font-semibold">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <div className="flex items-center">
                  <RiErrorWarningLine className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <h3 className="text-red-800 font-semibold">
                      Error Sending Message
                    </h3>
                    <p className="text-red-700">
                      Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-colors"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-colors"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us about your project requirements, challenges, or questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 disabled:bg-yellow-300 text-white font-semibold px-6 py-4 rounded-full transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <RiSendPlane2Line className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
