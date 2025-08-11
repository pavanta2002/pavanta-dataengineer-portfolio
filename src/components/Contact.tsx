"use client";

import { useState, useEffect } from "react";
import { 
  sendContactEmail, 
  isValidEmail, 
  sanitizeFormData, 
  initEmailJS,
  isEmailJSConfigured,
  type ContactFormData 
} from "@/utils/emailjsService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error message when user starts typing
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Check if EmailJS is configured
      if (!isEmailJSConfigured()) {
        throw new Error("⚠️ EmailJS is not set up yet. Please follow the setup guide in EMAILJS_SETUP.md to configure the email service.");
      }

      // Basic client-side validation
      if (!formData.name.trim()) {
        throw new Error("Please enter your name");
      }
      if (!formData.email.trim()) {
        throw new Error("Please enter your email address");
      }
      if (!isValidEmail(formData.email)) {
        throw new Error("Please enter a valid email address");
      }
      if (!formData.subject.trim()) {
        throw new Error("Please enter a subject");
      }
      if (!formData.message.trim()) {
        throw new Error("Please enter your message");
      }

      // Sanitize the data
      const sanitizedData: ContactFormData = sanitizeFormData(formData);

      console.log('Attempting to send email with data:', {
        name: sanitizedData.name,
        email: sanitizedData.email,
        subject: sanitizedData.subject,
        messageLength: sanitizedData.message.length
      });

      // Send email using EmailJS
      const result = await sendContactEmail(sanitizedData);

      console.log('Email send result:', result);

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message);
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      
      let displayMessage = "An unexpected error occurred";
      if (error instanceof Error) {
        displayMessage = error.message;
      }
      
      setErrorMessage(displayMessage);
    } finally {
      setIsSubmitting(false);
      
      // Reset success status after 5 seconds, keep error until user types
      if (submitStatus === "success") {
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: "Email",
      value: "pavanta1806@gmail.com",
      link: "mailto:pavanta1806@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Location",
      value: "Bangalore, Karnataka, India",
      link: "#"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
      title: "LinkedIn",
      value: "linkedin.com/in/pavanta-m-9665aa208",
      link: "https://www.linkedin.com/in/pavanta-m-9665aa208/"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Subtle circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuits" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M20,20 L40,20 L40,40 L20,40 Z" fill="none" stroke="#3b82f6" strokeWidth="1"/>
              <circle cx="20" cy="20" r="2" fill="#3b82f6"/>
              <circle cx="40" cy="40" r="2" fill="#3b82f6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuits)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Ready to discuss data engineering opportunities, collaborate on projects, 
            or explore how I can contribute to your team&apos;s success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let&apos;s Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <div className="text-blue-600">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Professional Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  1.5+ years of hands-on data engineering experience
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Proven track record of performance optimization and cost reduction
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Expertise in Azure cloud ecosystem and modern data tools
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Strong collaborative and problem-solving skills
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            
            {/* Configuration Status Banner */}
            {!isEmailJSConfigured() && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-yellow-800 font-medium text-sm">EmailJS Setup Required</p>
                    <p className="text-yellow-700 text-sm mt-1">
                      The contact form is ready but needs EmailJS configuration. Please follow the setup guide in <code className="bg-yellow-100 px-1 rounded">EMAILJS_SETUP.md</code> to enable email functionality.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me more about your project, opportunity, or how we can collaborate..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitStatus === "success" ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-green-700 text-sm">
                    Thank you for your message! I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-red-800 font-medium text-sm">Error sending message</p>
                    <p className="text-red-700 text-sm mt-1">
                      {errorMessage || "Please try again or contact me directly at pavanta1806@gmail.com"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-gray-200 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2025 Pavanta M. Built with Next.js and Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Data Engineer • Cloud Enthusiast • Problem Solver
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
