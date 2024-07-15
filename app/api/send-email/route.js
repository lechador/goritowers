import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request) {
    const req = await request.json();
    const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net', 
        port: 465,
        secure: true,
        auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_PASS
        }
    });

    try {
        await transporter.sendMail({
            from: `გორითაუერსი <info@goritowers.ge>`,
            to: [
                'info@goritowers.ge'
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
