import { Resend } from "resend";
import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const validatedFields =
      contactSchema.safeParse(body);

    if (!validatedFields.success) {
      const fieldErrors = validatedFields.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, message: 'Validation error', errors: fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, inquiryType, message } = validatedFields.data;

    await resend.emails.send({

      from: " Portfolio Contact <onboarding@resend.dev>",

      to: "bemem52@gmail.com",

      subject: `New Message From ${name}`,

      html: `
        <div>
          <h2>Someone Reached Out!</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}