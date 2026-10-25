import nodemailer from 'nodemailer';

export const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'lk502295@gmail.com';

const REQUIREMENT_LABELS: Record<string, string> = {
  'air-compressor': 'Industrial Air Compressor (Kaeser / Rotary Screw)',
  'forklift': 'EP Electric Forklift / Material Handling',
  'piping': 'Airpipe Aluminum Compressed Air Piping',
  'service': 'Compressor Service & Maintenance',
  'spare-parts': 'Genuine Spare Parts & Lubricants',
  'rental': 'Air Compressor / Equipment Rental',
  'energy-audit': 'Compressed Air Energy & Leak Audit',
  'other': 'General Inquiry / Custom Equipment',
};

function getTransporter() {
  const gmailUser = process.env.GMAIL_USER || 'lk502295@gmail.com';
  const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS || process.env.SMTP_PASS;

  // Custom SMTP configuration
  if (process.env.SMTP_HOST && gmailPass) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || gmailUser,
        pass: gmailPass,
      },
    });
  }

  // Gmail SMTP configuration (standard Gmail App Password)
  if (gmailPass) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });
  }

  return null;
}

export interface ContactEmailData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  requirementType?: string;
  message: string;
  isUrgent?: boolean;
  source?: string;
  submittedAt?: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const targetEmail = RECIPIENT_EMAIL;
  const requirementLabel = REQUIREMENT_LABELS[data.requirementType || ''] || data.requirementType || 'General Inquiry';
  const urgentTag = data.isUrgent ? ' [URGENT]' : '';
  const subject = `${urgentTag} New RFQ Inquiry from ${data.name} (${data.company || 'Direct Client'}) - ${requirementLabel}`;

  const submissionDate = data.submittedAt 
    ? new Date(data.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })
    : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' });

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Airmen Engineers RFQ Enquiry</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f9; font-family:'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#1e293b; line-height:1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f6f9; padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:640px; background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">
          
          <!-- HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding:28px 24px; text-align:center; border-bottom:4px solid #f59e0b;">
              <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:800; letter-spacing:0.5px; text-transform:uppercase;">
                AIRMEN ENGINEERS
              </h1>
              <p style="margin:6px 0 0 0; color:#cbd5e1; font-size:13px; font-weight:500; letter-spacing:1px; text-transform:uppercase;">
                New Contact Form & RFQ Lead Notification
              </p>
            </td>
          </tr>

          ${data.isUrgent ? `
          <!-- URGENT BADGE -->
          <tr>
            <td style="background-color:#fef2f2; border-bottom:1px solid #fecaca; padding:12px 24px; text-align:center;">
              <span style="display:inline-block; background-color:#ef4444; color:#ffffff; font-size:12px; font-weight:700; letter-spacing:1px; text-transform:uppercase; padding:4px 14px; border-radius:9999px;">
                ⚡ High Priority / Urgent Response Requested
              </span>
            </td>
          </tr>
          ` : ''}

          <!-- CONTENT BODY -->
          <tr>
            <td style="padding:28px 24px;">
              <p style="margin:0 0 20px 0; font-size:15px; color:#334155;">
                You have received a new customer enquiry on <strong>Airmen Engineers</strong> website directed to <strong>${targetEmail}</strong>.
              </p>

              <!-- LEAD DETAILS TABLE -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background-color:#f8fafc; border-radius:8px; overflow:hidden; border:1px solid #e2e8f0; margin-bottom:24px;">
                <tr>
                  <td colspan="2" style="background-color:#0f172a; color:#f59e0b; padding:10px 16px; font-size:12px; font-weight:700; letter-spacing:1px; text-transform:uppercase;">
                    Customer Details
                  </td>
                </tr>
                <tr>
                  <td width="36%" style="padding:12px 16px; font-size:13px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Full Name:</td>
                  <td width="64%" style="padding:12px 16px; font-size:14px; font-weight:700; color:#0f172a; border-bottom:1px solid #e2e8f0;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; font-size:13px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Company / Org:</td>
                  <td style="padding:12px 16px; font-size:14px; font-weight:600; color:#0f172a; border-bottom:1px solid #e2e8f0;">${data.company || 'Not Specified'}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; font-size:13px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Phone Number:</td>
                  <td style="padding:12px 16px; font-size:14px; font-weight:700; color:#0284c7; border-bottom:1px solid #e2e8f0;">
                    <a href="tel:${data.phone}" style="color:#0284c7; text-decoration:none;">${data.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; font-size:13px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Email Address:</td>
                  <td style="padding:12px 16px; font-size:14px; font-weight:600; color:#0284c7; border-bottom:1px solid #e2e8f0;">
                    <a href="mailto:${data.email}" style="color:#0284c7; text-decoration:none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; font-size:13px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Equipment / Need:</td>
                  <td style="padding:12px 16px; font-size:14px; font-weight:700; color:#0f172a; border-bottom:1px solid #e2e8f0;">
                    <span style="background-color:#e0f2fe; color:#0369a1; padding:3px 8px; border-radius:4px; font-size:13px;">${requirementLabel}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; font-size:13px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Form Source:</td>
                  <td style="padding:12px 16px; font-size:13px; color:#475569; border-bottom:1px solid #e2e8f0;">${data.source || 'Contact RFQ Form'}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; font-size:13px; font-weight:600; color:#64748b;">Received Date & Time:</td>
                  <td style="padding:12px 16px; font-size:13px; color:#475569;">${submissionDate} (IST)</td>
                </tr>
              </table>

              <!-- MESSAGE / REQUIREMENT DESCRIPTION -->
              <div style="background-color:#fffbeb; border:1px solid #fef3c7; border-left:4px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:24px;">
                <p style="margin:0 0 8px 0; font-size:12px; font-weight:700; color:#b45309; text-transform:uppercase; letter-spacing:0.5px;">
                  Customer Requirements & Message:
                </p>
                <p style="margin:0; font-size:14px; color:#1e293b; white-space:pre-wrap; line-height:1.6;">${data.message}</p>
              </div>

              <!-- QUICK ACTION BUTTONS -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom:12px;">
                    <a href="tel:${data.phone}" style="display:inline-block; background-color:#16a34a; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:12px 24px; border-radius:6px; margin:4px 6px;">
                      📞 Call Client Now (${data.phone})
                    </a>
                    <a href="mailto:${data.email}?subject=Re:%20Airmen%20Engineers%20RFQ%20Enquiry%20-%20${encodeURIComponent(requirementLabel)}" style="display:inline-block; background-color:#0f172a; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:12px 24px; border-radius:6px; margin:4px 6px;">
                      ✉️ Reply to ${data.email}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#f1f5f9; padding:20px 24px; text-align:center; font-size:12px; color:#64748b; border-top:1px solid #e2e8f0;">
              <p style="margin:0 0 4px 0; font-weight:600;">Airmen Engineers Lead Management System</p>
              <p style="margin:0;">Target recipient: <a href="mailto:${targetEmail}" style="color:#0284c7;">${targetEmail}</a> | Automated Lead Notification</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const textContent = `
AIRMEN ENGINEERS - NEW RFQ LEAD
=========================================
${data.isUrgent ? 'PRIORITY: URGENT RESPONSE REQUESTED\n' : ''}
Recipient: ${targetEmail}
Customer Name: ${data.name}
Company: ${data.company || 'Not Specified'}
Phone: ${data.phone}
Email: ${data.email}
Requirement: ${requirementLabel}
Source: ${data.source || 'Contact Form'}
Received At: ${submissionDate} (IST)

MESSAGE:
${data.message}

Quick Actions:
- Call: ${data.phone}
- Reply: ${data.email}
=========================================
  `.trim();

  const transporter = getTransporter();

  if (!transporter) {
    console.warn(`
[EMAIL SYSTEM NOTICE]
Target Recipient: ${targetEmail}
Status: Gmail App Password is not yet set in .env.local.
Enquiry from "${data.name}" (${data.email}, ${data.phone}) was successfully recorded.
To enable direct email dispatch to ${targetEmail}, add the following in .env.local:
GMAIL_USER=lk502295@gmail.com
GMAIL_APP_PASSWORD=your_16_digit_app_password
CONTACT_RECIPIENT_EMAIL=lk502295@gmail.com
    `);

    return {
      success: true,
      delivered: false,
      message: 'Enquiry received and logged. Email delivery waiting for SMTP credentials.',
    };
  }

  const senderEmail = process.env.GMAIL_USER || 'lk502295@gmail.com';

  const mailOptions = {
    from: `"Airmen Engineers RFQ" <${senderEmail}>`,
    to: targetEmail,
    replyTo: `"${data.name}" <${data.email}>`,
    subject,
    text: textContent,
    html: htmlContent,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`[EMAIL SYSTEM] Message successfully sent to ${targetEmail}: ${info.messageId}`);
  
  return {
    success: true,
    delivered: true,
    messageId: info.messageId,
  };
}

