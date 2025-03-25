// app/api/submit-application/route.js

import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Your SendGrid API key (recommended: store in .env)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { fullName, email, phone, message } = await req.json();

    const msg = {
      to: "viggijakob@gmail.com", // Your email
      from: "team@thewhitelotus.is", // Must be verified in SendGrid
      subject: `New Retreat Application from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <h2>New Retreat Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error.message);
    return NextResponse.json(
      { error: "Email failed to send." },
      { status: 500 }
    );
  }
}
