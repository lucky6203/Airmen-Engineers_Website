import { NextResponse } from 'next/server';
import { rentalSchema } from '@/lib/validations';
import { sendRentalEmail, RECIPIENT_EMAIL } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check honeypot field
    if (body.honeypot) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    const parseResult = rentalSchema.safeParse(body);
    if (!parseResult.success) {
      const firstError = parseResult.error.issues?.[0]?.message || 'Invalid rental form input.';
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, company, email, phone, requiredHP, rentalDuration, message } = parseResult.data;

    const result = await sendRentalEmail({
      name,
      company,
      email,
      phone,
      requiredHP,
      rentalDuration,
      message,
      source: 'Rental Page Fleet Booking Form',
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Rental request received successfully. Our rental engineering team will contact you.',
      recipient: RECIPIENT_EMAIL,
      delivered: result.delivered,
    });
  } catch (error) {
    console.error('Rental API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
