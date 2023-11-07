import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request) {
  
    const req = await request.json();
    const transporter = nodemailer.createTransport({
        service: 'AOL',
        auth: {
            user: 'egivi@aol.com',
            pass: 'ltnzssqsgcazoetj'
        }
    });

  try {
    await transporter.sendMail({
      from: `გორითაუერსი <egivi@aol.com>`,
      to: [
        'endeladzegivi@gmail.com'
        ],
      subject: 'ზარის შეკვეთა',
      text: `
        სახელი: ${req.name},
        ტელეფონის ნომერი: ${req.number},
        ზარის შეკვეთის მიზანი: ${req.reason}
      `
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' });
  }
}