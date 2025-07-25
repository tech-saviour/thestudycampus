// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mobile, child } = body;

    // Validate inputs
    if (!name || !email || !mobile || !child) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Optional: basic format validation (can be replaced with zod/yup schema)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Admission Enquiry" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: 'New Admission Enquiry',
      html: `
        <h2>New Admission Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Child Name:</strong> ${child}</p>
        <p style="margin-top:20px;font-size:12px;color:gray;">This message was sent from your website contact form.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { message: 'Failed to send email.', error: (error as Error).message },
      { status: 500 }
    );
  }
}
