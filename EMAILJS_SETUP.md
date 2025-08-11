# EmailJS Setup Guide

This guide will help you set up EmailJS for your portfolio contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Connect your `pavanta1806@gmail.com` account
5. Note down the **Service ID** (e.g., `service_xyz123`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Settings:
- **Template Name**: Contact Form Template
- **Subject**: `{{subject}} - Portfolio Contact`

### Template Content:
```
Hello,

You have received a new message from your portfolio contact form.

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Contact Form
```

### Template Variables:
Make sure these variables are defined in your template:
- `from_name`
- `from_email` 
- `subject`
- `message`
- `to_email`
- `reply_to`

4. Save the template and note down the **Template ID** (e.g., `template_abc456`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `user_def789`)

## Step 5: Update Environment Variables

Update your `.env.local` file with the actual values:

```env
# Replace with your actual EmailJS values
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xyz123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_abc456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_def789
NEXT_PUBLIC_RECIPIENT_EMAIL=pavanta1806@gmail.com
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section of your portfolio
3. Fill out and submit the form
4. Check your `pavanta1806@gmail.com` inbox for the message

## Features Included

✅ **Client-side email sending** - No server required  
✅ **Form validation** - Prevents invalid submissions  
✅ **Error handling** - User-friendly error messages  
✅ **Success feedback** - Confirmation when email is sent  
✅ **Data sanitization** - Prevents XSS attacks  
✅ **Responsive design** - Works on all devices  

## Email Limits

EmailJS free plan includes:
- 200 emails per month
- No credit card required
- Perfect for portfolio contact forms

## Troubleshooting

### Common Issues:

1. **"Email service is not properly configured"**
   - Check that all environment variables are set correctly
   - Restart your development server after updating `.env.local`

2. **"Failed to send email"**
   - Verify your EmailJS service is connected properly
   - Check your internet connection
   - Ensure your template variables match the ones used in the code

3. **Emails not being received**
   - Check your spam folder
   - Verify the recipient email in `.env.local`
   - Test with a different email template

### Testing Tips:

- Use your own email address for testing
- Check the browser console for any error messages
- Verify the template ID and service ID are correct

## Security Notes

- Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser
- EmailJS public key is safe to expose (it's designed for client-side use)
- Never expose your private API keys or passwords

## Support

If you need help:
1. Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Review the EmailJS dashboard for any error messages
3. Test your service and template directly in the EmailJS dashboard

---

Your portfolio contact form is now ready to receive messages! 🎉
