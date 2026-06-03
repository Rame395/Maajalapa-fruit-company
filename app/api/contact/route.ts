// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, phone, email, message } = await request.json();

  
    if (!firstName || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // Send the email natively via server side
    const { data, error } = await resend.emails.send({
      // Once you authenticate your domain on Resend, change this to: "Maa Jalapa Fruit <info@maajalapafruit.com>"
      from: "Maa Jalapa Fruit <onboarding@resend.dev>",
      to: ["shahiramesh1717@gmail.com"], 
      subject: `🔔 New Client Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #112316; max-width: 600px; border: 1px solid #e8e8e8; border-radius: 12px;">
          <h2 style="font-size: 20px; font-weight: 500; border-bottom: 1px solid #f0f0f0; padding-bottom: 12px; color: #1e4620;">
            MAA JALAPA FRUIT — Lead Alert
          </h2>
          <p style="margin: 16px 0; font-size: 14px;">You have received a new customer entry from your website contact panel:</p>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Phone Number:</strong></td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #1e4620; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email Link:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1e4620; text-decoration: none;">${email}</a></td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 16px; bg-color: #faf9f5; background: #faf9f5; border-radius: 8px; font-size: 14px; line-height: 1.6;">
            <strong>Client Message:</strong><br/>
            <span style="color: #444; font-weight: 300;">${message || "No message written."}</span>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error running processing threads." },
      { status: 500 }
    );
  }
}