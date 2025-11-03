'use client';

import { useState } from 'react';

export default function ResumeSubmissionSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        currentLocation: '',
        resume: null as File | null,
        coverLetter: ''
    });

    const positions = [
        "Sales Engineer",
        "Vibration Analyst, Level-II",
        "Lube Oil Analyst"
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({
            ...prev,
            resume: file
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your application! We will review your submission and get back to you soon.');
    };

    return (
        <section id="apply" className="py-16 lg:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white mb-8">
                        Join Our Team
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                        <span className="block">Submit Your</span>
                        <span className="block text-secondary">Resume</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Take the first step towards joining our innovative team.
                        Fill out the form below and we&apos;ll get back to you soon.
                    </p>
                </div>

                <div className=" rounded-2xl p-8 lg:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/80 focus:border-transparent outline-none transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/80 focus:border-transparent outline-none transition-colors"
                                    placeholder="Enter your email address"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/80 focus:border-transparent outline-none transition-colors"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label htmlFor="currentLocation" className="block text-sm font-medium text-gray-700 mb-2">
                                    Current Location *
                                </label>
                                <input
                                    type="text"
                                    id="currentLocation"
                                    name="currentLocation"
                                    required
                                    value={formData.currentLocation}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/80 focus:border-transparent outline-none transition-colors"
                                    placeholder="Enter your current location"
                                />
                            </div>
                        </div>

                        {/* Position and Experience */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                                    Position Applied For *
                                </label>
                                <select
                                    id="position"
                                    name="position"
                                    required
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/80 focus:border-transparent outline-none transition-colors"
                                >
                                    <option value="">Select a position</option>
                                    {positions.map((pos) => (
                                        <option key={pos} value={pos}>{pos}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                                    Years of Experience *
                                </label>
                                <select
                                    id="experience"
                                    name="experience"
                                    required
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/80 focus:border-transparent outline-none transition-colors"
                                >
                                    <option value="">Select experience</option>
                                    <option value="0-1">0-1 years</option>
                                    <option value="2-3">2-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5-10">5-10 years</option>
                                    <option value="10+">10+ years</option>
                                </select>
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Resume *
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    required
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/80 focus:border-transparent outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                                />
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Cover Letter */}
                        <div>
                            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                                Cover Letter (Optional)
                            </label>
                            <textarea
                                id="coverLetter"
                                name="coverLetter"
                                rows={4}
                                value={formData.coverLetter}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/80 focus:border-transparent outline-none transition-colors resize-none"
                                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-colors"
                            >
                                Submit Application
                            </button>
                            <p className="text-sm text-gray-500 mt-4">
                                By submitting this form, you agree to our privacy policy and terms of service.
                            </p>
                        </div>
                    </form>
                </div>


            </div>
        </section>
    );
}
