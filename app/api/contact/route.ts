import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const incoming = await request.formData();

    const name = String(incoming.get('name') ?? '').trim();
    const email = String(incoming.get('email') ?? '').trim();
    const message = String(incoming.get('message') ?? '').trim();
    const subjectInput = String(incoming.get('_subject_custom') ?? '').trim();
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    if (!resendApiKey) {
      return NextResponse.json({ error: 'Contact service is not configured.' }, { status: 500 });
    }
    if (!toEmail) {
      return NextResponse.json({ error: 'Contact recipient email is not configured.' }, { status: 500 });
    }

    const safeSubject = subjectInput || 'New Portfolio Contact Form Submission';
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: safeSubject,
        text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${safeSubject}\n\nMessage:\n${message}`,
        html: `<h2>New contact form submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${safeSubject}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Email delivery provider failed request.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Contact submission failed.' }, { status: 500 });
  }
}
