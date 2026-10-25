import { NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validations';
import { sendContactEmail, RECIPIENT_EMAIL } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check honeypot field for anti-bot spam
    if (body.honeypot) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Validate incoming data
    const parseResult = enquirySchema.safeParse(body);
    if (!parseResult.success) {
      const firstError = parseResult.error.issues?.[0]?.message || 'Invalid form input. Please verify your details.';
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, company, email, phone, requirementType, message } = parseResult.data;

    // Send email notification to lk502295@gmail.com
    const result = await sendContactEmail({
      name,
      company,
      email,
      phone,
      requirementType,
      message,
      isUrgent: Boolean(body.isUrgent),
      source: body.source || 'Contact Page RFQ Studio',
      submittedAt: body.submittedAt || new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been received successfully. Our team will contact you shortly.',
      recipient: RECIPIENT_EMAIL,
      delivered: result.delivered,
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while submitting your enquiry. Please contact us directly at +91-9212303791.' },
      { status: 500 }
    );
  }
}