export interface RentalEmailData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  requiredHP?: string;
  rentalDuration?: string;
  message?: string;
  source?: string;
  submittedAt?: string;
}

export async function sendRentalEmail(data: RentalEmailData) {
  const targetEmail = RECIPIENT_EMAIL;
  const subject = `[RENTAL INQUIRY] New Equipment Rental Request from ${data.name} (${data.company || 'Direct Client'}) - ${data.requiredHP || 'Custom HP'}`;

  const submissionDate = data.submittedAt 
    ? new Date(data.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })
    : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' });

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Air Compressor Rental Request</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f9; font-family:'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:640px; background-color:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 10px 25px rgba(0,0,0,0.08);">
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding:28px 24px; text-align:center; border-bottom:4px solid #f59e0b;">
              <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:800; text-transform:uppercase;">AIRMEN ENGINEERS</h1>
              <p style="margin:6px 0 0 0; color:#cbd5e1; font-size:13px; text-transform:uppercase;">New Equipment Rental Fleet Request</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px;">
              <p style="font-size:15px; color:#334155; margin-bottom:20px;">
                A new compressor rental requirement was submitted on the website for <strong>${targetEmail}</strong>.
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; margin-bottom:24px;">
                <tr><td colspan="2" style="background-color:#0f172a; color:#f59e0b; padding:10px 16px; font-weight:700;">Rental Specification</td></tr>
                <tr><td style="padding:10px 16px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Customer:</td><td style="padding:10px 16px; font-weight:700; color:#0f172a; border-bottom:1px solid #e2e8f0;">${data.name}</td></tr>
                <tr><td style="padding:10px 16px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Company:</td><td style="padding:10px 16px; color:#0f172a; border-bottom:1px solid #e2e8f0;">${data.company || 'Not Specified'}</td></tr>
                <tr><td style="padding:10px 16px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Phone:</td><td style="padding:10px 16px; font-weight:700; color:#0284c7; border-bottom:1px solid #e2e8f0;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
                <tr><td style="padding:10px 16px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Email:</td><td style="padding:10px 16px; color:#0284c7; border-bottom:1px solid #e2e8f0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
                <tr><td style="padding:10px 16px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Required HP:</td><td style="padding:10px 16px; font-weight:700; color:#0f172a; border-bottom:1px solid #e2e8f0;">${data.requiredHP || 'Custom HP'}</td></tr>
                <tr><td style="padding:10px 16px; font-weight:600; color:#64748b; border-bottom:1px solid #e2e8f0;">Rental Duration:</td><td style="padding:10px 16px; font-weight:700; color:#0f172a; border-bottom:1px solid #e2e8f0;">${data.rentalDuration || 'Custom Duration'}</td></tr>
                <tr><td style="padding:10px 16px; font-weight:600; color:#64748b;">Received:</td><td style="padding:10px 16px; color:#475569;">${submissionDate} (IST)</td></tr>
              </table>
              ${data.message ? `
              <div style="background-color:#fffbeb; border-left:4px solid #f59e0b; padding:16px; margin-bottom:20px;">
                <p style="margin:0 0 6px 0; font-weight:700; color:#b45309;">Additional Notes:</p>
                <p style="margin:0; font-size:14px; color:#1e293b;">${data.message}</p>
              </div>` : ''}
              <div style="text-align:center;">
                <a href="tel:${data.phone}" style="display:inline-block; background-color:#16a34a; color:#ffffff; font-weight:700; padding:12px 24px; border-radius:6px; text-decoration:none; margin:4px;">📞 Call Client (${data.phone})</a>
                <a href="mailto:${data.email}?subject=Re:%20Compressor%20Rental%20Inquiry" style="display:inline-block; background-color:#0f172a; color:#ffffff; font-weight:700; padding:12px 24px; border-radius:6px; text-decoration:none; margin:4px;">✉️ Reply via Email</a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const transporter = getTransporter();
  if (!transporter) {
    console.warn(`[EMAIL SYSTEM] Rental enquiry received from ${data.name}. Delivery waiting for SMTP credentials.`);
    return { success: true, delivered: false };
  }

  const senderEmail = process.env.GMAIL_USER || 'lk502295@gmail.com';
  const mailOptions = {
    from: `"Airmen Rental Desk" <${senderEmail}>`,
    to: targetEmail,
    replyTo: `"${data.name}" <${data.email}>`,
    subject,
    html: htmlContent,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, delivered: true, messageId: info.messageId };
}
