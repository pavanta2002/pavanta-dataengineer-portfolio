import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Initialize EmailJS with the public key
 */
export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  } else {
    console.warn('EmailJS public key not found in environment variables');
  }
};

/**
 * Send contact form email using EmailJS
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS Configuration Check:', {
        serviceId: EMAILJS_SERVICE_ID ? 'SET' : 'MISSING',
        templateId: EMAILJS_TEMPLATE_ID ? 'SET' : 'MISSING',
        publicKey: EMAILJS_PUBLIC_KEY ? 'SET' : 'MISSING'
      });
      
      throw new Error('EmailJS is not configured. Please set up your EmailJS credentials in the .env.local file.');
    }

    // Log configuration for debugging (without exposing sensitive data)
    console.log('EmailJS Configuration:', {
      serviceIdLength: EMAILJS_SERVICE_ID.length,
      templateIdLength: EMAILJS_TEMPLATE_ID.length,
      publicKeyLength: EMAILJS_PUBLIC_KEY.length,
      hasRecipientEmail: !!process.env.NEXT_PUBLIC_RECIPIENT_EMAIL
    });

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || 'pavanta1806@gmail.com',
      reply_to: formData.email,
    };

    console.log('Sending email with EmailJS...', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      fromName: templateParams.from_name,
      fromEmail: templateParams.from_email
    });

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('EmailJS Response:', response);

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully!'
      };
    } else {
      throw new Error(`EmailJS responded with status: ${response.status} - ${response.text || 'Unknown error'}`);
    }

  } catch (error) {
    console.error('Error sending email:', error);
    
    let errorMessage = 'Failed to send email. Please try again.';
    
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      if (error.message.includes('not configured') || error.message.includes('credentials')) {
        errorMessage = 'Email service is not configured. Please contact the administrator.';
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message.includes('service') || error.message.includes('template')) {
        errorMessage = 'Email service configuration error. Please check your EmailJS setup.';
      } else if (error.message.includes('Invalid') || error.message.includes('400')) {
        errorMessage = 'Invalid request. Please check your form data and try again.';
      } else {
        errorMessage = `Email error: ${error.message}`;
      }
    } else {
      console.error('Unknown error type:', typeof error, error);
      errorMessage = 'An unexpected error occurred while sending the email.';
    }

    return {
      success: false,
      message: errorMessage
    };
  }
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Sanitize form data to prevent XSS
 */
export const sanitizeFormData = (formData: ContactFormData): ContactFormData => {
  return {
    name: formData.name.trim().slice(0, 100),
    email: formData.email.trim().toLowerCase().slice(0, 100),
    subject: formData.subject.trim().slice(0, 200),
    message: formData.message.trim().slice(0, 2000),
  };
};

/**
 * Check if EmailJS is properly configured
 */
export const isEmailJSConfigured = (): boolean => {
  const isConfigured = !!(
    EMAILJS_SERVICE_ID && 
    EMAILJS_TEMPLATE_ID && 
    EMAILJS_PUBLIC_KEY &&
    EMAILJS_SERVICE_ID !== 'your_service_id' &&
    EMAILJS_TEMPLATE_ID !== 'your_template_id' &&
    EMAILJS_PUBLIC_KEY !== 'your_public_key'
  );

  // Log configuration status for debugging
  console.log('EmailJS Configuration Status:', {
    serviceId: EMAILJS_SERVICE_ID ? (EMAILJS_SERVICE_ID === 'your_service_id' ? 'PLACEHOLDER' : 'SET') : 'MISSING',
    templateId: EMAILJS_TEMPLATE_ID ? (EMAILJS_TEMPLATE_ID === 'your_template_id' ? 'PLACEHOLDER' : 'SET') : 'MISSING',
    publicKey: EMAILJS_PUBLIC_KEY ? (EMAILJS_PUBLIC_KEY === 'your_public_key' ? 'PLACEHOLDER' : 'SET') : 'MISSING',
    isConfigured
  });

  return isConfigured;
};
