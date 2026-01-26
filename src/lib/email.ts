// src/lib/email.ts
import { createTransport } from "nodemailer";

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const transporter = createTransport(EMAIL_CONFIG);

    const mailOptions = {
      from: `"Deepanshu Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: formData.email,
      subject: `New Contact Form Message from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1F2937; border-bottom: 2px solid #4CC9F0; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #4B5563; margin: 15px 0;">Sender Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #2563EB;">${formData.email}</a></p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #4B5563; margin: 15px 0;">Message</h3>
            <p style="background: #F9FAFB; padding: 15px; border-radius: 8px; color: #1F2937;">
              ${formData.message.replace(/\n/g, "<br>")}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email");
  }
}
