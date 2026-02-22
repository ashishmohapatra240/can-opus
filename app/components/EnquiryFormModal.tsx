'use client';

import { useState, useEffect } from 'react';
import {
  RiSendPlane2Line,
  RiCheckLine,
  RiErrorWarningLine,
  RiCloseLine,
} from 'react-icons/ri';
import { useEnquiryModal } from '../context/EnquiryModalContext';

const services = [
  'Condition Monitoring Equipment',
  'Flow & Level Instruments',
  'Gas Phase Filtration',
  'Gas Turbine Filtration',
  'Industrial Dust, Fume and Mist',
  'Power Transmission Technology',
  'Screw Pumps',
  'Other',
];

const initialFormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  subject: '',
  message: '',
  service: '',
};

export default function EnquiryFormModal() {
  const { isOpen, closeEnquiryModal, presetSubject } = useEnquiryModal();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen && presetSubject) {
      setFormData((prev) => ({ ...prev, subject: presetSubject }));
    }
    if (!isOpen) {
      setFormData(initialFormData);
      setSubmitStatus('idle');
    }
  }, [isOpen, presetSubject]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData(initialFormData);
      setTimeout(() => {
        closeEnquiryModal();
        setSubmitStatus('idle');
      }, 2000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeEnquiryModal}
        aria-hidden="true"
      />
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-200">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="text-xl font-bold text-gray-900">Enquire Now</h2>
          <button
            type="button"
            onClick={closeEnquiryModal}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Close"
          >
            <RiCloseLine className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 lg:p-8">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <div className="flex items-center">
                <RiCheckLine className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                <div>
                  <h3 className="text-green-800 font-semibold">Message Sent Successfully!</h3>
                  <p className="text-green-700">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <div className="flex items-center">
                <RiErrorWarningLine className="w-6 h-6 text-red-600 mr-3 shrink-0" />
                <div>
                  <h3 className="text-red-800 font-semibold">Something went wrong</h3>
                  <p className="text-red-700">Please try again or contact us directly.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus !== 'success' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enq-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="enq-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="enq-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="enq-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enq-company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="enq-company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="enq-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="enq-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enq-service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interest
                </label>
                <select
                  id="enq-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none"
                >
                  <option value="">Select a service</option>
                  {services.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="enq-subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="enq-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="enq-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="enq-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none resize-y"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/80 disabled:bg-primary/60 text-white font-semibold px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <RiSendPlane2Line className="w-5 h-5" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
