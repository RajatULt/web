import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, CheckCircle, AlertCircle, Send, FileText, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: File | null;
  coverLetter: string;
  honeypot: string; // Anti-spam honeypot field
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  resume?: string;
  coverLetter?: string;
  general?: string;
}

interface JobApplicationFormProps {
  jobTitle?: string;
  onClose?: () => void;
}

export const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: jobTitle || '',
    resume: null,
    coverLetter: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [dragActive, setDragActive] = useState(false);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[0-9]{10,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
  };

  const validateFile = (file: File): string | null => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      return 'Please upload a PDF, Word document, or text file';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 10MB';
    }

    if (file.size === 0) {
      return 'File appears to be empty. Please select a valid file';
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name should only contain letters and spaces';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    // Position validation
    if (!formData.position.trim()) {
      newErrors.position = 'Position is required';
    } else if (formData.position.trim().length < 2) {
      newErrors.position = 'Position must be at least 2 characters long';
    }

    // Resume validation
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    } else {
      const fileError = validateFile(formData.resume);
      if (fileError) {
        newErrors.resume = fileError;
      }
    }

    // Cover letter validation (optional but if provided, should have minimum length)
    if (formData.coverLetter.trim() && formData.coverLetter.trim().length < 10) {
      newErrors.coverLetter = 'Cover letter should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    // Clear general error when any field changes
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        setErrors(prev => ({ ...prev, resume: error }));
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      setErrors(prev => ({ ...prev, resume: undefined }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        setErrors(prev => ({ ...prev, resume: error }));
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      setErrors(prev => ({ ...prev, resume: undefined }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, resume: null }));
    setErrors(prev => ({ ...prev, resume: undefined }));
  };

  const submitForm = async (formData: FormData): Promise<{ success: boolean; message?: string }> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Check honeypot (anti-spam)
      if (formData.honeypot) {
        return { success: false, message: 'Spam detected' };
      }

      // Simulate form submission
      const submitData = new FormData();
      submitData.append('name', formData.name.trim());
      submitData.append('email', formData.email.trim());
      submitData.append('phone', formData.phone.trim());
      submitData.append('position', formData.position.trim());
      submitData.append('coverLetter', formData.coverLetter.trim());
      
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      // In a real application, this would send data to your backend API
      // For demo purposes, we'll simulate success/failure
      const shouldSucceed = Math.random() > 0.1; // 90% success rate for demo

      if (shouldSucceed) {
        // Store application data in localStorage for demo
        const applicationData = {
          id: Date.now().toString(),
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          position: formData.position.trim(),
          coverLetter: formData.coverLetter.trim(),
          resumeName: formData.resume?.name || '',
          submittedAt: new Date().toISOString()
        };

        const existingApplications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
        existingApplications.push(applicationData);
        localStorage.setItem('jobApplications', JSON.stringify(existingApplications));

        return { success: true };
      } else {
        return { success: false, message: 'Server error. Please try again later.' };
      }
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, message: 'Network error. Please check your connection and try again.' };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Check honeypot (anti-spam)
    if (formData.honeypot) {
      return; // Likely spam, silently ignore
    }

    if (!validateForm()) {
      setErrors(prev => ({ 
        ...prev, 
        general: 'Please fix the errors above before submitting.' 
      }));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const result = await submitForm(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: jobTitle || '',
          resume: null,
          coverLetter: '',
          honeypot: ''
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setErrors({ general: result.message || 'An error occurred while submitting your application.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrors({ general: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: jobTitle || '',
      resume: null,
      coverLetter: '',
      honeypot: ''
    });
    setErrors({});
    setSubmitStatus('idle');
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center max-w-md mx-auto"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Application Submitted Successfully!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thank you for your interest in joining WebStitch. We've received your application and will review it carefully. 
          You can expect to hear from us within 3-5 business days.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={resetForm}
            className="px-4 py-2 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            Submit Another
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Close
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden max-w-2xl mx-auto"
    >
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Apply for Position
          </h2>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* General Error Message */}
        {(submitStatus === 'error' || errors.general) && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-red-700 dark:text-red-400 font-medium">
                Submission Failed
              </p>
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                {errors.general || 'There was an error submitting your application. Please try again.'}
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot field (hidden from users) */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleInputChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              maxLength={100}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors ${
                errors.name ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              maxLength={100}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors ${
                errors.email ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              maxLength={20}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors ${
                errors.phone ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 dark:border-gray-600'
              }`}

              placeholder="+91 9876543210"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Position */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Position Applied For *
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
              maxLength={100}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors ${
                errors.position ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="e.g., Full Stack Developer"
              disabled={isSubmitting}
            />
            {errors.position && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.position}
              </p>
            )}
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FileText className="w-4 h-4 inline mr-2" />
              Resume *
            </label>
            <div
              className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
                dragActive
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : errors.resume
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                disabled={isSubmitting}
              />
              
              {formData.resume ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="w-8 h-8 text-blue-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {formData.resume.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    disabled={isSubmitting}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors disabled:cursor-not-allowed"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Drop your resume here, or <span className="text-blue-600 dark:text-blue-400">browse</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    PDF, DOC, DOCX, TXT up to 10MB
                  </p>
                </div>
              )}
            </div>
            {errors.resume && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.resume}
              </p>
            )}
          </div>

          {/* Cover Letter */}
          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Cover Letter / Message (Optional)
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows={4}
              maxLength={1000}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-vertical ${
                errors.coverLetter ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              disabled={isSubmitting}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.coverLetter ? (
                <p className="text-sm text-red-600 dark:text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.coverLetter}
                </p>
              ) : (
                <div></div>
              )}
              <p className="text-xs text-gray-500">
                {formData.coverLetter.length}/1000
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]'
            }`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting Application...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Application
              </>
            )}
          </motion.button>
        </form>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
            privacy policy
          </a>{' '}
          and{' '}
          <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
            terms of service
          </a>
          . We'll keep your information secure and only use it for recruitment purposes.
        </p>
      </div>
    </motion.div>
  );
};